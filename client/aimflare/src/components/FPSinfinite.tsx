import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PointerLockControls } from '@react-three/drei';
import * as THREE from 'three';
import type { ThreeEvent } from '@react-three/fiber'; // Import ThreeEvent

// Crosshair component
const Crosshair: React.FC = () => (
  <div
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '10px',
      height: '10px',
      background: 'black',
      borderRadius: '50%',
      zIndex: 1, // Keeps crosshair above the canvas
    }}
  />
);

// Type for target props
type TargetProps = {
  position: [number, number, number];
  isHovered: boolean; // Added prop to indicate hover state
};

// Target component
const Target: React.FC<TargetProps> = ({ position, isHovered }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ camera }) => {
    if (!meshRef.current) return;
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Get the mouse position in normalized device coordinates (-1 to +1)
    mouse.x = (window.innerWidth / 2) / window.innerWidth * 2 - 1;
    mouse.y = -(window.innerHeight / 2) / window.innerHeight * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(meshRef.current);

    // Update hover state in parent component
    const material = meshRef.current.material;

    if (intersects.length > 0) {
      // Set color to yellow if hovered
      if (Array.isArray(material)) {
        material.forEach((mat) => {
          const meshMat = mat as THREE.MeshStandardMaterial;
          if (meshMat.color) {
            meshMat.color.set('yellow');
          }
        });
      } else {
        const meshMat = material as THREE.MeshStandardMaterial; // Type assertion
        if (meshMat.color) {
          meshMat.color.set('yellow');
        }
      }
    } else {
      // Set color back to red if not hovered
      if (Array.isArray(material)) {
        material.forEach((mat) => {
          const meshMat = mat as THREE.MeshStandardMaterial;
          if (meshMat.color) {
            meshMat.color.set('red');
          }
        });
      } else {
        const meshMat = material as THREE.MeshStandardMaterial;
        if (meshMat.color) {
          meshMat.color.set('red');
        }
      }
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color={isHovered ? 'yellow' : 'red'} />
    </mesh>
  );
};

// Main Scene component
const AimLabScene: React.FC = () => {
  const [targetPosition, setTargetPosition] = useState<[number, number, number]>(generateRandomPosition());
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Get mouse position
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Safely access the camera and children from event.target
    const target = event.target as { camera: THREE.Camera; children: THREE.Object3D[] } | null;

    if (target && target.camera) {
      raycaster.setFromCamera(mouse, target.camera);

      // Check for intersection with the target
      const intersects = raycaster.intersectObjects(target.children);
      
      if (intersects.length > 0) {
        setTargetPosition(generateRandomPosition());
      }
    }
  };

  return (
    <group onClick={handleClick}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Target position={targetPosition} isHovered={isHovered} />
      <PointerLockControls />
    </group>
  );
};

// Utility to generate a random position within a range
function generateRandomPosition(): [number, number, number] {
  const x = Math.random() * 10 - 5;
  const y = Math.random() * 5;
  const z = Math.random() * -10 - 5;
  return [x, y, z];
}

// Main FPSInfinite component
const FPSInfinite: React.FC = () => (
  <>
    <Canvas style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
      <AimLabScene />
    </Canvas>
    <Crosshair />
  </>
);

export default FPSInfinite;
