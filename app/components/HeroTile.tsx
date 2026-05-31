"use client";

import { motion } from "framer-motion";
import { Flame, Star } from "lucide-react";

const STREAK = 14;

export function HeroTile() {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  return (
    <article className="bento-card noise-overlay col-span-full lg:col-span-2 p-6 md:p-8 relative overflow-hidden min-h-[180px] flex flex-col justify-between">
      <div
        className="absolute -top-20 -left-10 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00e5ff 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-10 right-0 w-56 h-56 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)" }}
      />

      <div className="relative z-10">
        <p className="text-sm font-mono text-[#6b7280] tracking-widest uppercase mb-1">
          {greeting}
        </p>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
          Welcome back,{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
            Alex
          </span>
        </h1>
        <p className="mt-2 text-sm text-[#6b7280]">
          You&apos;ve completed 3 lessons today. Keep the momentum going!
        </p>
      </div>

      <div className="relative z-10 flex items-center gap-3 mt-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2"
        >
          <Flame size={16} className="text-amber-400" />
          <span className="font-bold text-amber-300 text-sm">
            {STREAK} Day Streak
          </span>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-2"
        >
          <Star size={16} className="text-violet-400" fill="currentColor" />
          <span className="font-bold text-violet-300 text-sm">
            2,840 XP
          </span>
        </motion.div>
      </div>
    </article>
  );
}