<script>
import PagesList from '$lib/components/PagesList.svelte'
import {page} from "$app/stores";
import {t} from '$lib/store/t'

export let data
</script>

<svelte:head>
  <title>{$t('link.recent')} | {$t('chunks.projectFullName')}</title>
  <meta name="description" content={$t('descr.recent')} />
</svelte:head>

<secion>
  <PagesList baseUrl={`/${$page.params.lang}/blog`} res={data}>{$t('link.recent')}</PagesList>
</secion>
