"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Course } from "../lib/supabase";
import { getIcon } from "../lib/icons";

const CARD_GRADIENTS = [
  "from-cyan-500/10 via-transparent to-transparent",
  "from-violet-500/10 via-transparent to-transparent",
  "from-emerald-500/10 via-transparent to-transparent",
  "from-amber-500/10 via-transparent to-transparent",
];

const ICON_COLORS = [
  "text-cyan-400 bg-cyan-400/10",
  "text-violet-400 bg-violet-400/10",
  "text-emerald-400 bg-emerald-400/10",
  "text-amber-400 bg-amber-400/10",
];

const PROGRESS_COLORS = [
  "from-cyan-400 to-cyan-300",
  "from-violet-400 to-violet-300",
  "from-emerald-400 to-emerald-300",
  "from-amber-400 to-amber-300",
];

interface CourseTileProps {
  course: Course;
  index: number;
}

export function CourseTile({ course, index }: CourseTileProps) {
  const progressRef = useRef<HTMLDivElement>(null);
  const inView = useInView(progressRef, { once: true, margin: "-50px" });
  const colorIdx = index % 4;
  const Icon = getIcon(course.icon_name);

  return (
    <motion.article
      whileHover={{
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="bento-card noise-overlay p-5 flex flex-col gap-4 cursor-pointer group"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${CARD_GRADIENTS[colorIdx]} pointer-events-none rounded-2xl`}
      />

      <div className={`relative z-10 w-10 h-10 rounded-xl flex items-center justify-center ${ICON_COLORS[colorIdx]}`}>
        <Icon size={20} />
      </div>

      <div className="relative z-10 flex-1">
        <h3 className="font-semibold text-white leading-snug">
          {course.title}
        </h3>
      </div>

      <div className="relative z-10" ref={progressRef}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-[#6b7280] font-mono">Progress</span>
          <span className={`text-xs font-mono font-bold ${
            colorIdx === 0 ? "text-cyan-400" :
            colorIdx === 1 ? "text-violet-400" :
            colorIdx === 2 ? "text-emerald-400" : "text-amber-400"
          }`}>
            {course.progress}%
          </span>
        </div>

        <div className="h-1.5 w-full rounded-full bg-white/[0.06] overflow-hidden">
          <motion.div
            className={`h-full rounded-full bg-gradient-to-r ${PROGRESS_COLORS[colorIdx]}`}
            initial={{ width: "0%" }}
            animate={inView ? { width: `${course.progress}%` } : { width: "0%" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          />
        </div>
      </div>
    </motion.article>
  );
}