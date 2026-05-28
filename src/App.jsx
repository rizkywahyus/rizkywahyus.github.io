import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Lazy load below-fold sections for faster initial paint
const TechStack = lazy(() => import("./components/TechStack"));
const InternalProjects = lazy(() => import("./components/InternalProjects"));
const ExperienceTimeline = lazy(() => import("./components/ExperienceTimeline"));
const ContactForm = lazy(() => import("./components/ContactForm"));

function LazyFallback() {
  return (
    <div className="py-20 flex justify-center">
      <div className="brutalist-border bg-primary-container px-8 py-4 font-headline font-bold uppercase animate-pulse text-black">
        LOADING_MODULE...
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 md:px-12">
        <Hero />
        <Suspense fallback={<LazyFallback />}>
          <TechStack />
        </Suspense>
        <Suspense fallback={<LazyFallback />}>
          <InternalProjects />
        </Suspense>
        <Suspense fallback={<LazyFallback />}>
          <section className="py-20 flex flex-col gap-24">
            <ExperienceTimeline />
            <ContactForm />
          </section>
        </Suspense>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
