import React from "react";
import { Award, Heart, Shield } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="sobre" className="py-24 bg-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-brand-100 to-brand-200 overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-brand-300/50 flex items-center justify-center mb-4">
                    <Heart size={48} className="text-brand-700" />
                  </div>
                  <p className="text-brand-700 font-display text-lg italic">
                    "Cuidar é a minha essência"
                  </p>
                </div>
              </div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-5 border border-brand-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center">
                  <Award size={24} className="text-gold-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Certificada</p>
                  <p className="text-sm text-gray-500">Estética Avançada</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">
              Sobre mim
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
              Jussara Muehlbauer França
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Desde 2006, dedico minha carreira à estética avançada e humanizada,
              unindo ciência e sensibilidade para oferecer tratamentos que
              transformam não apenas a aparência, mas a autoestima e a qualidade
              de vida das minhas clientes.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sou especialista em cuidados paliativos estéticos, oferecendo
              tratamentos adaptados com segurança e acolhimento para pacientes
              em tratamento de saúde. Meu espaço na R. Francisco Pauli, 645 -
              Sala 06, no bairro Oxford, foi pensado para proporcionar
              privacidade, conforto e um atendimento verdadeiramente individual.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Também desenvolvo a linha Muehlbauer Cosméticos Naturais —
              produtos aromaterapêuticos criados para complementar os
              tratamentos com ingredientes que respeitam a natureza da sua pele.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Acredito que a verdadeira beleza nasce do equilíbrio entre cuidado
              externo e bem-estar interno. Por isso, meus protocolos combinam
              tecnologias de ponta com uma abordagem humanizada e atenciosa.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  icon: Award,
                  title: "Formação",
                  desc: "Especialista em estética avançada"
                },
                {
                  icon: Heart,
                  title: "Cuidado",
                  desc: "Atendimento humanizado e acolhedor"
                },
                {
                  icon: Shield,
                  title: "Segurança",
                  desc: "Protocolos seguros e atualizados"
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-brand-50 border border-brand-100"
                >
                  <item.icon size={20} className="text-brand-600 mb-2" />
                  <p className="font-semibold text-sm text-gray-800">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
