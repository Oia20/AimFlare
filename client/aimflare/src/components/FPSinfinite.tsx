import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { PointerLockControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import type { ThreeEvent } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import InfiniteSettings from './InfiniteSettings';
import FPS from './Fps';

// FPS Counter component that uses useFrame inside Canvas
const FPSCounter: React.FC<{ onFrame: () => void }> = ({ onFrame }) => {
  useFrame(() => {
    onFrame();
  });
  return null;
};

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

const HUD: React.FC<{
  fps: number;
  time: number;
  hits: number;
  totalShots: number;
}> = ({ fps, time, hits, totalShots }) => {
  const hitPercentage = totalShots === 0 ? 0 : Math.round((hits / totalShots) * 100);
  
  return (
    <div style={{
      position: 'absolute',
      top: '20px',
      left: '20px',
      color: 'white',
      fontFamily: 'monospace',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: '10px',
      borderRadius: '5px',
      zIndex: 100
    }}>
      <div>FPS: {Math.round(fps)}</div>
      <div>Time: {Math.floor(time)}s</div>
      <div>Accuracy: {hitPercentage}%</div>
      <div>Hits: {hits}/{totalShots}</div>
    </div>
  );
};

const Crosshair: React.FC = () => (
  <div style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '5px',
    height: '5px',
    background: 'yellow',
    borderRadius: '50%',
    zIndex: 100,
  }}/>
);

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

const ClickToStart: React.FC = () => {
  const [started, setStarted] = useState(false);


  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100%',
      height: '100%',
      zIndex: 100,
      cursor: 'pointer',
      display: started ? 'none' : 'block',
    }}>
        <div onClick={() => setStarted(true)}>
        </div>
    </div>
  );
};

function generateRandomPosition(): [number, number, number] {
  const x = Math.random() * 10 - 5;
  const y = Math.random() * 5;
  const z = Math.random() * -10 - 5;
  return [x, y, z];
}

type AimLabSceneProps = {
  onHit: () => void;
  onShot: () => void;
};

const AimLabScene: React.FC<AimLabSceneProps> = ({ onHit, onShot }) => {
  const [targetPosition, setTargetPosition] = useState<[number, number, number]>(generateRandomPosition());

  const handleTargetHit = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    onHit();
    setTargetPosition(generateRandomPosition());
  };

  return (
    <>
      <ambientLight intensity={.5} />
      <pointLight position={[0, 5, -5]} color="white" intensity={50} scale={1}/>
      <Target position={targetPosition} onHit={handleTargetHit} />
      <PointerLockControls pointerSpeed={1.5}/>
    </>
  );
};

const FPSInfinite: React.FC = () => {
  const [fps, setFps] = useState(0);
  const [time, setTime] = useState(0);
  const [hits, setHits] = useState(0);
  const [totalShots, setTotalShots] = useState(0);
  const [started, setStarted] = useState(false)
  const frameRef = useRef<number>(0);
  const [settingsOpen, setSettingsOpen] = useState<boolean>(true);


  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 1);
      setFps(frameRef.current);
      frameRef.current = 0;
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle clicks anywhere in the canvas
  const handleClick = () => {
    setTotalShots(prev => prev + 1); // Count a shot whenever the canvas is clicked
  };

  return (
    <>
      {settingsOpen && <InfiniteSettings settingsOpen={settingsOpen} setSettingsOpen={setSettingsOpen} />}
      <ClickToStart />
      <FPS />
      <Canvas 
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'black' }} 
        onClick={handleClick} // Add click handler here
      >
        <Stars/>
        <Environment/>
        <FPSCounter onFrame={() => frameRef.current++} />
        <AimLabScene 
          onHit={() => setHits(prev => prev + 1)}
          onShot={handleClick} // Count the shot on hit as well
        />
      </Canvas>
      <Crosshair />
      <HUD fps={fps} time={time} hits={hits} totalShots={totalShots} />
    </>
  );
};

export default FPSInfinite;
