import { SITE_CONFIG, SOCIAL_LINKS } from "../constants/data";

export default function Footer() {
  return (
    <footer className="bg-black dark:bg-[#111111] border-t-4 border-black dark:border-white mt-20 transition-colors">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 gap-6 max-w-7xl mx-auto font-headline font-medium uppercase text-sm tracking-widest">
        {/* Copyright */}
        <div className="text-white">{SITE_CONFIG.copyright}</div>

        {/* Social Links */}
        <div className="flex gap-8">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Tagline */}
        <div className="text-yellow-400 underline decoration-4">
          {SITE_CONFIG.tagline}
        </div>
      </div>
    </footer>
  );
}
