"use client";
import Button from "@/components/button";
import { ModelCard } from "@/components/model-card";
import { ArrowUp, Filter, Grid, List } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const models = [
  {
    id: 1,
    name: "El señor de la noche mitad hombre mitad animal",
    image:
      "https://i.all3dp.com/workers/images/fit=scale-down,w=1920,h=1080,gravity=0.5x0.5,format=auto/wp-content/uploads/2023/12/21150547/Batman.jpg",
    updated: "Oct 24, 2023",
  },
  {
    id: 2,
    name: "Mi waifu la zelda LoL XD",
    image:
      "https://media.sketchfab.com/models/bf99374334a64291ae2876c83269adb6/thumbnails/42a694b9de064b1cb906427a13a77d47/0405da1a5b3d4dea96cf532851eb7e1f.jpeg",
    updated: "Oct 22, 2023",
  },
  {
    id: 3,
    name: "Miku",
    image:
      "https://3dmag.org/en/uploads/images/catalog/item/1ba7bb70a5/96e2daab60_500.jpg",
    updated: "Oct 20, 2023",
  },
  {
    id: 4,
    name: "Berserk",
    image:
      "https://media.sketchfab.com/models/0ad7c8ffbeef4cc196cbd217557fef60/thumbnails/25e170068f864b73bf76816ee4d9cad7/5c85439efe974c6abefd6a2ef6fbf595.jpeg",
    updated: "Oct 18, 2023",
  },
];

export default function page() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 mt-20 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">
            My Models
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Manage and preview your 3D assets
          </p>
        </div>

        <Button
          variant="default"
          href="/upload"
          className="shadow-lg shadow-primary/20"
        >
          <ArrowUp className="w-4 h-4 mr-2" /> Upload New
        </Button>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 py-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0">
          {["All Models", "Drafts", "Published"].map((f, i) => (
            <button
              key={f}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                i === 0
                  ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-slate-400">
          <Button variant="ghost" size="icon" className="w-9 h-9">
            <Grid className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-9 h-9 text-slate-600 dark:text-slate-300"
          >
            <List className="w-4 h-4" />
          </Button>
          <div className="w-px h-6 bg-slate-200 dark:bg-slate-800 mx-2" />
          <Button variant="ghost" size="sm" className="gap-2">
            <Filter className="w-4 h-4" /> Filter
          </Button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {models.map((model) => (
          <ModelCard
            key={model.id}
            id={model.id}
            name={model.name}
            image={model.image}
            updatedAt={model.updated}
            status="ready"
          />
        ))}
      </div>
    </main>
  );
}
