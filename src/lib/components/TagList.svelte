<script>
  import { Badge } from "flowbite-svelte"

  export let tags
</script>

<div>
  {#each tags as tag}
    <Badge large rounded>{tag}</Badge>
  {/each}
</div>
