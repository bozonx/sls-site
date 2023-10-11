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
    const blogPages = readDirRecirsively(path.join(textsDir, lang, blogDir))
    const pagePages = readDirRecirsively(path.join(textsDir, lang, pageDir))

    res = [
      ...res,
      path.join('/', lang),
      path.join('/', lang, 'tag'),
      path.join('/', lang, 'recent'),
      ...pagePages.map((item) => path.join('/', lang, pageDir, pathTrimExt(item))),
      ...blogPages.map((item) => path.join('/', lang, blogDir, pathTrimExt(item))),
    ]

  }

  return res
}


function readDirRecirsively(rootDir, subDir = '') {
  const fullDirPath = path.join(rootDir, subDir)
  const files = fs.readdirSync(fullDirPath, enc)
  let res = []

  for (const file of files) {
    const stat = fs.lstatSync(path.join(fullDirPath, file))

    if (stat.isDirectory()) {
      res = [
        ...res,
        ...readDirRecirsively(rootDir, path.join(subDir, file))
      ]
    }
    else {
      res.push(path.join(subDir, file))
    }
  }

  return res
}