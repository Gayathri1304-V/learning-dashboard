"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";

function generateActivity() {
  const weeks = 10;
  const grid: number[][] = [];
  for (let w = 0; w < weeks; w++) {
    const week: number[] = [];
    for (let d = 0; d < 7; d++) {
      week.push(Math.random() < 0.3 ? 0 : Math.floor(Math.random() * 4) + 1);
    }
    grid.push(week);
  }
  return grid;
}

const ACTIVITY_DATA = generateActivity();

const INTENSITY = [
  "bg-white/[0.04]",
  "bg-cyan-500/20",
  "bg-cyan-500/40",
  "bg-cyan-500/60",
  "bg-cyan-400/80",
];

export function ActivityTile() {
  return (
    <article className="bento-card noise-overlay p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity size={16} className="text-cyan-400" />
          <h2 className="font-display font-semibold text-sm text-white">
            Learning Activity
          </h2>
        </div>
        <span className="text-xs font-mono text-[#6b7280]">Last 10 weeks</span>
      </div>

      <div className="flex gap-1">
        {ACTIVITY_DATA.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((level, di) => (
              <motion.div
                key={di}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: (wi * 7 + di) * 0.005,
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                }}
                whileHover={{ scale: 1.4 }}
                className={`w-3 h-3 rounded-sm ${INTENSITY[level]} cursor-pointer`}
                title={`Level ${level}`}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-1.5 mt-auto">
        <span className="text-xs text-[#6b7280]">Less</span>
        {INTENSITY.map((cls, i) => (
          <div key={i} className={`w-3 h-3 rounded-sm ${cls}`} />
        ))}
        <span className="text-xs text-[#6b7280]">More</span>
      </div>
    </article>
  );
}