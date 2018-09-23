<template>
  <div class="container">
    <div class="content-margin -s">
      <div class="wrapper">
        <div :class="['phrases', {'-is-white': isWhite}]">
          <p v-for="phrase in phrasesStore" :key="phrase.id" class="phrase" style="opacity: 0.1;">{{ phrase }}</p>
        </div>
        <div :class="['unity-wrapper', isWhite ? '-is-show' : '-is-hidden']">
          <h1 class="unity">UNITY</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import GradientCover from '@/components/GradientCover.vue'

export default {
  name: 'fears',
  data () {
    return {
      pickedPhraseId: [],
      isWhite: false
    }
  },
  components: {
    GradientCover
  },
  mounted () {
    document.getElementsByTagName('body')[0].addEventListener('mousewheel', event => {
      // const isDown = event.deltaY >= 0
      const isFull = () => this.phrasesStore.length - this.pickedPhraseId.length <= 1
      const lightenedPercent = () => Math.floor((this.pickedPhraseId.length / this.phrasesStore.length) * 100)
      const phrases = document.getElementsByClassName('phrase')

      if (!isFull()) {
        this.updateOpacity(phrases)
        this.updateOpacity(phrases)
        this.updateOpacity(phrases)

        if (lightenedPercent() === 99) {
          this.updateBackground(lightenedPercent(), true)
          this.isWhite = true
          this.$store.state.isUnity = true
        } else {
          this.updateBackground(lightenedPercent())
        }
      }
    })
  },
  beforeDestroy () {
    document.getElementsByTagName('body')[0].removeEventListener('mousewheel')
    this.$store.state.isUnity = false
    document.getElementsByTagName('body')[0].style.backgroundColor = 'black'
  },
  computed: {
    ...mapState({
      phrasesStore: state => state.fear.phrases,
      isUnity: state => state.isUnity
    })
  },
  methods: {
    getRandomIntInclusive (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      const genNum = () => Math.floor(Math.random() * (max - min + 1)) + min
      const isDuplicated = num => this.pickedPhraseId.filter(e => e === num).length > 0
      let ranNum = genNum()

      while (isDuplicated(ranNum)) {
        ranNum = genNum()
      }

      return ranNum
    },
    updateOpacity (phrases) {
      let randomNum = this.getRandomIntInclusive(0, this.phrasesStore.length - 1)
      this.pickedPhraseId.push(randomNum)

      const pickedPhrase = phrases[randomNum]
      pickedPhrase.style.opacity = 1
    },
    updateBackground (percent, max = false) {
      const body = document.getElementsByTagName('body')[0]
      const rgbaVal = 2.55 * percent
      if (!max) {
        body.style.backgroundColor = `rgb(${rgbaVal}, ${rgbaVal}, ${rgbaVal})`
      } else {
        body.style.backgroundColor = 'white'
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
  @import '_variables';

  .wrapper {
    position: relative;
  }

  .phrases {
    display: flex;
    flex-wrap: wrap;
    max-height: calc(100vh - var(--header-height) - var(--content-margin-s));
    overflow-y: hidden;

    &.-is-white {
      & .phrase {
        color: white;
      }
    }
  }
  .phrase {
    display: inline-block;
    font-size: 2vw;
    line-height: 2.5vw;
    margin-right: 1.5vw;
    transition: 1.5s;
  }

  .unity-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &.-is-hidden {
      opacity: 0;
      pointer-events: none;
      transition: 1s;
    }
    &.-is-show {
      opacity: 1;
      pointer-events: visible;
      transition: 1s;
    }

    & .unity {
      font-size: 8vw;
      color: var(--c-default);
      margin-top: -96px;
    }
  }
</style>
