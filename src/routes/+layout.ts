import type { LayoutLoad } from './$types'
import {DEFAULT_LANG} from '../lib/constants';
import { addMessages, init } from 'svelte-intl-precompile';

// window.navigator.language
export const prerender = true
export const ssr = true
//export const csr = false


export const load: LayoutLoad = async (event) => {
  const lang = event.params.lang || DEFAULT_LANG
  const loc = await import(`$lib/locales/${lang}.yaml`)

  addMessages(lang, loc.default);

  init({
    initialLocale: lang,
    fallbackLocale: DEFAULT_LANG,
  });
}
