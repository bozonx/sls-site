<script>
  import {PODCAST_ICONS_FILE_NAMES} from "../constants";

  export let icon

  let className = ''

  export { className as class }

  let fileName

  $: fileName = PODCAST_ICONS_FILE_NAMES[icon]
</script>

<img class={className} src={`/images/podcasts/${fileName}.svg`} alt="{icon} podcast service icon" />
