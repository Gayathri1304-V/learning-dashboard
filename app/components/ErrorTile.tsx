"use client";

import { AlertTriangle } from "lucide-react";

interface ErrorTileProps {
  message: string;
}

export function ErrorTile({ message }: ErrorTileProps) {
  return (
    <article className="bento-card col-span-full p-6 border-red-500/20 flex items-center gap-4">
      <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
        <AlertTriangle size={18} className="text-red-400" />
      </div>
      <div>
        <p className="font-display font-semibold text-red-300 text-sm">
          Database connection failed
        </p>
        <p className="text-xs text-[#6b7280] mt-0.5">{message}</p>
      </div>
    </article>
  );
}