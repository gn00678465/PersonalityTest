<template>
  <div id="app">
    <home/>
  </div>
</template>

<script>
import home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    home
  }
}
</script>

<style lang="scss">
:root {
  --bg_color: #ddd;
}
#app {
  background-color: var(--bg_color);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
