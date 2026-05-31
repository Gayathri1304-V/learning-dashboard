"use client";

import { motion } from "framer-motion";
import { Clock, CheckCircle2, Target } from "lucide-react";

const STATS = [
  { label: "Hours This Week", value: "12.4", icon: Clock, color: "text-cyan-400" },
  { label: "Lessons Completed", value: "47", icon: CheckCircle2, color: "text-emerald-400" },
  { label: "Goals Hit", value: "8/10", icon: Target, color: "text-violet-400" },
];

export function StatsTile() {
  return (
    <article className="bento-card noise-overlay p-5 flex flex-col gap-5">
      <h2 className="font-display font-semibold text-sm text-white">
        This Week
      </h2>

      <div className="flex flex-col gap-4">
        {STATS.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 + 0.3, duration: 0.4 }}
              className="flex items-center gap-3"
            >
              <div className={`${stat.color} opacity-80`}>
                <Icon size={16} />
              </div>
              <div className="flex-1">
                <p className="text-xs text-[#6b7280]">{stat.label}</p>
                <p className={`font-display font-bold text-lg ${stat.color}`}>
                  {stat.value}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </article>
  );
}