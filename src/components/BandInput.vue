<template>
  <div class="band-input">
    <input :class="`band-input-input ${size}`" type="text" name="" id="">
  </div>
</template>

<script>

export default {
  name: 'BandInput',
  props: {
      size: String,
  }
}

</script>

<style scoped>
.band-input {
    border: 1px solid transparent;
}
.band-input-input {
    width: 100%;
    background: transparent;
    border: none;
    text-align: center; 
    color: white;
    font-family: 'PT Sans Narrow', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
}
.large {
    height: 22px;
    font-size: 15px;
}
.medium {
    height: 20px;
    font-size: 15px;
}
.small {
    height: 13px;
    font-size: 12px;
}
</style>