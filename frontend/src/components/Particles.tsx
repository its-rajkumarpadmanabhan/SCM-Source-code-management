import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Particles() {
  const points = useRef<any>();
  
  useFrame(() => {
    if (points.current) {
      points.current.rotation.y += 0.001;
    }
  });

  return (
    <points ref={points}>
      <sphereGeometry args={[10, 32, 32]} />
      <pointsMaterial color="#ffffff" size={0.05} />
    </points>
  );
}
