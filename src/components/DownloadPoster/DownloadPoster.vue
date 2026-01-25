<template>
  <div class="poster-container">
    <div class="poster-wrapper" ref="poster">
      <img
        class="poster-background"
        src="../../assets/background/download-blank-2026.png"
        alt="Festival Poster"
      />
      <BandGrid ref="bandGrid" :alwaysHighlight="isMobile && posterEmpty" />
      <!-- Click to start overlay -->
      <div v-if="isMobile && posterEmpty" class="click-start">
        click a section to start
      </div>
    </div>
  </div>

  <div class="button-row" :class="{ hidden: isHidden }">
    <button class="download-btn" @click="downloadPoster">Export Poster</button>

    <!-- Mobile only -->
    <button v-if="isMobile" class="share-btn" @click="sharePoster">
      Share Poster
    </button>

    <!-- Desktop only -->
    <button v-else class="copy-btn" @click="copyPoster">
      Copy to Clipboard
    </button>
  </div>

  <!-- Toggle visibility button -->
  <button class="toggle-bar" @click="isHidden = !isHidden">
    {{ isHidden ? "▲" : "▼" }}
  </button>

  <div v-if="toast.show" :class="['toast', toast.type]">
    {{ toast.message }}
  </div>
</template>

<script>
import BandGrid from "./BandGrid/BandGrid.vue";
import { toPng, toBlob } from "html-to-image";

export default {
  name: "DownloadPoster",
  components: { BandGrid },

  data() {
    return {
      isMobile: false,
      isHidden: false,
      toast: {
        show: false,
        message: "",
        type: "", // e.g., 'success', 'error'
      },
    };
  },
  computed: {
    posterEmpty() {
      const grid = this.$refs.bandGrid;
      if (!grid) return true;

      return Object.values(grid.days).every((day) => {
        return Object.values(day).every((row) => {
          if (Array.isArray(row)) {
            return row.every((slot) => !slot.band);
          }
          return !row.band;
        });
      });
    },
  },

  mounted() {
    document.body.style.backgroundColor = "#1f2832";
    this.isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  },

  beforeUnmount() {
    document.body.style.backgroundColor = "";
  },

  methods: {
    showToast(message, type = "success", duration = 2500) {
      this.toast.show = true;
      this.toast.message = message;
      this.toast.type = type;

      setTimeout(() => {
        this.toast.show = false;
      }, duration);
    },
    async downloadPoster() {
      const node = this.$refs.poster;

      try {
        const dataUrl = await toPng(node, {
          quality: 1,
          cacheBust: true,
          backgroundColor: "#000",
          pixelRatio: 2,
        });

        const link = document.createElement("a");
        link.download = "my-festival-poster.png";
        link.href = dataUrl;
        link.click();

        this.showToast("Poster downloaded!");
      } catch (err) {
        console.error("Error exporting poster:", err);
        this.showToast("Failed to download poster.", "error");
      }
    },

    async sharePoster() {
      const node = this.$refs.poster;

      try {
        const blob = await toBlob(node, {
          backgroundColor: "#000",
          pixelRatio: 2,
        });
        const file = new File([blob], "my-festival-poster.png", {
          type: "image/png",
        });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            files: [file],
            title: "Check out my festival poster!",
            text: "Made this sick festival lineup poster 🎶",
          });
          this.showToast("Poster shared!");
        } else {
          const link = document.createElement("a");
          link.download = "my-festival-poster.png";
          link.href = URL.createObjectURL(blob);
          link.click();
          this.showToast(
            "Sharing not supported — poster downloaded instead.",
            "error"
          );
        }
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("User cancelled share");
          return;
        }
        console.error("Error sharing poster:", err);
        this.showToast("Failed to share poster.", "error");
      }
    },

    async copyPoster() {
      const node = this.$refs.poster;

      try {
        const blob = await toBlob(node, {
          backgroundColor: "#000",
          pixelRatio: 2,
        });

        await navigator.clipboard.write([
          new ClipboardItem({ "image/png": blob }),
        ]);

        this.showToast("Poster copied to clipboard!");
      } catch (err) {
        console.error("Failed to copy poster:", err);
        this.showToast("Copying not supported.", "error");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.poster-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.poster-wrapper {
  position: relative;
  display: inline-block;
  margin: auto;
}

.poster-background {
  display: block;
  max-width: 98vw;
  max-height: 100vh;
  width: auto;
  height: auto;
}

@media (max-width: 768px) {
  .poster-wrapper {
    display: flex;
    justify-content: center;
  }
}

/* --- Buttons --- */
/* --- Floating Control Bar --- */
.button-row {
  position: fixed;
  bottom: 0;
  // left: 50%;
  // transform: translateX(-50%);
  z-index: 100;
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  background: rgba(31, 40, 50, 0.95);
  padding: 0.75rem 1.25rem;
  border-radius: 12px 12px 0 0;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(6px);
  transition: transform 0.3s ease, opacity 0.3s ease;

  &.hidden {
    transform: translate(-50%, 100%);
    opacity: 0;
    pointer-events: none;
  }
}

/* Toggle button */
.toggle-bar {
  border: 2px solid white;
  position: fixed;
  bottom: 4.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 101;
  background: rgba(31, 40, 50, 0.95);
  color: white;
  border-radius: 9999px;
  padding: 0.4rem 0.6rem;
  cursor: pointer;
  font-size: 1.2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  transition: background 0.2s ease, bottom 0.3s ease;

  &:hover {
    background: rgba(31, 40, 50, 1);
  }
}

/* Move toggle up slightly when bar is hidden */
.button-row.hidden + .toggle-bar {
  bottom: 0.5rem;
}

/* --- Mobile layout --- */
@media (max-width: 620px) {
  .button-row {
    top: auto;
    right: auto;
    left: auto;
    transform: none;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 1.5rem auto 0 auto;
    background: transparent;
    box-shadow: none;
    padding: 0;
    bottom: 0;
    margin-bottom: 1rem;
  }
}

.download-btn,
.share-btn,
.copy-btn {
  background: #161c23;
  border: 3px solid white;
  border-radius: 0px;
  color: white;
  padding: 0.8rem 1.4rem;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.2s ease;

  &:hover {
    background: #e73370;
  }
}

.share-btn {
  background: #161c23;
  &:hover {
    background: #2563eb;
  }
}

.copy-btn {
  background: #161c23;
  &:hover {
    background: #059669;
  }
}

.toast {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.8rem 1.2rem;
  // border-radius: 8px;
  color: white;
  font-weight: bold;
  z-index: 1000;
  opacity: 0.95;
  transition: opacity 0.3s ease;

  &.success {
    background-color: #10b981;
  }

  &.error {
    background-color: #ef4444;
  }
}

.click-start {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  pointer-events: none;
  width: 90%;
}
</style>
