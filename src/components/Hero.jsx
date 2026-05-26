import React, { useEffect, useState } from "react";
import { Sparkles, ExternalLink } from "lucide-react";
import { CONTACT, SITE } from "../constants";
import useScrollReveal from "../hooks/useScrollReveal";
import useCountUp from "../hooks/useCountUp";

function AnimatedStat({ number, suffix, label, start }) {
  const count = useCountUp(number, start);
  return (
    <div className="text-center">
      <p className="text-2xl font-bold text-brand-800">
        {count}{suffix}
      </p>
      <p className="text-xs text-gray-500 mt-1">{label}</p>
    </div>
  );
}

export default function Hero() {
  const { ref, isVisible } = useScrollReveal();
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-gold-50" />

      {/* Decorative elements with parallax */}
      <div
        className="absolute top-20 right-10 w-72 h-72 bg-brand-200/30 rounded-full blur-3xl"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl"
        style={{ transform: `translateY(${scrollY * -0.1}px)` }}
      />

      <div
        ref={ref}
        className={`relative z-10 max-w-5xl mx-auto px-6 text-center py-32 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100/60 rounded-full mb-8">
          <Sparkles size={16} className="text-brand-600" />
          <span className="text-sm font-medium text-brand-700">
            Desde {SITE.since} em São Bento do Sul/SC
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-900 leading-tight mb-6">
          Estética Avançada
          <br />
          <span className="text-brand-600">& Humanizada</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Tratamentos personalizados com tecnologia de ponta e acolhimento
          humanizado. Sua beleza e bem-estar em mãos experientes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`${CONTACT.whatsappLink}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar consulta pelo WhatsApp"
            className="px-8 py-4 bg-brand-600 text-white font-semibold rounded-full hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/25 hover:shadow-xl hover:shadow-brand-600/30 hover:-translate-y-0.5"
          >
            Agendar Consulta
          </a>
          <a
            href="#servicos"
            className="px-8 py-4 border-2 border-brand-300 text-brand-700 font-semibold rounded-full hover:bg-brand-50 transition-all"
          >
            Conhecer Serviços
          </a>
        </div>

        {/* Trust indicators with animated counters */}
        <div ref={statsRef} className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
          <AnimatedStat number={new Date().getFullYear() - SITE.since} suffix="+" label="Anos de experiência" start={statsVisible} />
          <AnimatedStat number={5000} suffix="+" label="Clientes atendidas" start={statsVisible} />
          <div className="text-center">
            <p className="text-2xl font-bold text-brand-800">100%</p>
            <p className="text-xs text-gray-500 mt-1">Atendimento reservado</p>
          </div>
          <a
            href="https://www.google.com/maps/place/Est%C3%A9tica+Jussara+Muehlbauer+Fran%C3%A7a/@-26.219449,-49.4073625,20z"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center group"
          >
            <p className="text-2xl font-bold text-brand-800">⭐ 5.0</p>
            <p className="text-xs text-gray-500 mt-1 group-hover:text-brand-600 transition-colors flex items-center justify-center gap-1">
              Avaliação Google <ExternalLink size={10} />
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
