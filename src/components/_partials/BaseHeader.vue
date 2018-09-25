<template>
  <nav :class="[isUnity ? '-is-black' : '']">
    <div class="container">
      <transition name="fade">
        <div v-if="isHome" key="home" class="wrapper -flex-between">
          <div class="nav-left">
            <router-link to="/" class="link">THE STORIES</router-link>
          </div>
          <div class="nav-right">
            <hamburger></hamburger>
          </div>
        </div>
        <div v-else-if="isEmotionPage" key="emotion" class="wrapper -flex-between">
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
            <hamburger></hamburger>
          </div>
        </div>
        <div v-else key="other" class="wrapper -flex-between">
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
            <hamburger></hamburger>
          </div>
        </div>
        <!-- <div v-else key="story" class="wrapper -flex-between">
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
        </div> -->
      </transition>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
import Hamburger from '@/components/_partials/Hamburger.vue'

export default {
  name: 'base-header',
  components: {
    Hamburger
  },
  data () {
    return {
      isEmotionPage: false,
      isHome: true,
      currentRoute: '/',
      currentPage: '',
      currentEmotion: '',
      navEmotions: [],
      isBlack: false
    }
  },
  created () {
    this.$store.watch(
      state => this.$store.state.isUnity,
      (newValue, oldValue) => {
        this.isBlack = newValue
      }
    )
  },
  computed: {
    ...mapState({
      isUnity: state => state.isUnity,
      emotions: state => state.emotions
    })
  },
  watch: {
    '$route' (to, from) {
      const currentRoute = this.$route.name
      this.currentRoute = currentRoute

      console.log(currentRoute)

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

  :root {
    --logo-size: 24px;
    --logo-size-m: 16px;
    --logo-size-s: 14px;
  }

  nav {
    width: 100vw;
    height: var(--header-height);

    &.-is-black {
      & .link,
      & .sublink {
        color: var(--c-default);
      }
    }
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
  .-flex-between {
    justify-content: space-between;
  }
  .nav-left {
    & .current { font-weight: var(--f-bold); }
  }
  .nav-right {
    display: flex;
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
    @media(--below-mobile) { font-size: var(--logo-size-s);}
  }
  .sublink {
    display: block;
    font-size: var(--logo-size);
    letter-spacing: var(--letter-space-default);
    margin-right: var(--gutter);
    opacity: 0.9;
    transition: .3s;
    margin-top: -4px;

    &:hover {
      opacity: 1;
      transition: .3s;
    }
    &:last-child { margin-right: 0; }

    @media(--below-desktop) { font-size: var(--logo-size-m); }
    @media(--below-small) { margin-right: 8px; }
    @media(--below-mobile) {
      display: none;
      font-size: var(--logo-size-s);
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
