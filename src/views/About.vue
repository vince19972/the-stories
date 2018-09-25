<template>
  <div class="container">
    <div class="-wrapper-s">
      <div class="content-margin">
        <div class="paragraph">
          <p>You can tell someone else’s story; you can tell the story of a group that you’re a part of; and you can use technology to put a story online to reach those who would be otherwise physically unreachable, all of which we’ve done here today.  These are powerful tools, but we have to be careful what seeds that we plant.  Seeds of division will grow division; seeds of community will grow community.</p>
          <p>We know that overcoming our fears is most important, not just simply their existence.  We have to get under the surface of what makes us different and zoom in on those qualities which make us all human, while seeking to maintain the uniqueness and importance of each of our struggles.  We should amplify voices that have been silenced and seek to relate to the common elements that make us all the same.  This is our difficult and worthy charge.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style lang="postcss" scoped>
  @import '_variables';

  .paragraph {
    font-size: var(--fs-default);
    line-height: 40px;

    & p {
      margin-bottom: 48px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
