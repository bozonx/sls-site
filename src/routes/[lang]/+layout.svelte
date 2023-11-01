<script lang="ts">
import {onMount, setContext} from 'svelte'
import {writable} from 'svelte/store'
import "../../app.postcss"
import "../../styles/styles.css"
import {page} from '$app/stores'
import {ALL_TAGS_CONTEXT} from '$lib/constants'
import SidebarFooter from '$lib/components/layout/SidebarFooter.svelte'
import TopBar from '$lib/components/layout/TopBar.svelte'
import SideBar from "$lib/components/layout/SideBar.svelte"
import Footer from '$lib/components/layout/Footer.svelte'
import ToTheTop from '$lib/components/layout/ToTheTop.svelte'
import {t} from '$lib/store/t'
//import { pwaInfo } from 'virtual:pwa-info'


//$: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : ''

export let data: {
  allTags: Record<string, number>
  translates: Record<string, any>
}

const allTags = writable()

setContext(ALL_TAGS_CONTEXT, allTags)

$: allTags.set(data.allTags)

onMount(() => {
  // TODO: rise an event
})
</script>

<!--
<svelte:head>
  {@html webManifestLink}
</svelte:head>
-->

<!--
<svelte:window
  bind:scrollY={scrollY}
/>
-->

<div class="min-h-screen lg:flex w-full dark:bg-gray-900 text-gray-900 dark:text-gray-200 text-lg">
  <!--  left col-->
  <div>
    <div
      id="app-drawer"
      class="w-80 lg:w-72 max-lg:overflow-y-auto max-lg:fixed lg:h-fit"
    >
      <div>
        <SideBar allTags={$allTags || {}} />
      </div>

      <SidebarFooter class="lg:hidden" />

      <div class="sidebar-gradient max-lg:hidden" aria-hidden="true"><div></div></div>
    </div>
  </div>
  <!-- right col-->
  <div class="flex-1">
    <header>
      <TopBar />
    </header>

    <div class="lg:flex justify-center">

      <main id="app-page" class="mt-4 px-4 sm:px-8">
        <div class="lg:hidden mb-6 text-center text-2xl text-gray-600 dark:text-gray-300">
          {$t('chunks.projectFullName')}
        </div>

        <slot />

        <div class="mt-24 pb-8">
          <Footer />
        </div>
      </main>

    </div>
  </div>

  <div class="bottom-0 fixed mb-8 ml-4 max-lg:hidden" aria-hidden="true">
    <span aria-hidden="true">
      <ToTheTop />
    </span>
  </div>

</div>
