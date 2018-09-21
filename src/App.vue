<template>
  <div id="app">
    <base-header></base-header>
    <router-view></router-view>
  </div>
</template>

<script>
import BaseHeader from '@/components/_partials/BaseHeader.vue'

export default {
  data () {
    return {
      test: 'test'
    }
  },
  components: {
    BaseHeader
  }
}
</script>

<style lang="postcss">
@import '_reset';
@import '_variables';
@import 'main';
@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700');
</style>
