<script>
  import {Button} from "flowbite-svelte"
  import {page} from "$app/stores";

  export let tags = []

  let className = ''

  export { className as class }
</script>

<div class="flex flex-wrap gap-x-1 gap-y-1 {className}">
  {#each tags as tag}
    <Button
      href={`/${$page.params.lang}/tags/${tag}`}
      pill
      size="sm"
      color={($page.url.pathname.startsWith(`/${$page.params.lang}/tags/${tag}`)) ? 'purple' : 'blue'}
      class="py-1 px-4"
    >{tag}</Button>
  {/each}
</div>
