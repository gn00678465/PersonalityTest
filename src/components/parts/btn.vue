<template>
  <div>
    <button type="button" class="btn btn__primary btn__lg" @click.prevent="emitClick">{{btnText}}</button>
  </div>
</template>

<script>
export default {
  name: 'btn',
  props: {
    btnText: {
      type: String,
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
  .btn {
  display: inline-block;
  font-weight: 400;
  outline: none;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
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
  &__primary {
    background: var(--primary);
    border-color: var(--primary);
    color: #fff;
    &:hover {
      background: var(--primary_hover);
      border-color: var(--primary_hover);
    }
  }
  &__lg {
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: .3rem;
  }
}
</style>
