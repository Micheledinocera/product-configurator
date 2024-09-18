<template>
    <div class="controls-container">
        <div class="color-pickers-container">
            <ColorPicker :title="'Base Colors'" :colors="BASE_COLORS" :type="HEADPHONE_MATERIAL.base"/>
            <ColorPicker :title="'Cushion Colors'" :colors="CUSHION_COLORS" :type="HEADPHONE_MATERIAL.cushion"/>
        </div>
    </div>
</template>

<style lang="sass" scoped>
.controls-container
    width: 50%
    height: 100%
    background-color: darkgrey
    .color-pickers-container
        margin-top: 50px
    @media (max-width: $breakpoint-tablet)
        width: 100%
        height: 50%
        .color-pickers-container
            margin-top: 0
</style>