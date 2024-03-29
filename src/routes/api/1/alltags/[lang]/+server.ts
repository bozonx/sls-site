import fs from 'node:fs/promises'
import path from 'node:path'
import {FILE_ENCODE, BLOG_DIR} from '$lib/constants'
import {
  readAllFilesRecursively,
  extractMetaDataFromMdPage
} from '$lib/server/helpers.server'
import type {TagItem} from '$lib/types/TagItem'
import {transliterate} from "$lib/server/helpers.jsserver.js"


export async function GET(event) {
  const [rootPath, fileNames] = await readAllFilesRecursively(
    event,
    BLOG_DIR
  )
  let tags: Record<string, TagItem> = {}

  for (const filePath of fileNames) {
    const content = await fs.readFile(path.join(rootPath, filePath), FILE_ENCODE)
    const [meta] = await extractMetaDataFromMdPage(
      content,
      event.params.lang,
      filePath
    )

    // TODO: поидее объект не нужен
    tags = {
      ...tags,
      ...meta.tags,
    }
  }

  const tagsNames = Object.keys(tags)

  tagsNames.sort()

  const tagsWithCount: Record<string, TagItem> = {}

  for (const tag of tagsNames) {
    if (tagsWithCount[tag]) {
      if (typeof tagsWithCount[tag].count === 'number') {
        ++tagsWithCount[tag].count!
      }
    }
    else {
      tagsWithCount[tag] = {
        slug: transliterate(tag, event.params.lang),
        count: 1
      }
    }
  }

  return new Response(JSON.stringify({ result: tagsWithCount }))
}
