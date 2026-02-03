<template>
  <div class="band-input">
    <input class="band-input-input" :class="size" type="text" />
  </div>
</template>

<script>
export default {
  name: "BandInput",
  props: {
    size: { type: String, default: "medium" },
  },
};
</script>

<style scoped>
.band-input {
  /* border: 1px solid transparent; */
  display: block;
  width: 100%;
  box-sizing: border-box;
  line-height: 0;
}

.band-input-input {
  width: 100%;
  background: transparent;
  text-align: center;
  color: white;
  font-family: "PT Sans Narrow", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.2;
  padding: 0.1em 0; /* small padding only */
  font-size: 12px; /* medium size */
  border-radius: 0;
  transition: border 0.2s;
  /* border: none; */
  border: 1px solid transparent;
}

/* Sizes */
.band-input-input.small {
  font-size: 10px;
  padding: 0.05em 0;
}

.band-input-input.medium {
  font-size: 12px;
  padding: 0.1em 0;
}

.band-input-input.large {
  font-size: 14px;
  padding: 0.15em 0;
}

/* hover effect */
.band-input:hover {
  border-color: #c67d0e;
}
.band-input-input:hover {
  border-color: #c67d0e;
}
</style>
