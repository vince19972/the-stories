<template>
  <div>
    <vue-p5 v-on="{ setup, draw, keyPressed }"></vue-p5>
  </div>
</template>

<script>
import VueP5 from 'vue-p5'

export default {
  name: 'fears-voice',
  components: {
    VueP5
  },
  data () {
    return {
      mic: '',
      micLevel: '',
      levelMultiplier: 1000,
      pixelWhiteCount: 0,
      c: '',
      height: window.innerHeight,
      width: window.innerWidth,
      words: {
        soft: 'death',
        medium: 'violence',
        loud: 'hatred',
        fear: 'fear'
      },
      thresholds: {
        soft: {
          max: 35,
          min: 20,

        },
        medium: {
          max: 65,
          min: 35
        },
        loud: {
          max: null,
          min: 65
        }
      }
    }
  },
  methods: {
    setup (sketch) {
      this.mic = new p5.AudioIn()
      this.mic.start()
      sketch.createCanvas(window.innerWidth, window.innerHeight)
      sketch.background(0)
      sketch.textAlign('CENTER')
    },
    draw (sketch) {
      this.drawText(sketch)
      this.drawFear(sketch)
    },
    drawText (sketch) {
      this.micLevel = (this.mic.getLevel() * this.levelMultiplier)

      sketch.textFont('Libre Baskerville', 'serif')
      sketch.fill(0, 102, 153)

      const volumeLevel = this.volumeLevel(this.micLevel)

      if (volumeLevel === 'soft') {
        sketch.fill(255, 255, 255, 40)
        sketch.textSize(sketch.random((this.height * 0.015), (this.height * 0.03)))
        sketch.noStroke()
        sketch.text(this.words.soft, sketch.random(0, this.width), sketch.random(0, this.height))
        this.pixelWhiteCount++
      }

      if (volumeLevel === 'medium') {
        sketch.fill(255, 255, 255, 80)
        sketch.textSize(sketch.random((this.height * 0.03), (this.height * 0.06)))
        sketch.noStroke()
        sketch.text(this.words.medium, sketch.random(0, this.width), sketch.random(0, this.height))
        this.pixelWhiteCount++
      }

      if (volumeLevel === 'loud') {
        sketch.fill(255, 255, 255, 120)
        sketch.textSize((this.height * 0.06), (this.height * 0.09))
        sketch.noStroke()
        sketch.text(this.words.loud, sketch.random(0, this.width), sketch.random(0, this.height))
        this.pixelWhiteCount++
      }

      sketch.print(this.pixelWhiteCount)
    },
    drawFear (sketch) {
      sketch.textSize(this.pixelWhiteCount / 10)
      sketch.fill(0, 0, 0, this.pixelWhiteCount, this.pixelWhiteCount / 10)
      sketch.stroke(255, this.pixelWhiteCount / 10)
      sketch.text(this.words.fear, this.width / 2, this.height / 2)
    },
    keyPressed (sketch) {
      if (sketch.keyCode === 'UP_ARROW') {
        this.levelMultiplier += 100
      } else if (sketch.keyCode === 'DOWN_ARROW') {
        this.levelMultiplier -= 100
      }
      return false // prevent default
    },
    volumeLevel (micLevel) {
      const thresholds = this.thresholds
      if (this.micLevel < thresholds.soft.max && this.micLevel > thresholds.soft.min) {
        return 'soft'
      }
      if (this.micLevel < thresholds.medium.max && this.micLevel > thresholds.medium.min) {
        return 'medium'
      }
      if (this.micLevel > thresholds.loud.max) {
        return 'loud'
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
  @import '_variables';

  canvas {
    font-family: serif;
  }
</style>
