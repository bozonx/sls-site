<script>
  import PagesList from '$lib/components/PagesList.svelte'
  import {page} from "$app/stores";
  import {t} from '$lib/store/t'

  export let data
</script>

<svelte:head>
  <title>{$t('link.recent')}</title>
  <meta name="description" content={$t('descr.recent')} />
</svelte:head>

<PagesList header={$t('link.recent')} baseUrl={`/${$page.params.lang}/blog`} res={data} />
