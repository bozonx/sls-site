<script lang="ts">
  import { onMount, setContext } from 'svelte'
  import { Drawer, CloseButton } from 'flowbite-svelte'
  import { writable } from 'svelte/store'
  import { sineIn } from 'svelte/easing'
  import "../app.postcss"
  import "../styles/styles.css"
  import { page } from '$app/stores'
  import {ALL_TAGS_CONTEXT} from '$lib/constants'
  import SidebarFooter from '$lib/components/layout/SidebarFooter.svelte'
  import TopBar from '$lib/components/layout/TopBar.svelte'
  import SideBar from "$lib/components/layout/SideBar.svelte"
  import Footer from '$lib/components/layout/Footer.svelte'

  export let data: {
    allTags: string[]
    translates: Record<string, any>
  }

  const allTags = writable()

  $: allTags.set(data.allTags)

  setContext(ALL_TAGS_CONTEXT, allTags)




  /////////

  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };
  let breakPoint: number = 1024;
  let windowWidth: number;
  let breakPointReached = false
  let showBackdrop: boolean = false
  let activateClickOutside = true;
  let drawerHidden: boolean = false;

  $: if (windowWidth >= breakPoint) {
    drawerHidden = false
    breakPointReached = false
    activateClickOutside = false
  } else {
    drawerHidden = true
    breakPointReached = true
    activateClickOutside = true
  }
  $: activeUrl = $page.url.pathname

  // const toggleSide = () => {
  //   if (windowWidth < breakPoint) {
  //     drawerHidden = !drawerHidden
  //   }
  // };
  const toggleDrawer = () => {
    //drawerHidden = false;
    drawerHidden = !drawerHidden
  };

  onMount(() => {
    if (windowWidth >= breakPoint) {
      drawerHidden = false;
      activateClickOutside = false;
    } else {
      drawerHidden = true;
      activateClickOutside = true;
    }
  })
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div class="min-h-screen dark:bg-gray-900 text-gray-900 dark:text-gray-200 text-lg">
  <header>
    <TopBar {toggleDrawer} {breakPointReached} />
  </header>

  <Drawer
    transitionType="fly"
    backdrop={showBackdrop}
    {transitionParams}
    bind:hidden={drawerHidden}
    bind:activateClickOutside
    width="w-64"
    class="overflow-auto flex flex-wrap !p-0 pb-32 bg-gray-50 box-content border-r border-gray-100 dark:border-black"
    id="sidebar"
  >
    <div>
      <SideBar allTags={$allTags} {toggleDrawer} />
    </div>
    <div class="pt-5 pb-3 w-full flex items-end lg:hidden">
      <SidebarFooter />
    </div>
  </Drawer>

  <div class="flex px-4 sm:px-8 mx-auto w-full">
    <main class="lg:ml-72 w-full mx-auto flex justify-center">

      <div id="app-page" class="mt-10">
        <slot />

        <div class="mt-24 mb-8">
          <Footer />
        </div>
      </div>

    </main>
  </div>

</div>
