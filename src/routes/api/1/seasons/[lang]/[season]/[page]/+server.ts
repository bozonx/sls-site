import fs from 'node:fs/promises';
import path from 'node:path';
import type {EntryGenerator} from './$types'
import {FILE_ENCODE, BLOG_DIR, SUPPORTED_LANGS} from '$lib/constants';
import type {PageItemData} from '$lib/types/PageItemData';
import {ITEM_PER_PAGE} from '$lib/constants';
import {
  readAllFilesRecursively,
  sortPageItemsByDateDesc,
  extractMetaDataFromMdPage
} from '$lib/server/helpers.server';
import {ROOT_DIR} from '$lib/server/constants.server';


export const prerender = true

// export const entries: EntryGenerator = async () => {
//   const res: {lang: string, season: string, page: string}[] = []
//
//   for (const lang of SUPPORTED_LANGS) {
//     const blogsPath = path.resolve(
//       ROOT_DIR,
//       `texts/${lang}/${BLOG_DIR}`
//     )
//     const seasons = await fs.readdir(blogsPath, FILE_ENCODE)
//
//     for (const season of seasons) {
//
//       // TODO: pages
//
//       res.push({ lang, season, page: '1' })
//     }
//   }
//
//   return res
// };


export async function GET(event) {
  const pageNum = Number(event.params.page)
  const season = event.params.season
  const [rootPath, fileNames] = await readAllFilesRecursively(
    event,
    path.join(BLOG_DIR, season)
  )
  let allFiles: PageItemData[] = []

  for (const filePath of fileNames) {
    const content = await fs.readFile(path.join(rootPath, filePath), FILE_ENCODE)
    const [meta] = extractMetaDataFromMdPage(
      content,
      event.params.lang,
      path.join(season, filePath.replace(/\/index.md$/, ''))
    )

    allFiles.push(meta)
  }

  allFiles = sortPageItemsByDateDesc(allFiles)

  const start = (pageNum - 1) * ITEM_PER_PAGE

  return new Response(JSON.stringify({
    result: allFiles.slice(start, start + ITEM_PER_PAGE),
    page: pageNum,
    perPage: ITEM_PER_PAGE,
    totalPages: Math.ceil(fileNames.length / ITEM_PER_PAGE)
  }))
}
