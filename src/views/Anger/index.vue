<template>
  <div class="container">
    <div class="content-margin">
      <div class="stories">
        <div v-for="story in fmtStory" :key="story.id" class="story-wrapper">
          <p class="story">{{ story }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'anger-index',
  data () {
    return {
      stories: [
        'On the night of February 26, 2012, in Sanford, Florida, United States, George Zimmerman fatally shot Trayvon Martin, a 17-year-old African American high school student. ',
        'On the night of February 26, 2012, in Sanford, Florida, United States, George Zimmerman fatally shot Trayvon Martin, a 17-year-old African American high school student. ',
        'On the night of February 26, 2012, in Sanford, Florida, United States, George Zimmerman fatally shot Trayvon Martin, a 17-year-old African American high school student. ',
        'On the night of February 26, 2012, in Sanford, Florida, United States, George Zimmerman fatally shot Trayvon Martin, a 17-year-old African American high school student. ',
        'On the night of February 26, 2012, in Sanford, Florida, United States, George Zimmerman fatally shot Trayvon Martin, a 17-year-old African American high school student. ',
        'On the night of February 26, 2012, in Sanford, Florida, United States, George Zimmerman fatally shot Trayvon Martin, a 17-year-old African American high school student. ',
        'On the night of February 26, 2012, in Sanford, Florida, United States, George Zimmerman fatally shot Trayvon Martin, a 17-year-old African American high school student. ',
        'On the night of February 26, 2012, in Sanford, Florida, United States, George Zimmerman fatally shot Trayvon Martin, a 17-year-old African American high school student. ',
        'On the night of February 26, 2012, in Sanford, Florida, United States, George Zimmerman fatally shot Trayvon Martin, a 17-year-old African American high school student. ',
        'On the night of February 26, 2012, in Sanford, Florida, United States, George Zimmerman fatally shot Trayvon Martin, a 17-year-old African American high school student. ',
        'On the night of February 26, 2012, in Sanford, Florida, United States, George Zimmerman fatally shot Trayvon Martin, a 17-year-old African American high school student. ',
        'On the night of February 26, 2012, in Sanford, Florida, United States, George Zimmerman fatally shot Trayvon Martin, a 17-year-old African American high school student. '
      ]
    }
  },
  computed: {
    fmtStory () {
      return this.stories.map(story => {
        const splitedStr = story.slice(0, 150).split('')
        let extraCharsCount = 0
        for (let i = 0; i <= splitedStr.length; i++) {
          if (splitedStr.reverse()[i] === ' ') break
          extraCharsCount += 1
        }
        return splitedStr.reverse().slice(0, (splitedStr.length - extraCharsCount)).join('') + '...'
      })
    }
  }
}
</script>

<style lang="postcss" scoped>
  @import '_variables';

  .content-margin {
    margin-bottom: 80px;
  }

  .stories {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .story-wrapper {
    position: relative;
    max-width: calc( var(--col-width) * 4);
    margin-bottom: 32px;

    &:before {
      content: url(../../assets/icon-cross.svg);
      position: absolute;
      left: calc(var(--gutter) * -3);
      top: -24px;
    }
    &:nth-child(3n) {
      &:after {
        content: url(../../assets/icon-cross.svg);
        position: absolute;
        right: calc(var(--gutter) * -3);
        top: -24px;
      }
    }
    &:nth-last-child(-n+3) {
      & .story {
        &:before {
          content: url(../../assets/icon-cross.svg);
          position: absolute;
          left: calc(var(--gutter) * -3);
          bottom: -40px;
        }
      }
    }
    &:last-child {
      & .story {
        &:after {
          content: url(../../assets/icon-cross.svg);
          position: absolute;
          right: calc(var(--gutter) * -3);
          bottom: -40px;
        }
      }
    }
  }
  .story {
    font-size: var(--fs-default);
    line-height: var(--line-height-p);
    opacity: 0.9;
    transition: .3s;

    &:hover {
      opacity: 1;
      color: var(--c-bright);
      transition: .3s;
    }
  }
</style>
