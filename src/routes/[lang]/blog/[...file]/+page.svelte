<script lang="ts">
  import type {PageMetaData} from "$lib/types/PageMetaData";
  import Article from '$lib/components/Article.svelte'
  import {invalidate} from '$app/navigation';
  import {get} from 'svelte/store';

  export let data: {meta: PageMetaData, html: string}

  //const myCustomVariable = app.customVariables.myCustomVariable;

  // invalidate((url) => {
  //   console.log(url)
  //
  //   url.href.includes('/' + get(lang))
  // });
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<Article
  title={data.meta.title}
  date={data.meta.date}
  html={data.html}
  tags={data.meta.tags}
/>
