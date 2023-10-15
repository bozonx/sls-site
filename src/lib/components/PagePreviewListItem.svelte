<script>
  import {Img} from 'flowbite-svelte';
  import {page} from "$app/stores";
  import TagList from "$lib/components/TagList.svelte";

  export let name
  export let title
  export let date = null
  export let tags = []
  export let descr
  export let baseUrl
</script>

<a
  href={`${baseUrl}/${name}`}
  class="mb-6 block px-5 py-5 bg-white dark:bg-gray-800 border rounded-lg border-gray-200 dark:border-gray-700"
>
  <h5 class="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    {title}
  </h5>
  <div class="md:flex w-full">
    <div>
      <Img
        class="w-80"
        src="/images/thumbs/{name.replace('/', '_')}.jpg"
        loading="lazy"
        alt="{title} thumbnail"
      />

      {#if date}
        <div class="mt-2 text-sm text-gray-500 dark:text-gray-400">{date}</div>
      {/if}

      {#if tags && tags.length}
        <TagList tags={tags} class="mt-2" />
      {/if}
    </div>
    <div class="md:ml-4 flex-1">
      <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">{descr}</p>
    </div>
  </div>
</a>
