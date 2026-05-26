import React from "react";
import { Leaf, Droplets, Baby, FlaskConical } from "lucide-react";
import { CONTACT } from "../constants";
import useScrollReveal from "../hooks/useScrollReveal";

const products = [
  {
    icon: Leaf,
    title: "Cosméticos Aromaterapêuticos",
    description: "Formulações exclusivas com óleos essenciais que promovem bem-estar sensorial durante e após os tratamentos."
  },
  {
    icon: Droplets,
    title: "Máscaras e Tônicos",
    description: "Produtos naturais para uso diário que complementam os protocolos profissionais e mantêm os resultados em casa."
  },
  {
    icon: Baby,
    title: "Linha Infantil Spa Natural",
    description: "Kit com máscara de argila amarela e tônico calmante de camomila. Cuidado seguro e lúdico para crianças a partir de 5 anos."
  },
  {
    icon: FlaskConical,
    title: "Calm Ink — Uso Profissional",
    description: "Blend de óleos essenciais para difusor ultrassônico. Promove relaxamento e conforto sensorial durante procedimentos."
  }
];

export default function NaturalProducts() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 bg-gradient-to-br from-green-50/40 via-white to-brand-50 bg-pattern">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual side */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-green-50 via-brand-50 to-gold-50 p-8 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-white shadow-lg flex items-center justify-center">
                  <Leaf size={36} className="text-green-600" />
                </div>
                <h3 className="font-display text-2xl font-bold text-brand-800">
                  Muehlbauer
                </h3>
                <p className="text-sm text-brand-600 font-medium">
                  Cosméticos Naturais
                </p>
                <p className="text-brand-600/80 text-sm max-w-xs mx-auto">
                  Ingredientes que respeitam a natureza da sua pele.
                  Aromaterapia personalizada.
                </p>
              </div>
            </div>
            {/* Decorative leaf elements */}
            <div className="absolute -bottom-3 -left-3 w-16 h-16 rounded-full bg-green-100/60 blur-xl" />
            <div className="absolute -top-3 -right-3 w-20 h-20 rounded-full bg-gold-100/60 blur-xl" />
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">
              Linha Própria
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
              Cosméticos Naturais Muehlbauer
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10">
              Desenvolvi uma linha de cosméticos aromaterapêuticos para
              complementar os tratamentos e levar o cuidado profissional para
              o dia a dia das minhas clientes. Produtos com propósito e
              ingredientes que respeitam sua pele.
            </p>

            <div className="space-y-5">
              {products.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center">
                    <item.icon size={18} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-0.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href={`${CONTACT.whatsappLink}?text=${encodeURIComponent("Olá Jussara! Vim pelo site e gostaria de saber mais sobre os cosméticos naturais Muehlbauer.")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Saber mais sobre cosméticos pelo WhatsApp"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-green-200 text-green-700 font-semibold rounded-full hover:bg-green-50 transition-all"
              >
                <Leaf size={18} />
                Conhecer os Produtos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
