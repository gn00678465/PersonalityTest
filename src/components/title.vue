<template>
  <div class="titlePage">
    <div class="main">
      <h1 class="title">{{datas.zh}}</h1>
      <h2 class="subtitle">{{datas.en}}</h2>
    </div>
    <p class="descript">{{datas.description}}</p>
    <btn @click.native="emitClick"/>
  </div>
</template>

<script>
import btn from './parts/btn.vue'

export default {
  name: 'titlePage',
  components: {
    btn
  },
  props: {
    datas: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  methods: {
    emitClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
$fzList: 2.2rem, 1.5rem, 1.2rem;

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.titlePage {
  width: 100%;
  height: 100%;
  padding: 2.5rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: nth($fzList, 1);
  }
  .subtitle {
    font-size: nth($fzList, 2);
    color: #ddd;
  }
  .descript {
    line-height: 2;
    font-size: nth($fzList, 3);
    padding: 0 nth($fzList, 3);
    &::first-letter {
      margin-left: nth($fzList, 3) * 2;
      font-size: nth($fzList, 2);
      font-weight: 600;
    }
  }
}
</style>
