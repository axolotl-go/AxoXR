"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Button from "@/components/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      setIsLoading(false);
      router.push("/signup");
    }, 1500);
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md animate-slide-up">
        {/* Header */}
        <header className="text-center mb-8 space-y-2">
          <h1 className="text-4xl font-black bg-linear-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Log in to manage your 3D assets
          </p>
        </header>

        {/* Form Card */}
        <div className="glass-panel p-8 rounded-2xl shadow-2xl shadow-primary/5">
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">
                Email Address
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="bg-white/50 dark:bg-black/20"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Password
                </label>
                <a
                  className="text-xs text-primary hover:text-blue-500 transition-colors"
                  href="#"
                >
                  Forgot password?
                </a>
              </div>

              <div className="relative">
                <Input
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="bg-white/50 dark:bg-black/20 pr-10"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
                >
                  {show ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              variant="default"
              size="lg"
              className="w-full mt-4"
              isLoading={isLoading}
            >
              Log In
            </Button>
          </form>
        </div>

        <p className="text-center text-sm text-slate-500 mt-8">
          Do you dont have a account{" "}
          <a href="/signup" className="text-primary hover:underline">
            Sign Up
          </a>
        </p>

        <p className="text-center text-sm text-slate-500 mt-8">
          By clicking continue, you agree to our{" "}
          <a href="#" className="text-primary hover:underline">
            Terms of Service
          </a>
        </p>
      </div>
    </div>
  );
}
