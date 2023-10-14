import type {LoadEvent} from '@sveltejs/kit';
import {error} from '@sveltejs/kit';


export async function loadParsedPage(event: LoadEvent, dirName: string) {
  const rawContent = await loadJustData(event, `/api/1/${dirName}/${event.params.lang}/${event.params.file}`)

  return JSON.parse(rawContent.result)

  // let response
  //
  // response = await event.fetch(`/api/1/${dirName}/${event.params.lang}/${event.params.file}`, {
  //   method: 'GET',
  //   headers: {
  //     'content-type': 'application/json',
  //   },
  // })
  //
  // if (response.status >= 400) {
  //   throw error(response.status, response.statusText)
  // }
  //
  // const rawContent = await response.json()
  //
  // return JSON.parse(rawContent.result)
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

export async function loadJustData(event: LoadEvent, url: string) {
  let response

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
