<script lang="ts">
  import PagesList from '$lib/components/PagesList.svelte'

  export let data
</script>

<svelte:head>
  <title>Blog page</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<PagesList res={data} />
