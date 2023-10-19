import fs from 'node:fs'
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {pathTrimExt} from 'squidlet-lib';


const filename = fileURLToPath(import.meta.url);
const myDirname = path.dirname(filename)
const prjRootDir = path.resolve(myDirname, '../../../')
const textsDir = path.join(prjRootDir, 'texts')
const enc = {encoding: 'utf8'}
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
    // const pagePages = readDirRecursivelySync(path.join(textsDir, lang, pageDir))

    console.log(111, blogPages)

    res = [
      ...res,
      path.join('/', lang),
      path.join('/', lang, 'tags'),
      path.join('/', lang, 'seasons'),

      // TODO: remake - count pages
      ...seasons.map((el) => path.join('/api/1/seasons', lang, el, '1')),
      ...seasons.map((el) => path.join('/', lang, 'seasons', el)),
      path.join('/api/1/recent', lang, '1'),
      path.join('/', lang, 'recent'),

      // // TODO: remake - count pages
      // //path.join('/', lang, 'tag'),
      //
      // ...blogPages.map((item) => path.join('/', lang, blogDir, pathTrimExt(item))),
      // ...pagePages.map((item) => path.join('/', lang, pageDir, pathTrimExt(item))),
      //
      // ...blogPages.map((item) => path.join('/api/1', blogDir, lang, pathTrimExt(item))),
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

    // tags = [
    //   ...tags,
    //   ...meta.tags,
    // ]
  }

  return tags
}