import yaml from 'yaml';
import fs from 'node:fs/promises'
import type { LayoutServerLoad } from './$types'
import {DEFAULT_LANG} from '../lib/constants';
//import { addMessages, init } from 'svelte-intl-precompile';
import {ROOT_DIR} from '../lib/server/constants.server';
import {tStore} from '../lib/store/t';


export const prerender = true
export const ssr = true

// TODO: если включить то не отображается левая панель
//export const csr = false

// TODO: можно в куки установить
// window.navigator.language

export const load: LayoutServerLoad = async (event) => {
  const lang = event.params.lang || DEFAULT_LANG
  //const loc = await import(`$lib/../../locales/${lang}.yaml`)
  const locYml = await fs.readFile(
      `${ROOT_DIR}/texts/${lang}/${lang}.yaml`,
      'utf8'
  )
  const loc = yaml.parse(locYml)

  console.log(1111, lang, loc)


  // addMessages(lang, loc)
  //
  // init({
  //   initialLocale: lang,
  //   //fallbackLocale: DEFAULT_LANG,
  //   fallbackLocale: lang,
  // });


  tStore.set(loc)
}
