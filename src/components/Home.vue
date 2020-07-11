<template>
  <div class="home">
    <transition>
      <component :is="nowIs" :datas="nowProps" @click.native="countPlus"/>
    </transition>
  </div>
</template>

<script>
import { url, getAPIData, title } from '@/assets/api.js'
import titlePage from './title.vue'
import problensPage from './problems.vue'

export default {
  name: 'HelloWorld',
  components: {
    titlePage,
    problensPage
    // finalPage
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
    changeComponents () {
      const order = { 1: titlePage, 2: problensPage }
      this.nowIs = order[this.count]
    }
  },
  watch: {
    count () {
      this.changeComponents()
    }
  },
  computed: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home {
  max-width: 800px;
  width: 800px;
  height: 400px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 1px 5px 10px 1px rgba(0, 0, 0, 0.5),
    5px 15px 15px 6px rgba(0, 0, 0, 0.2);
  background: #fff;
}
</style>
