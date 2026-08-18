import React from 'react';
import { Canvas } from '@react-three/fiber';

export default function Scene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
      </Canvas>
    </div>
  );
}
