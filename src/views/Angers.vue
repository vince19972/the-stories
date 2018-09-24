<template>
  <div class="container">
    <div class="content-margin">
      <gradient-cover></gradient-cover>
      <div class="phrases">
        <a
          class="phrase"
          v-for="story in storyObj" :key="story.id"
          :href="[story.link ? story.link : 'javascript:void(0)']"
          target="blank"
        >
        {{ story.category }}
        </a>
        <!-- <router-link
          class="phrase"
          v-for="phrase in categories" :key="phrase.id"
          :to="'/angers/' + phraseLink(phrase)"
        >
        {{ phrase }}
        </router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import GradientCover from '@/components/GradientCover.vue'

export default {
  name: 'angers',
  components: {
    GradientCover
  },
  computed: {
    ...mapState({
      storiesStore: state => state.anger.stories
    }),
    categories () {
      return this.storiesStore.map(story => story.category.replace(/-/g, ' '))
    },
    storyObj () {
      return this.storiesStore.map(story => {
        return {
          category: story.category.replace(/-/g, ' '),
          link: story.reference ? story.reference : false
        }
      })
    }
  },
  methods: {
    phraseLink (phrase) {
      return phrase.replace(' ', '-')
    }
  }
}
</script>

<style lang="postcss" scoped>
  @import '_variables';

  .phrases {
    display: flex;
    flex-wrap: wrap;
  }
  .phrase {
    font-size: 5.5vw;
    font-weight: var(--f-bold);
    color: var(--c-f-default);
    margin-bottom: 1vw;
    margin-right: 3.5vw;
    transition: .5s;
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      color: var(--highlight);
      transition: .5s;
    }

    @media(--below-medium) { margin-bottom: 1.5vw; }
    @media(--below-desktop) {
      margin-bottom: 2vw;
      margin-right: 4.5vw;
    }
    @media(--below-tablet) { font-size: 8vw; }
    @media(--below-mobile) {
      font-size: 7vw;
      margin-bottom: 2.5vw;
    }
  }

</style>
