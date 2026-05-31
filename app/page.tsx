import { Suspense } from "react";
import { createServerClient } from "./lib/supabase";
import type { Course } from "./lib/supabase";
import { DashboardShell } from "./components/DashboardShell";
import { CourseSkeletons } from "./components/CourseSkeletons";

async function fetchCourses(): Promise<{
  data: Course[] | null;
  error: string | null;
}> {
  try {
    const supabase = createServerClient();
    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      return { data: null, error: error.message };
    }

    return { data, error: null };
  } catch (err) {
    return {
      data: null,
      error:
        err instanceof Error
          ? err.message
          : "Failed to connect to database",
    };
  }
}

export default async function DashboardPage() {
  const { data: courses, error } = await fetchCourses();

  return (
    <Suspense fallback={<CourseSkeletons />}>
      <DashboardShell courses={courses ?? []} fetchError={error} />
    </Suspense>
  );
}