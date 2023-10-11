import fs from 'node:fs/promises'
import path from 'path';
import {SRC_ROOT_PATH} from '$lib/server/constants.server';
import { base } from '$app/paths';


export async function getSitePage(lang: string, pageName: string): Promise<string> {
  return loadTextFile(lang, 'page', pageName + '.md')
}

export async function getBlogPage(lang: string, pageName: string): Promise<string> {
  return loadTextFile(lang, 'blog', pageName + '.md')
}


export async function loadTextFile(lang: string, dir: string, fileName: string) {
  const fullFilePath = path.resolve(
      SRC_ROOT_PATH,
      `../texts/${lang}/${dir}/${fileName}`
  )


  //console.log(11111, await import('s/.gitignore'))

  return await fs.readFile(fullFilePath, 'utf8')
}
