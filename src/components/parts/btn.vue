<template>
  <div>
    <button type="button" class="btn" @click.prevent="emitClick">Button</button>
  </div>
</template>

<script>
export default {
  name: 'btn',
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
