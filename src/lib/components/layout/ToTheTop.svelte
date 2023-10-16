<script>
  import {ArrowUpSolid} from 'flowbite-svelte-icons';
  import { fade } from 'svelte/transition';
  import {t} from '$lib/store/t'

</script>

<a
  transition:fade={{ delay: 0, duration: 300 }}
  class="flex gap-x-2 px-2 py-2 cursor-pointer text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
>
  <ArrowUpSolid />
  {$t('chunks.toTheTop')}
</a>
