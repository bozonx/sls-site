<script>
  import {
    Sidebar,
    SidebarGroup,
    SidebarItem,
    SidebarWrapper,
    SidebarDropdownWrapper,
    CloseButton,
  } from 'flowbite-svelte';
  import {
    ChevronDoubleUpOutline,
    ChevronDoubleDownOutline,
    HomeSolid,
    HeartSolid,
    TagSolid,
    YoutubeSolid,
    RectangleListSolid,
    LayersOutline,
    CalendarMonthSolid,
    MessagesOutline,
    ForwardSolid,
  } from 'flowbite-svelte-icons';
  import { page } from '$app/stores';
  import {t} from '$lib/store/t'
  import MySidebarItem from '$lib/components/layout/MySidebarItem.svelte'
  import SidebarLogo from '$lib/components/layout/SidebarLogo.svelte'
  import SidebarSubHeader from '$lib/components/layout/SidebarSubHeader.svelte'
  import TagList from '$lib/components/TagList.svelte'
  import LogoIcon from '$lib/components/LogoIcon.svelte'

  export let allTags
  export let closeDrawer

  $: activeUrl = $page.url.pathname;
</script>

<div class="flex items-center lg:hidden">
  <CloseButton
    on:click={closeDrawer}
    class="mb-4 dark:text-white"
  />
</div>

<SidebarLogo {closeDrawer} />

<Sidebar {activeUrl} class="w-auto">
  <SidebarWrapper class="!p-0 rounded-none">
    <SidebarGroup>

      <MySidebarItem on:click={closeDrawer} label={$t('link.recent')} href="/recent/1" icon={RectangleListSolid} />

      <SidebarDropdownWrapper label={$t('layout.tags')} isOpen={true} class="rounded-none">
        <svelte:fragment slot="icon">
          <TagSolid class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
        <svelte:fragment slot="arrowup">
          <ChevronDoubleUpOutline class="w-3 h-3" />
        </svelte:fragment>
        <svelte:fragment slot="arrowdown">
          <ChevronDoubleDownOutline class="w-3 h-3" />
        </svelte:fragment>

        <TagList on:selected={closeDrawer} class="ml-2" tags={allTags} />
      </SidebarDropdownWrapper>

      <MySidebarItem on:click={closeDrawer} label={$t('link.allTags')} href="/tags" icon={LayersOutline} />
      <MySidebarItem on:click={closeDrawer} label={$t('link.onSeasons')} href="/seasons" icon={CalendarMonthSolid} />

    </SidebarGroup>

    <SidebarGroup class="mt-5 lg:hidden">
      <MySidebarItem on:click={closeDrawer} label={$t('link.home')} href="/" icon={HomeSolid} />
      <!--<MySidebarItem label={$t('link.about')} href="/page/about" icon={InfoCircleSolid} />-->
      <MySidebarItem on:click={closeDrawer} label={$t('link.donate')} href="/page/donate" icon={HeartSolid} />
    </SidebarGroup>

    <SidebarSubHeader>{$t('layout.links')}</SidebarSubHeader>

    <SidebarGroup>
      <MySidebarItem on:click={closeDrawer} label={$t('link.youtubeChannel')} href="https://youtube.com/@slsfreedom" icon={YoutubeSolid} target="_blank" />

      <SidebarItem
        on:click={closeDrawer}
        label={$t('link.telegramChannel')}
        href="https://t.me/slsfreedom"
        target="_blank"
        class="rounded-none"
      >
        <svelte:fragment slot="icon">
          <LogoIcon icon="telegram" />
        </svelte:fragment>
      </SidebarItem>

      <MySidebarItem on:click={closeDrawer} label={$t('link.telegramChat')} href="https://t.me/slsfreedom_chat" icon={MessagesOutline} target="_blank" />
      <MySidebarItem on:click={closeDrawer} label={$t('link.allLinks')} href="/page/links" icon={ForwardSolid} />
    </SidebarGroup>

  </SidebarWrapper>
</Sidebar>
