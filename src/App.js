import { Canvas } from "@react-three/fiber"
import { Sky, PointerLockControls, KeyboardControls } from "@react-three/drei"
import { Physics, RigidBody } from "@react-three/rapier"
import { Ground } from "./Ground"
import { Player } from "./Player"

import { Model as Building } from "./Building";

export default function App() {
    //app
  return (
    <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "w", "W"] },
        { name: "backward", keys: ["ArrowDown", "s", "S"] },
        { name: "left", keys: ["ArrowLeft", "a", "A"] },
        { name: "right", keys: ["ArrowRight", "d", "D"] },
        { name: "jump", keys: ["Space"] },
      ]}>
      <Canvas shadows camera={{ fov: 45 }}>
        <Sky sunPosition={[100, 20, 100]} />
        <ambientLight intensity={0.3} />
        <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
        <Physics gravity={[0,-30,0]} >
          <Ground />

          <RigidBody type="fixed" colliders="trimesh">
            <Building scale={0.0175} position={[0,0.001,-10]}/>
          </RigidBody>
          
          <Player />

        </Physics>
        <PointerLockControls />
      </Canvas>
    </KeyboardControls>
  )
}
