<script>
  import {Heading} from 'flowbite-svelte';
  import TagList from "$lib/components/TagList.svelte";
  import PostCommentLink from "$lib/components/PostCommentLink.svelte";
  import PostAuthor from "$lib/components/PostAuthor.svelte";
  import PodcastSelect from "$lib/components/PodcastSelect.svelte";
  import VideoLink from "$lib/components/VideoLink.svelte";
  import RenderHtml from "$lib/components/RenderHtml.svelte";
  import { page } from '$app/stores'
  import {t} from '$lib/store/t'


  export let title
  export let html
  export let dateLocal = null
  export let tags = {}
  export let commentUrl = null
  export let videoLink = null
  export let podcasts = null
  export let descr = null
  export let showAuthor = false
  export let showDescr = false
  export let season = null
</script>

<article>
  <Heading tag="h1" class="text-4xl max-md:text-2xl mb-5 tracking-tight">
    {title}
  </Heading>

  {#if dateLocal || season}
    <div class="mt-2">
      {#if dateLocal}
        <span class="text-sm text-gray-400 dark:text-gray-500">{dateLocal}</span>
      {/if}
      {#if season}
        <span class="text-sm ml-5">
          (<a class="underline" href={`/${$page.params.lang}/seasons/${season}/1`}>
            {$t('chunks.season')} {season.replace(/\-/, ' - ')}</a>)
        </span>
      {/if}
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

  <RenderHtml class="mt-8" {html} />

  {#if showAuthor}
    <div class="mt-10">
      <PostAuthor />
    </div>
  {/if}

  {#if commentUrl}
    <div class="mt-24">
      <PostCommentLink href={commentUrl} />
    </div>
  {/if}

  {#if Object.keys(tags || {}).length}
    <TagList tags={tags} class="mt-6" />
  {/if}
</article>
