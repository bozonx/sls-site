import { error } from '@sveltejs/kit';
import {getSitePage} from '$lib/server/getPage';


export const prerender = true


export async function GET(event) {
  const langStr = event.params.lang
  let rawContent: string

  try {
    rawContent = await getSitePage(langStr, event.params.file)
  }
  catch (e) {

    // TODO: use translate

    throw error(404, 'Not found');
  }

  return new Response(JSON.stringify({result: rawContent}));
}
