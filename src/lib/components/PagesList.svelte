<script>
  import PagePreviewListItem from '$lib/components/PagePreviewListItem.svelte'
  import Pagination from '$lib/components/Pagination.svelte'
  import { Card, Heading } from 'flowbite-svelte';
  import {PAGINATION_MAX_ITEMS} from '$lib/constants'
  import {page} from "$app/stores";

  export let header
  export let res
  export let baseUrl


  const paginationBaseUrl = $page.url.pathname.replace(/\/\d+$/, '')


  // TODO: обработать если страница 0 или несуществует

</script>

<div>
  <Heading tag="h1" class="mb-10">{header}</Heading>

  {#each res.result as item}
    <PagePreviewListItem baseUrl={baseUrl} {...item} />
  {/each}

  {#if res.totalPages > 0}
    <div class="mt-14">
      <Pagination
        curPage={res.page}
        totalPages={res.totalPages}
        maxItems={PAGINATION_MAX_ITEMS}
        baseUrl={paginationBaseUrl}
      />
    </div>
  {/if}
</div>
