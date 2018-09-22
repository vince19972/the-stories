<template>
  <div class="container">
    <div class="content-margin">
      <div class="stories">
        <div v-for="story in fmtStory" :key="story.idHref" class="story-wrapper">
          <a :href="story.reference" class="story" target="blank"> {{ story.fmted }} </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'anger-stories',
  computed: {
    ...mapState({
      storiesStore: state => state.anger.stories
    }),
    fmtStory () {
      return this.storiesStore.map(({ story, id_href: idHref, category, reference }) => {
        // fmt story paragraph
        const splitedStr = story.slice(0, 150).split('')
        let extraCharsCount = 0
        for (let i = 0; i <= splitedStr.length; i++) {
          if (splitedStr.reverse()[i] === ' ') break
          extraCharsCount += 1
        }

        return {
          fmted: splitedStr.reverse().slice(0, (splitedStr.length - extraCharsCount)).join('') + '...',
          idHref: idHref,
          category: category,
          reference: reference
        }
      })
    }
  }
}
</script>

<style lang="postcss" scoped>
  @import '_variables';

  :root {
    --cross-x: -12%;
    --cross-y: -12%;
    --cross-x-m: -12%;
    --cross-last-y: -24%;
  }

  .content-margin {
    margin-bottom: 80px;
  }

  .stories {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media(--below-medium) { justify-content: space-around; }
    @media(--below-tablet) { justify-content: space-between; }
  }
  .story-wrapper {
    position: relative;
    width: 30%;
    max-width: 30%;
    margin-bottom: 56px;

    @media(--below-medium) {
      width: 40%;
      max-width: 40%;
    }
    @media(--below-tablet) {
      width: 70%;
      max-width: 70%;
    }
    @media(--below-mobile) {
      width: 100%;
      max-width: 100%;
    }

    &:before {
      content: url(../../assets/icon-cross.svg);
      position: absolute;
      left: var(--cross-x);
      top: var(--cross-y);
      @media(--below-tablet) { display: none; }
    }
    &:nth-last-child(-n+3) {
      & .story {
        &:before {
          content: url(../../assets/icon-cross.svg);
          position: absolute;
          left: var(--cross-x);
          bottom: var(--cross-last-y);
          @media(--below-medium) { display: none; }
        }
      }
    }
    &:nth-last-child(-n+2) {
      & .story {
        &:before {
          @media(--below-medium) {
            content: url(../../assets/icon-cross.svg);
            position: absolute;
            left: var(--cross-x);
            bottom: var(--cross-last-y);
          }
          @media(--below-tablet) { display: none; }
        }
      }
    }
    &:last-child {
      & .story {
        &:after {
          content: url(../../assets/icon-cross.svg);
          position: absolute;
          right: var(--cross-x);
          bottom: var(--cross-last-y);
          @media(--below-tablet) { display: none; }
        }
      }
    }
    &:nth-child(2n) {
      &:after {
        @media(--below-medium) {
          content: url(../../assets/icon-cross.svg);
          position: absolute;
          right: var(--cross-x);
          top: var(--cross-y);
        }
        @media(--below-tablet) {
          content: '';
          right: auto;
          top: auto;
        }
      }
    }
    &:nth-child(3n) {
      &:after {
        content: url(../../assets/icon-cross.svg);
        position: absolute;
        right: var(--cross-x);
        top: var(--cross-y);
        @media(--below-medium) {
          content: '';
          right: auto;
          top: auto;
        }
      }
    }
    &:after {
      @media(--below-tablet) {
        content: '';
        position: absolute;
        left: 0;
        bottom: -30px;
        width: 12px;
        height: 1px;
        background-color: var(--highlight);
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

    @media(--below-medium) {
      font-size: var(--fs-desktop);
      line-height: var(--line-height-desktop);
    }
  }
</style>
