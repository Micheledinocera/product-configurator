<template>
    <div class="color-picker">
        <div class="title"> {{title}} </div>
        <div class="colors-list">
            <div :class="['color-item',{selected:color.value==selectedColor.value}]" v-for="color in colors" @click="handleClick(color)" :key="props.type+'_'+color.value">
                <div class="color-label"> {{color.label}} </div>
                <div class="color-tile" :style="{backgroundColor:color.value}"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string,
  colors: MaterialColor[],
  type: HeadphoneMaterial
}>()

const { updateSelectedColor,getSelectedColor }=useRenderStore();

const handleClick=(color:MaterialColor)=>{
    updateSelectedColor(color,props.type)
}
const selectedColor=computed(()=>getSelectedColor(props.type).value)
</script>

<style lang="sass" scoped>
.title
    text-align: center
    margin-bottom: 10px
.colors-list
    display: flex
    justify-content: space-around
    margin: 10px auto
    .color-item
        border: solid 2px transparent
        cursor: pointer
        border-radius: 8px
        background-color: white
        width: 80px
        height: 80px
        &.selected
            border-color: black
        .color-label
            text-align: center
            margin-top: 10px
            text-transform: capitalize
        .color-tile
            width: 20px
            height: 20px
            border: solid 1px black
            border-radius: 20px
            margin: 10px auto
</style>