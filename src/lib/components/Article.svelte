<script>
  import {Heading} from 'flowbite-svelte';
  import TagList from "$lib/components/TagList.svelte";
  import PostCommentLink from "$lib/components/PostCommentLink.svelte";
  import PostAuthor from "$lib/components/PostAuthor.svelte";

  export let title
  export let html
  export let date = null
  export let tags = []
  export let commentUrl = null
  export let descr = null
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

  {#if descr}
    <div class="mt-6">
      {descr}
    </div>
  {/if}

  <div class="mt-2 html-block">
    {@html html}
  </div>

  <div class="mt-10">
    <PostAuthor />
  </div>

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
