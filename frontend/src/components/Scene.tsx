import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Particles from './Particles';

function Cube() {
  const mesh = useRef<any>();
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#00ffcc" wireframe />
    </mesh>
  );
}

export default function Scene() {
  return (
    <div className="absolute inset-0 -z-10 bg-black">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Particles />
        <Cube />
      </Canvas>
    </div>
  );
}
