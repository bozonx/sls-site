<script>
  import { Badge } from "flowbite-svelte"
  import {curLang} from "$lib/helpers";
  import {page} from "$app/stores";

  export let tags

  // href={`/${curLang($page.url.pathname)}/tag?t=${tag}`}
</script>

<div class="space-x-1">
  {#each tags as tag}
    <Badge  large rounded>{tag}</Badge>
  {/each}
</div>
