<script>
  import { Badge } from "flowbite-svelte"
  import {curLang} from "$lib/helpers";
  import {page} from "$app/stores";

  export let tags
</script>

<div class="space-x-1">
  {#each tags as tag}
    <Badge href={`/${curLang($page.url.pathname)}/tag?t=${tag}`} large rounded>{tag}</Badge>
  {/each}
</div>
