<template>
  <div class="container">
    <div class="main">
      <div class="main__wrapper">
        <entry-phrase title="cares"></entry-phrase>
      </div>
      <div class="main__wrapper">
        <entry-phrase title="angers"></entry-phrase>
      </div>
      <div class="main__wrapper">
        <entry-phrase title="fears"></entry-phrase>
      </div>
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

    & .main__wrapper {
      margin-top: -96px;
    }
  }
</style>
