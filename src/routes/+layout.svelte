<script lang="ts">
  import { onMount, setContext } from 'svelte';
  import { Drawer, CloseButton } from 'flowbite-svelte';
  import { writable } from 'svelte/store';
  import { sineIn } from 'svelte/easing';
  import "../app.postcss";
  import "../styles/styles.css";
  import { page } from '$app/stores';
  import {t} from '$lib/store/t'
  import {ALL_TAGS_CONTEXT, SUPPORTED_LANGS_CONTEXT} from '$lib/constants';
  import TopBar from './TopBar.svelte'
  import SideBar from "./SideBar.svelte";
  import Footer from './Footer.svelte'

  export let data: {
    allTags: string[]
    supportedLangs: string[]
    translates: Record<string, any>
  }

  const supportedLangs = writable()
  const allTags = writable()

  $: supportedLangs.set(data.supportedLangs)
  $: allTags.set(data.allTags)

  setContext(SUPPORTED_LANGS_CONTEXT, supportedLangs)
  setContext(ALL_TAGS_CONTEXT, allTags)




  /////////

  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };
  let breakPoint: number = 1024;
  let windowWidth: number;
  let showBackdrop: boolean = false
  let activateClickOutside = true;
  let drawerHidden: boolean = false;

  $: if (windowWidth >= breakPoint) {
    drawerHidden = false
    activateClickOutside = false
  } else {
    drawerHidden = true
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
    <TopBar toggleDrawer={toggleDrawer} />
  </header>

  <Drawer
    transitionType="fly"
    backdrop={showBackdrop}
    {transitionParams}
    bind:hidden={drawerHidden}
    bind:activateClickOutside
    width="w-64"
    class="overflow-auto !p-0 pb-32 bg-gray-50"
    id="sidebar"
  >
    <SideBar allTags={$allTags} />
  </Drawer>

  <div class="flex px-4 sm:px-8 mx-auto w-full">
    <main class="lg:ml-72 w-full mx-auto flex justify-center">

      <div id="app-page" class="mt-10">
        <slot />

        <div class="mt-24 mb-6">
          <Footer />
        </div>
      </div>

    </main>
  </div>

</div>
