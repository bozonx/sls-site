<script>
  import moment from 'moment';
  import { Heading, P, A, Img } from 'flowbite-svelte';
  import {page} from "$app/stores";
  import TagList from "$lib/components/TagList.svelte";
  import {lang} from '$lib/store/lang';


  export let title
  export let date
  export let thumb
  export let tags
  export let content


  let localeDate = moment(date).locale($lang).format('LL')
</script>

<div>
  <Heading tag="h1">
    {title}
  </Heading>

  <div class="text-gray-400 dark:text-gray-500 text-sm mt-2">
    {localeDate}
  </div>

  <div class="mt-6 html-block">
    {content}
  </div>

  {#if tags && tags.length}
  <div class="mt-10">
    <TagList tags={tags} />
  </div>
  {/if}
</div>
