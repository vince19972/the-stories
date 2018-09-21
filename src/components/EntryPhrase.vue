<template>
  <router-link :to="'/' + title" class="wrapper">
    <h1 class="title">{{ title }}</h1>
  </router-link>
</template>

<script>
export default {
  name: 'entry-phrase',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="postcss" scoped>
  @import '_variables';

  .title {
    font-family: var(--f-default);
    font-size: 120px;
    color: var(--c-f-default);
    transition: 1s;

    &:hover {
      color: var(--c-highlight);
      transition: .5s;
    }
  }
</style>
