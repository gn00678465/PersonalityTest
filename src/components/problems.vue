<template>
  <div class="problemPage">
    <rounder class="top_left" :count="count"/>
    {{filterProblem()}}
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
  },
  props: {
    datas: {
      type: Object,
      required: true
    }
  },
  mounted () {
    this.filterProblem()
  },
  methods: {
    filterProblem () {
      if (this.count >= 10) return
      return this.datas.problemList.filter(problem => problem.id === this.datas.problemMap[this.count])
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
