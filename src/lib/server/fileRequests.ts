import fs from 'node:fs/promises'
import path from 'path';
import {ROOT_DIR} from '$lib/server/constants.server';
import {convertMdToHtml, extractMetaDataFromMdPage} from './helpers.server';


export async function getBlogPage(lang: string, pageName: string): Promise<string> {
  return loadTextFile(lang, 'blog', pageName + '.md')
}

export async function getSitePage(lang: string, pageName: string): Promise<string> {
  return loadTextFile(lang, 'page', pageName + '.md')
}



async function loadTextFile(lang: string, dir: string, fileName: string) {
  const fullFilePath = path.resolve(
      ROOT_DIR,
      `texts/${lang}/${dir}/${fileName}`
  )
  const fileContent = await fs.readFile(fullFilePath, 'utf8')
  const [meta, md] = extractMetaDataFromMdPage(fileContent)

  return JSON.stringify({
    meta,
    html: convertMdToHtml(md)
  })
}
