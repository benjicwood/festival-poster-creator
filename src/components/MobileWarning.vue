<template>
    <div class="mobile-only warning-box">
        <p>Note: This is best used on Desktop</p>
    </div>
</template>

<script>

export default {
  name: 'MobileWarning',
}
</script>

<style scoped style="scss">
/* Hide the class by default */
.mobile-only {
    display: none;
}

.warning-box {
    background-color: #0B7C7D;
    color: white;
    text-align: center;
    padding: 10px;
    font-size: 20px;
    font-family: 'PT Sans Narrow', sans-serif;
    min-width: 696px;
    border-top: 1px solid black;
}

@media (max-width: 668px) {
    .mobile-only {
        display: block; /* Change to inline or flex if needed */
    }
}
</style>