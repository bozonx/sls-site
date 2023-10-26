import fs from 'node:fs/promises'
import path from 'node:path'
import {FILE_ENCODE, BLOG_DIR} from '$lib/constants'
import type {PageItemData} from '$lib/types/PageItemData'
import {
  readAllFilesRecursively,
  sortPageItemsByDateDesc,
  extractMetaDataFromMdPage
} from '$lib/server/helpers.server';
import {removeIndexMd, calculatePaginatedResponse} from '$lib/helpers'


export const prerender = true

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
    const [meta] = await extractMetaDataFromMdPage(
      content,
      event.params.lang,
      path.join(season, removeIndexMd(filePath))
    )

    allFiles.push(meta)
  }

  allFiles = sortPageItemsByDateDesc(allFiles)

  return new Response(JSON.stringify(calculatePaginatedResponse(allFiles, pageNum)))
}
