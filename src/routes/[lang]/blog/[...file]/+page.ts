import {get} from 'svelte/store';
import { error } from '@sveltejs/kit';
import type {PageLoad} from './$types';
import {convertMdToHtml, extractMetaDataFromMdPage} from "$lib/helpers";
import {lang} from '$lib/store/lang';


export const load: PageLoad = async (event) => {
  let response

  console.log(3333, get(lang), event.params.file)

  if (!get(lang)) {
    throw error(404, 'Language not set')
  }

  response = await event.fetch(`/api/1/blog/${get(lang)}/${event.params.file}`, {
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
