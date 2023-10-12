import { error } from '@sveltejs/kit';
import fs from 'node:fs/promises';
import yaml from 'yaml';
import {ROOT_DIR} from '$lib/server/constants.server';
import {SUPPORTED_LANGS} from '$lib/constants';


export const prerender = true


export async function GET(event) {
  const langStr = event.params.lang
  let locYml

  if (!SUPPORTED_LANGS.includes(langStr)) {
    throw error(404, 'Lang not found')
  }

  try {
    locYml = await fs.readFile(
        `${ROOT_DIR}/texts/${langStr}/${langStr}.yaml`,
        'utf8'
    )
  }
  catch (e) {
    throw error(404, 'Translation not found')
  }

  const loc = yaml.parse(locYml)

  return new Response(JSON.stringify({result: loc}));
}
