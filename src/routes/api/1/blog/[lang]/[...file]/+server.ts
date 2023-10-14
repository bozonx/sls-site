import { error } from '@sveltejs/kit';
import {getBlogPage} from '$lib/server/fileRequests';
import {DEFAULT_LANG} from '$lib/constants';


export const prerender = true


export async function GET(event) {
  const langStr = event.params.lang
  let result: string
  let noTranslation = false

  try {
    result = await getBlogPage(langStr, event.params.file)
  }
  catch (e) {
    try {
      result = await getBlogPage(DEFAULT_LANG, event.params.file)

      //result = await getBlogPage('ru', event.params.file)

      noTranslation = true
    }
    catch (ee) {
      throw error(404)
    }
  }

  return new Response(JSON.stringify({ result, noTranslation }))
}
