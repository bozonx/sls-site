import fs from 'node:fs/promises'
import path from 'node:path'
import type {PageItemData} from '$lib/types/PageItemData'
import {FILE_ENCODE, BLOG_DIR} from '$lib/constants'
import {
  readAllFilesRecursively,
  extractMetaDataFromMdPage,
  sortPageItemsByDateDesc
} from '$lib/server/helpers.server'
import {removeIndexMd, calculatePaginatedResponse} from '$lib/helpers'


export async function GET(event) {
  const pageNum = Number(event.params.page)
  const [rootPath, fileNames] = await readAllFilesRecursively(
    event,
    BLOG_DIR
  )
  let allFiles: PageItemData[] = []

  for (const filePath of fileNames) {
    const content = await fs.readFile(path.join(rootPath, filePath), FILE_ENCODE)
    const [meta] = await extractMetaDataFromMdPage(
      content,
      event.params.lang,
      removeIndexMd(filePath)
    )

    allFiles.push(meta)
  }

  allFiles = sortPageItemsByDateDesc(allFiles)

  return new Response(JSON.stringify(calculatePaginatedResponse(allFiles, pageNum)))
}
