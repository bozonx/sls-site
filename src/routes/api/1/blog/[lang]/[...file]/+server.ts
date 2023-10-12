import { error } from '@sveltejs/kit';
import {getBlogPage} from '$lib/server/getPage';


export const prerender = true


export async function GET(event) {
  const langStr = event.params.lang
  let rawContent: string

  try {
    rawContent = await getBlogPage(langStr, event.params.file)
  }
  catch (e) {
    throw error(404, 'Not found');
  }

  return new Response(JSON.stringify({result: rawContent}));
}
