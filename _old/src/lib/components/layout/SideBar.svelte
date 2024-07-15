<script>
import {
  Sidebar,
  SidebarGroup,
  SidebarItem,
  SidebarWrapper,
  SidebarDropdownWrapper,
  CloseButton,
} from 'flowbite-svelte'
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
} from 'flowbite-svelte-icons'
import { page } from '$app/stores'
import {t} from '$lib/store/t'
import MySidebarItem from '$lib/components/layout/MySidebarItem.svelte'
import SidebarLogo from '$lib/components/layout/SidebarLogo.svelte'
import SidebarSubHeader from '$lib/components/layout/SidebarSubHeader.svelte'
import TagList from '$lib/components/TagList.svelte'
import LogoIcon from '$lib/components/LogoIcon.svelte'


export let allTags
</script>

<div class="flex justify-end w-full absolute lg:hidden py-2 px-1">
  <CloseButton id="sidebar-drawer-switch" class="dark:text-gray-700 dark:hover:text-gray-300" />
</div>

<SidebarLogo class="dark:mb-4" />

<Sidebar activeUrl={$page.url.pathname} class="w-auto">
  <SidebarWrapper class="!p-0 rounded-none">
    <SidebarGroup>
      <MySidebarItem label={$t('link.recent')} href="/recent/1" icon={RectangleListSolid} />

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

        <TagList class="ml-2" tags={allTags} />
      </SidebarDropdownWrapper>

      <MySidebarItem label={$t('link.allTags')} href="/tags" icon={LayersOutline} />
      <MySidebarItem label={$t('link.onSeasons')} href="/seasons" icon={CalendarMonthSolid} />
    </SidebarGroup>

    <SidebarGroup class="mt-5 lg:hidden">
      <MySidebarItem label={$t('link.home')} href="/" icon={HomeSolid} />
      <!--<MySidebarItem label={$t('link.about')} href="/page/about" icon={InfoCircleSolid} />-->
      <MySidebarItem label={$t('link.donate')} href="/page/donate" icon={HeartSolid} />
    </SidebarGroup>

    <SidebarSubHeader>{$t('layout.links')}</SidebarSubHeader>

    <SidebarGroup>
      <MySidebarItem label={$t('link.youtubeChannel')} href="https://youtube.com/@slsfreedom" icon={YoutubeSolid} />

      <SidebarItem
        label={$t('link.telegramChannel')}
        href="https://t.me/+X3brRqc3VsJkNmMy"
        class="rounded-none"
        target="_blank"
      >
        <svelte:fragment slot="icon">
          <LogoIcon icon="telegram" />
        </svelte:fragment>
      </SidebarItem>

      <MySidebarItem label={$t('link.telegramChat')} href="https://t.me/+Y6hSx-tAiN5hODFi" icon={MessagesOutline} />
      <MySidebarItem label={$t('link.allLinks')} href="/page/links" icon={ForwardSolid} />
    </SidebarGroup>

  </SidebarWrapper>
</Sidebar>
