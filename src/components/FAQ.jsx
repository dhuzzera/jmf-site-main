import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";

const faqs = [
  {
    question: "Qual o valor dos tratamentos?",
    answer:
      "Os valores variam conforme o protocolo indicado para cada caso. Entre em contato pelo WhatsApp para uma avaliação personalizada e orçamento sem compromisso."
  },
  {
    question: "Preciso de avaliação antes de iniciar?",
    answer:
      "Sim! A avaliação inicial é fundamental para entender suas necessidades e indicar o melhor protocolo. Ela pode ser agendada pelo WhatsApp."
  },
  {
    question: "Quantas sessões são necessárias?",
    answer:
      "Depende do tratamento e dos objetivos. Na avaliação, traço um plano personalizado com a quantidade de sessões recomendada e a frequência ideal."
  },
  {
    question: "O atendimento é realmente individual?",
    answer:
      "Sim, 100%. Você é a única cliente no espaço durante toda a sua sessão. Isso garante privacidade total e atenção exclusiva."
  },
  {
    question: "O que é o cuidado paliativo estético?",
    answer:
      "São tratamentos estéticos adaptados para pacientes em tratamento de saúde (como quimioterapia), focando em conforto, dignidade e autoestima, sempre com protocolos seguros."
  },
  {
    question: "Como chego ao espaço?",
    answer:
      "O espaço fica na R. Francisco Pauli, 645 - Oxford, São Bento do Sul/SC, CEP 89285-675. Você pode buscar no Google Maps por esse endereço."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const { ref, isVisible } = useScrollReveal();

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">
            Dúvidas Frequentes
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Tire suas principais dúvidas antes de entrar em contato.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-brand-100 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-brand-50/50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-brand-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-48 pb-5" : "max-h-0"
                }`}
              >
                <p className="px-6 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
