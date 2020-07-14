<template>
  <section :id="setKey" class="section">
    <p class="dsec">{{setVal.desc}}</p>
    <ul class="list">
      <li :class="{score: degree === 'high', middle: degree === 'middle'}">高：{{setVal.high}}</li>
      <li :class="{score: degree === 'middle'}">中：{{setVal.middle}}</li>
      <li :class="{score: degree === 'low', middle: degree === 'middle'}">低：{{setVal.low}}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'sections',
  props: {
    setKey: {
      type: String,
      required: true
    },
    setVal: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  },
  computed: {
    degree () {
      let degree
      if (this.setVal.total > 6) degree = 'high'
      else if (this.setVal.total < 6) degree = 'low'
      else degree = 'middle'
      return degree
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
li {
  list-style: none;
}
.section {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
  line-height: 1.5;
  color: #fff;
  font-weight: bold;
  $colors: #fff, #22A7F0, #d6ab00, #9B59B6, #03C9A9,#F64747 ;
  @for $i from 1 through length($colors) {
    &:nth-child(#{$i}) {
      background: nth($colors, $i);
    }
  }
  .dsec {
    margin: 6rem 2rem 0 11rem;
    font-weight: 200;
    font-size: 1.1rem;
    &::first-letter {
      margin-left: 1.1rem;
    }
  }
  .list {
    margin: 0 1rem 2rem 8rem;
  }
  li {
    &:nth-child(2) {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
    &::first-letter {
      margin-left: 1rem;
    }
  }
  .score {
    font-size: 1.2rem;
    font-weight: bold;
    position: relative;
    &::before {
      position: absolute;
      content: '';
      left: -0.5rem;top: 0;
      height: calc(100% + 0.5rem);
      width: 2px;
      background: #fff;
    }
    &::after {
      position: absolute;
      content: '';
      left: -0.5rem;bottom: -0.5rem;
      height: 2px;
      width: calc(100% + 0.5rem);
      background: #fff;
    }
    &::first-letter {
      margin-left: 1.2rem;
      font-size: 1.3rem;
    }
  }
  li:not(.score) {
    color: #ddd;
    font-weight: 100;
    font-size: 0.9rem;
  }
  li.middle {
    color: #fff;
    font-weight: 200;
    font-size: 1rem;
  }
}
</style>
