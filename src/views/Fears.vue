<template>
  <v-touch
    @pan="scrollEvent()"
    @swipe="scrollEvent()"
  >
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
  </v-touch>
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
    document.getElementsByTagName('body')[0].addEventListener('mousewheel', event => this.scrollEvent(event))
  },
  beforeDestroy () {
    const body = document.getElementsByTagName('body')[0]
    body.removeEventListener('mousewheel', this.scrollEvent)
    body.style.backgroundColor = 'black'
    this.$store.state.isUnity = false
  },
  computed: {
    ...mapState({
      phrasesStore: state => state.fear.phrases,
      isUnity: state => state.isUnity
    })
  },
  methods: {
    test (text) {
      alert(text)
    },
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
      // const isDown = event.deltaY >= 0
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
    },
    scrollEvent (event) {
      console.log(event)
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
    font-size: 2.5vw;
    line-height: 3vw;
    margin-right: 1.5vw;
    transition: 1.5s;

    @media(--below-desktop) {
      font-size: 3vw;
      line-height: 4vw;
      margin-right: 2vw;
    }
    @media(--below-tablet) {
      font-size: 3.5vw;
      line-height: 5vw;
      margin-right: 2.5vw;
    }
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
