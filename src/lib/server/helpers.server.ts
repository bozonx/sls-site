import path from 'node:path';
import fs from 'node:fs/promises';
import yaml from 'yaml';
import moment from 'moment';
import {fromMarkdown} from 'mdast-util-from-markdown';
import {toHast} from 'mdast-util-to-hast';
import {sanitize} from 'hast-util-sanitize';
import {toHtml} from 'hast-util-to-html';
import {FILE_ENCODE} from '../constants';
import type {PageItemData} from '../types/PageItemData';
import type {PageMetaData} from '../types/PageMetaData';


export async function readDirRecursively(rootDir: string, subDir = ''): Promise<string[]> {
  const fullDirPath = path.join(rootDir, subDir)
  const files = await fs.readdir(fullDirPath, FILE_ENCODE)
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
      res.push(path.join(subDir, file))
    }
  }

  return res
}


export function convertMdToHtml(mdContent: string) {
  const mdastTree = fromMarkdown(mdContent)
  const hastTree = toHast(mdastTree)
  const safe = sanitize(hastTree)

  return  toHtml(safe)
}

export function extractMetaDataFromMdPage(
    rawContent: string,
    lang: string
): [PageMetaData, string] {
  const splat = rawContent.split('</meta>')

  if (splat.length !== 2) {
    throw new Error(`Wrong page file`)
  }

  const md = splat[1].trim()
  const yamlString = splat[0].replace('<meta>', '').trim()
  const rawMetaData = yaml.parse(yamlString)
  const meta: PageMetaData = {
    title: '',
    tags: [],
    descr: '',
    ...rawMetaData,
    date: (rawMetaData.date)
        ? moment(rawMetaData.date).locale(lang).format('LL')
        : undefined,
  }

  return [meta, md]
}

export function makePageItemData(
  content: string,
  fileName: string,
  lang: string
): PageItemData {
  const [meta] = extractMetaDataFromMdPage(content, lang)

  return {
    fileName,
    title: meta.title,
    date: meta.date,

    // TODO: зарезолвить первую картинку
    thumb: '',
    tags: meta.tags,
    descr: meta.descr
  }
}
