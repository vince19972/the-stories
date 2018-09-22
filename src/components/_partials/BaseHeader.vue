<template>
  <nav v-if="isHome">
    <div class="container">
      <router-link to="/" class="link">THE STORIES</router-link>
    </div>
  </nav>
  <nav v-else-if="isEmotionPage" class="-is-emotion-page">
    <div class="container">
      <div class="nav-left">
        <router-link to="/" class="link">THE STORIES: </router-link>
        <router-link :to="'/' + currentPage" class="link current">{{ currentPage }}</router-link>
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
  <nav v-else class="-is-emotion-page">
    <div class="container">
      <div class="nav-left">
        <router-link to="/" class="link">THE STORIES: </router-link>
        <router-link :to="'/' + currentEmotion" class="link current">{{ currentEmotion }}</router-link>
      </div>
      <div class="nav-right">
        <router-link
          v-for="route in navEmotions"
          :key="route.id"
          :to="'/' + route"
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
      isEmotionPage: false,
      isHome: true,
      currentRoute: '/',
      currentPage: '',
      currentEmotion: '',
      emotions: ['angers', 'cares', 'fears'],
      navEmotions: []
    }
  },
  watch: {
    '$route' (to, from) {
      const currentRoute = this.$route.name
      this.currentRoute = currentRoute

      // detect current page
      this.isEmotionPage = this.emotions.filter(emotion => currentRoute === emotion).length > 0
      this.isHome = currentRoute === 'home'

      // story page settings
      if (this.isEmotionPage) this.currentEmotion = currentRoute.toUpperCase()

      // change nav sublinks
      this.navEmotions = this.emotions.filter(emotion => emotion !== this.currentEmotion.toLowerCase())
      this.currentPage = this.currentRoute.toUpperCase()
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
  nav.-is-emotion-page {
    & .container {
      justify-content: space-between;
    }
  }
  .nav-left {
    & .current {
      font-weight: var(--f-bold);
    }
  }

  .link {
    font-size: var(--fs-default);
    letter-spacing: var(--letter-space-default);
    transition: .3s;

    &:hover {
      color: var(--c-bright);
      transition: .3s;
    }
  }
  .sublink {
    font-size: calc(var(--fs-default) - 3px);
    letter-spacing: var(--letter-space-default);
    margin-right: var(--gutter);
    opacity: 0.9;
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
