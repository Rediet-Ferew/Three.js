

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF('react/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 7.935, 18.102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[39.166, 39.166, 52.734]}
        />
      </group>
    </group>
  )
}

export default ReactLogo
useGLTF.preload('react/scene.gltf')