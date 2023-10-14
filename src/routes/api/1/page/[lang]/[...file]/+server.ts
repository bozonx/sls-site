import { error } from '@sveltejs/kit';
import {getSitePage} from '$lib/server/fileRequests';
import {get} from 'svelte/store';


export const prerender = true


export async function GET(event) {
  const langStr = event.params.lang
  let result: string

  try {
    result = await getSitePage(langStr, event.params.file)
  }
  catch (e) {
    throw error(404);
  }

  return new Response(JSON.stringify({ result }));
}
