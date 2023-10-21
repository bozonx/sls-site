import fs from 'node:fs/promises'
import path from 'node:path'
import {deduplicate} from 'squidlet-lib'
import {FILE_ENCODE, BLOG_DIR} from '$lib/constants'
import {
  readAllFilesRecursively,
  extractMetaDataFromMdPage
} from '$lib/server/helpers.server'


//export const prerender = true

export async function GET(event) {
  const [rootPath, fileNames] = await readAllFilesRecursively(
    event,
    BLOG_DIR
  )
  let tags: string[] = []

  for (const filePath of fileNames) {
    const content = await fs.readFile(path.join(rootPath, filePath), FILE_ENCODE)
    const [meta] = extractMetaDataFromMdPage(
      content,
      event.params.lang,
      filePath
    )

    tags = [
      ...tags,
      ...meta.tags,
    ]
  }

  tags = deduplicate(tags)

  tags.sort()

  return new Response(JSON.stringify({ result: tags }))
}
