<template>
  <div class="modal-backdrop">
    <div
      class="modal"
      :style="{
        transform: `translate(${drag.offsetX}px, ${drag.offsetY}px)`,
        cursor: drag.active ? 'grabbing' : 'default',
      }"
    >
      <header class="modal-header" @mousedown="startDrag" @touchstart="startDrag" @touchmove.prevent="onDrag" style="cursor: grab">
        <slot name="header"> Select your {{ title }} </slot>
        <button type="button" class="btn-close" @click="close">x</button>
      </header>

      <section class="modal-body">
        <slot name="body">
          <!-- Search for band... -->
          <SearchDropdown
            :options="bands"
            v-on:selected="onSelectedOption($event)"
            placeholder="Start typing band name"
          >
          </SearchDropdown>
        </slot>

        <!-- inside modal-body, after SearchDropdown -->
        <div
          v-if="isCustom || (!bandSelected && !hasBand)"
          class="custom-band-input"
        >
          <!-- <label for="customBand" class="custom-text"
            >Or enter with custom text:</label
          > -->
          <input
            id="customBand"
            type="text"
            v-model="customBandText"
            @input="onCustomBandInput"
            placeholder="Band missing? enter with custom text..."
          />
        </div>

        <!-- 🔥 Preview + selection -->
        <div v-if="selectedBand" class="band-preview">
          <!-- <h4>{{ selectedBand.name }}</h4> -->

          <!-- currently selected image -->
          <div v-if="chosenImage" class="band-logo">
            <img
              :src="chosenImage"
              :alt="`${selectedBand.name} selected logo`"
            />
          </div>

          <!-- thumbnails -->
          <div v-if="allImages.length > 1" class="band-images">
            <div
              v-for="(img, idx) in allImages"
              :key="idx"
              class="band-image"
              :class="{ active: img === chosenImage }"
              @click="selectImage(img)"
            >
              <img :src="img" :alt="`${selectedBand.name} option ${idx + 1}`" />
            </div>
          </div>
        </div>
      </section>

      <template v-if="title && title === 'Thursday Headliner'">
        <div style="margin: auto; padding-bottom: 1rem">
          <label>
            <input
              type="checkbox"
              v-model="thursdayCoHeadlinerModel"
              @change="emitCoHeadliner('Thursday', thursdayCoHeadliner)"
            />
            <span style="color: black; margin-left: 2px"
              >is Co-Headliner (Thursday)</span
            >
          </label>
        </div>
      </template>

      <template v-if="title && title === 'Friday Headliner'">
        <div style="margin: auto; padding-bottom: 1rem">
          <label>
            <input
              type="checkbox"
              v-model="fridayCoHeadlinerModel"
              @change="emitCoHeadliner('Friday', fridayCoHeadliner)"
            />
            <span style="color: black; margin-left: 2px"
              >is Co-Headliner (Friday)</span
            >
          </label>
        </div>
      </template>

      <template v-if="title && title === 'Saturday Headliner'">
        <div style="margin: auto; padding-bottom: 1rem">
          <label>
            <input
              type="checkbox"
              v-model="saturdayCoHeadlinerModel"
              @change="emitCoHeadliner('Saturday', saturdayCoHeadliner)"
            />
            <span style="color: black; margin-left: 2px"
              >is Co-Headliner (Saturday)</span
            >
          </label>
        </div>
      </template>

      <template v-if="bandSelected || hasBand">
        <div class="slider-container">
          <label for="slider">Size: {{ getSize(sliderValue) }}</label>
          <input
            :onChange="onSelectSize(sliderValue)"
            type="range"
            id="slider"
            v-model="sliderValue"
            :min="minValue"
            :max="maxValue"
            :step="stepValue"
          />
        </div>
      </template>

      <!-- 👇 Clear button -->
      <div class="clear-selection">
        <button type="button" class="button-clear" @click="clearSelection">
          Clear Selection
        </button>
        <button type="button" class="button-confirm" @click="close">
          Confirm Selection
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import SearchDropdown from 'search-dropdown-vue'
import SearchDropdown from "./SearchDropdown.vue";
import { bands } from "@benjicwood/artist-assets";

// console.log(bands);

export default {
  name: "BandSelectModal",
  props: {
    title: String,
    id: String,
    hasBand: Boolean,
    thursdayCoHeadliner: Boolean,
    fridayCoHeadliner: Boolean,
    saturdayCoHeadliner: Boolean,
    currentBand: String, // band id
    currentImage: String, // chosen image URL
    position: String,
  },
  components: {
    SearchDropdown,
  },
  data() {
    return {
      bands,
      bandSelected: false,
      selectedBand: null,
      chosenImage: null,
      customBandText: "", // 👈 new field
      isCustom: false,
      sliderValue: 4, // Initial value
      minValue: 1,
      maxValue: 7,
      stepValue: 1, // Step size for each movement
      logoSize: "",
      // thursdayCoHeadliner: this.thursdayCoHeadliner, // 1 or 2 headliner slots
      // fridayCoHeadliner: this.fridayCoHeadliner,
      // saturdayCoHeadliner: this.saturdaCoHeadliner,
      // isCoHeadliner: false,
      drag: {
        active: false,
        startX: 0,
        startY: 0,
        offsetX: 0,
        offsetY: 0,
      },
    };
  },
  computed: {
    thursdayCoHeadlinerModel: {
      get() {
        return this.thursdayCoHeadliner;
      },
      set(value) {
        this.$emit("co-headliner", { day: "Thursday", value });
      },
    },
    fridayCoHeadlinerModel: {
      get() {
        return this.fridayCoHeadliner;
      },
      set(value) {
        this.$emit("co-headliner", { day: "Friday", value });
      },
    },
    saturdayCoHeadlinerModel: {
      get() {
        return this.saturdayCoHeadliner;
      },
      set(value) {
        this.$emit("co-headliner", { day: "Saturday", value });
      },
    },
    allImages() {
      if (!this.selectedBand) return [];
      const images = [];

      // main logo first
      if (this.selectedBand.logo) images.push(this.selectedBand.logo);

      // add alt1, alt2... dynamically
      if (this.selectedBand.images?.length) {
        images.push(...this.selectedBand.images);
      }

      return images;
    },
  },
  mounted() {
    // Mouse listeners
    window.addEventListener("mousemove", this.onDrag);
    window.addEventListener("mouseup", this.stopDrag);

    // Touch listeners
    window.addEventListener("touchmove", this.onDrag);
    window.addEventListener("touchend", this.stopDrag);

    if (this.currentBand) {
      const band = this.bands.find((b) => b.id === this.currentBand);
      if (band) {
        this.selectedBand = band;
        this.chosenImage =
          this.currentImage || band.logo || band.images?.[0] || null;
      }
    }
  },
  beforeUnmount() {
    window.removeEventListener("mousemove", this.onDrag);
    window.removeEventListener("mouseup", this.stopDrag);
    window.removeEventListener("touchmove", this.onDrag);
    window.removeEventListener("touchend", this.stopDrag);
  },
  methods: {
    onSelectedOption(selected) {
      if (!selected || !selected.id) {
        // blank option chosen
        this.bandSelected = false;
        this.selectedBand = null;
        this.chosenImage = null;
        this.isCustom = true; // 👈 force custom input visible
        this.$emit("selected", { id: null, name: "", custom: true });
        return;
      }
      this.isCustom = false; // switch to "real band" mode
      this.customBandText = ""; // clear custom text
      this.bandSelected = selected.id ? true : false;
      this.selectedBand = selected;
      // default to logo if available
      this.chosenImage = selected.logo || selected.images?.[0] || null;
      this.$emit("selected", { ...selected, chosenImage: this.chosenImage });
      // this.$emit('selected', selected);

      if (selected?.name) {
        const day = this.title?.split(" ")[0] || "Unknown"; // extract first word as day
        const position = this.position || "Unknown";

        console.log("%cposition:", "font-size:20px; color:orange;", position);

        window.gtag("event", "band_selected", {
          band_name: selected.name,
          day,
          position,
          value: 1,
        });
      }
      // if (selected?.name) {
      //   window.gtag("event", "band_selected", {
      //     band_name: selected.name,
      //     value: 1,
      //   });
      //   window.gtag("event", "band_selected", {
      //     event_category: "interaction",
      //     event_label: selected.name,
      //     value: 1,
      //   });
      // }
    },
    clearSelection() {
      this.bandSelected = false;
      this.selectedBand = null;
      this.chosenImage = null;
      this.isCustom = true; // go back into custom mode
      this.customBandText = ""; // reset text field
      this.$emit("selected", { id: null, name: "", custom: true });
    },
    selectImage(img) {
      this.isCustom = false; // using image now
      this.customBandText = ""; // clear custom text
      this.chosenImage = img;
      this.$emit("selected", { ...this.selectedBand, chosenImage: img });
    },

    // onCustomBandInput() {
    //   this.isCustom = true;
    //   if (this.customBandText.trim()) {
    //     this.$emit("selected", {
    //       id: null,
    //       name: this.customBandText.trim(),
    //       custom: true,
    //     });
    //   }
    // },
    onCustomBandInput() {
      this.isCustom = true;
      const text = this.customBandText.trim();

      if (text) {
        this.$emit("selected", {
          id: null,
          name: text,
          custom: true,
        });
      } else {
        // emit a clear event when input is empty
        this.$emit("selected", {
          id: null,
          name: "",
          custom: true,
        });
      }
    },

    getSize(size) {
      const logoSizes = {
        1: "smallest",
        2: "smaller",
        3: "small",
        4: "normal",
        5: "large",
        6: "larger",
        7: "largest",
      };
      return logoSizes[size] || "normal";
    },
    onSelectSize(size) {
      this.logoSize = this.getSize(size);
      this.$emit("size", this.logoSize);
    },
    emitCoHeadliner(day, value) {
      this.$emit("co-headliner", { day, value });
      // if (this.title === 'Thursday Headliner') {
      //     this.$emit('co-headliner', this.thursdayCoHeadliner);
      // }
      // if (this.title === 'Friday Headliner') {
      //     this.$emit('co-headliner', this.fridayCoHeadliner);
      // }
      // if (this.title === 'Saturday Headliner') {
      //     this.$emit('co-headliner', this.saturdayCoHeadliner);
      // }
    },
    close() {
      // Reset modal position
      this.drag.offsetX = 0;
      this.drag.offsetY = 0;

      this.$emit("close");
    },
    startDrag(e) {
      // Support touch and mouse
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      this.drag.active = true;
      this.drag.startX = clientX - this.drag.offsetX;
      this.drag.startY = clientY - this.drag.offsetY;

      // Prevent text/image selection on drag
      document.body.style.userSelect = "none";
    },

    onDrag(e) {
      if (!this.drag.active) return;

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      let newOffsetX = clientX - this.drag.startX;
      let newOffsetY = clientY - this.drag.startY;

      // Optional clamp (adjust these if needed)
      const maxX = window.innerWidth * 0.75;
      const maxY = window.innerHeight / 2;

      this.drag.offsetX = Math.min(Math.max(newOffsetX, -maxX), maxX);
      this.drag.offsetY = Math.min(Math.max(newOffsetY, -maxY), maxY);
    },

    stopDrag() {
      this.drag.active = false;
      document.body.style.userSelect = ""; // restore default
    },
  },
};
</script>

<style lang="scss">
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow-y: auto; /* allows scrolling if modal taller than viewport */
  padding: 1rem; /* space around modal on small screens */
  box-sizing: border-box;
}

.modal {
  background: #ffffff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  font-family: "Soleil", sans-serif;
  position: relative;
  animation: fadeInScale 0.2s ease-out;
  border: 2px solid #711214;
}

@media screen and (min-width: 992px) {
  .modal {
    max-width: 80%;
  }
}

@keyframes fadeInScale {
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.modal-header,
.modal-footer {
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
}

.modal-header {
  border-bottom: 1px solid #711214;
  background-color: #e5f5f4;
  color: rgb(60, 54, 54);
  font-weight: 600;
  justify-content: center;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

.modal-footer {
  border-top: 1px solid #e0e0e0;
  flex-direction: row;
  justify-content: flex-end;
  gap: 0.5rem;
}

.modal-body {
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 70vh; /* prevents modal from exceeding viewport */
  position: relative; /* needed for absolute children */
  overflow: visible;
}

.modal-body .dropdown .dropdown-toggle {
  width: 100%;
}

.modal-body .dropdown .dropdown-toggle input {
  width: 100%;
  padding-left: 0.5rem;
  @media (min-width: 769px) {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  @media (max-width: 768px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}

/* Close button */
.btn-close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  border: none;
  font-size: 1.5rem;
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  font-weight: bold;
  color: rgb(60, 54, 54);
  background: transparent;
  transition: color 0.2s;
}
.btn-close:hover {
  color: #ff8c8c;
}

/* Primary button */
// .btn-red {
//   color: white;
//   background: #711214;
//   border: 1px solid #711214;
//   padding: 0.5rem 1rem;
//   border-radius: 6px;
//   cursor: pointer;
//   transition: background 0.2s;
// }
// .btn-red:hover {
//   background: #a31f2c;
// }

/* Slider styling */
.slider-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}
input[type="range"] {
  width: 100%;
  max-width: 300px;
}

/* Band preview */
.band-preview {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.band-logo {
  width: 220px; // fixed container size
  height: 100px; // adjust to what feels right
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(20, 10, 38);
  padding: 0.5rem;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: scale-down; // shrink to fit, never stretch
  }
}

.band-images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}
.band-images img {
  max-width: 80px;
  border: 2px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: border 0.2s, transform 0.2s;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  background: rgb(20, 10, 38); // hmm
}
.band-images img:hover {
  transform: scale(1.05);
}

.band-image {
  width: 90px;
  height: 60px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #111; // fallback background
  border: 2px solid transparent;
  cursor: pointer;
  transition: border 0.2s, transform 0.2s;

  &.active {
    border-color: rgb(35, 220, 35);
  }

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: scale-down; // keeps aspect ratio, fills the box
  }
}

.custom-band-input {
  position: relative;
  display: inline-block;
  transition: 0.75s ease-in;
  border-radius: 2px 2px 0 0;
}
.custom-band-input input {
  border: none;
  background: #0002;
  padding-left: 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  outline: none;
  transition: 0.75s ease-in;
  color: gray;
  border-radius: 4px;
  height: 1.5rem;
  @media (min-width: 769px) {
    margin-left: 2px;
    width: 50%;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}

.custom-text {
  padding-left: 0.5rem;
  color: black;
}

.clear-selection {
  // margin-top: 1rem;
  text-align: center;
  padding: 0.8rem;

  button {
    border: 1px solid white;
    color: white;
    padding: 0.8rem 1rem;
    cursor: pointer;
    border-radius: 6px;
    font-size: 0.9rem;
    transition: filter 0.2s ease; // smooth hover

    &.button-confirm {
      background: green;
    }
    &.button-clear {
      background: #711214;
    }

    &:hover {
      filter: brightness(0.8); // darkens the current background
    }
  }
}
</style>
