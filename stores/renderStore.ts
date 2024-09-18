import { BASE_COLORS, CUSHION_COLORS } from "~/models/Static"

export const useRenderStore = defineStore('renderStore', ()=>{

  const selectedBaseColor=ref<BaseColor>(BASE_COLORS[0])
  const selectedCushionColor=ref<CushionColor>(CUSHION_COLORS[0])

  const updateSelectedColor=(color:MaterialColor,type:HeadphoneMaterial)=> { 
    if(type == HEADPHONE_MATERIAL.base)
      selectedBaseColor.value=color as BaseColor
    else
      selectedCushionColor.value=color as CushionColor
  }

  const getSelectedColor= (type:HeadphoneMaterial)=>{
    if(type == HEADPHONE_MATERIAL.base)
      return selectedBaseColor
    else
      return selectedCushionColor
  }

  const getSelectedBaseColor=computed(()=>selectedBaseColor)
  const getSelectedCushionColor=computed(()=>selectedCushionColor)

  return  { getSelectedColor,updateSelectedColor,getSelectedBaseColor,getSelectedCushionColor }
})