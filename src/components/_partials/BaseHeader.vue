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

      console.log(this.$route)

      // detect current page
      this.isEmotionPage = this.emotions.filter(emotion => currentRoute === emotion).length > 0
      this.isHome = currentRoute === 'home'

      console.log(this.isHome)

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

  :root {
    --logo-size: 1.5vw;
    --logo-size-m: 2.5vw;
    --logo-size-s: 3vw;
  }

  nav {
    width: 100vw;
    height: var(--header-height);

    & .container {
      height: 100%;
      display: flex;
      align-items: center;
    }

    @media(--below-mobile) { height: var(--header-height-mobile); }
  }
  .wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(--below-desktop) { justify-content: flex-start; }
  }
  .-is-emotion-page {
    justify-content: space-between;
  }
  .nav-left {
    & .current { font-weight: var(--f-bold); }
  }

  .link {
    font-size: var(--logo-size);
    letter-spacing: var(--letter-space-default);
    transition: .3s;

    &:hover {
      color: var(--c-bright);
      transition: .3s;
    }

    @media(--below-desktop) { font-size: var(--logo-size-m); }
    @media(--below-tablet) { font-size: var(--logo-size-s); }
  }
  .sublink {
    font-size: var(--logo-size);
    letter-spacing: var(--letter-space-default);
    margin-right: var(--gutter);
    opacity: 0.9;
    transition: .3s;

    &:hover {
      opacity: 1;
      transition: .3s;
    }
    &:last-child { margin-right: 0; }

    @media(--below-desktop) { font-size: var(--logo-size-m); }
    @media(--below-tablet) {
      font-size: var(--logo-size-s);
      margin-right: 8px;
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
