import fs from 'node:fs/promises';
import type {EntryGenerator} from './$types'
import path from 'node:path';
import {ROOT_DIR} from '$lib/server/constants.server';
import {FILE_ENCODE, BLOG_DIR, SUPPORTED_LANGS} from '$lib/constants';

export const prerender = true


// export const entries: EntryGenerator = async () => {
//   return SUPPORTED_LANGS.map((lang) => ({ lang }))
// };

export async function GET(event) {
  const blogDir = path.join(ROOT_DIR, 'texts', event.params.lang, BLOG_DIR)
  const result = await fs.readdir(blogDir, FILE_ENCODE)


  result.sort()
  result.reverse()

  return new Response(JSON.stringify({ result }))
}
