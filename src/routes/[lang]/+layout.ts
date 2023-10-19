import {trimCharStart} from 'squidlet-lib';
import {error, redirect} from '@sveltejs/kit';
import type { LayoutLoad } from './$types'
import {SUPPORTED_LANGS} from '$lib/constants';
import {tStore} from '$lib/store/t';
import {DEFAULT_LANG} from '$lib/constants';


export const prerender = true
export const ssr = true

// TODO: если включить то не отображается левая панель
//export const csr = false


export const load: LayoutLoad = async (event) => {
  //if (event.url.pathname.startsWith('/api/')) return {}

  let langStr = event.params.lang || ''

  // if (event.url.pathname === '/') {
  //   if (browser) {
  //     throw redirect(307, '/' + navigator.language)
  //   }
  //   // if there is a server then +layout.server.ts will be called
  // }
  // else

  if (!SUPPORTED_LANGS.includes(langStr)) {
    const splat = trimCharStart(event.url.pathname, '/').split('/')

    if (SUPPORTED_LANGS.includes(splat[0])) {
      langStr = splat[0]
      event.params.lang = splat[0]
    }
    else {
      // can't recognize an language
      throw redirect(307, '/' + DEFAULT_LANG)
    }
  }

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
