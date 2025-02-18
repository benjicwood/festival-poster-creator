<template>
  <div class="download-four-day">
    <BandGrid />
    <!-- <SidePanel /> -->
  </div>
</template>

<script>
import BandGrid from "./BandGrid.vue"
import SidePanel from "./SidePanel.vue";

export default {
  name: 'DownloadThreeDays',
  components: {
    BandGrid,
    SidePanel,
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped style="scss">

.download-four-day {
  background-color: #233140;
  background-image: url(../assets/download2026.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top left;
  min-height: 1000px;
  display: flex;
  min-width: 709px;
  }

</style>
