import path from 'node:path';
import { error } from '@sveltejs/kit';
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
import {ROOT_DIR} from './constants.server';


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


export function convertMdToHtml(mdContent: string) {
  const mdastTree = fromMarkdown(mdContent)
  const hastTree = toHast(mdastTree)
  const safe = sanitize(hastTree)

  return  toHtml(safe)
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
  const [meta] = extractMetaDataFromMdPage(content, lang, fileName)

  return {
    ...meta,

    // TODO: зарезолвить первую картинку
    //thumb: '',

  }
}
