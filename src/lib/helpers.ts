import {trimCharStart} from 'squidlet-lib';
import {fromMarkdown} from "mdast-util-from-markdown";
import {toHast} from "mdast-util-to-hast";
import {sanitize} from "hast-util-sanitize";
import {toHtml} from "hast-util-to-html";
import yaml from 'yaml'
import type {PageMetaData} from "$lib/types/PageMetaData";
import {DEFAULT_LANG, SUPPORTED_LANGS} from '$lib/constants';
import type {PageItemData} from './types/PageItemData';


export function convertMdToHtml(mdContent: string) {
  const mdastTree = fromMarkdown(mdContent)
  const hastTree = toHast(mdastTree)
  const safe = sanitize(hastTree)

  return  toHtml(safe)
}

export function extractMetaDataFromMdPage(rawContent: string): [PageMetaData, string] {
  const splat = rawContent.split('</meta>')

  if (splat.length !== 2) {
    throw new Error(`Wrong page file`)
  }

  const md = splat[1].trim()
  const yamlString = splat[0].replace('<meta>', '').trim()
  const meta: PageMetaData = {
    title: '',
    date: '',
    tags: [],
    descr: '',
    ...yaml.parse(yamlString)
  }

  return [meta, md]
}

export function makePageItemData(content: string, fileName: string): PageItemData {
  const [meta, md] = extractMetaDataFromMdPage(content)

  return {
    fileName,
    title: meta.title,
    date: meta.date,

    // TODO: зарезолвить первую картинку
    thumb: '',
    tags: meta.tags,

    // TODO: вычистить разметку
    descr: md
  }
}

export function acceptLangHeaderToLand(acceptLang?: string) {
  if (!acceptLang) return DEFAULT_LANG

  const splat = acceptLang.split(',')

  if (
      splat[0].length !== 2
      || !SUPPORTED_LANGS.includes(splat[0])
  ) return DEFAULT_LANG

  return splat[0]
}

export function curLang(currentPathname: string = ''): string {
  const splat = trimCharStart(currentPathname, '/').split('/')

  if (!SUPPORTED_LANGS.includes(splat[0])) return ''

  return splat[0]
}

// export function makePageUrl(newUrl: string, currentPathname: string): string {
//   const splat = trimCharStart(currentPathname).split('/')
//   const lang = splat[0]
//
//   return `/${lang}/${trimCharStart(newUrl)}`
// }
