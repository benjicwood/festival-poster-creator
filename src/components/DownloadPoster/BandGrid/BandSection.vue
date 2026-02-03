<template>
  <div :class="[position, size, 'band-slot', { 'always-highlight': alwaysHighlight }]" :style="bandStyle" @click="$emit('click')">
    <span v-if="!bandStyle.backgroundImage && band" class="band-text">{{ band }}</span>
  </div>
</template>

<script>
import { bands } from "@benjicwood/artist-assets";

export default {
  name: "BandSection",
  props: {
    band: String,
    position: String,
    size: String,
    chosenImage: String,
    alwaysHighlight: { type: Boolean, default: false },
  },
  computed: {
    bandData() {
      return bands.find((b) => b.id === this.band) || null;
    },
    bandStyle() {
      const img = this.chosenImage || this.bandData?.logo;
      if (img) {
        return {
          backgroundImage: `url(${img})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        };
      }
      return {};
    },
  },
};
</script>

<style scoped lang="scss">
.mainstage-headliner {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 25%;
  color: white;
  font-family: 'PT Sans Narrow', sans-serif;
  font-weight: 700;
  text-align: center;
  border: 1px solid transparent;
}

.mainstage-headliner:hover {
    border: solid #C67D0E 1px;
}

.main-sub {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  // height: 50px;
  height: 15%;
  color: white;
  font-family: 'PT Sans Narrow', sans-serif;
  font-weight: 700;
  text-align: center;
  border: 1px solid transparent;
}

.main-sub:hover {
    border: solid #C67D0E 1px;
}

.second-stage {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  // height: 50px;
  height: 30%;
  color: white;
  font-family: 'PT Sans Narrow', sans-serif;
  font-weight: 700;
  text-align: center;
  border: 1px solid transparent;
}

.second-stage.smaller {
  height: 15%;
}

.second-stage:hover {
    border: solid #C67D0E 1px;
}

.main-third {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 38px;
  color: white;
  font-family: 'PT Sans Narrow', sans-serif;
  font-weight: 700;
  text-align: center;
  border: 1px solid transparent;
}

.third-stage {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 35%;
  color: white;
  font-family: 'PT Sans Narrow', sans-serif;
  font-weight: 700;
  text-align: center;
  border: 1px solid transparent;
}

.third-stage:hover {
    border: solid #C67D0E 1px;
}

.fourth-stage {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 35%;
  color: white;
  font-family: 'PT Sans Narrow', sans-serif;
  font-weight: 700;
  text-align: center;
  border: 1px solid transparent;
}

.fourth-stage:hover {
    border: solid #C67D0E 1px;
}


.second-sub {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 35px;
  color: white;
  font-family: 'PT Sans Narrow', sans-serif;
  font-weight: 700;
  text-align: center;
  border: 1px solid transparent;
}

.fourth-headliner {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 40px;
  color: white;
  font-family: 'PT Sans Narrow', sans-serif;
  font-weight: 700;
  text-align: center;
  border: 1px solid transparent;
}

.band-slot {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center; // handles multi-word names
}

.band-text {
  color: white; // festival poster default
  font-family: 'Impact', sans-serif;
  line-height: 1.1;
  word-break: break-word;
  max-width: 90%; // stops text overflowing
  font-size: clamp(0.8rem, 4vw, 2rem);
}

.always-highlight {
  border: solid #C67D0E 1px !important;
}
</style>
