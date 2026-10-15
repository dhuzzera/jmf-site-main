import React, { lazy, Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WaveDivider from "./components/WaveDivider";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import ExitIntent from "./components/ExitIntent";

// Lazy load sections below the fold
const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const NaturalProducts = lazy(() => import("./components/NaturalProducts"));
const Differentials = lazy(() => import("./components/Differentials"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const InstagramFeed = lazy(() => import("./components/InstagramFeed"));
const FAQ = lazy(() => import("./components/FAQ"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function SectionFallback() {
  return (
    <div className="py-24 flex items-center justify-center">
      <div className="w-8 h-8 border-3 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <div className="font-sans text-gray-800 antialiased">
      {/* Skip navigation for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-600 focus:text-white focus:rounded-lg"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <WaveDivider color="brand" />
          <Services />
          <NaturalProducts />
          <WaveDivider color="brand" flip />
          <Differentials />
          <WaveDivider color="brand" />
          <Testimonials />
          <InstagramFeed />
          <FAQ />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <div className="border-t border-gray-200 px-4 py-3 text-center text-xs text-gray-500">
        Desenvolvido por <a href="https://www.instagram.com/emf.digital/" target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">@emf.digital</a>
      </div>
      <ScrollToTop />
      <WhatsAppButton />
      <ExitIntent />
    </div>
  );
}
