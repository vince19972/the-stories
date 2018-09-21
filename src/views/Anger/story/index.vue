<template>
  <div class="container">
    <div class="content-margin">
      <div class="wrapper">
        <h3 class="category">{{ fmtCategory }}</h3>
        <h1 class="title">test</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'anger-story',
  data () {
    return {
      category: ''
    }
  },
  created () {
    this.category = this.$route.params.stories
  },
  computed: {
    fmtCategory () {
      return this.category.replace('-', ' ').toUpperCase()
    }
  }
}
</script>

<style lang="postcss" scoped>
  @import '_variables';

</style>
