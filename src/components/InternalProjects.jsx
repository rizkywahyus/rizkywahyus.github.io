import { useState, useRef, useEffect } from "react";
import { INTERNAL_PROJECTS } from "../constants/data";

// Custom eased smooth scroll — slower mid-scroll, snappy at the end
function smoothScrollTo(targetY, duration = 600) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  let startTime = null;

  // easeInOutCubic: snappy start/end, smooth in the middle
  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export default function InternalProjects() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);
  const tbodyRef = useRef(null);

  // Animate rows stepping in (staggered) when expanding
  useEffect(() => {
    if (!tbodyRef.current) return;
    const rows = tbodyRef.current.querySelectorAll("tr");
    rows.forEach((row, i) => {
      row.style.opacity = "0";
      row.style.transform = "translateY(12px)";
      row.style.transition = "none";
      const delay = i < 3 ? 0 : (i - 3) * 60; // first 3 snap in instantly; extras stagger
      setTimeout(() => {
        row.style.transition = "opacity 0.35s ease, transform 0.35s ease";
        row.style.opacity = "1";
        row.style.transform = "translateY(0)";
      }, delay);
    });
  }, [visibleCount]);

  const handleToggle = () => {
    if (isExpanded) {
      // Collapse: scroll to top of section first, then remove rows
      if (sectionRef.current) {
        const targetY =
          sectionRef.current.getBoundingClientRect().top +
          window.scrollY -
          90; // 90 = navbar offset
        smoothScrollTo(targetY, 650);
      }
      setTimeout(() => {
        setVisibleCount(3);
        setIsExpanded(false);
      }, 350); // wait for scroll to settle before collapsing
    } else {
      // Expand: show all rows, then scroll button into view smoothly
      setVisibleCount(INTERNAL_PROJECTS.length);
      setIsExpanded(true);
      setTimeout(() => {
        if (buttonRef.current) {
          const targetY =
            buttonRef.current.getBoundingClientRect().bottom +
            window.scrollY -
            window.innerHeight +
            40;
          smoothScrollTo(targetY, 700);
        }
      }, 150); // slight delay so rows have started rendering
    }
  };

  const displayedProjects = INTERNAL_PROJECTS.slice(0, visibleCount);

  return (
    <section id="internal-projects" ref={sectionRef} className="py-20">
      <h2 className="font-headline font-bold text-4xl md:text-6xl uppercase tracking-tighter mb-12 underline decoration-[6px] md:decoration-[8px] decoration-primary-container underline-offset-8">
        Relevant_Projects
      </h2>
      <div className="brutalist-border bg-background dark:bg-[#181818] overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-black text-white dark:bg-white dark:text-black border-b-[3px] border-black dark:border-white">
              <th className="py-4 px-6 font-headline font-bold uppercase tracking-wider text-xl w-24">Year</th>
              <th className="py-4 px-6 font-headline font-bold uppercase tracking-wider text-xl w-64">Client</th>
              <th className="py-4 px-6 font-headline font-bold uppercase tracking-wider text-xl">Project Details</th>
              <th className="py-4 px-6 font-headline font-bold uppercase tracking-wider text-xl w-48">Role</th>
            </tr>
          </thead>
          <tbody ref={tbodyRef}>
            {displayedProjects.map((proj, idx) => (
              <tr
                key={idx}
                className="border-b-2 border-dashed border-black dark:border-white hover:bg-primary-container hover:text-black transition-colors group cursor-default"
              >
                <td className="py-6 px-6 font-mono font-bold text-xl">{proj.year}</td>
                <td className="py-6 px-6 font-headline font-bold text-lg leading-tight w-64">
                  {proj.client}
                </td>
                <td className="py-6 px-6">
                  <div className="flex flex-col gap-3">
                    <span className="font-body text-xl font-medium tracking-tight leading-snug">
                      {proj.project}
                    </span>
                    {proj.tech.length > 0 && (
                      <div className="flex gap-2 flex-wrap">
                        {proj.tech.map(t => (
                          <span key={t} className="font-label text-xs font-bold border-2 border-black dark:border-white group-hover:border-black px-2 py-0.5 uppercase tracking-wider">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </td>
                <td className="py-6 px-6 font-body font-bold align-top w-48">
                  <span className="border-[3px] border-black dark:border-white text-black dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black px-3 py-1 text-sm inline-block text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] group-hover:shadow-none translate-x-0 translate-y-0 group-hover:translate-x-[4px] group-hover:translate-y-[4px] transition-all">
                    {proj.role}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {INTERNAL_PROJECTS.length > 3 && (
        <div className="mt-10 flex justify-center">
          <button
            ref={buttonRef}
            onClick={handleToggle}
            className="bg-primary-container text-black font-headline font-bold text-lg uppercase px-8 py-4 brutalist-border !border-black dark:!border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none transition-all flex items-center gap-2"
          >
            {isExpanded ? "Show Less" : "Load More Projects"}
            <span className="material-symbols-outlined" aria-hidden="true">
              {isExpanded ? "expand_less" : "expand_more"}
            </span>
          </button>
        </div>
      )}
    </section>
  );
}
