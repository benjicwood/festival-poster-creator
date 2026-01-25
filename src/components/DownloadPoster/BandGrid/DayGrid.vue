<template>
  <div :class="['download-band-grid', `download-band-grid-${slug}, `]">
    <!-- Headliner(s) -->
    <div class="mainstage-block">
      <BandSection
        position="mainstage-headliner"
        @click="emitOpen('headliner', `${day} Headliner`)"
        :band="bands.headliner.band"
        :size="bands.headliner.size"
        :chosenImage="bands.headliner.chosenImage"
        :alwaysHighlight="alwaysHighlight"
      />
      <!-- Main stage undercard -->
      <!-- <div class="main-stage-block"> -->
      <BandSection
        v-for="(slot, i) in bands.secondRow"
        :key="`second-${i}`"
        position="main-sub"
        @click="emitOpen(`secondRow.${i}`, `${day} Band`)"
        :band="slot.band"
        :size="slot.size"
        :chosenImage="slot.chosenImage"
        :alwaysHighlight="alwaysHighlight"
      />
      <!-- </div> -->
      <div class="mainstage-input-grid">
        <BandInput size="medium" />
        <BandInput size="medium" />
        <BandInput size="medium" />
      </div>
    </div>

    <div class="second-stage-block">
      <!-- Second stage -->
      <BandSection
        v-for="(slot, i) in bands.thirdRow"
        :key="`third-${i}`"
        :position="i === 0 ? 'second-stage' : 'second-stage smaller'"
        @click="emitOpen(`thirdRow.${i}`, `${day} Band`)"
        :band="slot.band"
        :size="slot.size"
        :chosenImage="slot.chosenImage"
        :alwaysHighlight="alwaysHighlight"
      />

      <div class="input-grid">
        <BandInput size="medium" />
        <BandInput size="small" />
        <BandInput size="small" />
        <BandInput size="small" />
      </div>
    </div>

    <div class="third-stage-block">
      <!-- third stage -->
      <BandSection
        v-for="(slot, i) in bands.fourthRow"
        :key="`fourth-${i}`"
        position="third-stage"
        @click="emitOpen(`fourthRow.${i}`, `${day} Band`)"
        :band="slot.band"
        :size="slot.size"
        :chosenImage="slot.chosenImage"
        :alwaysHighlight="alwaysHighlight"
      />

      <div class="input-grid">
        <!-- <BandInput size="medium" /> -->
        <BandInput size="small" />
        <BandInput size="small" />
        <BandInput size="small" />
      </div>
    </div>

    <div class="fourth-stage-block">
      <!-- fourth stage -->
      <BandSection
        v-for="(slot, i) in bands.fifthRow"
        :key="`fifth-${i}`"
        position="fourth-stage"
        @click="emitOpen(`fifthRow.${i}`, `${day} Band`)"
        :band="slot.band"
        :size="slot.size"
        :chosenImage="slot.chosenImage"
        :alwaysHighlight="alwaysHighlight"
      />

      <!-- Inputs (optional, could also be slotted in) -->
      <div class="input-grid">
        <BandInput size="medium" />
        <BandInput size="small" />
      </div>
    </div>
  </div>
</template>

<script>
import BandSection from "../BandGrid/BandSection.vue";
import BandInput from "../BandGrid/BandInput.vue";

export default {
  name: "DayGrid",
  components: { BandSection, BandInput },
  props: {
    day: { type: String, required: true }, // e.g. "Thursday"
    slug: { type: String, required: true }, // e.g. "dayOne"
    bands: { type: Object, required: true }, // includes headliner, coHeadliner, secondRow, thirdRow, fourthRow
    coHeadliner: { type: Boolean, default: false },
    alwaysHighlight: { type: Boolean, default: false },
  },
  emits: ["open"],
  methods: {
    emitOpen(position, title) {
      this.$emit("open", { slug: this.slug, position, title });
    },
  },
};
</script>

<style scoped lang="scss">
.download-band-grid {
  height: 100%;
  box-sizing: border-box;
}

.mainstage-block {
  display: flex;
  flex-direction: column;
  justify-content: space-between; // pushes BandInputs to the bottom
  height: 42%;
  box-sizing: border-box;
}

// .mainstage-input-grid {
//   justify-content: space-between;
// }

.second-stage-block {
  height: 27%;
}

.third-stage-block {
  height: 17%;
}

.fourth-stage-block {
  height: 14%;
}

.smallest-band-logo {
  transform: scale(0.7);
}
.smaller-band-logo {
  transform: scale(0.8);
}
.small-band-logo {
  transform: scale(0.9);
}
.normal-band-logo {
  transform: scale(1);
}
.large-band-logo {
  transform: scale(1.1);
}
.larger-band-logo {
  transform: scale(1.2);
}
.largest-band-logo {
  transform: scale(1.3);
}
</style>
