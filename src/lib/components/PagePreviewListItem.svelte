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
  class="mb-6 flex w-full px-5 py-5 bg-white dark:bg-gray-800 border rounded-lg border-gray-200 dark:border-gray-700"
>
  <div class="w-80">
    <Img class="w-80" src="/images/thumbs/{name.replace('/', '_')}.jpg" />
  </div>
  <div>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {title}
    </h5>
    <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">{descr}</p>

    <div class="flex">
      <div class="flex-1">
        {#if tags && tags.length}
          <TagList tags={tags} />
        {/if}
      </div>

      {#if date}
        <div class="text-sm flex items-end">{date}</div>
      {/if}
    </div>
  </div>
</a>
