/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 building.glb 
Author: jimbogies (https://sketchfab.com/jimbogies)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/interior-building-scene-9c1dad0cc26a4d2fa16d59d067c8f871
Title: Interior Building Scene
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

import Book from "./Book_stand";

export function Model(props) {
  const { nodes, materials } = useGLTF('./building.glb')

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Material2.geometry} material={materials.WoodTrim} />
        <mesh geometry={nodes.Material2_1.geometry} material={materials.Ceiling} />
        <mesh geometry={nodes.Material2_2.geometry} material={materials.material} />
        <mesh geometry={nodes.Material3.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Material2_3.geometry} material={materials.Translucent_Glass_Gray} />
        <mesh geometry={nodes.Material2_4.geometry} material={materials.GrayPlaster} />
        <lineSegments geometry={nodes.Material2_5.geometry} material={materials.edge_color000255} />
        <mesh geometry={nodes.Material2_6.geometry} material={materials.Trim02} />
        <mesh geometry={nodes.Material2_7.geometry} material={materials.FloorTiles} />
        <mesh geometry={nodes.Material3_1.geometry} material={materials.Light} />
        <mesh geometry={nodes.Material2_8.geometry} material={materials.Black} />
      </group>

<Book />

    </group>
  )
}

//useGLTF.preload('/building.glb')
