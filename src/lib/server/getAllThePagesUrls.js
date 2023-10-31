import fs from 'node:fs'
import path from 'node:path';
import {deduplicate} from 'squidlet-lib';
import {fileURLToPath} from 'node:url';
import {pathTrimExt} from 'squidlet-lib';
import yaml from "yaml";
import {transliterate} from "./helpers.jsserver.js"


const filename = fileURLToPath(import.meta.url);
const myDirname = path.dirname(filename)
const prjRootDir = path.resolve(myDirname, '../../../')
const textsDir = path.join(prjRootDir, 'texts')
const enc = 'utf8'
const blogDir = 'blog'
const pageDir = 'page'


export function getAllThePagesUrls() {
  let res = []
  const langs = fs.readdirSync(textsDir, enc)

  for (const lang of langs) {
    const blogPath = path.join(textsDir, lang, blogDir)
    const seasons = fs.readdirSync(blogPath, enc)
    const blogPages = readDirRecursivelySync(blogPath)
    const collectedTags = collectTagsSync(blogPath, blogPages)
    //const pagePages = readDirRecursivelySync(path.join(textsDir, lang, pageDir))

    res = [
      ...res,

      // ...seasons.map((el) => `/${lang}/seasons/${el}/1`),
      // ...seasons.map((el) => `/api/1/seasons/${lang}/${el}/1`),

      ...collectedTags.map((el) => `/${lang}/tags/${transliterate(el, lang)}`),
      ...collectedTags.map((el) => `/api/1/tag/${lang}/${transliterate(el, lang)}/1`),

      // `/api/1/seasons/${lang}`,
      // `/${lang}/seasons`,
      `/${lang}/tags`,
      `/${lang}/recent`,
      `/${lang}/page/links`,
      `/${lang}`,

      // ...blogPages.map((item) => path.join('/', lang, blogDir, item.replace(/\/index.md$/, ''))),
      // ...pagePages.map((item) => path.join('/', lang, pageDir, pathTrimExt(item))),
      // ...blogPages.map((item) => path.join('/api/1', blogDir, lang, item.replace(/\/index.md$/, ''))),
      // ...pagePages.map((item) => path.join('/api/1', pageDir, lang, pathTrimExt(item))),
    ]

  }

  return res
}


function readDirRecursivelySync(rootDir, subDir = '') {
  const fullDirPath = path.join(rootDir, subDir)
  const files = fs.readdirSync(fullDirPath, enc)
  let res = []

  for (const file of files) {
    const stat = fs.lstatSync(path.join(fullDirPath, file))

    if (stat.isDirectory()) {
      res = [
        ...res,
        ...readDirRecursivelySync(rootDir, path.join(subDir, file))
      ]
    }
    else {
      if (!file.endsWith('.md')) continue

      res.push(path.join(subDir, file))
    }
  }

  return res
}

function collectTagsSync(blogPath, blogPages) {
  let tags = []

  for (const mdPath of blogPages) {
    const filePath = path.join(blogPath, mdPath)
    const content = fs.readFileSync(filePath, enc)
    const splat = content
      .split('---')
      .map((el) => String(el).trim())
      .filter((el) => Boolean(el))
    const yamlString = splat[0]

    if (splat.length <= 1 || !yamlString.match(/^[\w\d\_]+\:\s*/)) continue

    const metaData = yaml.parse(yamlString)

    tags = [
      ...tags,
      ...metaData.tags,
    ]
  }

  tags = deduplicate(tags)

  return tags
}
