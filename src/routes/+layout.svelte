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
  import ToTheTop from '$lib/components/layout/ToTheTop.svelte'
  import {t} from '$lib/store/t'
  import { pwaInfo } from 'virtual:pwa-info'


  $: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : ''

  export let data: {
    allTags: string[]
    translates: Record<string, any>
  }

  const allTags = writable()

  $: allTags.set(data.allTags)

  setContext(ALL_TAGS_CONTEXT, allTags)


  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };
  let breakPoint: number = 1024;
  let windowWidth: number;
  let windowHeight: number;
  let scrollY: number;
  let breakPointReached = false
  let showBackdrop: boolean = false
  let activateClickOutside = true;
  let drawerHidden: boolean = false;

  $: if (windowWidth >= breakPoint) {
    drawerHidden = false
    breakPointReached = false
    activateClickOutside = false
    showBackdrop = false
  } else {
    drawerHidden = true
    breakPointReached = true
    activateClickOutside = true
    showBackdrop = true
  }
  $: activeUrl = $page.url.pathname

  const toggleDrawer = () => {
    drawerHidden = !drawerHidden
  };

  const closeDrawer = () => {
    if (!breakPointReached) return

    drawerHidden = true
  }

  onMount(() => {
    if (windowWidth >= breakPoint) {
      drawerHidden = false;
      breakPointReached = false
      activateClickOutside = false;
      showBackdrop = false;
    } else {
      drawerHidden = true;
      breakPointReached = true
      activateClickOutside = true;
      showBackdrop = true;
    }
  })
</script>

<svelte:head>
  {@html webManifestLink}
</svelte:head>

<svelte:window
  bind:innerWidth={windowWidth}
  bind:innerHeight={windowHeight}
  bind:scrollY={scrollY}
/>

<div class="min-h-screen dark:bg-gray-900 text-gray-900 dark:text-gray-200 text-lg">
  <header>
    <TopBar {toggleDrawer} {breakPointReached} />
  </header>

  <Drawer
    transitionType={(breakPointReached) ? undefined : "fly"}
    backdrop={showBackdrop}
    transitionParams={(breakPointReached) ? transitionParams : undefined}
    bind:hidden={drawerHidden}
    bind:activateClickOutside
    position={(breakPointReached) ? "fixed" : "absolute"}
    width={(breakPointReached) ? 'w-80' : 'w-72'}
    class="max-lg:overflow-y-auto lg:h-fit flex flex-wrap !p-0 bg-gray-50 box-content border-r border-gray-100 dark:border-black"
    id="sidebar"
  >
    <div>
      <SideBar allTags={$allTags || []} {closeDrawer} />
    </div>
    <div class="pt-5 pb-3 w-full flex items-end lg:hidden">
      <SidebarFooter on:langSelect={closeDrawer} />
    </div>
  </Drawer>

  {#if scrollY > windowHeight / 2}
    <div class="bottom-0 fixed mb-8 ml-4 max-lg:hidden">
      <span on:click={() => scrollY = 0}>
        <ToTheTop />
      </span>
    </div>
  {/if}

  <div class="flex px-4 sm:px-8 mx-auto w-full">
    <main class="lg:ml-72 w-full mx-auto flex justify-center">

      <div id="app-page" class="mt-4">
        <div class="lg:hidden mb-12 text-center text-2xl text-gray-600 dark:text-gray-300">
          {$t('chunks.projectFullName')}
        </div>

        <slot />

        <div class="mt-24 mb-8">
          <Footer />
        </div>
      </div>

    </main>
  </div>

</div>
