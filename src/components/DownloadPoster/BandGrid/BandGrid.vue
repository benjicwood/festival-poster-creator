<template>
  <div class="poster-content">
    <!-- Friday -->
    <DayGrid
      day="Friday"
      slug="dayOne"
      :bands="days.dayOne"
      @open="openModal"
      :alwaysHighlight="alwaysHighlight"
    />

    <!-- Saturday -->
    <DayGrid
      day="Saturday"
      slug="dayTwo"
      :bands="days.dayTwo"
      @open="openModal"
      :alwaysHighlight="alwaysHighlight"
    />

    <!-- Sunday -->
    <DayGrid
      day="Sunday"
      slug="dayThree"
      :bands="days.dayThree"
      @open="openModal"
      :alwaysHighlight="alwaysHighlight"
    />
  </div>
  <!-- Modal -->
  <BandSelectModal
    v-show="isModalVisible"
    @selected="onSelect"
    @size="onResize"
    @close="closeModal"
    :title="modalTitle"
    :position="modalPosition"
    :key="key ? key.toString() : ''"
    :hasBand="activeBand"
    :currentBand="currentBand"
    :currentImage="currentImage"
  />
</template>

<script>
import DayGrid from "./DayGrid.vue";
import BandSelectModal from "../../BandSelectModal/BandSelectModal.vue";

export default {
  name: "BandGrid",
  props: {
    alwaysHighlight: { type: Boolean, default: false },
  },
  components: { DayGrid, BandSelectModal },
  data() {
    return {
      isModalVisible: false,
      modalTitle: "",
      modalPosition: null,
      modalSlug: null,
      key: 0,
      activeBand: null,

      // ✅ Nested "days" structure
      days: {
        dayOne: this.makeDay(),
        dayTwo: this.makeDay(),
        dayThree: this.makeDay(),
      },
    };
  },
  computed: {
    currentBand() {
      return this.days[this.modalSlug]?.[this.modalPosition]?.band ?? "";
    },
    currentImage() {
      return (
        this.days[this.modalSlug]?.[this.modalPosition]?.chosenImage ?? null
      );
    },
  },
  methods: {
    // reusable "day" template with 4 stages
    makeDay() {
      return {
        headliner: { band: "", size: "", chosenImage: null },
        secondRow: Array.from({ length: 3 }, () => ({
          band: "",
          size: "",
          chosenImage: null,
        })),
        thirdRow: Array.from({ length: 2 }, () => ({
          band: "",
          size: "",
          chosenImage: null,
        })),
        fourthRow: Array.from({ length: 1 }, () => ({
          band: "",
          size: "",
          chosenImage: null,
        })),
        fifthRow: Array.from({ length: 1 }, () => ({
          band: "",
          size: "",
          chosenImage: null,
        })),
      };
    },
    openModal({ slug, position, title }) {
      this.modalSlug = slug;
      this.modalPosition = position;
      this.modalTitle = `${title}:`;
      this.key = `${slug}-${position}`;
      const slot = this.getSlot(slug, position);
      this.activeBand = !!slot.band;
      this.isModalVisible = true;
    },
    onSelect(selected) {
      const slot = this.getSlot(this.modalSlug, this.modalPosition);

      if (selected.custom) {
        // custom typed band name
        slot.band = selected.name; // store the raw text
        slot.chosenImage = null; // no image
      } else {
        // normal band from assets
        slot.band = selected.id ?? "";
        slot.chosenImage = selected.chosenImage;
      }
    },
    onResize(size) {
      const slot = this.getSlot(this.modalSlug, this.modalPosition);
      slot.size = `${size}-band-logo`;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    getSlot(slug, position) {
      const path = position.split(".");
      let slot = this.days[slug];
      for (const key of path) {
        slot = slot[key];
      }
      return slot;
    },
  },
};
</script>

<style scoped lang="scss">
@use "../../../assets/scss/styles.scss";

.poster-content {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* change for number of days */
  gap: 0.5%;
  width: 100%;
  height: 100%;
  padding-top: 25%; /* aligns headliner with artwork */
  padding-bottom: 5%;
  padding-left: 2%;
  padding-right: 2%;
  box-sizing: border-box;
  border: 3px solid white;
}
</style>