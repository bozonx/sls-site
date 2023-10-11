import type { LayoutLoad } from './$types'
import {DEFAULT_LANG} from '../lib/constants';
import { addMessages, init } from 'svelte-intl-precompile';


export const prerender = true
export const ssr = true

// TODO: если включить то не отображается левая панель
//export const csr = false

// TODO: можно в куки установить
// window.navigator.language

export const load: LayoutLoad = async (event) => {
  const lang = event.params.lang || DEFAULT_LANG
  const loc = await import(`$lib/locales/${lang}.yaml`)

  addMessages(lang, loc.default);

  init({
    initialLocale: lang,
    fallbackLocale: DEFAULT_LANG,
  });
}
