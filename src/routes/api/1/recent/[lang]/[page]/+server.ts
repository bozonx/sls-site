import moment from 'moment'
import { error } from '@sveltejs/kit';
import fs from 'node:fs/promises';
import path from 'node:path';
import {ROOT_DIR} from '$lib/server/constants.server';
import {FILE_ENCODE} from '$lib/constants';
import {readDirRecursively} from '$lib/server/helpers';
import type {PageItemData} from '$lib/types/PageItemData';
import {makePageItemData} from '$lib/helpers';
import {ITEM_PER_PAGE} from '../../../../../../lib/constants';


export const prerender = true


export async function GET(event) {
  const langStr = event.params.lang
  const pageNum = Number(event.params.page)
  const textsDir = path.join(ROOT_DIR, 'texts', langStr, 'blog')
  const files = await readDirRecursively(textsDir)
  let allFiles: PageItemData[] = []

  for (const filePath of files) {
    const content = await fs.readFile(path.join(textsDir, filePath), FILE_ENCODE)

    allFiles.push(makePageItemData(content, filePath))
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
