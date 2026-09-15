import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const NodeElement = ({ position, scale = 1, color = "#4f46e5" }: { position: [number, number, number], scale?: number, color?: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position} ref={meshRef} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color={color} wireframe />
      </mesh>
      <mesh position={position} scale={scale * 0.95}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
    </Float>
  );
};

const NetworkScene = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      
      {/* Central Cloud/Network Hub */}
      <NodeElement position={[0, 0, 0]} scale={1.5} color="#6366f1" />
      
      {/* Surrounding Nodes representing skills/virtual machines */}
      <NodeElement position={[-3, 2, -2]} scale={0.8} color="#06b6d4" />
      <NodeElement position={[3.5, -1, -1]} scale={1} color="#3b82f6" />
      <NodeElement position={[-2, -3, 1]} scale={0.6} color="#8b5cf6" />
      <NodeElement position={[4, 2, -3]} scale={0.9} color="#ec4899" />
      
      <Sparkles count={150} scale={12} size={1.5} speed={0.4} opacity={0.5} color="#e0e7ff" />
      <Environment preset="city" />
    </>
  );
};

export default function CanvasContainer() {
  return (
    <div className="fixed inset-0 z-0 print-hidden bg-[#050505]">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <NetworkScene />
      </Canvas>
    </div>
  );
}
