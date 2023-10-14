<script>
  import {Heading} from 'flowbite-svelte';
  import TagList from "$lib/components/TagList.svelte";
  import PostCommentLink from "$lib/components/PostCommentLink.svelte";
  import PostAuthor from "$lib/components/PostAuthor.svelte";
  import PodcastSelect from "$lib/components/PodcastSelect.svelte";
  import VideoLink from "$lib/components/VideoLink.svelte";
  import { page } from '$app/stores'
  import {t} from '$lib/store/t'


  export let title
  export let html
  export let date = null
  export let tags = []
  export let commentUrl = null
  export let videoLink = null
  export let descr = null
  export let showAuthor = false
  export let showDescr = false
  export let season = null
</script>

<div>
  <Heading tag="h1">
    {title}
  </Heading>

  {#if date || season}
    <div class="mt-2">
      <span class="text-gray-400 dark:text-gray-500 text-sm">{date}</span>
      <span class="text-sm ml-5">
        (<a class="underline" href={`/${$page.params.lang}/seasons/${season}/1`}>
          {$t('chunks.season')} {season.replace(/\-/, ' - ')}</a>)
      </span>
    </div>
  {/if}

  {#if videoLink}
    <div class="flex space-x-5 mt-4">
      {#if videoLink}
        <VideoLink href={videoLink} />
      {/if}
      <PodcastSelect />
    </div>
  {/if}

  {#if descr && showDescr}
    <div class="mt-7">
      {descr}
    </div>
  {/if}

  <div class="mt-2 html-block">
    {@html html}
  </div>

  {#if showAuthor}
    <div class="mt-10">
      <PostAuthor />
    </div>
  {/if}

  {#if commentUrl}
    <div class="mt-10">
      <PostCommentLink href={commentUrl}  />
    </div>
  {/if}

  {#if tags && tags.length}
  <div class="mt-10">
    <TagList tags={tags} />
  </div>
  {/if}
</div>
