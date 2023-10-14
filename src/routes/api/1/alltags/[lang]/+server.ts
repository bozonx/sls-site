import {deduplicate} from 'squidlet-lib';
import fs from 'node:fs/promises';
import path from 'node:path';
import {FILE_ENCODE} from '$lib/constants';
import {makePageItemData} from '$lib/server/helpers.server';
import {readAllFilesRecursively} from '$lib/server/helpers.server';


export const prerender = true


export async function GET(event) {
  const [rootPath, fileNames] = await readAllFilesRecursively(
    event,
    'blog'
  )
  let tags: string[] = []

  for (const filePath of fileNames) {
    const content = await fs.readFile(path.join(rootPath, filePath), FILE_ENCODE)
    const pageData = makePageItemData(content, filePath, event.params.lang)

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
