<script lang="ts">
  import "../app.postcss";
  import { SvelteUIProvider } from '@svelteuidev/core'
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  //import { _ } from 'svelte-i18n'
  import { t } from 'svelte-intl-precompile'
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
  import BreadCrumbs from './BreadCrumbs.svelte'
  import "../styles/styles.css";


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

<SvelteUIProvider withnormalizecss withglobalstyles themeobserver="dark" class="min-h-screen dark:bg-gray-900">

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

    <SideBar />
  </Drawer>

  <div class="flex px-4 sm:px-8 mx-auto w-full">
    <main class="lg:ml-72 w-full mx-auto flex justify-center">

      <div id="app-page">
        <!--<BreadCrumbs />-->

        <div class="dark:text-gray-900"> {$t('test')}</div>

        <div class="text-gray-900 dark:text-gray-200 text-lg mt-10">
          <slot />
        </div>

        <div id="footer">
          <Footer />
        </div>
      </div>

    </main>
  </div>

</SvelteUIProvider>
