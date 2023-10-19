import type {PageLoad} from './$types';
import {PAGE_DIR} from '$lib/constants';
import {loadJustData} from '$lib/requests';


export const load: PageLoad = async (event) => {
  const rawContent = await loadJustData(
    event,
    `/api/1/${PAGE_DIR}/${event.params.lang}/main`
  )

  return {
    result: JSON.parse(rawContent.result),
  }
}
