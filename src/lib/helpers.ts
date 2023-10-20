//import {trimCharStart} from 'squidlet-lib';
import {DEFAULT_LANG, SUPPORTED_LANGS} from '$lib/constants';


export function acceptLangHeaderToLand(acceptLang?: string) {
  if (!acceptLang) return DEFAULT_LANG

  const splat = acceptLang.split(',')

  if (
      splat[0].length !== 2
      || !SUPPORTED_LANGS.includes(splat[0])
  ) return DEFAULT_LANG

  return splat[0]
}

export function removeIndexMd(somePath: string): string {
  return somePath.replace(/\/index.md$/, '')
}

// export function curLang(currentPathname: string = ''): string {
//   const splat = trimCharStart(currentPathname, '/').split('/')
//
//   if (!SUPPORTED_LANGS.includes(splat[0])) return ''
//
//   return splat[0]
// }

// export function makePageUrl(newUrl: string, currentPathname: string): string {
//   const splat = trimCharStart(currentPathname).split('/')
//   const lang = splat[0]
//
//   return `/${lang}/${trimCharStart(newUrl)}`
// }
