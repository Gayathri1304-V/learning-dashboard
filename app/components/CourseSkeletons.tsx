export function CourseSkeletons() {
  return (
    <>
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="bento-card p-5 flex flex-col gap-4 min-h-[176px]"
        >
          <div className="skeleton w-10 h-10 rounded-xl" />
          <div className="skeleton h-4 w-3/4 rounded-md" />
          <div className="skeleton h-3 w-1/2 rounded-md" />
          <div className="mt-auto">
            <div className="skeleton h-1.5 w-full rounded-full" />
          </div>
        </div>
      ))}
    </>
  );
}