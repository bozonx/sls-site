<script>
  import { Badge } from "flowbite-svelte"
  import {page} from "$app/stores";

  export let tags

</script>

<span class="space-x-1">
  {#each tags as tag}
    <Badge href={`/${$page.params.lang}/tag/${tag}`} large rounded>{tag}</Badge>
  {/each}
</span>
