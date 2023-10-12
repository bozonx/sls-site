<script lang="ts">
  import type {PageMetaData} from "$lib/types/PageMetaData";
  import TagList from '$lib/components/TagList.svelte'
  import Article from '$lib/components/Article.svelte'

  export let data: {meta: PageMetaData, html: string};
</script>

<svelte:head>
  <title>Blog page</title>
  <meta name="description" content={data.meta.descr} />
</svelte:head>

<Article {...data.meta} html={data.html} />
