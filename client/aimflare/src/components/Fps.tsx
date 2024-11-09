import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function LoadFPS() {
  const gltf = useLoader(GLTFLoader, '/fps.glb');
  const group = useRef<THREE.Group>(null); // Update type to THREE.Group



  return (
    <group ref={group}>
      {gltf.scene && <primitive object={gltf.scene} />}
    </group>
  );
}
function FPS(props: any) {
  // Create a ref to manipulate the mesh
  const mesh = useRef<THREE.Mesh>(null);
  return (
    <group>
      <mesh
        ref={mesh}
        position={[100, -50, -400]}
        scale={[5, 5, 5]}
        rotation={[.5, .6, -.1]}
      >
        <LoadFPS />
      </mesh>
    </group>
  );
}

const FPSInfinite: React.FC = () => {

  return (
    <>
      <Canvas 
        style={{ height: "50vh", width: "50vw", position: 'absolute', bottom: 0, right: 0, background: 'transparent', zIndex: 500 }} 
      >
        <ambientLight intensity={.5} />
        <directionalLight position={[100, 100, 100]} intensity={.5} />
        <FPS />
      </Canvas>
    </>
  );
};

export default FPSInfinite;
