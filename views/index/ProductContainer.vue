<template>
    <div class="product-container">
        <TresCanvas>
            <OrbitControls />
            <TresPerspectiveCamera ref="camera" :position="[0, 5, 10]" :look-at="[0, 0, 0]"/>
            <TresAmbientLight :intensity="1" color="white" />
            <Suspense> <ProductRender /> </Suspense>
        </TresCanvas>
    </div>
</template>

<style lang="sass" scoped>
.product-container
    width: 50%
    height: 100%
    background-color: cadetblue
    @media (max-width: $breakpoint-tablet)
        width: 100%
        height: 50%
</style>