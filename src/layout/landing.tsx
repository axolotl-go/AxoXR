"use client";
import Viewer from "@/utils/ThreeViewer";
import { Canvas } from "@react-three/fiber";

export default function Landing() {
  return (
    <div>
      <main className="flex flex-col items-center flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 gap-8">
        <div className="flex flex-col items-center text-center gap-2 max-w-2xl animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Experience your models in
            <span className="text-blue-600 dark:text-blue-400">AxoXR</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Drag, drop, and instantly preview your 3D assets in your cellphone.
          </p>
        </div>

        <div className="w-full max-w-4xl flex flex-col gap-6">
          <div className="group relative w-full bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-400 text-sm">
                  inventory_2
                </span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  scifi_helmet_v2.obj
                </span>
                <span className="px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold">
                  Ready
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
                  <span className="material-symbols-outlined text-[18px]">
                    3d_rotation
                  </span>
                </button>
                <button className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
                  <span className="material-symbols-outlined text-[18px]">
                    zoom_in
                  </span>
                </button>
                <button className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
                  <span className="material-symbols-outlined text-[18px]">
                    fullscreen
                  </span>
                </button>
              </div>
            </div>

            <div className="relative w-full aspect-video md:aspect-[21/9] bg-slate-50 dark:bg-slate-950 flex items-center justify-center overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                style={{
                  background: "radial-gradient(#64748b 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              ></div>
              <Canvas className="bg-[#2e8188]">
                <Viewer />
              </Canvas>
              ,
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur rounded-full border border-white/10 flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-medium text-white">
                  Live Preview
                </span>
              </div>
            </div>

            <div className="absolute bottom-6 left-0 right-0 flex justify-center px-4">
              <button className="flex items-center gap-3 h-14 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 active:translate-y-0">
                Enter AR Experience
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider pl-1">
              Upload New Model
            </p>

            <div className="group border-2 border-dashed border-slate-200 dark:border-slate-800 hover:border-blue-500 bg-white dark:bg-slate-900 rounded-xl p-6 cursor-pointer transition-all">
              <div className="flex items-center gap-4">
                <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-3 group-hover:bg-blue-500/10">
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-blue-500 text-2xl">
                    cloud_upload
                  </span>
                </div>

                <div>
                  <p className="text-slate-900 dark:text-slate-200 text-sm font-semibold">
                    Drag & drop your 3D model
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">
                    .obj, .gltf, .fbx up to 50MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full py-6 text-center text-slate-400 text-sm">
        © 2026 ViewXR. Optimized for AxoXRdevices.
      </footer>
    </div>
  );
}
