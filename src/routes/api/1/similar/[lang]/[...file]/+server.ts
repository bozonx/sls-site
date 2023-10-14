import moment from 'moment'
import fs from 'node:fs/promises';
import path from 'node:path';
import {arraySimilar} from 'squidlet-lib';
import {FILE_ENCODE} from '$lib/constants';
import {makePageItemData} from '$lib/server/helpers.server';
import type {PageItemData} from '$lib/types/PageItemData';
import {SIMILAR_COUNT} from '$lib/constants';
import {readAllFilesRecursively} from '$lib/server/helpers.server';


export const prerender = true


export async function GET(event) {
  const langStr = event.params.lang
  const fileName = event.params.file
  let articleString
  let rootPath
  let fileNames

  try {
    [rootPath, fileNames] = await readAllFilesRecursively(
      event,
      'blog'
    )
  }
  catch (e) {
    return new Response(JSON.stringify({
      result: [],
    }))
  }

  try {
    articleString = await fs.readFile(
      path.join(rootPath, fileName, 'index.md'),
      FILE_ENCODE
    )
  }
  catch (e) {
    return new Response(JSON.stringify({
      result: [],
    }))
  }

  const articleMeta = makePageItemData(
    articleString,
    fileName,
    langStr
  )
  let allFiles: PageItemData[] = []

  for (const filePath of fileNames) {
    const clearFilePath = filePath.replace(/\/index.md$/, '')
    const content = await fs.readFile(path.join(rootPath, filePath), FILE_ENCODE)
    const meta = makePageItemData(
      content,
      clearFilePath,
      langStr
    )
    // skip the same article
    if (clearFilePath === fileName) continue
    // add ony if it have any similar tags
    else if (arraySimilar(meta.tags, articleMeta.tags).length) allFiles.push(meta)
  }
  // sort by date
  allFiles.sort((a: PageItemData, b: PageItemData) => {
    return (moment(a.date).isBefore(b.date)) ? 1 : -1
  })
  // sort by similarity
  allFiles.sort((a: PageItemData, b: PageItemData) => {
    return (
      arraySimilar(a.tags, articleMeta.tags).length
      > arraySimilar(b.tags, articleMeta.tags).length
    ) ? -1 : 1
  })

  return new Response(JSON.stringify({
    result: allFiles.slice(0, SIMILAR_COUNT),
  }))
}
