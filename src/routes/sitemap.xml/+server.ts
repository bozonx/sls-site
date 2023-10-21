import path from 'path'
import {pathTrimExt} from 'squidlet-lib'
import { DOMAIN_NAME } from '$env/static/private'
import {readDirRecursively} from '$lib/server/helpers.server'
import {ROOT_DIR} from '$lib/server/constants.server'
import {TEXTS_DIR, BLOG_DIR, PAGE_DIR, SUPPORTED_LANGS} from '$lib/constants'
import {removeIndexMd} from '$lib/helpers';


//export const prerender = true


export async function GET() {
  const domain = DOMAIN_NAME
  const langs = SUPPORTED_LANGS
  let urls: [string, string | undefined][] = []

  for (const lang of langs) {
    const langDir = path.join(ROOT_DIR, TEXTS_DIR, lang)
    const blogPages = await readDirRecursively(path.join(langDir, BLOG_DIR))
    const pagePages = await readDirRecursively(path.join(langDir, PAGE_DIR))

    urls = [
      ...urls,
      ...blogPages
        .map((el): [string, string | undefined] => {
          return [
            `/${lang}/${BLOG_DIR}/${removeIndexMd(el)}`,
            undefined
          ]
        }),
      ...pagePages
        .map((el): [string, string | undefined] => {
          return [
            `/${lang}/${PAGE_DIR}/${pathTrimExt(el)}`,
            undefined
          ]
        }),
    ]
  }

  let resArr = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls
      .map(([pathname, lastMod]) => makeUrlElement(domain, pathname, lastMod)),
    '</urlset>',
  ]

  return new Response(
    resArr.join('\n'),
    {
      headers: { 'Content-Type': 'application/xml' },
    },
  );
}


function makeUrlElement(domain: string, pathname: string, lastMod?: string): string {
  const resArr = [
    '<url>',
    `  <loc>https://${domain}${pathname}</loc>`,
    (lastMod) ? `  <lastmod>${lastMod}</lastmod>` : '',
    '</url>',
  ]

  return resArr.join('\n')
}

/*
<url>
      <loc>http://www.example.com/</loc>
      <lastmod>2005-01-01</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
   </url>
 */
