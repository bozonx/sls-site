import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types'
import {SUPPORTED_LANGS} from '$lib/constants';
import {tStore} from '$lib/store/t';


export const prerender = true
export const ssr = true

// TODO: если включить то не отображается левая панель
//export const csr = false


export const load: LayoutServerLoad = async (event) => {
  const langStr = event.params.lang || ''

  if (!SUPPORTED_LANGS.includes(langStr)) return {}

  // TODO: handle error - translate error

  const translateResp = await event.fetch(`/api/1/translates/${langStr}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })

  if (translateResp.status >= 400) {
    throw error(translateResp.status, translateResp.statusText)
  }

  const translates = (await translateResp.json()).result

  tStore.set(translates)

  const allTagsResp = await event.fetch(`/api/1/alltags/${langStr}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })

  if (allTagsResp.status >= 400) {
    throw error(allTagsResp.status, allTagsResp.statusText)
  }

  return {
    allTags: (await allTagsResp.json()).result,
    translates,
  }
}
