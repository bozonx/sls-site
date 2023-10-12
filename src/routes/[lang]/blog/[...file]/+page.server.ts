import {get} from 'svelte/store';
import { error } from '@sveltejs/kit';
import type {PageServerLoad} from './$types';
import {convertMdToHtml, extractMetaDataFromMdPage} from "$lib/helpers";
import {lang} from '$lib/store/lang';


export const load: PageServerLoad = async (event) => {
  //let rawContent: string

  // try {
  //   rawContent = await getBlogPage(get(lang), event.params.file)
  // }
  // catch (e) {
  //
  //   // TODO: use translate
  //
  //   throw error(404, 'Not found');
  // }

  // TODO: handle error

  let response

  console.log(3333, get(lang), event.params.file)

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
