import type { Material, Mesh } from 'three';

export interface CustomPointerEvent extends PointerEvent{
    object:Mesh
}

export interface BaseColor extends MaterialColor{
    label:string,
    value:BASE_COLOR
}

export interface CushionColor extends MaterialColor{
    label:string,
    value:CUSHION_COLOR
}

export interface MaterialColor{
    label:string,
    value:CUSHION_COLOR|BASE_COLOR
}