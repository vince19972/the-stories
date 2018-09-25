<template>
  <div id="app" :class="[menuOpen ? '-is-fixed' : '']">
    <base-menu></base-menu>
    <base-header></base-header>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import BaseHeader from '@/components/_partials/BaseHeader.vue'
import BaseMenu from '@/components/_partials/BaseMenu.vue'

export default {
  components: {
    BaseHeader,
    BaseMenu
  },
  data () {
    return {
      'menuOpen': false
    }
  },
  created () {
    this.$store.watch(
      state => this.$store.state.menuOpen,
      (newValue, oldValue) => {
        this.menuOpen = newValue
      }
    )
  }
}
</script>

<style lang="postcss">
@import '_reset';
@import '_variables';
@import 'main';
@import url('https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700');

.fade-enter-active {
  transition: all 1.2s ease-out;
}
.fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
