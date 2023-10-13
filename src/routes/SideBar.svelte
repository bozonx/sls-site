<script>
  import { page } from '$app/stores';
  import {
    Sidebar,
    SidebarGroup,
    SidebarItem,
    SidebarWrapper,
    SidebarDropdownWrapper,
    SidebarDropdownItem,
    Badge, CloseButton
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
  import {t} from '$lib/store/t'
  import MySidebarItem from '$lib/components/MySidebarItem.svelte'
  import SidebarSubHeader from '$lib/components/SidebarSubHeader.svelte'


  export let allTags

  //let spanClass = 'flex-1 ml-3 whitespace-nowrap';
  $: activeUrl = $page.url.pathname;

  let spanClass = 'pl-2 self-center text-md text-gray-900 whitespace-nowrap dark:text-white';
</script>

<div class="flex items-center lg:hidden">
  <CloseButton
    on:click={() => (drawerHidden = true)}
    class="mb-4 dark:text-white"
  />
</div>

<div class="bg-white flex items-center pt-5 pb-6 pl-7 mb-4">
  <img src="/images/site_logo.svg" class="h-16" alt="Logo" />
  <div
    class="ml-7 text-xl font-semibold"
  >Система<br />Личной<br />Свободы</div>
</div>


<Sidebar {activeUrl} class="">
  <SidebarWrapper class="!p-0">
    <SidebarGroup>

      <MySidebarItem label={$t('link.recent')} href="/recent" icon={RectangleListSolid} />

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

        <SidebarItem label="all tags" href={`/${$page.params.lang}/alltags`}>
          <svelte:fragment slot="icon">
            <InfoCircleSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          </svelte:fragment>
        </SidebarItem>

        <div class="space-x-1 ml-1">
          {#each allTags as tagItem}
            <Badge
              rounded
              href={`/${$page.params.lang}/tag/${tagItem}`}
            >{tagItem}</Badge>
          {/each}
        </div>
      </SidebarDropdownWrapper>

    </SidebarGroup>

    <SidebarGroup>
      <MySidebarItem label={$t('link.home')} href="/" icon={HomeSolid} />
      <MySidebarItem label={$t('link.about')} href="/page/about" icon={InfoCircleSolid} />
      <MySidebarItem label={$t('link.donate')} href="/page/donate" icon={HeartSolid} />
    </SidebarGroup>

    <SidebarSubHeader>{$t('layout.links')}</SidebarSubHeader>

    <SidebarGroup>
      <MySidebarItem label={$t('link.youtubeChannel')} href="https://youtube.com/@slsfreedom" icon={YoutubeSolid} target="_blank" />

      <SidebarItem
        label={$t('link.telegramChannel')}
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
