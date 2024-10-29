import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PointerLockControls } from '@react-three/drei';
import * as THREE from 'three';
import type { ThreeEvent } from '@react-three/fiber';

// HUD component rendered outside Canvas
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
      zIndex: 100,
    }}
  />
);

type TargetProps = {
  position: [number, number, number];
  onHit: () => void;
};

const Target: React.FC<TargetProps> = ({ position, onHit }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isHovered, setIsHovered] = useState(false);

  useFrame(({ camera }) => {
    if (!meshRef.current) return;
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    mouse.x = 0;
    mouse.y = 0;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(meshRef.current);
    setIsHovered(intersects.length > 0);
  });

  return (
    <mesh ref={meshRef} position={position} onClick={onHit}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color={isHovered ? 'yellow' : 'red'} />
    </mesh>
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

  const handleTargetHit = () => {
    onHit();
    setTargetPosition(generateRandomPosition());
  };

  const handleClick = () => {
    onShot();
  };

  return (
    <group onClick={handleClick}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Target position={targetPosition} onHit={handleTargetHit} />
      <PointerLockControls />
    </group>
  );
};

const FPSInfinite: React.FC = () => {
  const [fps, setFps] = useState(0);
  const [time, setTime] = useState(0);
  const [hits, setHits] = useState(0);
  const [totalShots, setTotalShots] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 1);
      setFps(frameRef.current);
      frameRef.current = 0;
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Canvas style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <AimLabScene 
          onHit={() => setHits(prev => prev + 1)}
          onShot={() => setTotalShots(prev => prev + 1)}
        />
      </Canvas>
      <Crosshair />
      <HUD fps={fps} time={time} hits={hits} totalShots={totalShots} />
    </>
  );
};

export default FPSInfinite;