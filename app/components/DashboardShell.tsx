"use client";

import { motion } from "framer-motion";
import type { Course } from "../lib/supabase";
import { Sidebar, BottomNav } from "./Sidebar";
import { HeroTile } from "./HeroTile";
import { CourseTile } from "./CourseTile";
import { ActivityTile } from "./ActivityTile";
import { StatsTile } from "./StatsTile";
import { ErrorTile } from "./ErrorTile";

interface DashboardShellProps {
  courses: Course[];
  fetchError: string | null;
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const tileVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 260,
      damping: 22,
    },
  },
};

export function DashboardShell({ courses, fetchError }: DashboardShellProps) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#090b0f]">
      <Sidebar />

      <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
        <header className="md:hidden sticky top-0 z-40 flex items-center justify-between px-4 py-3 bg-[#090b0f]/80 backdrop-blur-md border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">L</span>
            </div>
            <span className="font-bold text-sm text-white">LearnOS</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#1a2030] border border-white/[0.08]" />
        </header>

        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4 md:p-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={tileVariants} className="col-span-full lg:col-span-2">
            <HeroTile />
          </motion.div>

          <motion.div variants={tileVariants}>
            <StatsTile />
          </motion.div>

          <motion.div variants={tileVariants} className="md:col-span-2 lg:col-span-1">
            <ActivityTile />
          </motion.div>

          {fetchError && (
            <motion.div variants={tileVariants} className="col-span-full">
              <ErrorTile message={fetchError} />
            </motion.div>
          )}

          {courses.map((course, idx) => (
            <motion.div key={course.id} variants={tileVariants}>
              <CourseTile course={course} index={idx} />
            </motion.div>
          ))}

          {!fetchError && courses.length === 0 && (
            <motion.div variants={tileVariants} className="col-span-full bento-card p-8 text-center">
              <p className="text-[#6b7280] text-sm">
                No courses found. Add some rows to your Supabase{" "}
                <code className="font-mono text-cyan-400">courses</code> table.
              </p>
            </motion.div>
          )}
        </motion.section>
      </main>

      <BottomNav />
    </div>
  );
}