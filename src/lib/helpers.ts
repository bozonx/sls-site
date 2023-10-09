import {fromMarkdown} from "mdast-util-from-markdown";
import {toHast} from "mdast-util-to-hast";
import {sanitize} from "hast-util-sanitize";
import {toHtml} from "hast-util-to-html";


export function convertMdToHtml(mdContent: string) {
  const mdastTree = fromMarkdown(mdContent)
  const hastTree = toHast(mdastTree)
  const safe = sanitize(hastTree)

  return  toHtml(safe)
}
