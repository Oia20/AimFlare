import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { PointerLockControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import type { ThreeEvent } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import './FPSlanding.css'

function LoadEnvironment() {
  const gltf = useLoader(GLTFLoader, '/tiles2.glb');
  const group = useRef<THREE.Group>(null); // Update type to THREE.Group

  // Handle click event
  const handleClick = () => {
    console.log("Environment Clicked");
  };

  return (
    <group ref={group} onClick={handleClick}>
      {gltf.scene && <primitive object={gltf.scene} />}
    </group>
  );
}
function Environment(props: any) {
  // Create a ref to manipulate the mesh
  const mesh = useRef<THREE.Mesh>(null);
  return (
    <group>
      <mesh
        ref={mesh}
        position={[0, -1, -25]}
        scale={[5, 5, 2]}
      >
        <LoadEnvironment />
      </mesh>
    </group>
  );
}

type TargetProps = {
  position: [number, number, number];
  onHit: (e: ThreeEvent<MouseEvent>) => void;
};

const Target: React.FC<TargetProps> = ({ position, onHit }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <mesh 
      ref={meshRef} 
      position={position} 
      onClick={onHit} 
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color={isHovered ? 'yellow' : 'green'} />
    </mesh>
  );
};

function generateRandomPosition(): [number, number, number] {
  const x = Math.random() * 10 - 5;
  const y = Math.random() * 5;
  const z = Math.random() * -10 - 5;
  return [x, y, z];
}


const AimLabScene: React.FC = () => {
  const [targetPosition, setTargetPosition] = useState<[number, number, number]>(generateRandomPosition());

  const handleTargetHit = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    setTargetPosition(generateRandomPosition());
  };

  return (
    <>
      <ambientLight intensity={.5} />
      <pointLight position={[0, 5, -5]} color="white" intensity={50} scale={1}/>
      <Target position={targetPosition} onHit={handleTargetHit} />
    </>
  );
};

const FPSLanding: React.FC = () => {

  const frameRef = useRef<number>(0);
  const [showInstructions, setShowInstructions] = useState<Boolean>(true);
  function pointerlockchange() {
    setShowInstructions(!showInstructions)
}
useEffect(() => {
  document.addEventListener('pointerlockchange', pointerlockchange, false)
  return () => {
      document.removeEventListener('pointerlockchange', pointerlockchange, false)
  }
})
  return (
    <>
      {/* <ClickToStart /> */}
      <Canvas 
        style={{ position: 'relative', width: '60vw', height: '60vh', background: 'black', borderRadius: '10px'}} 
      >
      <PointerLockControls selector="#button" />

        <Stars/>
        <Environment/>
        <AimLabScene 
        />
      </Canvas>
      <div id="instructions" className={showInstructions ? 'show' : 'hide'}>
          <button id="button" className='show absolute top-0 w-3/5 h-full z-50 bg-black bg-opacity-50 cursor-pointer rounded-lg' onClick={() => setShowInstructions(true)}>
            Click To Start
          </button>
      </div>

      <div id="instructions" className={showInstructions ? 'hide' : 'show'}>
        <h1 className="flex justify-center w-3/5 absolute top-3 right-0">Esc To Exit</h1>
      </div>

    </>
  );
};

export default FPSLanding;
