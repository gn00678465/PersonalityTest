<template>
  <div class="problemPage">
    <rounder class="top_left" :count="count"/>
  </div>
</template>

<script>
import rounder from './parts/rounder'

export default {
  name: 'problemPage',
  components: { rounder },
  data () {
    return {
      count: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.problemPage {
  position: relative;
  .top_left {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
