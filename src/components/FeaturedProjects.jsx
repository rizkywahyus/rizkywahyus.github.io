import { PROJECTS } from "../constants/data";

function ProjectCard({ badge, badgeClass, title, description, tags, image, imageAlt, reversed }) {
  return (
    <div
      className={`flex flex-col ${
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      } gap-12 items-start`}
    >
      {/* Project Image */}
      <div className="w-full md:w-3/5 brutalist-border bg-black brutalist-shadow relative overflow-hidden aspect-video">
        <img
          alt={imageAlt}
          className="w-full h-full object-cover opacity-80"
          src={image}
          loading="lazy"
          decoding="async"
          width="720"
          height="405"
        />
      </div>

      {/* Project Info */}
      <div className="w-full md:w-2/5 flex flex-col gap-6">
        <span
          className={`font-label font-bold px-3 py-1 self-start ${badgeClass}`}
        >
          {badge}
        </span>
        <h3 className="font-headline font-black text-5xl uppercase tracking-tighter">
          {title}
        </h3>
        <p className="font-body text-lg text-on-surface-variant dark:text-gray-400">
          {description}
        </p>
        <div className="flex gap-4 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-label text-sm border-2 border-black dark:border-white px-2 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          type="button"
          className="font-headline font-bold uppercase underline decoration-4 underline-offset-4 hover:text-secondary dark:hover:text-blue-400 flex items-center gap-2 self-start transition-colors"
        >
          View Case Study{" "}
          <span className="material-symbols-outlined" aria-hidden="true">
            open_in_new
          </span>
        </button>
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="font-headline font-bold text-5xl md:text-7xl uppercase tracking-tighter mb-16 underline decoration-[8px] decoration-primary-container underline-offset-8">
        Featured_Work
      </h2>
      <div className="flex flex-col gap-24">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
