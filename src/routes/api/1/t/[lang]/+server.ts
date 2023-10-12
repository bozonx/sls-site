import { error } from '@sveltejs/kit';
import fs from 'node:fs/promises';
import yaml from 'yaml';
import {ROOT_DIR} from '$lib/server/constants.server';
import {SUPPORTED_LANGS} from '../../../../../lib/constants';


export const prerender = true


export async function GET(event) {
  const langStr = event.params.lang

  if (!SUPPORTED_LANGS.includes(langStr)) {
    throw error(404, 'Lang not found')
  }

  const locYml = await fs.readFile(
      `${ROOT_DIR}/texts/${langStr}/${langStr}.yaml`,
      'utf8'
  )
  const loc = yaml.parse(locYml)

  return new Response(JSON.stringify({result: loc}));
}
