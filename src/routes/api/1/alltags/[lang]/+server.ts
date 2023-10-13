import {deduplicate} from 'squidlet-lib';
import fs from 'node:fs/promises';
import path from 'node:path';
import {ROOT_DIR} from '$lib/server/constants.server';
import {FILE_ENCODE} from '$lib/constants';
import {makePageItemData, readDirRecursively} from '$lib/server/helpers.server';


export const prerender = true


export async function GET(event) {
  const langStr = event.params.lang
  const textsDir = path.join(ROOT_DIR, 'texts', langStr, 'blog')
  const files = await readDirRecursively(textsDir)
  let tags: string[] = []

  for (const filePath of files) {
    const content = await fs.readFile(path.join(textsDir, filePath), FILE_ENCODE)
    const pageData = makePageItemData(content, filePath)

    tags = [
      ...tags,
      ...pageData.tags,
    ]
  }

  tags = deduplicate(tags)

  tags.sort()

  return new Response(JSON.stringify({
    result: tags,
  }));
}
