<script>
  import { page } from '$app/stores';
  import {
    Sidebar,
    SidebarGroup,
    SidebarItem,
    SidebarWrapper,
    SidebarDropdownWrapper,
    SidebarDropdownItem
  } from 'flowbite-svelte';
  import {
    HomeSolid,
    InfoCircleSolid,
    HeartSolid,
    TagSolid,
    YoutubeSolid,
    RectangleListSolid,
    ChevronDoubleUpOutline,
    ChevronDoubleDownOutline,
  } from 'flowbite-svelte-icons';
  import {lang} from '$lib/store/lang';


  //let spanClass = 'flex-1 ml-3 whitespace-nowrap';
  $: activeUrl = $page.url.pathname;

  let spanClass = 'pl-2 self-center text-md text-gray-900 whitespace-nowrap dark:text-white';
</script>

<div class="bg-white flex items-center pt-5 pb-6 pl-7 mb-4">
  <img src="/images/site_logo.svg" class="h-16" alt="Logo" />
  <div
    class="ml-7 text-xl font-semibold"
  >Система<br />Личной<br />Свободы</div>
</div>


<Sidebar {activeUrl} class="">
  <SidebarWrapper class="!p-0">
    <SidebarGroup>

      <SidebarItem label="Последние" href={`/${$lang}/recent`}>
        <svelte:fragment slot="icon">
          <RectangleListSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>

      <SidebarDropdownWrapper label="Тэги" isOpen={true}>
        <svelte:fragment slot="icon">
          <TagSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
        <svelte:fragment slot="arrowup">
          <ChevronDoubleUpOutline class="w-3 h-3" />
        </svelte:fragment>
        <svelte:fragment slot="arrowdown">
          <ChevronDoubleDownOutline class="w-3 h-3" />
        </svelte:fragment>

        <SidebarDropdownItem label="Tag1" href={`/${$lang}/tag/tag1`} />
      </SidebarDropdownWrapper>

    </SidebarGroup>

    <SidebarGroup>
      <SidebarItem label="Главная" href="/">
        <svelte:fragment slot="icon">
          <HomeSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>

      <SidebarItem label="О проекте" href={`/${$lang}/page/about`}>
        <svelte:fragment slot="icon">
          <InfoCircleSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>

      <SidebarItem label="Донат" href={`/${$lang}/page/donate`}>
        <svelte:fragment slot="icon">
          <HeartSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
    </SidebarGroup>

    <SidebarGroup>
      <SidebarItem
        label="Youtube channel"
        href="https://youtube.com/@slsfreedom"
        target="_blank"
      >
        <svelte:fragment slot="icon">
          <YoutubeSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
    </SidebarGroup>

    <SidebarGroup>
      <SidebarItem
        label="Telegram channel"
        href="https://t.me/slsfreedom"
        target="_blank"
      >
        <svelte:fragment slot="icon">
          <YoutubeSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
    </SidebarGroup>

  </SidebarWrapper>
</Sidebar>
