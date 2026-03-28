import { useState, useEffect } from "react";

function smoothScrollTo(targetY, duration = 700) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  let startTime = null;

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

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show button when user has scrolled past half the page
      const scrolled = window.scrollY;
      const halfPage = document.body.scrollHeight / 2;
      setVisible(scrolled > halfPage);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    smoothScrollTo(0, 750);
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      className={`
        fixed bottom-8 right-8 z-50
        bg-yellow-400 text-black
        border-[3px] border-black dark:border-black
        shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
        hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
        active:translate-x-[5px] active:translate-y-[5px] active:shadow-none
        w-14 h-14 flex items-center justify-center
        font-headline font-bold
        transition-all duration-200
        ${visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
        }
      `}
      style={{ transition: "opacity 0.35s ease, transform 0.35s ease, box-shadow 0.15s ease" }}
    >
      <span className="material-symbols-outlined text-2xl" aria-hidden="true">
        arrow_upward
      </span>
    </button>
  );
}
