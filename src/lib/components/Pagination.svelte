<script>
  import { Button, ButtonGroup } from "flowbite-svelte"
  import {page} from "$app/stores";

  export let curPage
  export let totalPages
  export let maxItems
  export let baseUrl

  let items = []

  $: {
    items = []

    items.push({
      name: '<',
      href: `${baseUrl}/${curPage - 1}`,
      active: false,
      disabled: curPage <= 1
    })

    // TODO: расчитать чтобы текущая была посередине и показать максимум

    for (let i = 1; i <= totalPages; i++) {
      items.push({
        name: i,
        href: `${baseUrl}/${i}`,
        active: i === curPage,
        disabled: false
      })
    }

    items.push({
      name: '>',
      href: `${baseUrl}/${curPage + 1}`,
      active: false,
      disabled: curPage === totalPages || totalPages <= 1
    })
  }

</script>

<!--<ChevronRightOutline class="w-2.5 h-2.5" />-->

<ButtonGroup >
  {#each items as item}
    {#key item.name}
      <Button
        large
        href={(item.disabled) ? null : item.href}
        disabled={item.disabled}
        color={item.active ? 'blue' : 'light'}
      >{item.name}</Button>
    {/key}
  {/each}
</ButtonGroup>
