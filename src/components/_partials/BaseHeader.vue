<template>
  <nav>
    <div class="container">
      <transition name="fade">
        <div v-if="isHome" key="home" class="wrapper">
          <router-link to="/" class="link">THE STORIES</router-link>
        </div>
        <div v-else-if="isEmotionPage" key="emotion" class="wrapper -is-emotion-page">
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
        <div v-else key="story" class="wrapper -is-emotion-page">
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
      </transition>
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
  .wrapper {
    width: 100%;
  }
  .-is-emotion-page {
    display: flex;
    align-items: center;
    justify-content: space-between;
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

  .fade-enter-active {
    transition: all .8s ease-out;
  }
  .fade-leave-active {
    display: none;
    transition: all .1s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
