<template>
  <DownloadFourDays msg="Welcome to Your Vue.js App"/>
</template>

<script>
import DownloadFourDays from './components/DownloadFourDays'

export default {
  name: 'App',
  components: {
    DownloadFourDays
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
body {
  margin: 0 !important;
}
</style>
