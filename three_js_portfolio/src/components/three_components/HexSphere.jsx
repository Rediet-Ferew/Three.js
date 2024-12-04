
import React, { useRef } from 'react'
import { useGLTF, Float } from '@react-three/drei'


const HexSphere = (props) => {
  const { nodes, materials } = useGLTF('hex_sphere/scene.gltf')
  return (
    <Float floatIntensity={1}>
      <group {...props}  rotation={[-Math.PI / 2, 0, 0]} scale={1.5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Frame_0.geometry}
          material={materials.Blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_0.geometry}
          material={materials.Black}
        />
      </group>
    </Float>
  )
}
export default HexSphere
useGLTF.preload('hex_sphere/scene.gltf')
