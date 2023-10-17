<script>
  import { Heading, Alert } from 'flowbite-svelte';
  import { pickObj } from 'squidlet-lib';
  import {error} from '@sveltejs/kit';
  import {page} from "$app/stores";
  import PagePreviewListItem from '$lib/components/PagePreviewListItem.svelte'
  import Pagination from '$lib/components/Pagination.svelte'
  import PageHeader from '$lib/components/PageHeader.svelte'
  import {PAGINATION_MAX_ITEMS} from '$lib/constants'
  import {t} from '$lib/store/t'

  export let res
  export let baseUrl

  let className = ''

  export { className as class }

  let paginationBaseUrl

  $: paginationBaseUrl = $page.url.pathname.replace(/\/\d+$/, '')
</script>

<div class="{className}">
  <PageHeader><slot /></PageHeader>

  {#if res.page === 1 && !res.result.length}
    <Alert color="dark">{$t('messages.emptyList')}</Alert>
  {:else if res.page <= 0 || res.page > res.totalPages}
    <Alert color="red">
      <span>{$t('messages.wrongPage')}</span>
      <a href={paginationBaseUrl} class="underline">{$t('chunks.listBeginning')}</a>
    </Alert>
  {:else}
    <div>
      {#each res.result as item}
        <PagePreviewListItem
          baseUrl={baseUrl}
          {...pickObj(item, 'name', 'title', 'dateLocal', 'tags', 'descr', 'noPicture')}
        />
      {/each}
    </div>

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
