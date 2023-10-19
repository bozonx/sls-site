import fs from 'node:fs/promises';
import path from 'node:path';
import {FILE_ENCODE, BLOG_DIR} from '$lib/constants';
import type {PageItemData} from '$lib/types/PageItemData';
import {ITEM_PER_PAGE} from '$lib/constants';
import {
  readAllFilesRecursively,
  extractMetaDataFromMdPage,
  sortPageItemsByDateDesc
} from '$lib/server/helpers.server';


export async function GET(event) {
  const pageNum = Number(event.params.page)
  const [rootPath, fileNames] = await readAllFilesRecursively(
    event,
    BLOG_DIR
  )
  let allFiles: PageItemData[] = []

  for (const filePath of fileNames) {
    const content = await fs.readFile(path.join(rootPath, filePath), FILE_ENCODE)
    const [meta] = extractMetaDataFromMdPage(
      content,
      event.params.lang,
      filePath.replace(/\/index.md$/, '')
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
  }));
}
