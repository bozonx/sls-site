import moment from 'moment'
import { error } from '@sveltejs/kit';
import fs from 'node:fs/promises';
import path from 'node:path';
import {ROOT_DIR} from '$lib/server/constants.server';
import {FILE_ENCODE} from '$lib/constants';
import {readDirRecursively, makePageItemData} from '$lib/server/helpers.server';
import type {PageItemData} from '$lib/types/PageItemData';
import {ITEM_PER_PAGE} from '$lib/constants';


export const prerender = true


export async function GET(event) {
  const langStr = event.params.lang

  const textsDir = path.join(ROOT_DIR, 'texts', langStr, 'blog')
  const files = await readDirRecursively(textsDir)
  let allFiles: PageItemData[] = []

  for (const filePath of files) {
    const content = await fs.readFile(path.join(textsDir, filePath), FILE_ENCODE)

    allFiles.push(makePageItemData(content, filePath.replace(/\/index.md$/, ''), langStr))
  }

  allFiles.sort((a: PageItemData, b: PageItemData) => {
    return (moment(a.date).isBefore(b.date)) ? 1 : -1
  })

  return new Response(JSON.stringify({
    result: allFiles
  }));
}
