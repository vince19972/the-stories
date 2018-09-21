<template>
  <div id="app">
    <base-header></base-header>
    <router-view></router-view>
  </div>
</template>

<script>
import BaseHeader from '@/components/_partials/BaseHeader.vue'

export default {
  components: {
    BaseHeader
  }
}
</script>

<style lang="postcss">
@import '_reset';
@import '_variables';
@import 'main';
</style>
