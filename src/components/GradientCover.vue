<template>
  <div class="cover"></div>
</template>

<script>
export default {
  name: 'gradientCover'
}
</script>

<style lang="postcss" scoped>
  @import '_variables';

  .cover {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(to bottom, transparent 0%, rgba(189,189,189,0) 60%, var(--c-default) 100%);
    pointer-events: none;
  }

</style>
