<template>
  <div class="problemPage">
      <rounder class="top_left" :count="count"/>
      <div class="h3 problem">{{filterProblem().problem}}</div>
      <div class="container">
        <component :is="showComponent" :radioSetting="radioSet" v-model="radioVal" ref='radioCompontent'/>
        <!-- <radios :radioSetting="radioSet" v-model="radioVal"/> -->
      </div>
    <button class="btn bottom_right btn__primary" type="button" v-if="count === 10" @click="changePage" :disabled="!parseInt(this.radioVal, 10)">{{showBtnText}}</button>
    <button class="btn bottom_right btn__info" type="button" v-else @click="countActive" :disabled="!parseInt(this.radioVal, 10)">{{showBtnText}}</button>
  </div>
</template>

<script>
import rounder from './parts/rounder'
import radios from './parts/radios'

export default {
  name: 'problemPage',
  components: { rounder, 'v-radios': radios },
  data () {
    return {
      count: 1,
      radioSet: {
        size: 'xl',
        direction: 'vertical',
        optionKeyName: 'description',
        optionValName: 'fraction',
        options: []
      },
      showComponent: 'v-radios',
      radioVal: null,
      fractions: {}
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
    this.setFractionObj()
  },
  methods: {
    countActive () {
      if (this.count < 10 && parseInt(this.radioVal, 10)) {
        this.setFraction()
        this.count += 1
        this.$refs.radioCompontent.value = 0
      } else if (!parseInt(this.radioVal, 10)) this.showAlert()
    },
    changePage () {
      if (!parseInt(this.radioVal, 10)) this.showAlert()
      else {
        this.setFraction()
        this.$emit('click', this.fractions)
      }
    },
    filterProblem () {
      const index = this.datas.problemList.findIndex(
        problem => problem.id === this.datas.problemMap[this.count]
      )
      this.radioSet.options = this.datas.problemList[index].options
      return this.datas.problemList[index]
    },
    setFractionObj () {
      const vm = this
      const arr = this.datas.problemList.map(item => item.category).filter((item, index, arr) => {
        return arr.indexOf(item) === index
      })
      arr.forEach(item => {
        vm.fractions[item] = []
      })
    },
    setFraction () {
      this.fractions[this.filterProblem().category].push(this.radioVal)
      this.radioVal = null
    },
    showAlert () {
      this.$swal.fire({
        icon: 'error',
        title: '請選擇一個項目'
      })
    }
  },
  watch: {
  },
  computed: {
    showBtnText () {
      return this.count <= 9 ? '下一題' : '看結果'
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin blockCenter() {
  display: inline-block;
  text-align: center;
}
@mixin btn-reset {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  outline: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }
}
.btn {
  @include btn-reset;
  width: 50%;
  padding: 0.8rem 1rem;
  border-top-left-radius: 10px;
  &__primary {
    background: var(--primary);
    border-color: var(--primary);
    color: #fff;
    &:not(:disabled):hover {
      background: var(--primary_hover);
      border-color: var(--primary_hover);
    }
    &:disabled {
      opacity: 0.65;
    }
  }
  &__info {
    background: var(--info);
    border-color: var(--info);
    color: #fff;
    &:not(:disabled):hover {
      background: var(--info_hover);
      border-color: var(--info_hover);
    }
    &:disabled {
      opacity: 0.65;
    }
  }
}
.problemPage {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  .top_left {
    position: absolute;
    top: 0;
    left: 0;
  }
  .bottom_right {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .problem {
    flex-basis: 50%;
    @include blockCenter;
    padding: 0 7%;
    &.h3 {
      font-size: 2rem;
    }
  }
  .container {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
}

// transition

</style>
