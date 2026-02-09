"use client";

import { useLoader, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, TextureLoader, Group } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

export default function Viewer() {
  const obj = useLoader(OBJLoader, "/models/hatsunemiku.obj");
  const texture = useLoader(
    TextureLoader,
    "/models/texture/roomitems_013_color.png",
  );

  const modelRef = useRef<Group>(null);

  obj.traverse((child) => {
    if (child instanceof Mesh) {
      child.material.map = texture;
      child.material.needsUpdate = true;
    }
  });

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.003;
    }
  });

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <primitive
        ref={modelRef}
        object={obj}
        position={[0, -3, 0]}
        scale={1.5}
      />
    </>
  );
}
