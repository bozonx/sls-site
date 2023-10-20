import fs from 'node:fs/promises';
import path from 'node:path';
import {arraySimilar} from 'squidlet-lib';
import {FILE_ENCODE, BLOG_DIR, SIMILAR_COUNT} from '$lib/constants';
import type {PageItemData} from '$lib/types/PageItemData';
import {
  readAllFilesRecursively,
  sortPageItemsByDateDesc,
  extractMetaDataFromMdPage
} from '$lib/server/helpers.server';
import {removeIndexMd} from '$lib/helpers';

export async function GET(event) {
  const langStr = event.params.lang
  const fileName = event.params.file
  let articleString
  let rootPath
  let fileNames

  try {
    [rootPath, fileNames] = await readAllFilesRecursively(
      event,
      BLOG_DIR
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

  const extractedArticle = extractMetaDataFromMdPage(
    articleString,
    langStr,
    fileName
  )
  const articleMeta = extractedArticle[0]
  let allFiles: PageItemData[] = []

  for (const filePath of fileNames) {
    const clearFilePath = removeIndexMd(filePath)
    const content = await fs.readFile(path.join(rootPath, filePath), FILE_ENCODE)
    const [meta] = extractMetaDataFromMdPage(
      content,
      langStr,
      clearFilePath
    )
    // skip the same article
    if (clearFilePath === fileName) continue
    // add ony if it have any similar tags
    else if (arraySimilar(meta.tags, articleMeta.tags).length) allFiles.push(meta)
  }
  // sort by date
  allFiles = sortPageItemsByDateDesc(allFiles)
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
