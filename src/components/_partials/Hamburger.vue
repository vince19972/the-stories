<template>
  <button class="ham" @click="openMenu">
    <svg width="37px" height="15px" viewBox="0 0 37 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch -->
        <title>Group</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="header" transform="translate(-1289.000000, -41.000000)" fill="#F5F5F5" fill-rule="nonzero">
                <g id="Group" transform="translate(1290.000000, 42.000000)">
                    <polygon id="Line-2" points="-0.826732673 1.5 -0.826732673 -0.5 35.8336627 -0.5 35.8336627 1.5"></polygon>
                    <polygon id="Line-2-Copy" points="-0.826732673 7.5 -0.826732673 5.5 35.8336627 5.5 35.8336627 7.5"></polygon>
                    <polygon id="Line-2-Copy-2" points="-0.826732673 13.5 -0.826732673 11.5 35.8336627 11.5 35.8336627 13.5"></polygon>
                </g>
            </g>
        </g>
    </svg>
  </button>
</template>

<script>
export default {
  name: 'hamburger',
  beforeDestroy () {
    this.$store.state.menuOpen = false
  },
  methods: {
    openMenu () {
      this.$store.state.menuOpen = true
    }
  }
}
</script>

<style scoped>
  @import '_variables';

  button svg {
    @media(--below-tablet) { width: 28px; }
    @media(--below-mobile) { width: 24px; }
  }

  button:hover g {
    opacity: 1;
    transition: .3s;
  }

  g {
    opacity: 0.9;
    transition: .3s;
  }
</style>
