<script>
  import {Heading, P, A, Img, Card} from 'flowbite-svelte';
  import {page} from "$app/stores";
  import TagList from "$lib/components/TagList.svelte";
  //import {pathTrimExt} from 'squidlet-lib';


  export let name
  export let title
  export let date = null
  export let thumb = ''
  export let tags = []
  export let descr
  export let baseUrl
</script>

<Card href={`${baseUrl}/${name}`} class="mb-2" size="lg">
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
</Card>
