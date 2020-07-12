<template>
  <div class="home">
    <transition>
      <component :is="nowIs" :datas="nowProps" @click="countPlus"/>
    </transition>
  </div>
</template>

<script>
import { url, getAPIData, title, problemMap, problemList, descriptList } from '@/assets/api.js'
import titlePage from './title.vue'
import problensPage from './problems.vue'
import finalPage from './final'

export default {
  name: 'Home',
  components: {
    titlePage,
    problensPage,
    finalPage
  },
  data () {
    return {
      count: 1,
      nowIs: '',
      nowProps: {}
    }
  },
  created () {
    this.changeComponents()
  },
  mounted () {
    this.getAPIData()
  },
  methods: {
    // API
    getAPIData () {
      this.$http.get(url).then(response => {
        getAPIData(response.data)
        this.loadData()
      })
    },
    loadData () {
      this.$nextTick(() => {
        this.nowProps = title
      })
    },
    // components
    countPlus () {
      if (this.count >= 3) return
      this.count += 1
    },
    changeComponents (data) {
      const order = { 1: titlePage, 2: problensPage, 3: finalPage }
      this.nowIs = order[this.count]
      if (this.count === 2) { this.nowProps = { problemMap, problemList } } else if (this.count === 2) { this.nowProps = { descriptList, data } }
    }
  },
  watch: {
    count () {
      this.changeComponents()
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  max-width: 1000px;
  width: 1000px;
  height: 500px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 1px 5px 10px 1px rgba(0, 0, 0, 0.5),
    5px 15px 15px 6px rgba(0, 0, 0, 0.2);
  background: #fff;
}
</style>
