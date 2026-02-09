"use client";

import Button from "@/components/button";
import { Download, X } from "lucide-react";

export default function QRViewerPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center p-4 overflow-y-auto mt-30">
      <div className="flex flex-col w-full max-w-[480px] animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-slate-900 dark:text-white text-[32px] font-bold tracking-tight">
            View in VR
          </h1>

          <p className="text-slate-500 dark:text-slate-400 max-w-[360px] mt-2 mb-8">
            Scan this QR code with your mobile device to instantly view this 3D
            model in VR mode.
          </p>
        </div>

        {/* QR Card */}
        <div className="flex justify-center mb-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <div
              className="w-64 h-64 rounded-lg bg-center bg-contain bg-no-repeat bg-slate-100 dark:bg-white"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDtaYojidBpq8_eNLrRVN08i-f_OrqHZPcjtFpJFQ7LuzvVU_0Z8_FRbYyD-WpXkZWD_R1AQe19gl-w-mS1Vad_LfHQsHYzW7bkgKMt9ZRA3dmwYLuvfkSVpMnNvrn59yCHEKj65DAldUvidS-5kIDcko7hTCZd0bogGFpEd_PYSJRSJilRRUPBQF6cSQu169lMXMGSiyw1DS5xGm4SzMXlnF3maDUej-jbvYmeJn9Rtrle3Kx3gWdt1Sv6BjcoX4s28OuZ6_YIB9s")`,
              }}
            />
          </div>
        </div>

        {/* Download Button */}
        <div className="px-4">
          <Button className="w-full h-12 bg-primary hover:bg-blue-600 text-white rounded-xl flex items-center justify-center gap-2 font-bold transition shadow-md hover:shadow-lg">
            <Download className="w-5 h-5" />
            Download QR Code
          </Button>
        </div>

        {/* Cancel */}
        <button className="mt-6 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 text-sm font-medium transition">
          Cancel
        </button>
      </div>
    </main>
  );
}
