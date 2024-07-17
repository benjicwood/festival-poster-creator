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
  name: 'DownloadFourDays',
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
  background-color: #6b1780;
  background-image: url(../assets/download2025.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top left;
  min-height: 1000px;
  display: flex;
  min-width: 709px;
  }

</style>
