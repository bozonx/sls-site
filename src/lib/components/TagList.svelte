<script>
  import { Badge } from "flowbite-svelte"
  import {page} from "$app/stores";

  export let tags

  // href={`/${curLang($page.url.pathname)}/tag?t=${tag}`}
</script>

<span class="space-x-1">
  {#each tags as tag}
    <Badge  large rounded>{tag}</Badge>
  {/each}
</span>
