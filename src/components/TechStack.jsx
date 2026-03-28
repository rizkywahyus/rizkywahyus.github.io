import { TECH_STACK } from "../constants/data";

function TechCard({ name, icon, iconFill, colorClass }) {
  return (
    <div
      className={`${colorClass} brutalist-border p-6 brutalist-shadow-hover transition-all flex flex-col gap-4`}
    >
      <span
        className="material-symbols-outlined text-4xl"
        style={iconFill ? { fontVariationSettings: "'FILL' 1" } : undefined}
        aria-hidden="true"
      >
        {icon}
      </span>
      <h3 className="font-headline font-black text-2xl uppercase">{name}</h3>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20">
      {/* Section Header */}
      <div className="flex items-center gap-6 mb-16">
        <h2 className="font-headline font-bold text-5xl md:text-7xl uppercase tracking-tighter bg-black dark:bg-[#ffffff] text-white dark:text-black px-4 py-2 transition-colors">
          Tech_Stack
        </h2>
        <div className="h-1 bg-black dark:bg-[#ffffff] grow transition-colors" aria-hidden="true" />
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {TECH_STACK.map((tech) => (
          <TechCard key={tech.name} {...tech} />
        ))}
      </div>
    </section>
  );
}
