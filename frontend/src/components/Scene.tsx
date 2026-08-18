import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

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
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

export default function Scene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <Cube />
      </Canvas>
    </div>
  );
}
