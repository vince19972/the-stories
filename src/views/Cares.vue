<template>
  <div class="container">
    <v-touch
      @swipeleft="updateCount('prev', carousel.current_id)"
      @swiperight="updateCount('next', carousel.current_id)"
    >
      <button class="arrow -left" @click="updateCount('prev', carousel.current_id)">
        <img src="../assets/icon-arrow.svg" alt="arrow-left">
      </button>
      <div class="carousel">
        <div
          v-for="(story, index) in stories" :key="story.id"
          :class="['carousel__item', {'-is-active': carousel.current_id === index}]"
        >
          <p class="carousel__content">{{story}}</p>
        </div>
      </div>
      <button class="arrow -right" @click="updateCount('next', carousel.current_id)">
        <img src="../assets/icon-arrow.svg" alt="arrow-right">
      </button>
    </v-touch>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'cares',
  data () {
    return {
      carousel: {
        current_id: 0
      }
    }
  },
  created () {
    document.addEventListener('keydown', event => this.keyPressListener(event))
  },
  destroyed () {
    document.removeEventListener('keydown', this.keyPressListener)
  },
  computed: {
    ...mapState({
      storiesStore: state => state.care.stories
    }),
    stories () {
      return this.storiesStore.map(({ story }) => story)
    }
  },
  methods: {
    keyPressListener (event) {
      const currentId = this.carousel.current_id
      const keyName = event.key
      const arrows = {
        left: 'ArrowLeft',
        up: 'ArrowUp',
        right: 'ArrowRight',
        down: 'ArrowDown'
      }
      const isPrev = keyName === arrows.left || keyName === arrows.up
      const isNext = keyName === arrows.right || keyName === arrows.down

      if (isPrev) {
        this.updateCount('prev', currentId)
      } else if (isNext) {
        this.updateCount('next', currentId)
      }
    },
    updateCount (direction, currentId) {
      const carouselCount = this.stories.length
      const conditions = {
        prev_safe: currentId > 0 && direction === 'prev',
        prev_threshold: currentId === 0 && direction === 'prev',
        next_safe: currentId < carouselCount - 1 && direction === 'next'
      }
      let newCount = 0

      if (conditions.prev_safe) {
        newCount = currentId - 1
      } else if (conditions.next_safe) {
        newCount = currentId + 1
      } else if (conditions.prev_threshold) {
        newCount = carouselCount - 1
      }

      this.carousel.current_id = newCount
    }
  }
}
</script>

<style lang="postcss" scoped>
  @import '_variables';

  :root {
    --carousel-fs: 5vw;
    --carousel-fs-m: 6.5vw;
  }

  .container {
    position: relative;
  }

  .arrow {
    position: absolute;
    bottom: 50%;
    z-index: 2;
    opacity: .6;
    transition: .3s;
    padding: 16px;

    @media(--below-tablet) { opacity: 1; }

    &.-left {
      left: -5%;
      @media(--above-tablet) {
        &:hover { transform: translateX(-8px); }
      }
      @media(--below-tablet) { left: -8%; }
    }
    &.-right {
      right: -5%;
      transform: rotate(180deg);
      @media(--above-tablet) {
        &:hover { transform: rotate(180deg) translateX(-8px); }
      }
      @media(--below-tablet) { right: -8%; }
    }
    &:hover {
      opacity: 1;
      transition: .3s;
    }

    & img {
      width: 32px;

      @media(--below-tablet) { width: 24px; }
    }
  }

  .carousel {
    position: relative;
    text-align: center;
    height: calc(100vh - var(--header-height));
  }
  .carousel__item {
    position: absolute;
    top: 0;
    left: 10%;
    height: 100%;
    width: 80%;
    display: flex;
    align-items: center;
    text-align: center;

    opacity: 0;
    transition: 1s;

    &.-is-active {
      opacity: 1;
      transition: 1s;
    }
  }
  .carousel__content {
    font-size: var(--carousel-fs);
    @media(--below-tablet) { font-size: var(--carousel-fs-m); }
  }
</style>
