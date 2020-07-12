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
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap');
:root {
  --primary: #00BFA6;
  --secondary: #9B9B9B;
  --font-family: 'Noto Sans TC', sans-serif;
}
*,*::before,*::after {
  box-sizing: border-box;
}
#app {
  background-color: var(--primary);
  font-family: var(--font-family);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
