import moment from 'moment'
import { error } from '@sveltejs/kit';
import fs from 'node:fs/promises';
import path from 'node:path';
import {ROOT_DIR} from '../../../../../../../../../../../../../mnt/disk2/workspace/sls-site/src/lib/server/constants.server';
import {FILE_ENCODE} from '../../../../../../../../../../../../../mnt/disk2/workspace/sls-site/src/lib/constants';
import {readDirRecursively} from '../../../../../../../../../../../../../mnt/disk2/workspace/sls-site/src/lib/server/helpers';
import type {PageItemData} from '../../../../../../../../../../../../../mnt/disk2/workspace/sls-site/src/lib/types/PageItemData';
import {makePageItemData} from '../../../../../../../../../../../../../mnt/disk2/workspace/sls-site/src/lib/helpers';
import {ITEM_PER_PAGE} from '../../../../../../../../../../../../../mnt/disk2/workspace/sls-site/src/lib/constants';


export const prerender = true


export async function GET(event) {
  const langStr = event.params.lang
  const tagName = event.params.tag
  const pageNum = Number(event.params.page)

  if (!Number.isInteger(pageNum)) {
    throw error(400, 'Wrong page number')
  }

  const textsDir = path.join(ROOT_DIR, 'texts', langStr, 'blog')
  const files = await readDirRecursively(textsDir)
  let allFiles: PageItemData[] = []

  for (const filePath of files) {
    const content = await fs.readFile(path.join(textsDir, filePath), FILE_ENCODE)
    const pageData = makePageItemData(content, filePath)

    if (pageData.tags.includes(tagName)) allFiles.push(pageData)
  }

  allFiles.sort((a: PageItemData, b: PageItemData) => {
    return (moment(a.date).isBefore(b.date)) ? 1 : -1
  })

  const start = (pageNum - 1) * ITEM_PER_PAGE

  return new Response(JSON.stringify({
    result: allFiles.slice(start, start + ITEM_PER_PAGE),
    page: pageNum,
    perPage: ITEM_PER_PAGE,
    totalPages: Math.ceil(files.length / ITEM_PER_PAGE)
  }));
}
