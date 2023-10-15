import fs from "node:fs";
import path from "path";
import child_process from 'node:child_process'
import {pathTrimExt} from 'squidlet-lib';


const MAX_ARTICLE_WIDTH = 840
const THUMB_WIDTH = 320
const filterImageRegExp = /\.(avif|jpeg|jpg|png|webp)$/i


export async function convertPageImagesSync(rootPath) {
  const textsDir = path.join(rootPath, 'texts')
  const langs = fs.readdirSync(textsDir, 'utf8')

  for (const lang of langs) {
    const blogPath = path.join(textsDir, lang, 'blog')
    const pagePath = path.join(textsDir, lang, 'page')
    const seasons = fs.readdirSync(blogPath, 'utf8')
    const pageImages = fs.readdirSync(pagePath, 'utf8')
      .filter(el => el.match(filterImageRegExp))

    for (const season of seasons) {
      const articles = fs.readdirSync(path.join(blogPath, season), 'utf8')

      for (const articleName of articles) {
        const articlePath = path.join(blogPath, season, articleName)
        const articleImages = fs.readdirSync(articlePath, 'utf8')
          .filter(el => el.match(filterImageRegExp))

        for (const fileName of articleImages) {
          convertImage(
            rootPath,
            path.join(articlePath, fileName),
            `${season}_${articleName}_${pathTrimExt(fileName)}`,
            `${season}_${articleName}`
          )
        }
      }
    }

    for (const fileName of pageImages) {
      convertImage(
        rootPath,
        path.join(pagePath, fileName),
        `page_${pathTrimExt(fileName)}`,
        `page_${pathTrimExt(fileName)}`
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
  const articleOutputPath = path.join(rootPath, `static/images/pages/${outputArticleFileName}.jpg`)
  const thumbOutputPath = path.join(rootPath, `static/images/thumbs/${outputThumbFileName}.jpg`)
  const identifyCmd = `identify ${inputPath}`
  const identifyRes = child_process.execSync(identifyCmd, {encoding: 'utf8'})
  const fullSizeString = identifyRes.split(' ')[2]
  const [width, height] = fullSizeString
    .split('x')
    .map((el) => Number(el))
  const articleWidth = (width > MAX_ARTICLE_WIDTH) ? MAX_ARTICLE_WIDTH : width
  const convertArticleCmd = `convert ${inputPath} -adaptive-resize ${articleWidth} -quality 85 ${articleOutputPath}`
  const convertThumbCmd = `convert ${inputPath} -adaptive-resize ${THUMB_WIDTH} -quality 80 ${thumbOutputPath}`

  child_process.execSync(convertArticleCmd)
  child_process.execSync(convertThumbCmd)
}