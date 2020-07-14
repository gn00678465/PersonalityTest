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

$primary: #007bff, darken(#007bff, 10%);
$info: #17a2b8, darken(#17a2b8, 10%);

:root {
  --primary: #{nth($primary, 1)};
  --primary_hover: #{nth($primary, 2)};
  --info: #{nth($info, 1)};
  --info_hover: #{nth($info, 2)};
  --secondary: #9B9B9B;
  --font-family: 'Noto Sans TC', sans-serif;
}
*,*::before,*::after {
  box-sizing: border-box;
}
#app {
  font-family: var(--font-family);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('./assets/paper.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
