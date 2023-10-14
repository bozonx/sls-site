<script lang="ts">
  import { Heading } from 'flowbite-svelte';
  import type {PageMetaData} from "$lib/types/PageMetaData";
  import Article from '$lib/components/Article.svelte'
  import PagesList from '$lib/components/PagesList.svelte'
  import {t} from '$lib/store/t'
  import {page} from '$app/stores';

  export let data: {meta: PageMetaData, html: string}
</script>

<svelte:head>
  <title>{data.page.meta.title} | {$t('chunks.projectFullName')}</title>
  <meta name="description" content={data.page.meta.descr} />
</svelte:head>

<secion>
  <Article
    showAuthor={true}
    showDescr={true}
    season={data.page.meta.name.split('/')[0]}
    {...data.page.meta}
    html={data.page.html}
  />
</secion>

<secion>
  <PagesList class="mt-20" baseUrl={`/${$page.params.lang}/blog`} res={data.similar}>
    {$t('header.similar')}
  </PagesList>
</secion>
