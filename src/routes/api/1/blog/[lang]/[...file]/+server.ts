import { error } from '@sveltejs/kit';
import {getBlogPage} from '$lib/server/fileRequests';


export const prerender = true


export async function GET(event) {
  const langStr = event.params.lang
  let result: string

  try {
    result = await getBlogPage(langStr, event.params.file)
  }
  catch (e) {
    throw error(404)
  }

  return new Response(JSON.stringify({ result }))
}
