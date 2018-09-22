<template>
  <div class="container">
    <div class="carousel">
      <div
        v-for="(story, index) in stories" :key="story.id"
        :class="['carousel__item', {'-is-active': carousel.current_id === index}]"
      >
        <p class="carousel__content">{{story}}</p>
      </div>
    </div>
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
    document.addEventListener('keydown', event => {
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
        this.carousel.current_id = this.updateCount('prev', currentId)
      } else if (isNext) {
        this.carousel.current_id = this.updateCount('next', currentId)
      }
    })
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
    updateCount (direction, currentId) {
      const carouselCount = this.stories.length
      const conditions = {
        prev_safe: currentId > 0 && direction === 'prev',
        prev_threshold: currentId === 0 && direction === 'prev',
        next_safe: currentId < carouselCount - 1 && direction === 'next'
      }

      if (conditions.prev_safe) {
        return currentId - 1
      } else if (conditions.next_safe) {
        return currentId + 1
      } else if (conditions.prev_threshold) {
        return carouselCount - 1
      }
      return 0
    }
  }
}
</script>

<style lang="postcss" scoped>
  @import '_variables';

  :root {
    --carousel-fs: 64px;
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
    transition: .3s;

    &.-is-active {
      opacity: 1;
      transition: .3s;
    }
  }

  .carousel__content {
    font-size: var(--carousel-fs);
  }
</style>
