import fs from 'node:fs/promises'
import path from 'path';
import {ROOT_DIR} from '$lib/server/constants.server';
import {convertMdToHtml, extractMetaDataFromMdPage} from './helpers.server';


export async function getBlogPage(lang: string, pageName: string): Promise<string> {
  const fullFilePath = path.resolve(
      ROOT_DIR,
      `texts/${lang}/blog/${pageName}/index.md`
  )
  const fileContent = await fs.readFile(fullFilePath, 'utf8')
  const [meta, md] = extractMetaDataFromMdPage(
    fileContent,
    lang,
    pageName
  )

  return JSON.stringify({
    meta,
    html: await convertMdToHtml(md, pageName, lang)
  })
}

export async function getSitePage(lang: string, pageName: string): Promise<string> {
  const fullFilePath = path.resolve(
      ROOT_DIR,
      `texts/${lang}/page/${pageName}.md`
  )
  const fileContent = await fs.readFile(fullFilePath, 'utf8')
  const [meta, md] = extractMetaDataFromMdPage(
    fileContent,
    lang,
    pageName
  )

  return JSON.stringify({
    meta,
    html: await convertMdToHtml(md, pageName, lang, true)
  })
}
