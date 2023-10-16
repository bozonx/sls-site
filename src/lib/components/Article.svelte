<script>
  import {Heading} from 'flowbite-svelte';
  import TagList from "$lib/components/TagList.svelte";
  import PostCommentLink from "$lib/components/PostCommentLink.svelte";
  import PostAuthor from "$lib/components/PostAuthor.svelte";
  import PodcastSelect from "$lib/components/PodcastSelect.svelte";
  import VideoLink from "$lib/components/VideoLink.svelte";
  import { page } from '$app/stores'
  import {t} from '$lib/store/t'


  export let name
  export let title
  export let html
  export let date = null
  export let dateLocal = null
  export let tags = []
  export let commentUrl = null
  export let videoLink = null
  export let podcasts = null
  export let descr = null
  export let showAuthor = false
  export let showDescr = false
  export let season = null
</script>

<div>
  <Heading tag="h1" class="text-4xl max-md:text-2xl mb-5">
    {title}
  </Heading>

  {#if dateLocal || season}
    <div class="mt-2">
      <span class="text-gray-400 dark:text-gray-500 text-sm">{dateLocal}</span>
      <span class="text-sm ml-5">
        (<a class="underline" href={`/${$page.params.lang}/seasons/${season}/1`}>
          {$t('chunks.season')} {season.replace(/\-/, ' - ')}</a>)
      </span>
    </div>
  {/if}

  {#if videoLink || podcasts}
    <div class="flex space-x-3 mt-4">
      {#if videoLink}
        <VideoLink href={videoLink} />
      {/if}
      {#if podcasts}
        <PodcastSelect {podcasts} />
      {/if}
    </div>
  {/if}

  {#if descr && showDescr}
    <div class="mt-10 italic">
      {descr}
    </div>
  {/if}

  <div class="mt-8 html-block">
    {@html html}
  </div>

  {#if showAuthor}
    <div class="mt-10">
      <PostAuthor />
    </div>
  {/if}

  {#if commentUrl}
    <div class="mt-24">
      <PostCommentLink href={commentUrl}  />
    </div>
  {/if}

  {#if tags && tags.length}
  <div class="mt-6">
    <TagList tags={tags} />
  </div>
  {/if}
</div>
