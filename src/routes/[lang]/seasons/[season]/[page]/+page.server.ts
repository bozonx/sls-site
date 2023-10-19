// import fs from 'node:fs/promises'
// import type {EntryGenerator} from './$types'
// import {SUPPORTED_LANGS} from '$lib/constants';
// import path from 'path';
// import {FILE_ENCODE, BLOG_DIR} from '$lib/constants';
// import {ROOT_DIR} from '$lib/server/constants.server';
//
//
// export const entries: EntryGenerator = async () => {
//   const res: {lang: string, season: string, page: string}[] = []
//
//   for (const lang of SUPPORTED_LANGS) {
//     const blogsPath = path.resolve(
//       ROOT_DIR,
//       `texts/${lang}/${BLOG_DIR}`
//     )
//     const seasons = await fs.readdir(blogsPath, FILE_ENCODE)
//
//     for (const season of seasons) {
//
//       // TODO: pages
//
//       res.push({ lang, season, page: '1' })
//     }
//   }
//
//   return res
// };
