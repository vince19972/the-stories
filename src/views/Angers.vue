<template>
  <div class="container">
    <div class="content-margin">
      <div class="cover"></div>
      <div class="phrases">
        <router-link
          class="phrase"
          v-for="phrase in categories" :key="phrase.id"
          :to="'/angers/' + phraseLink(phrase)"
        >
        {{ phrase }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'angers',
  computed: {
    ...mapState({
      storiesStore: state => state.anger.stories
    }),
    categories () {
      return this.storiesStore.map(story => story.category.replace('-', ' '))
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

  .cover {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(to bottom, transparent 0%, rgba(189,189,189,0) 60%, var(--c-default) 100%);
    pointer-events: none;
  }
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
