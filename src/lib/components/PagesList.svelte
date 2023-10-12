<script>
  import { Heading, Alert } from 'flowbite-svelte';
  import {error} from '@sveltejs/kit';
  import {page} from "$app/stores";
  import PagePreviewListItem from '$lib/components/PagePreviewListItem.svelte'
  import Pagination from '$lib/components/Pagination.svelte'
  import {PAGINATION_MAX_ITEMS} from '$lib/constants'

  export let header
  export let res
  export let baseUrl


  const paginationBaseUrl = $page.url.pathname.replace(/\/\d+$/, '')


  // TODO: translate

</script>

<div>
  <Heading tag="h1" class="mb-10">{header}</Heading>

  {#if res.page <= 0 || res.page > res.totalPages}
    <Alert color="red">
      <span>Wrong page. Go to </span>
      <a href={paginationBaseUrl} class="underline">list beginning</a>
    </Alert>
  {:else if !res.result.length && res.totalPages <= 1}
    <Alert color="dark">No items</Alert>
  {:else}
    {#each res.result as item}
      <PagePreviewListItem baseUrl={baseUrl} {...item} />
    {/each}

    {#if res.totalPages > 1}
      <div class="mt-14">
        <Pagination
          curPage={res.page}
          totalPages={res.totalPages}
          maxItems={PAGINATION_MAX_ITEMS}
          baseUrl={paginationBaseUrl}
        />
      </div>
    {/if}
  {/if}
</div>
