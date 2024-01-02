'use client'
import styles from './page.module.css'
import { Suspense, useEffect } from "react"
import { Canvas, useFrame ,useLoader } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { useRef } from 'react'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import Navbar from './components/Navbar'

export default function Home() {
  const Model = () => {
    const mesh = useRef(null);
    const gltf = useLoader(GLTFLoader, "/planet.glb");
    useFrame(() => {
      if (mesh.current.rotation.z === 360) {
        mesh.current.rotation.z = 0
      }
      else {
        mesh.current.rotation.z += 0.001;
      }
    });
    return (
      <>
        <mesh ref={mesh}>
          <primitive object={gltf.scene} scale={0.4} />
        </mesh>
      </>
    );
  };
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.section}>
        <h1 className={styles.heading1}>TECH</h1>
        <h1 className={styles.heading2}>SYNDICATE</h1>
        <div className={styles.circle}>
        <Canvas className={styles.globe} shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 40 }}>
          <Suspense fallback={null}>
            <Model />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
        </div>
      </div>
    </div>
  )
}
