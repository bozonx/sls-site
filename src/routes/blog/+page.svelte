<script lang="ts">
  export let data;
</script>

<svelte:head>
  <title>Blog page</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <h1>
		header
  </h1>

  <pre>
    text {JSON.stringify(data)}
  </pre>

</section>

<style>
/*    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 0.6;
    }

    h1 {
        width: 100%;
    }

    .welcome {
        display: block;
        position: relative;
        width: 100%;
        height: 0;
        padding: 0 0 calc(100% * 495 / 2048) 0;
    }

    .welcome img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        display: block;
    }*/
</style>
