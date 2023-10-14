import moment from 'moment'
import fs from 'node:fs/promises';
import path from 'node:path';
import {ROOT_DIR} from '../../../../../../../../../../../../mnt/disk2/workspace/sls-site/src/lib/server/constants.server';
import {FILE_ENCODE} from '../../../../../../../../../../../../mnt/disk2/workspace/sls-site/src/lib/constants';
import {readDirRecursively, makePageItemData} from '../../../../../../../../../../../../mnt/disk2/workspace/sls-site/src/lib/server/helpers.server';
import type {PageItemData} from '../../../../../../../../../../../../mnt/disk2/workspace/sls-site/src/lib/types/PageItemData';
import {SIMILAR_COUNT} from '../../../../../../../../../../../../mnt/disk2/workspace/sls-site/src/lib/constants';


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
    result: allFiles.slice(0, SIMILAR_COUNT),
  }));
}
