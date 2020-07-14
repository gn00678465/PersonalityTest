<template>
  <div class="finalPage" @scroll="scrollEvent">
    <!-- menu -->
    <nav class="nav" :style="{top: `${scrollTop}px`}">
      <ul class="nav__list">
        <li class="nav__item" v-for="(traite, index) in datas.traitsArr" :key="index"
        :data-order="index+1"
        :class="{order: nowTarget === traite['en']}">
          <a class="nav__link"
            :href="`#${traite['en']}`"
            :data-name="traite['en']"
            :class="{active: nowTarget === traite['en']}">
            <span class="nav__counter">{{`0${index + 1}`}}</span>
            <h3 class="nav__title">{{traite['en']}}</h3>
            <p class="nav__subtitle">{{traite['zh']}}</p>
          </a>
        </li>
      </ul>
    </nav>
    <!-- content -->
    <sections v-for="(val, key) in descriptLists" :key="key" :setKey="key" :setVal="val" />
  </div>
</template>

<script>
import sections from './parts/sections'

export default {
  name: 'finalPage',
  components: { sections },
  props: {
    datas: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      fractions: {},
      scrollTop: 0,
      nowTarget: 'openness'
    }
  },
  mount () {
  },
  methods: {
    scrollEvent (e) {
      this.scrollTop = e.target.scrollTop
      const top = e.target.offsetTop
      const arr = Array.from(this.$el.querySelectorAll('.section'))
      arr.forEach(el => {
        const elTop = el.offsetTop - top - 2
        const elBottom = elTop + el.offsetHeight
        if (elTop <= this.scrollTop && elBottom > this.scrollTop) this.nowTarget = el.id
      })
    }
  },
  computed: {
    descriptLists () {
      const prop = this.datas
      const descriptList = prop.descriptList
      Object.keys(prop.data).forEach(item => {
        descriptList[item].total = prop.data[item].reduce((prev, curr) => { return prev + curr }, 0)
      })
      return descriptList
    }
  },
  watch: {
  }
}
</script>

<style lang="scss" scoped>
// initial
h1,h3,p,li,ul {
  margin: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}

.finalPage {
  position: relative;
  height: 100%;
  overflow-x:hidden;
  overflow-y:auto;
  scroll-behavior: smooth
}
.nav {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  padding: 30px;
  &__list {
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
  }
  &__counter {
    font-size: 24px;
    transition: all 0.15s ease-out;
  }
  &__title {
    font-size: 32px;
    font-weight: 300;
    margin: 0 0 0.25em;
    width: 300px;
    height: 0;
    overflow: hidden;
    opacity: 0;
    transition: height 0.3s ease-out, opacity 0.2s ease-out;
  }
  &__subtitle {
    font-weight: 100;
    font-size: 18px;
    font-size: 18px;
    width: 300px;
    height: 0;
    overflow: hidden;
    opacity: 0;
    transition: height 0.3s ease-out, opacity 0.2s ease-out;
  }
  &__link {
    display: block;
    padding: 0;
    color: #fff;
    transition: all 0.15s ease-out;
    &:hover {
      background-color: transparent;
      padding-left: 1em
    }
    &:focus {
      background-color: transparent;
    }
  }
}
.nav__link {
  &.active {
    pointer-events: none;
    padding-left: 1em;
    &:after {
      width: 35px;
      height: 400px;
      top: 35px;
    }
    .nav__counter {
      font-size: 48px;
      display: inline-block;
      margin-right: 10px;
    }
    .nav__title {
      height: 40px;
      opacity: 1;
      overflow: visible;
      display: inline-block;
    }
    .nav__subtitle {
      height: 60px;
      opacity: 1;
      overflow: visible;
    }
  }
}
.nav__item {
  position: relative;
  transition: all 0.3s ease-out;
  height: 100%;
  &::after {
    content: '';
    display: block;
    border-left: 2px solid #fff;
    border-top: 2px solid #fff;
    height: 100%;
    width: 20px;
    position: absolute;
    left: -30px;
    top: 15px;
  }
  // &:last-child {
  //   height: 50%;
  //   &::after {
  //     border-left: none;
  //   }
  // }
}
.order {
  order: -1;
}
</style>
