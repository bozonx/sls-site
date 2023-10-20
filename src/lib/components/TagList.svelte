<script>
import {Button} from "flowbite-svelte"
import {page} from "$app/stores";
import { createEventDispatcher } from 'svelte';


const dispatch = createEventDispatcher()
let className = ''
const isActive = (tag) => {
  return decodeURI($page.url.pathname)
    .startsWith(`/${$page.params.lang}/tags/${tag}`)
}

export let tags = []
export { className as class }
</script>

<div class="flex flex-wrap gap-x-1 gap-y-1 {className}">
  {#each tags as tag}
    {#key `${$page.url.pathname} ${tag}`}
      <Button
        on:click={() => dispatch('selected')}
        href={`/${$page.params.lang}/tags/${tag}/1`}
        pill
        size="sm"
        color={(isActive(tag)) ? 'purple' : 'blue'}
        class="py-1 px-4"
      >{tag}</Button>
    {/key}
  {/each}
</div>
