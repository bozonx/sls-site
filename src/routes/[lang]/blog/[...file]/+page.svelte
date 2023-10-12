<script lang="ts">
  import type {PageMetaData} from "$lib/types/PageMetaData";
  import Article from '$lib/components/Article.svelte'
  import {page} from "$app/stores";

  export let data: {meta: PageMetaData, html: string}
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta name="description" content={data.meta.descr} />
</svelte:head>

<Article {...data.meta} html={data.html} />
