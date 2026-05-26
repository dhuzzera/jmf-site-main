import React from "react";
import { Lock, Clock, UserCheck, Stethoscope } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";

const differentials = [
  {
    icon: Lock,
    title: "Privacidade Total",
    description:
      "Atendimento individual em ambiente reservado. Você é a única cliente no espaço durante toda a sessão."
  },
  {
    icon: Clock,
    title: "Horários Flexíveis",
    description:
      "Agenda personalizada para se adaptar à sua rotina, com pontualidade e respeito ao seu tempo."
  },
  {
    icon: UserCheck,
    title: "Protocolos Individuais",
    description:
      "Cada tratamento é planejado exclusivamente para você, considerando suas necessidades e objetivos."
  },
  {
    icon: Stethoscope,
    title: "Cuidado Paliativo",
    description:
      "Formação especializada para oferecer estética com sensibilidade a pacientes em tratamento de saúde."
  }
];

export default function Differentials() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="diferenciais" className="py-24 bg-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">
              Diferenciais
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
              Por que escolher meu espaço?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10">
              Mais do que tratamentos estéticos, ofereço uma experiência
              completa de cuidado. Meu espaço foi projetado para que você se
              sinta acolhida, segura e especial em cada visita.
            </p>

            <div className="space-y-6">
              {differentials.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center">
                    <item.icon size={22} className="text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual side */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-brand-100 via-brand-50 to-gold-50 p-8 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-white shadow-lg flex items-center justify-center">
                  <Lock size={36} className="text-brand-600" />
                </div>
                <h3 className="font-display text-2xl font-bold text-brand-800">
                  Espaço Exclusivo
                </h3>
                <p className="text-brand-600 max-w-xs mx-auto">
                  Ambiente pensado para seu conforto e privacidade no bairro
                  Oxford, São Bento do Sul.
                </p>
              </div>
            </div>
            {/* Decorative dots */}
            <div className="absolute -top-4 -left-4 w-24 h-24 grid grid-cols-4 gap-2 opacity-30">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-brand-400" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
