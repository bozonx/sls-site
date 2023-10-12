<script lang="ts">
  import type {PageMetaData} from "$lib/types/PageMetaData";
  import PagePreviewListItem from '$lib/components/PagePreviewListItem.svelte'
  import {page} from "$app/stores";
  import {
    Card,
  } from 'flowbite-svelte';

  export let res

  /*

    $: activeUrl = $page?.url.searchParams.get('page');
    let pages = [
      { name: 1, href: '/components/pagination?page=1' },
      { name: 2, href: '/components/pagination?page=2' },
      { name: 3, href: '/components/pagination?page=3' },
      { name: 4, href: '/components/pagination?page=4' },
      { name: 5, href: '/components/pagination?page=5' }
    ];

    $: {
      pages.forEach((page) => {
        let splitUrl = page.href.split('?');
        let queryString = splitUrl.slice(1).join('?');
        const hrefParams = new URLSearchParams(queryString);
        let hrefValue = hrefParams.get('page');
        if (hrefValue === activeUrl) {
          page.active = true;
        } else {
          page.active = false;
        }
      });
      pages = pages;
    }

    const previous = () => {
      alert('Previous btn clicked. Make a call to your server to fetch data.');
    };
    const next = () => {
      alert('Next btn clicked. Make a call to your server to fetch data.');
    };*/
</script>

<div>
  {#each res.result as item}
    <PagePreviewListItem {...item} />
  {/each}
</div>

<!--
<Pagination {pages} on:previous={previous} on:next={next} />
-->
