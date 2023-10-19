<script lang="ts">
  import {omitObj} from 'squidlet-lib'
  import { Heading, Alert } from 'flowbite-svelte';
  import type {PageMetaData} from "$lib/types/PageMetaData";
  import Article from '$lib/components/Article.svelte'
  import PagesList from '$lib/components/PagesList.svelte'
  import {t} from '$lib/store/t'
  import {page} from '$app/stores';

  export let data
</script>

<svelte:head>
  <title>{data.page.result.meta.title} | {$t('chunks.projectFullName')}</title>
  <meta name="description" content={data.page.result.meta.descr} />
</svelte:head>

{#if data.page.noTranslation}
  <Alert color="blue" class="mb-10">
    {$t('messages.noTranslation')}
  </Alert>
{/if}

<secion>
  <Article
    showAuthor={true}
    showDescr={true}
    season={data.page.result.meta.name.split('/')[0]}
    {...omitObj(data.page.result.meta, 'date', 'name')}
    html={data.page.result.html}
  />
</secion>

{#if data.similar.result.length}
  <secion>
    <PagesList class="mt-16" baseUrl={`/${$page.params.lang}/blog`} res={data.similar}>
      {$t('header.similar')}
    </PagesList>
  </secion>
{/if}
