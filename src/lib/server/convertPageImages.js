import fs from "node:fs";
import path from "path";
import child_process from 'node:child_process'
import {pathTrimExt, getExt, clearRelPathLeft} from 'squidlet-lib';


const FIND_MD_IMAGE_REGEX = /\!\[[^\]]*\]\(([^\)]+)\)/
const FILE_ENCODE = 'utf8'
const MAX_ARTICLE_WIDTH = 840
const THUMB_WIDTH = 320
const filterImageRegExp = /\.(avif|jpeg|jpg|png|webp)$/i
const PAGES_FULL_DIR = 'pages-full'
const PAGES_DIR = 'pages'
const THUMBS_DIR = 'thumbs'


export function convertPageImagesSync(rootPath) {
  const textsDir = path.join(rootPath, 'texts')
  const langs = fs.readdirSync(textsDir, FILE_ENCODE)

  for (const lang of langs) {
    const blogPath = path.join(textsDir, lang, 'blog')
    const pagePath = path.join(textsDir, lang, 'page')
    const seasons = fs.readdirSync(blogPath, FILE_ENCODE)
    const pageImages = fs.readdirSync(pagePath, FILE_ENCODE)
      .filter(el => el.match(filterImageRegExp))

    for (const season of seasons) {
      const articles = fs.readdirSync(path.join(blogPath, season), 'utf8')

      for (const articleName of articles) {
        const articleDirPath = path.join(blogPath, season, articleName)
        const articleFirstImageName = getFirstImageFromMd(articleDirPath)
        const articleImages = fs.readdirSync(articleDirPath, FILE_ENCODE)
          .filter(el => el.match(filterImageRegExp))

        for (const fileName of articleImages) {
          convertImage(
            rootPath,
            path.join(articleDirPath, fileName),
            `${lang}_${season}_${articleName}_${pathTrimExt(fileName)}`,
            // make only the first image thumb
            (fileName === articleFirstImageName)
              ? `${lang}_${season}_${articleName}`
              : undefined
          )
        }
      }
    }

    for (const fileName of pageImages) {
      convertImage(
        rootPath,
        path.join(pagePath, fileName),
        `${lang}_page_${pathTrimExt(fileName)}`
      )
    }
  }
}


function convertImage(
  rootPath,
  inputPath,
  outputArticleFileName,
  outputThumbFileName
) {
  const fullOutputPath = path.join(rootPath, `static/images/${PAGES_FULL_DIR}/${outputArticleFileName}.${getExt(inputPath)}`)
  const articleOutputPath = path.join(rootPath, `static/images/${PAGES_DIR}/${outputArticleFileName}.jpg`)
  const thumbOutputPath = path.join(rootPath, `static/images/${THUMBS_DIR}/${outputThumbFileName}.jpg`)
  const identifyCmd = `identify ${inputPath}`
  const identifyRes = child_process.execSync(identifyCmd, {encoding: 'utf8'})
  const fullSizeString = identifyRes.split(' ')[2]
  const [width, height] = fullSizeString
    .split('x')
    .map((el) => Number(el))
  const articleWidth = (width > MAX_ARTICLE_WIDTH) ? MAX_ARTICLE_WIDTH : width
  const fullImgCmd = `cp ${inputPath} ${fullOutputPath}`
  const convertArticleCmd = `convert ${inputPath} -adaptive-resize ${articleWidth} -quality 85 ${articleOutputPath}`
  const convertThumbCmd = `convert ${inputPath} -adaptive-resize ${THUMB_WIDTH} -quality 80 ${thumbOutputPath}`

  child_process.execSync(fullImgCmd)
  child_process.execSync(convertArticleCmd)

  if (outputThumbFileName) child_process.execSync(convertThumbCmd)
}

export function getFirstImageFromMd(articleDirPath) {
  const articlePath = `${articleDirPath}/index.md`
  const articleContent = fs.readFileSync(articlePath, FILE_ENCODE)
  const firstImgMatch = articleContent
    .match(FIND_MD_IMAGE_REGEX)

  if (!firstImgMatch?.[1]) return

  return clearRelPathLeft(firstImgMatch[1])
}
