<script>
  import PagesList from '$lib/components/PagesList.svelte'
  import {page} from "$app/stores";

  export let data

  // TODO: translate meta
  // TODO: перевод header
</script>

<svelte:head>
  <title>Blog page</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<PagesList header={'Most recent'} baseUrl={`/${$page.params.lang}/blog`} res={data} />
