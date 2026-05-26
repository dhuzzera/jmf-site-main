import React from "react";
import { Zap, Droplets, Sun, Leaf, Scissors, Sparkles } from "lucide-react";
import { CONTACT } from "../constants";
import useScrollReveal from "../hooks/useScrollReveal";

const services = [
  {
    icon: Zap,
    title: "Radiofrequência Facial",
    description:
      "Estímulo de colágeno e firmeza da pele com tecnologia de ondas eletromagnéticas. Melhora a textura, reduz linhas finas e realça a beleza natural.",
    tag: "Mais procurado"
  },
  {
    icon: Droplets,
    title: "Limpeza de Pele Profunda",
    description:
      "Protocolo completo de higienização, extração e hidratação para uma pele renovada, luminosa e saudável. Inclui LED terapêutico para regeneração.",
    tag: null
  },
  {
    icon: Sun,
    title: "Peeling Diamante",
    description:
      "Renovação celular com microesfoliação controlada para tratar manchas, acne, linhas finas e textura irregular. Resultados visíveis desde a primeira sessão.",
    tag: null
  },
  {
    icon: Leaf,
    title: "Tratamento Corporal",
    description:
      "Protocolos para redução de medidas, firmeza e remodelação corporal. Combinação de técnicas manuais e tecnologia para resultados reais e duradouros.",
    tag: null
  },
  {
    icon: Scissors,
    title: "Spa Day",
    description:
      "Experiência completa de cuidado profundo e acolhedor. Um momento só seu para relaxar, renovar e reconectar corpo e mente.",
    tag: null
  },
  {
    icon: Sparkles,
    title: "Cuidado Paliativo Estético",
    description:
      "Tratamentos estéticos adaptados para pacientes em cuidados paliativos, promovendo dignidade, conforto e autoestima com protocolos seguros.",
    tag: "Diferencial"
  }
];

export default function Services() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="servicos" className="py-24 bg-brand-50/50">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">
            Serviços
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Tratamentos Especializados
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Cada protocolo é desenvolvido de forma individualizada, combinando
            as melhores técnicas e tecnologias para resultados naturais e
            duradouros.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-2xl p-7 border border-brand-100 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-100/50 transition-all duration-300 hover:-translate-y-1"
            >
              {service.tag && (
                <span className="absolute top-4 right-4 px-3 py-1 bg-gold-100 text-gold-700 text-xs font-semibold rounded-full">
                  {service.tag}
                </span>
              )}
              <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center mb-5 group-hover:bg-brand-200 group-hover:scale-110 transition-all duration-300">
                <service.icon size={24} className="text-brand-600" />
              </div>
              <h3 className="font-display text-lg font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={`${CONTACT.whatsappLink}?text=${encodeURIComponent("Olá Jussara! Vim pelo site e gostaria de saber mais sobre os tratamentos disponíveis.")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Consultar valores pelo WhatsApp"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 text-white font-semibold rounded-full hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/25"
          >
            Consultar Valores
          </a>
        </div>
      </div>
    </section>
  );
}
