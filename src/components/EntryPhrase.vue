<template>
  <router-link :to="'/' + title" :class="['title', keyTitle]">
    {{ title }}
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
  },
  computed: {
    keyTitle () {
      return this.title
    }
  }
}
</script>

<style lang="postcss" scoped>
  @import '_variables';

  .title {
    display: block;
    font-family: var(--f-default);
    font-size: 6.5vw;
    color: var(--c-f-default);
    transition: color 1s;

    &:hover {
      color: var(--c-highlight);
      transition: color .5s;
    }

    @media(--below-desktop) {
      font-size: 18vw;
      line-height: 21vw;

      &.cares {
        margin-bottom: -2.5vw;
      }
    }
  }
</style>
