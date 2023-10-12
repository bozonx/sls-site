<script>
  import PagesList from '$lib/components/PagesList.svelte'
  import {page} from "$app/stores";

  export let data

  // TODO: translate meta
</script>

<svelte:head>
  <title>Blog page</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<PagesList header={`#${$page.params.tag}`} res={data} />
