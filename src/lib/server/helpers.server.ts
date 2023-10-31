import path from 'node:path';
import {replaceExt} from 'squidlet-lib';
import { error } from '@sveltejs/kit';
import fs from 'node:fs/promises';
import yaml from 'yaml';
import slug from 'slug'
import moment from 'moment';
import {unified} from 'unified';
import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter'
import remarkStringify from 'remark-stringify'
import urls from 'rehype-urls';
import remarkParse from 'remark-parse';
import rehypeRaw from 'rehype-raw'
import remark2rehype from 'remark-rehype';
import rehypeSanitize from 'rehype-sanitize'
import rehypeFigure from 'rehype-figure';
import remarkGfm from 'remark-gfm'
import {DEFAULT_LANG, FILE_ENCODE, THUMBS_DIR} from '../constants';
import type {PageItemData} from '../types/PageItemData';
import type {PageMetaData} from '../types/PageMetaData';
import {FIND_MD_IMAGE_REGEX, ROOT_DIR} from './constants.server';
import {PAGES_FULL_DIR, PAGES_DIR, TEXTS_DIR} from "$lib/constants"


export function transliterate(rawStr: string, lang: string): string {
  //  {transliterate('ĉĤdgŝ', 'eo')}
  if (lang === 'eo') {
    const charTable = {
      'ĉ': 'cy',
      'Ĉ': 'Cy',
      'ĝ': 'gy',
      'Ĝ': 'Gy',
      'ĥ': 'x',
      'Ĥ': 'X',
      'ĵ': 'jy',
      'Ĵ': 'Jy',
      'ŝ': 'sy',
      'Ŝ': 'Sy',
      'ŭ': 'w',
      'Ŭ': 'W',
    }

    return rawStr
      .split('')
      .map((el) => (charTable[el]) ? charTable[el] : el)
      .join('')
  }

  return slug(rawStr, { locale: lang })
}

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

  const rootPath = path.join(ROOT_DIR, TEXTS_DIR, langStr, subPath)
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
    .use(remarkGfm)
    .use(remark2rehype, {allowDangerousHtml: true})
    .use(rehypeRaw)
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
        if (url.pathname.startsWith('//')) {
          return url.pathname.slice(1)
        }

        return `/${lang}${url.pathname}`
      }
    }
    else if (node.tagName === 'img' && !url.host) {
      let imgName = path.basename(url.pathname)
      let resolvedLang = lang

      if (imgName.startsWith('!')) {
        imgName = imgName.slice(1)
        resolvedLang = DEFAULT_LANG
      }

      if (isPage) {
        node.properties['data-full'] = `/postimg/${PAGES_FULL_DIR}/${resolvedLang}_page_${imgName}`
        // page
        return `/postimg/${PAGES_DIR}/${resolvedLang}_page_${replaceExt(imgName, 'avif')}`
      }
      else {
        node.properties['data-full'] = `/postimg/pages-full`
          + `/${resolvedLang}_${pageName.replace('/', '_')}_${imgName}`
        // blog
        return `/postimg/${PAGES_DIR}`
          + `/${resolvedLang}_${pageName.replace('/', '_')}`
          + `_${replaceExt(imgName, 'avif')}`
      }
    }
  }

  return String(result)
}

export async function extractMetaDataFromMdPage(
    rawContent: string,
    lang: string,
    name: string
): Promise<[PageMetaData, string]> {
  const [rawMetaData, md] = await splitMdAndMeta(rawContent)

  if (!rawMetaData.title) {
    throw new Error(`Md file "${name}" doesn't have a title`)
  }

  const meta: PageMetaData = {
    name,
    title: '',
    descr: '',
    ...rawMetaData as any,
    dateLocal: (rawMetaData.date)
        ? moment(rawMetaData.date).locale(lang).format('LL')
        : undefined,
  }

  const firstImgMatch = md.match(FIND_MD_IMAGE_REGEX)

  if (firstImgMatch) {
    let resolvedLand = lang

    if (firstImgMatch[1].startsWith('!')) {
      resolvedLand = DEFAULT_LANG
    }

    meta.thumbUrl = `/postimg/${THUMBS_DIR}/${resolvedLand}_${name.replace('/', '_')}.avif`
  }

  return [meta, md]
}

export async function splitMdAndMeta(rawMdContent: string): Promise<[Record<string, any>, string]> {
  let yamlMetaStr: string  = ''
  const md = String(await unified()
    .use(remarkParse)
    .use(remarkStringify)
    .use(remarkFrontmatter, ['yaml'])
    .use(function () {
      return function (tree: any) {
        const yamlIndex = tree.children.findIndex((el: any) => el.type === 'yaml')

        if (yamlIndex < 0) return

        yamlMetaStr = tree?.children[yamlIndex]?.value || ''
        // remove node
        tree?.children.splice(yamlIndex, 1)
      }
    })
    .process(rawMdContent))

  const rawMetaData = yaml.parse(yamlMetaStr)

  return [rawMetaData, md]
}
