"use client";
import { useRouter } from "next/navigation";
import Button from "./button";
import { Box } from "lucide-react";

const Nav = () => {
  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-300">
      <div className="absolute inset-0 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md border-b border-white/10 dark:border-white/5" />

      <div className="relative flex items-center justify-between px-6 py-4 md:px-10 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" href="/" className="rounded-full">
            <Box className="w-6 h-6 text-primary" />
          </Button>

          <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            AxoXR
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-sm font-medium text-slate-500 dark:text-slate-400">
            Don’t have an account?
          </span>

          <Button
            variant="default"
            size="sm"
            href="/signup"
            className="rounded-full px-6"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
