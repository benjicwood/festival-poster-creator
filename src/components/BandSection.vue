<template>
  <div :class="`${position} ${band} ${band && size ? size : ''}`">
  </div>
</template>

<script>

export default {
    name: 'BandSection',
    props: {
        band: String,
        position: String,
        size: String,
    },
}
</script>

<style scoped style="scss">
.main-headliner {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 70px;
    color: white;
    font-family: 'PT Sans Narrow', sans-serif;
    font-weight: 700;
    text-align: center;
    border: 1px solid transparent;
}

.main-sub {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 50px;
    color: white;
    font-family: 'PT Sans Narrow', sans-serif;
    font-weight: 700;
    text-align: center;
    border: 1px solid transparent;
}

.main-third {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 50px;
    color: white;
    font-family: 'PT Sans Narrow', sans-serif;
    font-weight: 700;
    text-align: center;
    border: 1px solid transparent;
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
</style>
