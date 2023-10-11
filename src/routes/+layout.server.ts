import yaml from 'yaml';
import fs from 'node:fs/promises'
import type { LayoutServerLoad } from './$types'
import {DEFAULT_LANG} from '../lib/constants';
import { addMessages, init } from 'svelte-intl-precompile';
import {ROOT_DIR} from '../lib/server/constants.server';


export const prerender = true
export const ssr = true

// TODO: если включить то не отображается левая панель
//export const csr = false

// TODO: можно в куки установить
// window.navigator.language

export const load: LayoutServerLoad = async (event) => {
  const lang = event.params.lang || DEFAULT_LANG
  //const loc = await import(`$lib/../../locales/${lang}.yaml`)
  const loc = await fs.readFile(`${ROOT_DIR}/locales/${lang}.yaml`, 'utf8')

  addMessages(lang, yaml.parse(loc));

  init({
    initialLocale: lang,
    fallbackLocale: DEFAULT_LANG,
  });
}
