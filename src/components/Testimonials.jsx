import React from "react";
import { Star, Quote } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";

const testimonials = [
  {
    name: "Mariana S.",
    text: "A Jussara é incrível! O ambiente é super acolhedor e os resultados da radiofrequência são visíveis desde a primeira sessão. Me sinto renovada a cada visita.",
    service: "Radiofrequência Facial"
  },
  {
    name: "Cláudia R.",
    text: "Profissional excepcional. O cuidado e a atenção que ela dedica a cada detalhe fazem toda a diferença. Minha pele nunca esteve tão bonita. Recomendo de olhos fechados!",
    service: "Limpeza de Pele + LED"
  },
  {
    name: "Fernanda L.",
    text: "Encontrei na Jussara não só uma esteticista, mas uma profissional que realmente se importa com o bem-estar das suas clientes. O Spa Day é uma experiência transformadora.",
    service: "Spa Day"
  }
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="depoimentos" className="py-24 bg-brand-50/50">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            O que dizem minhas clientes
          </h2>
          <p className="text-gray-600 leading-relaxed">
            A satisfação das minhas clientes é minha maior motivação. Confira
            alguns relatos de quem já experimentou nossos tratamentos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl p-7 border border-brand-100 shadow-sm hover:shadow-md hover:-translate-y-1 hover:rotate-[0.5deg] transition-all duration-300"
            >
              <Quote size={24} className="text-brand-200 mb-4" />
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-brand-600">{testimonial.service}</p>
                </div>
                <div className="flex gap-0.5" aria-label="5 estrelas">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-gold-400 fill-gold-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
