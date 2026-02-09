import React from "react";
import { Card } from "./ui/card";
import Button from "./button";
import { Badge } from "./ui/badge";
import { Eye, MoreVertical, Clock } from "lucide-react";
import Image from "next/image";

export interface ModelCardProps {
  id: string | number;
  name: string;
  image: string;
  updatedAt: string;
  status?: "ready" | "processing" | "error";
  onView?: (id: string | number) => void;
}

export function ModelCard({
  id,
  name,
  image,
  updatedAt,
  status = "ready",
  onView,
}: ModelCardProps) {
  return (
    <Card className="group p-0 overflow-hidden border border-white/10 dark:border-white/5 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
      {/* Image Area */}
      <div className="relative aspect-4/3 bg-slate-100 dark:bg-slate-800 overflow-hidden">
        {/* Helper to show image properly since these are external URLs often */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />

        <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
          <Badge
            variant={status === "ready" ? "success" : "secondary"}
            className="backdrop-blur-md"
          >
            {status}
          </Badge>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 space-y-3">
        <div>
          <h3
            className="font-semibold text-slate-900 dark:text-white truncate"
            title={name}
          >
            {name}
          </h3>
          <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
            <Clock className="w-3 h-3" />
            <span>Updated {updatedAt}</span>
          </div>
        </div>

        <div className="flex gap-2 pt-1 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="default"
            size="sm"
            className="w-full"
            onClick={() => onView?.(id)}
          >
            <Eye className="w-4 h-4 mr-2" /> View
          </Button>
        </div>
      </div>
    </Card>
  );
}
