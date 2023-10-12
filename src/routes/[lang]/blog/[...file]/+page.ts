import { error } from '@sveltejs/kit';
import type {PageLoad} from './$types';
import {convertMdToHtml, extractMetaDataFromMdPage} from "$lib/helpers";


export const load: PageLoad = async (event) => {
  let response

  response = await event.fetch(`/api/1/blog/${event.params.lang}/${event.params.file}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })

  if (response.status >= 400) {
    throw error(response.status, response.statusText)
  }

  const rawContent = await response.json()
  const [meta, md] = extractMetaDataFromMdPage(rawContent.result)

  return {
    meta,
    html: convertMdToHtml(md)
  }
}
