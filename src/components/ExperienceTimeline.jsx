import { EXPERIENCE } from "../constants/data";

function TimelineEntry({ period, role, description, isFirst, structure, company, companyUrl }) {
  return (
    <div className="relative pl-12 brutalist-border border-l-8 border-t-0 border-r-0 border-b-0 py-2">
      <div
        className={`absolute left-[-18px] top-0 w-8 h-8 ${
          isFirst ? "bg-primary-container" : "bg-background dark:bg-[#181818]"
        } brutalist-border`}
        aria-hidden="true"
      />
      <span className="font-label font-bold text-on-surface-variant dark:text-gray-400">
        {period}
      </span>
      <h3 className="font-headline font-bold text-3xl uppercase flex flex-col md:flex-row md:items-center gap-3">
        {role}
        <div className="flex flex-wrap gap-3 mt-2 md:mt-0 items-center">
          {company && (
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label text-sm tracking-normal bg-primary-container text-black border-[3px] border-black px-3 py-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all uppercase w-max"
            >
              @ {company}
            </a>
          )}
          {structure && (
            <span className="font-label text-sm tracking-normal bg-[#3fff8b] text-black border-[3px] border-black px-3 py-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] uppercase w-max">
              {structure}
            </span>
          )}
        </div>
      </h3>
      <p className="font-body mt-2 text-on-surface-variant dark:text-gray-400">{description}</p>
    </div>
  );
}

export default function ExperienceTimeline() {
  return (
    <div id="experience">
      <h2 className="font-headline font-black text-6xl uppercase tracking-tighter mb-12">
        Experience
      </h2>
      <div className="space-y-12">
        {EXPERIENCE.map((entry, idx) => (
          <TimelineEntry key={idx} {...entry} />
        ))}
      </div>
    </div>
  );
}
