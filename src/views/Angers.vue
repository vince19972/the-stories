<template>
  <div class="container">
    <div class="content-margin">
      <div class="cover"></div>
      <div class="phrases">
        <router-link
          class="phrase"
          v-for="phrase in phrases" :key="phrase.id"
          :to="'/angers/' + phraseLink(phrase)"
        >
        {{ phrase }}
        </router-link>
        <a class="phrase" v-for="phrase in phrases" :key="phrase.id">{{ phrase }}</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'angers',
  data () {
    return {
      phrases: [
        'gun control', 'corruption', 'refugee', 'trump', 'fake news', 'captalism', 'global warming', 'poverty', 'media',
        'facebook', 'poverty', 'beauracracy', 'drugs', 'racist', 'air pollution'
      ],
      phrasesLinks: []
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
    height: 100vh;
    width: 100vw;
    background: linear-gradient(to bottom, transparent 0%, rgba(189,189,189,0) 26%, var(--c-default) 100%);
    pointer-events: none;
  }
  .phrases {
    display: flex;
    flex-wrap: wrap;
  }
  .phrase {
    font-size: 96px;
    font-weight: var(--f-bold);
    color: var(--c-f-default);
    margin-bottom: 24px;
    margin-right: calc(var(--gutter)*2.2);
    &:last-child {
      margin-right: 0;
    }
  }

</style>
