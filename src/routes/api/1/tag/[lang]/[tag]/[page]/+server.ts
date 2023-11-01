import fs from 'node:fs/promises'
import path from 'node:path'
import {error} from '@sveltejs/kit'
import type {PageItemData} from '$lib/types/PageItemData'
import {FILE_ENCODE, BLOG_DIR} from '$lib/constants'
import {
  readAllFilesRecursively,
  sortPageItemsByDateDesc,
  extractMetaDataFromMdPage
} from '$lib/server/helpers.server'
import {removeIndexMd, calculatePaginatedResponse} from '$lib/helpers'


// TODO: тут tag будет транслитерированный

export async function GET(event) {
  //return new Response(JSON.stringify({result: []}))

  const pageNum = Number(event.params.page)
  const tagName = event.params.tag
  const [rootPath, fileNames] = await readAllFilesRecursively(
    event,
    path.join(BLOG_DIR)
  )
  let allFiles: PageItemData[] = []

  for (const filePath of fileNames) {
    const content = await fs.readFile(path.join(rootPath, filePath), FILE_ENCODE)
    const [meta] = await extractMetaDataFromMdPage(
      content,
      event.params.lang,
      removeIndexMd(filePath)
    )

    if (
      Object.keys(meta.tags).find((el) => meta.tags[el].slug === tagName)
    ) allFiles.push(meta)
  }

  if (!allFiles.length) throw error(404)

  // sort by date
  allFiles = sortPageItemsByDateDesc(allFiles)


  // const start = (pageNum - 1) * ITEM_PER_PAGE
  // return new Response(JSON.stringify({
  //   result: allFiles.slice(start, start + ITEM_PER_PAGE),
  //   page: pageNum,
  //   perPage: ITEM_PER_PAGE,
  //   totalPages: Math.ceil(allFiles.length / ITEM_PER_PAGE)
  // }));


  return new Response(JSON.stringify(calculatePaginatedResponse(allFiles, pageNum)))
}
