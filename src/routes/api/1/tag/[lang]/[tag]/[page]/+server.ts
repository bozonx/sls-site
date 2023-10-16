import fs from 'node:fs/promises';
import path from 'node:path';
import {FILE_ENCODE} from '$lib/constants';
import type {PageItemData} from '$lib/types/PageItemData';
import {ITEM_PER_PAGE} from '$lib/constants';
import {readAllFilesRecursively} from '$lib/server/helpers.server';
import {error} from '@sveltejs/kit';
import {
  sortPageItemsByDateDesc,
  extractMetaDataFromMdPage
} from '$lib/server/helpers.server';


export const prerender = true


export async function GET(event) {
  const langStr = event.params.lang
  const tagName = event.params.tag
  const pageNum = Number(event.params.page)
  const [rootPath, fileNames] = await readAllFilesRecursively(
    event,
    path.join('blog')
  )
  let allFiles: PageItemData[] = []

  for (const filePath of fileNames) {
    const content = await fs.readFile(path.join(rootPath, filePath), FILE_ENCODE)
    const [meta] = extractMetaDataFromMdPage(
      content,
      langStr,
      filePath.replace(/\/index.md$/, '')
    )

    if (meta.tags.includes(tagName)) allFiles.push(meta)
  }

  if (!allFiles.length) {
    throw error(404)
  }

  // sort by date
  allFiles = sortPageItemsByDateDesc(allFiles)

  const start = (pageNum - 1) * ITEM_PER_PAGE

  return new Response(JSON.stringify({
    result: allFiles.slice(start, start + ITEM_PER_PAGE),
    page: pageNum,
    perPage: ITEM_PER_PAGE,
    totalPages: Math.ceil(allFiles.length / ITEM_PER_PAGE)
  }));
}
