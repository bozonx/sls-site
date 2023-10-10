import {fromMarkdown} from "mdast-util-from-markdown";
import {toHast} from "mdast-util-to-hast";
import {sanitize} from "hast-util-sanitize";
import {toHtml} from "hast-util-to-html";
import yaml from 'yaml'
import type {PageMetaData} from "$lib/types/PageMetaData";


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
  const meta: PageMetaData = yaml.parse(yamlString)

  return [meta, md]
}
