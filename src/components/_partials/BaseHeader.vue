<template>
  <nav v-if="isHome">
    <div class="container">
      <router-link to="/" class="link">THE STORIES</router-link>
    </div>
  </nav>
  <nav v-else class="-not-home">
    <div class="container">
      <div class="nav-left">
        <router-link to="/" class="link">THE STORIES</router-link>
      </div>
      <div class="nav-right">
        <router-link
          v-for="route in navEmotions"
          :key="route.id"
          :to="route"
          class="sublink"
        >
        {{ route }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'base-header',
  data () {
    return {
      currentRoute: '/',
      isHome: true,
      emotions: ['angers', 'cares', 'fears'],
      navEmotions: []
    }
  },
  watch: {
    '$route' (to, from) {
      const currentRoute = this.$route.name
      // detect is home or not
      this.isHome = currentRoute === 'home'

      // change nav sublinks
      this.navEmotions = this.emotions.filter(emotion => emotion !== currentRoute)
    }
  }
}
</script>

<style scoped>
  @import '_variables';

  nav {
    width: 100vw;
    height: var(--header-height);

    & .container {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  nav.-not-home {
    & .container {
      justify-content: space-between;
    }
  }

  .link {
    font-size: var(--fs-default);
    letter-spacing: var(--letter-space-default);
  }
  .sublink {
    font-size: calc(var(--fs-default) - 3px);
    letter-spacing: var(--letter-space-default);
    margin-right: var(--gutter);
    opacity: 0.8;
    transition: .3s;

    &:hover {
      opacity: 1;
      transition: .3s;
    }
    &:last-child {
      margin-right: 0;
    }
  }
</style>
