<template>
  <div :class="['base-menu', isOpen ? '-is-active' : '' ]">
    <div class="container">
      <div class="top">
        <div class="left">
          <div
            v-for="route in emotions"
            :key="route.id"
            class="link-wrapper"
            @click="closeMenu()"
          >
            <router-link
              :to="route"
              :class="['link', route]"
            >
            {{ route }}
            </router-link>
          </div>
        </div>
        <div class="right">
          <button class="close" @click="closeMenu()">
            <img src="../../assets/icon-close.svg" alt="icon-close">
          </button>
        </div>
      </div>
      <div class="btm">
        <span class="sublink-wrapper" @click="closeMenu()">
          <router-link to="about" class="sublink">ABOUT</router-link>
        </span>
        <span class="sublink-wrapper" @click="closeMenu()">
          <router-link to="team" class="sublink">TEAM</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'base-menu',
  data () {
    return {
      isOpen: false
    }
  },
  created () {
    this.$store.watch(
      state => this.$store.state.menuOpen,
      (newValue, oldValue) => {
        this.isOpen = newValue
      }
    )
  },
  computed: {
    ...mapState({
      emotions: state => state.emotions,
      menuOpen: state => state.menuOpen
    })
  },
  methods: {
    closeMenu () {
      this.$store.state.menuOpen = false
    }
  }
}
</script>

<style scoped>
  @import '_variables';

  .base-menu {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: var(--c-default);
    z-index: 10;

    opacity: 0;
    transition: .5s;
    pointer-events: none;

    & .container {
      position: relative;
      padding: 5vh 0 8vh 0;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    &.-is-active {
      opacity: 1;
      transition: .5s;
      pointer-events: visible;
    }
  }

  .close  {
    margin-top: 3vw;
    transition: .3s;

    @media(--below-tablet) { margin-top: 24px; }

    & img {
      width: 2vw;

      @media(--below-tablet) { width: 16px; }
    }
    &:hover {
      transform: rotate(90deg);
      transition: .3s;
    }
  }

  .top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 64px;

    & .left {
      display: flex;
      flex-direction: column;
    }

    & .link-wrapper {
      width: 100%
    }

    & .link {
      display: inline-block;
      font-size: 8.5vw;
      font-weight: var(--f-bold);
      transition: color 1s;

      @media(--below-tablet) { font-size: 56px; }

      &.cares {
        margin-bottom: -1.5vw;
      }

      &:hover {
        color: var(--c-highlight);
        transition: color .5s;
      }
    }
  }

  .btm {
    border-top: 1px solid var(--c-f-default);
    padding-top: 2vw;

    & .sublink {
      font-size: 1.5vw;
      margin-right: 1.5vw;

      @media(--below-tablet) {
        font-size: 12px;
        margin-right: 14px;
      }
    }
  }
</style>
