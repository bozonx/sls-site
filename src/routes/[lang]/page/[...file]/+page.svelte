<script lang="ts">
  import {omitObj} from 'squidlet-lib'
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
  <Article {...omitObj(data.meta, 'date', 'name')} html={data.html} />
</secion>
