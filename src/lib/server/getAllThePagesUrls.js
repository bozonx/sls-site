import fs from 'node:fs'
import path from 'node:path';
import {deduplicate} from 'squidlet-lib';
import {fileURLToPath} from 'node:url';
import {pathTrimExt} from 'squidlet-lib';
import yaml from "yaml";


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
    const pagePages = readDirRecursivelySync(path.join(textsDir, lang, pageDir))

    res = [
      ...res,

      // TODO: remake - count pages

      //`/api/1/seasons/${lang}`,


      // ...seasons.map((el) => `/${lang}/seasons/${el}`),
      // // ...seasons.map((el) => `/${lang}/seasons/${el}/1`),
      // // //
      // // // `/api/1/recent/${lang}/1`,
      // `/${lang}/recent`,
      // // ...collectedTags.map((el) => `/${lang}/tags/${el}`),
      // //
      // `/${lang}/tags`,
      // //
      // `/${lang}/seasons`,
      `/${lang}`,

      //`/${lang}/sitemap`,


      // ...blogPages.map((item) => path.join('/', lang, blogDir, item.replace(/\/index.md$/, ''))),
      // ...pagePages.map((item) => path.join('/', lang, pageDir, pathTrimExt(item))),
      //
      //
      // ...seasons.map((el) => `/api/1/seasons/${lang}/${el}/1`),

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
    const splat = content.split('</meta>')
    const yamlString = splat[0].replace('<meta>', '').trim()
    const metaData = yaml.parse(yamlString)

    tags = [
      ...tags,
      ...metaData.tags,
    ]
  }

  tags = deduplicate(tags)

  return tags
}