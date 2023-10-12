import type { LayoutServerLoad } from './$types'
import {SUPPORTED_LANGS} from '../lib/constants';
import {lang} from '$lib/store/lang';
import {tStore} from '../lib/store/t';


export const load: LayoutServerLoad = async (event) => {
  const langStr = event.params.lang || ''

  if (!SUPPORTED_LANGS.includes(langStr)) return {}

  lang.set(langStr)

  const response = await event.fetch(`/api/1/t/${langStr}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })

  const loc = await response.json();

  tStore.set(loc.result)

  return {
  }
}
