import fs from 'node:fs/promises'
import path from 'node:path'
import {ROOT_DIR} from '$lib/server/constants.server'
import {FILE_ENCODE, BLOG_DIR, TEXTS_DIR} from '$lib/constants'


//export const prerender = true

export async function GET(event) {
  const blogDir = path.join(ROOT_DIR, TEXTS_DIR, event.params.lang, BLOG_DIR)
  const result = await fs.readdir(blogDir, FILE_ENCODE)


  result.sort()
  result.reverse()

  return new Response(JSON.stringify({ result }))
}
