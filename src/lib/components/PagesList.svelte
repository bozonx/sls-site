<script>
  import PagePreviewListItem from '$lib/components/PagePreviewListItem.svelte'
  import Pagination from '$lib/components/Pagination.svelte'
  import { ChevronLeftOutline, ChevronRightOutline } from 'flowbite-svelte-icons'
  import {page} from "$app/stores";
  import { Card } from 'flowbite-svelte';
  import { goto } from '$app/navigation';
  import {PAGINATION_MAX_ITEMS} from '$lib/constants'

  export let res

  const baseUrl = $page.url.pathname.replace(/\/\d+$/, '')
  const pages = []

  for (let i = res.page; i <= res.totalPages; i++) {
    pages.push({
      name: i,
      href: `${baseUrl}/${i}`,
      active: i === res.page
    })
  }

  // $: {
  //   pages.forEach((page) => {
  //     let splitUrl = page.href.split('?');
  //     let queryString = splitUrl.slice(1).join('?');
  //     const hrefParams = new URLSearchParams(queryString);
  //     let hrefValue = hrefParams.get('page');
  //     if (hrefValue === activeUrl) {
  //       page.active = true;
  //     } else {
  //       page.active = false;
  //     }
  //   });
  //   pages = pages;
  // }

  const previous = () => {
    goto(`${baseUrl}/${res.page - 1}`)
  }
  const next = () => {
    goto(`${baseUrl}/${res.page + 1}`)
  }


  // TODO: обработать если страница 0 или несуществует

</script>

<div>

  <pre>{JSON.stringify(res, null ,2)}</pre>

  {#each res.result as item}
    <PagePreviewListItem {...item} />
  {/each}

  {#if res.totalPages > 0}
    <div>
      <Pagination
        curPage={res.page}
        totalPages={res.totalPages}
        maxItems={PAGINATION_MAX_ITEMS}
        baseUrl={baseUrl}
      />
    </div>
  {/if}
</div>
