import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types'
import {SUPPORTED_LANGS} from '$lib/constants';
import {tStore} from '$lib/store/t';


export const load: LayoutServerLoad = async (event) => {
  const langStr = event.params.lang || ''

  if (!SUPPORTED_LANGS.includes(langStr)) return {}

  ///lang.set(langStr)

  // TODO: handle error

  const response = await event.fetch(`/api/1/t/${langStr}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })

  if (response.status >= 400) {
    throw error(response.status, response.statusText)
  }

  const loc = await response.json();

  tStore.set(loc.result)

  /////////////


  const allTags = await event.fetch(`/api/1/alltags/${langStr}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })

  return {
    allTags: (await allTags.json()).result
  }
}
