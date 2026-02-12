"use client";
import Button from "@/components/button";
import Viewer from "@/utils/ThreeViewer";
import { Canvas } from "@react-three/fiber";
import { Fullscreen, Heart, QrCode } from "lucide-react";
import { UploadZone } from "@/components/upload-zone";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="mt-20">
      <main className="flex flex-col items-center flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 gap-12">
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl animate-fade-in-up">
          <Badge variant="secondary" className="px-3 py-1 text-sm">
            v2.0 Beta Live
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white leading-[1.1]">
            Experience your models in
            <span className="bg-linear-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              AxoXR
            </span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-xl max-w-2xl leading-relaxed">
            Drag, drop, and instantly preview your 3D assets in augmented
            reality directly from your browser.
          </p>

          <div className="flex gap-4">
            <Button
              size="lg"
              className="rounded-full px-8 shadow-xl shadow-primary/20"
              // href="/dashboard"
              href="/signup"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8"
              href="https://ko-fi.com/axolotdev"
            >
              Buy a Cofe <Heart className="ml-2 hover:text-red-600" />
            </Button>
          </div>
        </div>

        <div className="w-full max-w-5xl flex flex-col gap-8">
          {/* Hero Card */}
          <Card className="group relative w-full p-0 overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl shadow-blue-900/10">
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="w-px h-4 bg-slate-200 dark:bg-slate-800 mx-2" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200 font-mono">
                  hatsune_miku.obj
                </span>
                <Badge variant="success" className="text-[10px] px-1.5 h-5">
                  READY
                </Badge>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Fullscreen size={16} />
                </Button>
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
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur rounded-full border border-white/10 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-medium text-white">
                  Live Preview
                </span>
              </div>
            </div>

            <div className="absolute bottom-6 left-0 right-0 flex justify-center px-4 pointer-events-none">
              <div className="pointer-events-auto">
                <Button
                  variant="default"
                  className="rounded-full shadow-lg border border-white/10 backdrop-blur-md"
                >
                  <QrCode className="mr-2 w-4 h-4" /> Enter to AR
                </Button>
              </div>
            </div>
          </Card>

          <div className="flex flex-col gap-4 animate-slide-up">
            <div className="flex items-center justify-between px-1">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Quick Upload
              </h3>
            </div>

            <UploadZone
              //onFileSelect={(file) => router.push("/upload")}
              onFileSelect={(file) => router.push("/signup")}
              className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm"
            />
          </div>
        </div>
      </main>

      <footer className="w-full py-8 text-center text-slate-400 text-sm border-t border-slate-200 dark:border-slate-800 mt-12 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md">
        <p>© 2026 ViewXR. Optimized for AxoXR devices.</p>
      </footer>
    </div>
  );
}
