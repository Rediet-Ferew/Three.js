
import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'



const HackerRoom = (props) => {
  // Load GLTF model and textures
  const { nodes, materials } = useGLTF('./retro_computer/scene.gltf');
  const monitorTexture = useTexture('/textures/desk/monitor.png');
  const screenTexture = useTexture('/input/merged_screen.png');

  return (
    <group {...props} dispose={null}>
      {/* Computer mesh with monitor texture */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.computer_computer_mat_0.geometry}
        material={materials.computer_mat}>
        <meshMatcapMaterial map={monitorTexture}/>
      </mesh>

      {/* Server mesh */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.server_server_mat_0.geometry}
        material={materials.server_mat}
      />

      {/* VHS player mesh */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vhs_vhsPlayer_mat_0.geometry}
        material={materials.vhsPlayer_mat}
      />

      {/* Shelf mesh */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shelf_stand_mat_0.geometry}
        material={materials.stand_mat}
      />

      {/* Keyboard mesh */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.keyboard_mat_mat_mat_0.geometry}
        material={materials.mat_mat}
      />

      {/* Arm mesh */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.arm_arm_mat_0.geometry}
        material={materials.arm_mat}
      />

      {/* TV mesh */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tv_tv_mat_0.geometry}
        material={materials.tv_mat}
      />

      {/* Table mesh */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table_table_mat_0.geometry}
        material={materials.table_mat}
      />

      {/* Cables mesh */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cables_cables_mat_0.geometry}
        material={materials.cables_mat}
      />

      {/* Props mesh */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.props_props_mat_0.geometry}
        material={materials.props_mat}
      />

      {/* Screen mesh with screen texture */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen_screens_0.geometry}
        material={materials.screens}>
          <meshMatcapMaterial map={screenTexture}/>
        </mesh>
      

      {/* Screen glass mesh */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen_glass_glass_0.geometry}
        material={materials.glass}
      />

      {/* Ground mesh */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ground_ground_mat_0.geometry}
        material={materials.ground_mat}
      />

      {/* Peripherals mesh */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.peripherals_key_mat_0.geometry}
        material={materials.key_mat}
      />
    </group>
  )
}

useGLTF.preload('./retro_computer/scene.gltf')
export default HackerRoom
