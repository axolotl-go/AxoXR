"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import {
  Plus,
  Minus,
  RotateCcw,
  Rotate3D,
  Grid3X3,
  Sun,
  Layers,
  Maximize,
  View,
} from "lucide-react";
import { useState } from "react";
import Viewer from "@/utils/ThreeViewer";
import Button from "@/components/button";

export default function Page() {
  const [wireframe, setWireframe] = useState(false);

  return (
    <main className="relative w-full h-screen bg-[#0d131a] overflow-hidden z-20">
      <Canvas
        camera={{ position: [0, 1.5, 4], fov: 90 }}
        className="absolute inset-0"
      >
        <Viewer />
        <SceneControls />
        <OrbitControls enablePan enableZoom enableRotate />
      </Canvas>

      <Toolbar wireframe={wireframe} setWireframe={setWireframe} />
    </main>
  );
}

/* ---------------- CONTROLS (INSIDE CANVAS) ---------------- */

function SceneControls() {
  const { camera } = useThree();

  const zoomIn = () => camera.position.multiplyScalar(0.9);
  const zoomOut = () => camera.position.multiplyScalar(1.1);
  const reset = () => camera.position.set(0, 1.5, 4);

  return (
    <Html fullscreen>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
        <div className="glass-panel flex flex-col p-1 rounded-xl">
          <Button variant="ghost" size="icon" onClick={zoomIn}>
            <Plus size={20} />
          </Button>
          <Button variant="ghost" size="icon" onClick={zoomOut}>
            <Minus size={20} />
          </Button>
        </div>

        <Button variant="ghost" size="icon" onClick={reset}>
          <RotateCcw size={20} />
        </Button>

        <Button variant="ghost" size="icon">
          <Rotate3D size={20} className="animate-spin-slow" />
        </Button>
      </div>
    </Html>
  );
}

/* ---------------- TOOLBAR (HTML NORMAL) ---------------- */

function Toolbar({
  wireframe,
  setWireframe,
}: {
  wireframe: boolean;
  setWireframe: (v: boolean) => void;
}) {
  return (
    <div className="absolute bottom-8 w-full flex flex-col items-center gap-6 pointer-events-none">
      <div className="glass-panel p-1.5 rounded-full flex gap-1 pointer-events-auto z-50">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setWireframe(!wireframe)}
          className={`rounded-full ${
            wireframe ? "bg-white/20 text-blue-400" : "text-white"
          }`}
        >
          <Grid3X3 size={20} />
        </Button>

        <Button variant="ghost" size="icon">
          <Sun size={20} />
        </Button>

        <Button variant="ghost" size="icon">
          <Layers size={20} />
        </Button>

        <Button variant="ghost" size="icon">
          <Maximize size={20} />
        </Button>
      </div>

      <div className="pointer-events-auto">
        <Button variant="default" href="/qr" className="rounded-full px-8 h-12">
          <View className="mr-2 w-5 h-5" />
          View in AR
        </Button>
      </div>
    </div>
  );
}
