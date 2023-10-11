import {deepGet} from 'squidlet-lib';
import { writable } from 'svelte/store';

export const tStore = writable({})

let tStoreVal = {}

tStore.subscribe((value) => {
  tStoreVal = value
})

export const t = (tPath: string) => {
  return deepGet(tStoreVal, tPath, tPath)
}
