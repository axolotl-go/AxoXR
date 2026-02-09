"use client";
import Button from "@/components/button";
import { UploadZone } from "@/components/upload-zone";
import { Badge } from "@/components/ui/badge";
import { FileBox, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";

type UploadItem = {
  id: number;
  name: string;
  size: number;
  progress: number;
  status: "uploading" | "ready";
};

export default function page() {
  const [queue, setQueue] = useState<UploadItem[]>([]);

  function handleFile(file: File) {
    const item: UploadItem = {
      id: Date.now(),
      name: file.name,
      size: file.size,
      progress: 0,
      status: "uploading",
    };

    setQueue((q) => [...q, item]);

    // fake progress (replace with real API upload)
    const interval = setInterval(() => {
      setQueue((q) =>
        q.map((i) =>
          i.id === item.id
            ? { ...i, progress: Math.min(i.progress + 10, 100) }
            : i,
        ),
      );
    }, 300);

    setTimeout(() => {
      clearInterval(interval);
      setQueue((q) =>
        q.map((i) =>
          i.id === item.id ? { ...i, progress: 100, status: "ready" } : i,
        ),
      );
    }, 3200);
  }

  return (
    <main className="flex justify-center min-h-screen py-20 px-4 mt-10 animate-fade-in">
      <div className="w-full max-w-3xl space-y-10">
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-black bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Upload New Model
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Supported formats: .obj, .gltf, .fbx up to 50MB
          </p>
        </header>

        {/* Upload Zone */}
        <UploadZone onFileSelect={handleFile} />

        {/* Queue */}
        {queue.length > 0 && (
          <section className="space-y-4 animate-slide-up">
            <h3 className="text-lg font-semibold px-1">Upload Queue</h3>
            <div className="space-y-3">
              {queue.map((item) => (
                <UploadRow key={item.id} item={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

function UploadRow({ item }: { item: UploadItem }) {
  return (
    <Card className="flex items-center gap-4 p-4">
      <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
        <FileBox className="w-6 h-6 text-blue-500" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-2">
          <p className="font-medium truncate">{item.name}</p>
          {item.status === "uploading" ? (
            <span className="text-xs font-semibold text-blue-500">
              {item.progress}%
            </span>
          ) : (
            <Badge variant="success">Ready</Badge>
          )}
        </div>

        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${item.progress}%` }}
          />
        </div>
      </div>

      {item.status === "ready" && (
        <div className="flex gap-2 animate-fade-in">
          <Button variant="default" size="sm" href="/viewer">
            View
          </Button>
        </div>
      )}
    </Card>
  );
}
