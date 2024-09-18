<template>
    <!-- <Levioso> -->
        <!-- <Html transform :position="[2.4, 0, 2]" >
            <span> 299.99 € </span>
        </Html> -->
        <primitive :object="model" />
        <!-- <GLTFModel ref="modelRef" :path="path"></GLTFModel> -->
    <!-- </Levioso> -->
</template>

<script setup lang="ts">
    // const modelRef = ref()
    const path = 'models/headphones/headphones.gltf';
    
    // useRenderStore().selectedBaseColor
    // const { onBeforeRender } = useLoop()
    // onBeforeRender(({ delta }) => {
        // if(!modelRef.value) return
        // console.log(modelRef.value)
        // modelRef.value.rotation.y += delta
    // })
    // const { actions } = useAnimationsuseAnimations(animations, model)
    // const currentAction = ref(actions.Greeting)
    // currentAction.value.play()

    const { nodes, materials } = await useGLTF(path)

    const model = nodes['Headphones_7']

    const { getSelectedBaseColor, getSelectedCushionColor } = useRenderStore()
    

    watch(getSelectedBaseColor, (color)=> {
        (materials.Base as any).color.set(color.value)
    })

    watch(getSelectedCushionColor, (color) => {
        (materials.Cush as any).color.set(color.value)
    })
</script>