import path from 'node:path';
import {replaceExt} from 'squidlet-lib';
import { error } from '@sveltejs/kit';
import fs from 'node:fs/promises';
import yaml from 'yaml';
import moment from 'moment';
import {unified} from 'unified';
import rehypeStringify from 'rehype-stringify';
import urls from 'rehype-urls';
import remarkParse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import rehypeSanitize from 'rehype-sanitize'
import rehypeFigure from 'rehype-figure';
import {FILE_ENCODE} from '../constants';
import type {PageItemData} from '../types/PageItemData';
import type {PageMetaData} from '../types/PageMetaData';
import {FIND_MD_IMAGE_REGEX, ROOT_DIR} from './constants.server';


export function sortPageItemsByDateDesc(allFiles: PageItemData[]): PageItemData[] {
  return [...allFiles].sort((a: PageItemData, b: PageItemData) => {
    return (moment(a.date).isBefore(b.date)) ? 1 : -1
  })
}

export async function readAllFilesRecursively(
  event,
  subPath: string
): Promise<[string, string[]]> {
  const langStr = event.params.lang

  if (
    typeof event.params.page !== 'undefined'
    && Number.isNaN(Number(event.params.page))
  ) {
    throw error(400, 'Wrong page number')
  }

  const rootPath = path.join(ROOT_DIR, 'texts', langStr, subPath)
  const fileNames = await readDirRecursively(rootPath)

  return [rootPath, fileNames]
}

export async function readDirRecursively(rootDir: string, subDir = ''): Promise<string[]> {
  const fullDirPath = path.join(rootDir, subDir)
  let files

  try {
    files = await fs.readdir(fullDirPath, FILE_ENCODE)
  }
  catch (e) {
    throw error(404, 'File not found ' + fullDirPath)
  }

  let res: string[] = []

  for (const file of files) {
    const stat = await fs.lstat(path.join(fullDirPath, file))

    if (stat.isDirectory()) {
      res = [
        ...res,
        ...await readDirRecursively(rootDir, path.join(subDir, file))
      ]
    }
    else {
      if (!file.endsWith('.md')) continue

      res.push(path.join(subDir, file))
    }
  }

  return res
}


export async function convertMdToHtml(
  mdContent: string,
  pageName: string,
  lang: string,
  // false = blog, true = page
  isPage = false
) {
  const result = await unified()
    .use(remarkParse)
    .use(remark2rehype)
    .use(rehypeSanitize)
    .use(urls, handleUrlsInHtml)
    .use(rehypeFigure, { className: "img-figure" })
    .use(rehypeStringify)
    .process(mdContent)

  function handleUrlsInHtml (url: any, node: any) {
    if (node.tagName === 'a') {
      if (url.host) {
        node.properties.target = '_blank'
      }
      else {
        return `/${lang}${url.pathname}`
      }
    }
    else if (node.tagName === 'img' && !url.host) {
      const imgName = path.basename(url.pathname)

      if (isPage) {
        node.properties['data-full'] = `/images/pages-full/page_${imgName}`
        // page
        return `/images/pages/page_${replaceExt(imgName, 'jpg')}`
      }
      else {
        node.properties['data-full'] = `/images/pages-full`
          + `/${pageName.replace('/', '_')}_${imgName}`
        // blog
        return `/images/pages`
          + `/${pageName.replace('/', '_')}`
          + `_${replaceExt(imgName, 'jpg')}`
      }
    }
  }

  return String(result)
}

export function extractMetaDataFromMdPage(
    rawContent: string,
    lang: string,
    name: string
): [PageMetaData, string] {
  const splat = rawContent.split('</meta>')

  if (splat.length !== 2) {
    throw new Error(`Wrong page file`)
  }

  const md = splat[1].trim()
  const yamlString = splat[0].replace('<meta>', '').trim()
  const rawMetaData = yaml.parse(yamlString)
  const meta: PageMetaData = {
    name,
    title: '',
    descr: '',
    ...rawMetaData,
    dateLocal: (rawMetaData.date)
        ? moment(rawMetaData.date).locale(lang).format('LL')
        : undefined,
  }

  if (!md.match(FIND_MD_IMAGE_REGEX)) meta.noPicture = true

  return [meta, md]
}
