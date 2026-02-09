import React, { useState, useCallback } from "react";
import { Upload, FileUp } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface UploadZoneProps {
  onFileSelect: (file: File) => void;
  className?: string;
  accept?: string;
  maxSize?: number; // in MB
}

export function UploadZone({
  onFileSelect,
  className,
  accept = ".obj,.gltf,.glb",
  maxSize = 50,
}: UploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true);
    } else if (e.type === "dragleave") {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        onFileSelect(e.dataTransfer.files[0]);
      }
    },
    [onFileSelect],
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        onFileSelect(e.target.files[0]);
      }
    },
    [onFileSelect],
  );

  return (
    <label
      className={twMerge(
        "relative flex flex-col items-center justify-center w-full p-8 border-2 border-dashed rounded-2xl cursor-pointer transition-all duration-300",
        isDragging
          ? "border-primary bg-primary/5 scale-[1.01]"
          : "border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-900",
        className,
      )}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        type="file"
        className="hidden"
        accept={accept}
        onChange={handleChange}
      />

      <div className="flex flex-col items-center gap-4 text-center">
        <div
          className={twMerge(
            "p-4 rounded-full transition-colors",
            isDragging
              ? "bg-primary/20 text-primary"
              : "bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:text-primary",
          )}
        >
          {isDragging ? (
            <FileUp className="w-8 h-8 animate-bounce" />
          ) : (
            <Upload className="w-8 h-8" />
          )}
        </div>

        <div className="space-y-1">
          <p className="font-semibold text-lg text-slate-700 dark:text-slate-200">
            {isDragging ? "Drop to upload" : "Click or drag file"}
          </p>
          <p className="text-sm text-slate-500">
            Supported formats: {accept.replace(/\./g, " ").toUpperCase()} (Max{" "}
            {maxSize}MB)
          </p>
        </div>
      </div>
    </label>
  );
}
