<script>
  import { Alert } from 'flowbite-svelte';
  import { page } from '$app/stores';
  import {t} from '$lib/store/t'


  let message = ''

  $: {
    if ($page.error.message) {
      if ($page.status === 404) {
        message = $t('httpErrors.404')
      }
      else {
        message = $page.error.message
      }
    }
    else {
      message = $t('httpErrors.' + $page.status)
    }
  }
</script>

<Alert color="red">
  <span>{$page.status}: {message}</span>
</Alert>
