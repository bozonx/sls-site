import {deepGet} from 'squidlet-lib';
import { writable, get } from 'svelte/store';

export const tStore = writable({})

export const t = (tPath: string) => {

  console.log(222, get(tStore), deepGet(get(tStore), tPath, tPath))

  return deepGet(get(tStore), tPath, tPath)
}
