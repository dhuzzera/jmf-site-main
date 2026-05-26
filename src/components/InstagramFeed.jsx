import React from "react";
import { Instagram, ExternalLink } from "lucide-react";
import { CONTACT } from "../constants";
import useScrollReveal from "../hooks/useScrollReveal";

const highlights = [
  {
    title: "Radiofrequência Facial",
    description: "Quem ama, se cuida. Estimula colágeno e melhora a firmeza da pele.",
    category: "Facial"
  },
  {
    title: "Antes e Depois — Acne",
    description: "Tratamento com limpeza profunda, peeling diamante, LED terapêutico e cosméticos naturais.",
    category: "Resultados"
  },
  {
    title: "Tratamento Corporal",
    description: "Pele mais firme, redução de medidas e mais leveza. Transformações reais em 3 meses.",
    category: "Corporal"
  },
  {
    title: "Spa Day",
    description: "Cuidado profundo e acolhedor. O toque consciente acalma, o cuidado organiza.",
    category: "Bem-estar"
  },
  {
    title: "Spa Infantil Natural",
    description: "Kit com máscara de argila amarela e tônico de camomila. Cuidado seguro para os pequenos.",
    category: "Infantil"
  },
  {
    title: "Cosméticos Naturais",
    description: "Linha Muehlbauer — produtos aromaterapêuticos que respeitam a natureza da sua pele.",
    category: "Produtos"
  }
];

export default function InstagramFeed() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 bg-section-rich">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">
            Resultados
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Acompanhe no Instagram
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Confira resultados reais, dicas de cuidados e o dia a dia do espaço.
            Siga para não perder nenhuma novidade.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group relative bg-white rounded-2xl overflow-hidden border border-brand-100 hover:shadow-lg transition-all duration-300"
            >
              {/* Placeholder for image — gradient background */}
              <div className="aspect-square bg-gradient-to-br from-brand-100 via-brand-50 to-gold-50 flex items-center justify-center p-6">
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-brand-200/60 text-brand-700 text-xs font-semibold rounded-full mb-3">
                    {item.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-brand-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={CONTACT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-brand-300 text-brand-700 font-semibold rounded-full hover:bg-brand-50 transition-all"
          >
            <Instagram size={20} />
            Seguir {CONTACT.instagram}
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
