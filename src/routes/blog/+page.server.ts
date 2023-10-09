import { error } from '@sveltejs/kit';
import type {PageServerLoad} from './$types';
import { fileURLToPath } from 'url';
import fs from 'node:fs/promises'
import { dirname, resolve } from 'path';


// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;


export const load: PageServerLoad = async ({ params }) => {
  console.log(1111, params)

  const filename = fileURLToPath(import.meta.url);
  const myDirname = dirname(filename)
  const fullFilePath = resolve(myDirname, '../../../texts/ru/blog/test1.md')

  const content = await fs.readFile(fullFilePath, 'utf8')

  return {
    content
  }

  // const post = await getPostFromDatabase(params.slug);
  //
  // if (post) {
  //   return post;
  // }
  //
  // throw error(404, 'Not found');
}
