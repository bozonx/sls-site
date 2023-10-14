<script lang="ts">
  import { Heading } from 'flowbite-svelte';
  import type {PageMetaData} from "$lib/types/PageMetaData";
  import Article from '$lib/components/Article.svelte'
  import {t} from '$lib/store/t'

  export let data: {meta: PageMetaData, html: string}
</script>

<svelte:head>
  <title>{data.meta.title} | {$t('chunks.projectFullName')}</title>
  <meta name="description" content={data.meta.descr} />
</svelte:head>

<secion>
  <Article
    showAuthor={true}
    showDescr={true}
    season={data.meta.name.split('/')[0]}
    {...data.meta}
    html={data.html}
  />
</secion>

<secion>
  <Heading tag="h4">{$t('similar')}</Heading>


</secion>
