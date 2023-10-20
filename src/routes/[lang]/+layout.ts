import {trimCharStart} from 'squidlet-lib';
import {error, redirect} from '@sveltejs/kit';
import type { LayoutLoad } from './$types'
import {SUPPORTED_LANGS, DEFAULT_LANG} from '$lib/constants';
import {tStore} from '$lib/store/t';


export const load: LayoutLoad = async (event) => {
  let langStr = event.params.lang || ''

  if (!SUPPORTED_LANGS.includes(langStr)) {
    // try to get language from pathname
    const splat = trimCharStart(event.url.pathname, '/').split('/')

    if (SUPPORTED_LANGS.includes(splat[0])) {
      // in case of event.params.lang is empty
      langStr = splat[0]
      event.params.lang = splat[0]
      // set the language and go further
    }
    else {
      // can't recognize a language - redirect to default language (en)
      throw redirect(307, '/' + DEFAULT_LANG)
    }
  }

  // load translations
  const translateResp = await event.fetch(`/api/1/translates/${langStr}`, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  })

  if (translateResp.status >= 400) {
    throw error(translateResp.status, translateResp.statusText)
  }

  const translates = (await translateResp.json()).result
  // save translates to the store
  tStore.set(translates)

  // load all tags
  const allTagsResp = await event.fetch(`/api/1/alltags/${langStr}`, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  })

  if (allTagsResp.status >= 400) {
    throw error(allTagsResp.status, allTagsResp.statusText)
  }

  return {
    allTags: (await allTagsResp.json()).result,
    translates,
  }
}
