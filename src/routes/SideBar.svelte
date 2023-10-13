<script>
  import {
    Sidebar,
    SidebarGroup,
    SidebarItem,
    SidebarWrapper,
    SidebarDropdownWrapper,
    Badge,
    CloseButton,
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
    LayersOutline,
    CalendarMonthSolid,
    MessagesOutline,
    ForwardSolid,
  } from 'flowbite-svelte-icons';
  import { page } from '$app/stores';
  import {t} from '$lib/store/t'
  import MySidebarItem from '$lib/components/MySidebarItem.svelte'
  import SidebarSubHeader from '$lib/components/SidebarSubHeader.svelte'
  import TagList from '$lib/components/TagList.svelte'
  import LogoIcon from '$lib/components/LogoIcon.svelte'


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

<a
  href={`/${$page.params.lang}`}
  class="bg-white flex items-center pt-5 pb-6 pl-7 mb-4"
>
  <img src="/images/site_logo.svg" class="h-16" alt="Logo" />
  <div class="ml-7 text-xl font-semibold text-black">
    {$t('chunks.projectFullName')}
  </div>
</a>

<Sidebar {activeUrl} class="">
  <SidebarWrapper class="!p-0">
    <SidebarGroup>

      <MySidebarItem label={$t('link.recent')} href="/recent/1" icon={RectangleListSolid} />

      <SidebarDropdownWrapper label={$t('layout.tags')} isOpen={true}>
        <svelte:fragment slot="icon">
          <TagSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
        <svelte:fragment slot="arrowup">
          <ChevronDoubleUpOutline class="w-3 h-3" />
        </svelte:fragment>
        <svelte:fragment slot="arrowdown">
          <ChevronDoubleDownOutline class="w-3 h-3" />
        </svelte:fragment>

        <div class="ml-1">
          <TagList tags={allTags} />
        </div>
      </SidebarDropdownWrapper>

      <MySidebarItem label={$t('link.allTags')} href="/alltags" icon={LayersOutline} />
      <MySidebarItem label={$t('link.onSeasons')} href="/seasons" icon={CalendarMonthSolid} />

    </SidebarGroup>

    <SidebarGroup class="lg:hidden">
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
          <LogoIcon icon="telegram" />
        </svelte:fragment>
      </SidebarItem>

      <MySidebarItem label={$t('link.telegramChat')} href="https://t.me/slsfreedom_chat" icon={MessagesOutline} target="_blank" />
      <MySidebarItem label={$t('link.allLinks')} href="/page/links" icon={ForwardSolid} />
    </SidebarGroup>

  </SidebarWrapper>
</Sidebar>
