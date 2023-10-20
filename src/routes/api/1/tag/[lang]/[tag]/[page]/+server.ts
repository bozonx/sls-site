import fs from 'node:fs/promises';
import path from 'node:path';
import {error} from '@sveltejs/kit';
import type {PageItemData} from '$lib/types/PageItemData';
import {FILE_ENCODE, BLOG_DIR} from '$lib/constants';
import {
  readAllFilesRecursively,
  sortPageItemsByDateDesc,
  extractMetaDataFromMdPage
} from '$lib/server/helpers.server';
import {removeIndexMd, calculatePaginatedResponse} from '$lib/helpers';


export async function GET(event) {
  const pageNum = Number(event.params.page)
  const tagName = event.params.tag
  const [rootPath, fileNames] = await readAllFilesRecursively(
    event,
    path.join(BLOG_DIR)
  )
  let allFiles: PageItemData[] = []

  for (const filePath of fileNames) {
    const content = await fs.readFile(path.join(rootPath, filePath), FILE_ENCODE)
    const [meta] = extractMetaDataFromMdPage(
      content,
      event.params.lang,
      removeIndexMd(filePath)
    )

    if (meta.tags.includes(tagName)) allFiles.push(meta)
  }

  if (!allFiles.length) throw error(404)

  // sort by date
  allFiles = sortPageItemsByDateDesc(allFiles)

  return new Response(JSON.stringify(calculatePaginatedResponse(
    allFiles,
    pageNum,
    fileNames.length
  )))
}
