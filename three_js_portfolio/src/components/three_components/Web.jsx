
import React, { useRef } from 'react'
import { useGLTF, Float } from '@react-three/drei'

const Web = (props) => {
  const { nodes, materials } = useGLTF('web/scene.gltf')
  return (
    <Float floatIntensity={1}>
      <group {...props} rotation={[-Math.PI / 2, 0, 0]} scale ={0.015}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials['Scene_-_Root']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials['Scene_-_Root']}
        />
      </group>
    </Float>
  )
}

export default Web
useGLTF.preload('web/scene.gltf')
