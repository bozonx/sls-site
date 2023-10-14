import fs from 'node:fs/promises';
import path from 'node:path';
import {ROOT_DIR} from '$lib/server/constants.server';
import {FILE_ENCODE} from '$lib/constants';


export const prerender = true


export async function GET(event) {
  const langStr = event.params.lang
  const blogDir = path.join(ROOT_DIR, 'texts', langStr, 'blog')
  const result = await fs.readdir(blogDir, FILE_ENCODE)

  result.sort()
  result.reverse()

  return new Response(JSON.stringify({ result }))
}