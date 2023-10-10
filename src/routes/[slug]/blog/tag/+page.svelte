<script lang="ts">
  import type {PageMetaData} from "$lib/types/PageMetaData";
  export let data: {meta: PageMetaData, html: string};
</script>

<svelte:head>
  <title>Blog page</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
<!--  <h1>
    {data.meta.title}
  </h1>

  <div>
    {data.meta.date}
  </div>

  <div>
    {@html data.html}
  </div>

  <div>
    {data.meta.tags}
  </div>-->

</section>

<style>
</style>
