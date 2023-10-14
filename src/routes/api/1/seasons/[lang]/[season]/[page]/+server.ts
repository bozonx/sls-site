import moment from 'moment'
import fs from 'node:fs/promises';
import path from 'node:path';
import {FILE_ENCODE} from '$lib/constants';
import {makePageItemData} from '$lib/server/helpers.server';
import type {PageItemData} from '$lib/types/PageItemData';
import {ITEM_PER_PAGE} from '$lib/constants';
import {readAllFilesRecursively} from '$lib/server/helpers.server';


export const prerender = true


export async function GET(event) {
  const pageNum = Number(event.params.page)
  const season = event.params.season
  const [rootPath, fileNames] = await readAllFilesRecursively(
    event,
    //'blog'
    path.join('blog', season)
  )
  let allFiles: PageItemData[] = []

  for (const filePath of fileNames) {
    const content = await fs.readFile(path.join(rootPath, filePath), FILE_ENCODE)

    allFiles.push(makePageItemData(
      content,
      path.join(season, filePath.replace(/\/index.md$/, '')),
      event.params.lang
    ))
  }

  allFiles.sort((a: PageItemData, b: PageItemData) => {
    return (moment(a.date).isBefore(b.date)) ? 1 : -1
  })

  const start = (pageNum - 1) * ITEM_PER_PAGE

  return new Response(JSON.stringify({
    result: allFiles.slice(start, start + ITEM_PER_PAGE),
    page: pageNum,
    perPage: ITEM_PER_PAGE,
    totalPages: Math.ceil(fileNames.length / ITEM_PER_PAGE)
  }))
}
