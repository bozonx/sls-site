<script lang="ts">
  import type {PageMetaData} from "$lib/types/PageMetaData";
  import TagList from '$lib/components/TagList.svelte'
  import Article from '$lib/components/Article.svelte'

  export let data: {meta: PageMetaData, html: string};
</script>

<svelte:head>
  <title>Blog page</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<Article
  title={data.meta.title}
  date={data.meta.date}
  html={data.html}
  tags={data.meta.tags}
/>

<style>
/*    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 0.6;
    }

    h1 {
        width: 100%;
    }

    .welcome {
        display: block;
        position: relative;
        width: 100%;
        height: 0;
        padding: 0 0 calc(100% * 495 / 2048) 0;
    }

    .welcome img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        display: block;
    }*/
</style>
