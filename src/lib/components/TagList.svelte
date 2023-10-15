<script>
  import {Button} from "flowbite-svelte"
  import {page} from "$app/stores";

  export let tags = []

  let className = ''

  export { className as class }

  const isActive = (tag) => {
    return decodeURI($page.url.pathname)
      .startsWith(`/${$page.params.lang}/tags/${tag}`)
  }
</script>

<div class="flex flex-wrap gap-x-1 gap-y-1 {className}">
  {#each tags as tag}
    {#key `${$page.url.pathname} ${tag}`}
      <Button
        href={`/${$page.params.lang}/tags/${tag}`}
        pill
        size="sm"
        color={(isActive(tag)) ? 'purple' : 'blue'}
        class="py-1 px-4"
      >{tag}</Button>
    {/key}
  {/each}
</div>
