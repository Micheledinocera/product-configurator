<template>
    <div class="app">
        <ProductContainer />
        <ControlsContainer />
    </div>
</template>

<style lang="sass" scoped>
.app
    display: flex
    height: 100vh
    @media (max-width: $breakpoint-tablet)
        display: block
</style>