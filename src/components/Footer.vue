<template>
  <div class="footer">
    <a href="https://ko-fi.com/benjicwood" target="_blank" @click="trackClick('Ko-fi')">
        <img class="kofi-link" src="../assets/icons/kofi_button_dark.png" alt="kofi">
    </a>
    <a href="https://benjicwood.github.io/2000trees-poster-creator/" target="_blank" @click="trackClick('2000trees')">
        <img class="trees-link" src="../assets/icons/trees.png" alt="2000trees">
    </a>
    <a href="https://www.instagram.com/benjicwood/" target="_blank" @click="trackClick('Instagram')">
        <img class="insta-link" src="../assets/icons/insta_dark.png" alt="insta">
    </a>
  </div>
</template>

<script>
// import BandGrid from "./BandGrid.vue"
// import SidePanel from "./SidePanel.vue";
// import kofiLogo from "../assets/icons/kofi.png"

export default {
    name: 'Footer',
    methods: {
    trackClick(label) {
        if (window.gtag) {
            window.gtag('event', 'footer_link_click', {
            event_category: 'navigation',
            event_label: label,
            });
        }
    }
    }
//   components: {
//   },
//   props: {
//     msg: String
//   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped style="scss">

.footer {
    background-color: #ff6700;
    border-top: 1px solid black;
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    color: white; /* Optional: For text readability */
    padding: 4px; /* Optional: Adjust the padding as needed */
    z-index: 1000; /* Optional: Ensure it stays on top of other elements */
    min-width: 709px;
    /* display: flex;
    gap: 10px; */
}

.kofi-link {
    height: 40px;
    padding: 4px;
}

.trees-link {
    height: 40px;
    padding: 4px;
    border-radius: 10px;
}

.insta-link {
    height: 40px;
    padding: 4px;
    border-radius: 10px;
}

.icon {
    padding: 4px;
}

</style>
