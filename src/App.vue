<template>
  <DownloadThreeDays msg="Welcome to Your Vue.js App"/>
  <Footer />
  <MobileWarning />
</template>

<script>
import DownloadThreeDays from './components/DownloadThreeDays'
import Footer from './components/Footer'
import MobileWarning from './components/MobileWarning'

export default {
  name: 'App',
  components: {
    DownloadThreeDays,
    Footer,
    MobileWarning,
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
