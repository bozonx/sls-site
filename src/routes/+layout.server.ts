import yaml from 'yaml';
import fs from 'node:fs/promises'
import type { LayoutServerLoad } from './$types'
import {DEFAULT_LANG} from '$lib/constants';
//import { addMessages, init } from 'svelte-intl-precompile';
import {ROOT_DIR} from '$lib/server/constants.server';
import {tStore} from '$lib/store/t';
import {SUPPORTED_LANGS} from '../lib/constants';


export const prerender = true
export const ssr = true

// TODO: если включить то не отображается левая панель
//export const csr = false

// TODO: можно в куки установить
// window.navigator.language

// export const load: LayoutServerLoad = async (event) => {
//   const langStr = event.params.lang || ''
//
//   if (!SUPPORTED_LANGS.includes(langStr)) return {}
//
//   lang.set(langStr)
//
//   //const loc = await import(`$lib/../../locales/${langStr}.yaml`)
//   const locYml = await fs.readFile(
//       `${ROOT_DIR}/texts/${langStr}/${langStr}.yaml`,
//       'utf8'
//   )
//   const loc = yaml.parse(locYml)
//
//   console.log(555, langStr)
//
//   // addMessages(langStr, loc)
//   //
//   // init({
//   //   initialLocale: langStr,
//   //   //fallbackLocale: DEFAULT_LANG,
//   //   fallbackLocale: langStr,
//   // });
//
//   return {
//     loc,
//   }
//
// }
