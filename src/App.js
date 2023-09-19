import { Canvas } from "@react-three/fiber"
import { Sky, PointerLockControls, KeyboardControls } from "@react-three/drei"
import { Physics, RigidBody } from "@react-three/rapier";

import { Ground } from "./Ground"
import { Player } from "./Player"

import { Model as Building } from "./Building";
import Book from "./Book_stand";
import {Model as PaperPen} from "./Paper_pen_one";
import {Model as Scroll} from "./Scroll01";

import React, { useState } from "react";

export default function App() {
    //app
    const [popupTrigger, setPopupTrigger] = useState(false);

    const eventHandler = (e) => {
      e.stopPropagation();

//      document.pointerLockElement.unlock();
      setPopupTrigger(true);
    }
    const eventHandler2 = (e) => {
      e.stopPropagation();

      setPopupTrigger(false);
    }

  return (
    <>
    <div className={popupTrigger?"popup-screen-show":"popup-screen-hidden"} >show popup<button onClick={eventHandler2}>close popup</button></div>

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
            <Building scale={0.017} position={[0,0.001,-10]} rotation={[0, Math.PI/2, 0]}/>
          </RigidBody>

          {/** ground floor in door */}
          <Book scale={0.5} position={[0.5,0.3,-8.5]} rotation={[0,  3/2 * Math.PI, 0]} onClick={ eventHandler }/>
          <PaperPen scale={0.65} position={[0.5,0.70,-8.5]} rotation={[0,Math.PI,0]} />

          {/** ground floor lef far corner */}
          <Book scale={0.5} position={[-4.5,0.3,-10]} rotation={[0, 1/2 * Math.PI, 0]}/>
          <Scroll scale={0.5} position={[-4.5,1.15,-10]} rotation={[0, 3/2 * Math.PI, 0]}/>

          {/** first floor */}
          <Book scale={0.5} position={[1,1.05,-14]} rotation={[0, 0 * Math.PI, 0]}/>

          {/** second floor */}
          <Book scale={0.5} position={[-6.25,1.7,-12.5]} rotation={[0, 1/2 * Math.PI, 0]}/>
          {/** third floor */}
          <Book scale={0.5} position={[-3.75,2.95,-16.5]} rotation={[0, 2 * Math.PI, 0]}/>
          
          <Player />

        </Physics>
        <PointerLockControls />
      </Canvas>

    </KeyboardControls>
</>
  )
}
