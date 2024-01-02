// src/components/ThreeScene.js
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { Suspense } from 'react';
import { DirectionalLight } from 'three';

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/planet.glb'); // Replace with the path to your 3D model

  return <primitive object={gltf.scene} />;
};

const ThreeScene = () => {
  return (
    <Canvas>
      <DirectionalLight intensity={0.5} position={[0, 10, 0]} />
      {/* Adjust the position and intensity as needed */}
      
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default ThreeScene;
