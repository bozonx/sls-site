<script>
  import { Heading, P, A, Img } from 'flowbite-svelte';
  import {page} from "$app/stores";
  import TagList from "$lib/components/TagList.svelte";


  export let title
  export let html
  export let date = null
  export let tags = []
  export let descr = ''
</script>

<div>
  <Heading tag="h1">
    {title}
  </Heading>

  {#if date}
    <div class="text-gray-400 dark:text-gray-500 text-sm mt-2">
      {date}
    </div>
  {/if}

  <div class="mt-6 html-block">
    {@html html}
  </div>

<!--
  <div class="mt-10">
    Author
  </div>
-->

  {#if tags && tags.length}
  <div class="mt-10">
    <TagList tags={tags} />
  </div>
  {/if}
</div>

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
