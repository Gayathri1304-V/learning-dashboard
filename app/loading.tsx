export default function Loading() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#090b0f]">
      <aside className="hidden md:flex flex-col w-64 shrink-0 border-r border-white/[0.06] p-4 gap-3">
        <div className="skeleton h-8 w-32 rounded-lg mb-4" />
        {[...Array(5)].map((_, i) => (
          <div key={i} className="skeleton h-10 w-full rounded-xl" />
        ))}
      </aside>
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          <div className="skeleton col-span-full lg:col-span-2 h-48 rounded-2xl" />
          <div className="skeleton h-48 rounded-2xl" />
          {[...Array(4)].map((_, i) => (
            <div key={i} className="skeleton h-44 rounded-2xl" />
          ))}
        </div>
      </main>
    </div>
  );
}