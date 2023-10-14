<script>
  import PagesList from '$lib/components/PagesList.svelte'
  import {page} from "$app/stores";
  import {t} from '$lib/store/t'

  export let data
</script>

<svelte:head>
  <title>{$t('header.tag')} #{$page.params.tag} | {$t('chunks.projectFullName')}</title>
  <meta name="description" content={`${$t('descr.tag')} #${$page.params.tag}`} />
</svelte:head>

<PagesList header={`${$t('header.tag')} #${$page.params.tag}`} baseUrl={`/${$page.params.lang}/blog`} res={data} />
