<template>
  <div class="home">
    <transition name="fade" mode="out-in">
      <component :is="nowIs" :datas="nowProps" @click="countPlus"/>
    </transition>
  </div>
</template>

<script>
import { url, getAPIData, title, problemMap, problemList, descriptList, traitsArr } from '@/assets/api.js'
import titlePage from './title.vue'
import problemsPage from './problems.vue'
import finalPage from './final'

export default {
  name: 'Home',
  components: {
    'v-titlePage': titlePage,
    'v-problemsPage': problemsPage,
    'v-finalPage': finalPage
  },
  data () {
    return {
      count: 1,
      nowIs: '',
      nowProps: {},
      fractions: {}
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
    countPlus (data) {
      if (this.count > 3) this.count = 1
      this.count += 1
      this.fractions = data
    },
    changeComponents () {
      const order = { 1: 'v-titlePage', 2: 'v-problemsPage', 3: 'v-finalPage' }
      this.nowIs = order[this.count]
      if (this.count === 2) {
        this.toProblem()
      } else if (this.count === 3) {
        this.toFinal()
      } else if (this.count > 3) {
        this.count = 1
        this.loadData()
      }
    },
    toProblem () {
      this.nowProps = { problemMap, problemList }
    },
    toFinal () {
      const data = this.fractions
      this.nowProps = { descriptList, data, traitsArr }
      this.fractions = {}
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
  background: rgba(255, 255,255, 0.9);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}

</style>
