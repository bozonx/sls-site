import type {LoadEvent} from '@sveltejs/kit';
import {error} from '@sveltejs/kit';
import {convertMdToHtml, extractMetaDataFromMdPage} from './helpers';


export async function loadParsedPage(event: LoadEvent, dirName: string) {
  let response

  response = await event.fetch(`/api/1/${dirName}/${event.params.lang}/${event.params.file}`, {
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

export async function loadListItems(event: LoadEvent, url: string) {
  let response

  if (!Number.isInteger(Number(event.params.page))) {
    throw error(400, 'Wrong page param')
  }

  response = await event.fetch(url, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })

  if (response.status >= 400) {
    throw error(response.status, response.statusText)
  }

  return await response.json()
}