<template>
  <div class="round-width">
    <div class="round" :data-count="count"></div>
  </div>
</template>

<script>
export default {
  name: 'round',
  props: {
    count: {
      type: Number,
      required: true
    }
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.round-width {
  position: relative;
  overflow: hidden;
  width: 200px;
  height: 200px;
  .round {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    top: -50%;
    left: -50%;
    background: var(--secondary);
    &::after {
      content: attr(data-count);
      position: absolute;
      right: 25%;
      bottom: 20%;
      font-size: 30px;
      color: #fff;
    }
  }
}
</style>
