import child_process from 'node:child_process'
import path from "path";


const MAX_ARTICLE_WIDTH = 720
const THUMB_WIDTH = 320


export async function convertPageImagesSync(rootPath) {
  const inputPath = path.join(rootPath, 'texts/ru/blog/2023-1/how-does-a-person-get-into-the-system/010article.avif')
  const articleOutputPath = path.join(rootPath, 'static/images/pages/how-does-a-person-get-into-the-system_010article.jpg')
  const thumbOutputPath = path.join(rootPath, 'static/images/thumbs/how-does-a-person-get-into-the-system_010article.jpg')
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
