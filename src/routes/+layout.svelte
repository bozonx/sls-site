<script lang="ts">
  import "../app.postcss";
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  //import { t } from 'svelte-intl-precompile'
  import {t} from '$lib/store/t'
  import {
    DarkMode,
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    Sidebar,
    SidebarGroup,
    SidebarItem,
    SidebarWrapper,
    Drawer,
    CloseButton,
    SidebarDropdownWrapper,
  } from 'flowbite-svelte';
  import { Cog } from 'svelte-heros-v2';
  import { sineIn } from 'svelte/easing';
  import TopBar from './TopBar.svelte'
  import SideBar from "./SideBar.svelte";
  import Footer from './Footer.svelte'
  import "../styles/styles.css";
  import {tStore} from '$lib/store/t';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import {SUPPORTED_LANGS_CONTEXT, TRANSLATES_CONTEXT} from '../lib/constants';

  export let data: {
    allTags: string[],
    supportedLangs: string[],
    translates: Record<string, any>
  }


  // Create a store and update it when necessary...
  const supportedLangs = writable()
  //const translates = writable()

  $: supportedLangs.set(data.supportedLangs)
  //$: translates.set(data.translates)

  setContext(SUPPORTED_LANGS_CONTEXT, supportedLangs)
  //setContext(TRANSLATES_CONTEXT, translates)

  //tStore.set(data.translates)




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

<div class="min-h-screen dark:bg-gray-900">

  <header class="flex-none w-full mx-auto bg-white dark:bg-slate-950">
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
    <div class="flex items-center">
      <CloseButton
          on:click={() => (drawerHidden = true)}
          class="mb-4 dark:text-white lg:hidden"
      />
    </div>

    <SideBar allTags={data.allTags} />
  </Drawer>

  <div class="flex px-4 sm:px-8 mx-auto w-full">
    <main class="lg:ml-72 w-full mx-auto flex justify-center">

      <div id="app-page">

        <div class="dark:text-gray-900">
          {$page.params.lang} {$t('test.t')} {JSON.stringify(data.translates)}
        </div>

        <div class="text-gray-900 dark:text-gray-200 text-lg mt-10">
          <slot />
        </div>

        <div id="footer" class="mb-6">
          <Footer />
        </div>
      </div>

    </main>
  </div>

</div>
