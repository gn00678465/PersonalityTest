<template>
  <div class="home">
    <button type="button" @click="nextStep"> +++ </button>
    {{getProblemMap()}}
  </div>
</template>

<script>
import { url, getAPIData, problemMap } from '@/assets/api.js'
export default {
  name: 'HelloWorld',
  props: {
  },
  data () {
    return {
      count: 1
    }
  },
  mounted () {
    this.getAPIData()
  },
  methods: {
    // API
    getAPIData () {
      this.$http.get(url).then((response) => {
        getAPIData(response.data)
      })
    },
    getProblemMap () {
      return problemMap[this.count]
    },
    // next setp
    nextStep () {
      this.count += 1
    }
  },
  watch: {},
  computed: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
