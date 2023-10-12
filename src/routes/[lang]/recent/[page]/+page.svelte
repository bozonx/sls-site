<script lang="ts">
  import PagePreviewListItem from '$lib/components/PagePreviewListItem.svelte'

  export let data: {meta: PageMetaData, html: string}
</script>

<svelte:head>
  <title>Blog page</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
  {#each data.result as item}
    <PagePreviewListItem {...item} />
  {/each}
</div>
