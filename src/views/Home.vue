<template>
  <div class="container">
    <div class="main">
      <entry-phrase title="cares"></entry-phrase>
      <entry-phrase title="angers"></entry-phrase>
      <entry-phrase title="fears"></entry-phrase>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EntryPhrase from '@/components/EntryPhrase.vue'

export default {
  name: 'home',
  components: {
    EntryPhrase
  }
}
</script>

<style lang="postcss" scoped>
  @import '_variables';

  .main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: calc(100vh - var(--header-height));
    margin-top: -4%;

    @media(--below-desktop) {
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      padding-bottom: 4%;
    }
    @media(--below-mobile) { padding-bottom: 2%; }
  }

  .copy {
    text-align: right;
  }
</style>
