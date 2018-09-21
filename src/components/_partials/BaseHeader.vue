<template>
  <nav>
    <router-link to="/" class="title">THE STORIES</router-link>
  </nav>
</template>

<script>
export default {
  name: 'base-header'
}
</script>

<style scoped>
  @import '_variables';

  nav {
    width: 100vw;
    height: var(--header-height);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    font-size: 24px;
    letter-spacing: 0.8px;
    color: var(--c-f-default);
  }
</style>
