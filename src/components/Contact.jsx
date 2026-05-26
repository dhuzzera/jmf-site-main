import React from "react";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { CONTACT, ADDRESS, HOURS } from "../constants";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contato" className="py-24 bg-section-warm">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info side */}
          <div>
            <span className="text-sm font-semibold text-brand-600 uppercase tracking-wider">
              Contato
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
              Vamos conversar?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10">
              Entre em contato para agendar sua avaliação ou tirar dúvidas sobre
              os tratamentos. Atendimento personalizado e sem compromisso.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-brand-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Localização</h3>
                  <a
                    href="https://www.google.com/maps/place/Est%C3%A9tica+Jussara+Muehlbauer+Fran%C3%A7a/@-26.219449,-49.4073625,20z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-brand-600 transition-colors"
                  >
                    <p className="text-sm text-gray-600 mt-1">
                      {ADDRESS.street} - {ADDRESS.neighborhood}
                    </p>
                    <p className="text-sm text-gray-600">
                      {ADDRESS.city}/{ADDRESS.state} - CEP {ADDRESS.zip}
                    </p>
                    <p className="text-xs text-brand-500 mt-0.5">
                      Abrir no Google Maps →
                    </p>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                  <Phone size={22} className="text-brand-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {CONTACT.phone}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Resposta em até 24h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                  <Clock size={22} className="text-brand-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Horários</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {HOURS.weekdays}
                  </p>
                  <p className="text-sm text-gray-600">
                    {HOURS.saturday}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center flex-shrink-0">
                  <Instagram size={22} className="text-brand-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Instagram</h3>
                  <a
                    href={CONTACT.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-brand-600 hover:text-brand-700 transition-colors mt-1 inline-block"
                  >
                    {CONTACT.instagram}
                  </a>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Dicas e resultados
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA side */}
          <div className="space-y-8">
            <div className="w-full bg-gradient-to-br from-brand-600 to-brand-800 rounded-2xl p-10 text-center text-white shadow-2xl">
              <div className="w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-6">
                <Phone size={28} className="text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">
                Agende sua Avaliação
              </h3>
              <p className="text-brand-100 mb-8 leading-relaxed">
                Primeira consulta com avaliação completa da pele e indicação de
                tratamentos personalizados para seus objetivos.
              </p>
              <a
                href={`${CONTACT.whatsappLink}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chamar no WhatsApp para agendar"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-700 font-semibold rounded-full hover:bg-brand-50 transition-colors shadow-lg"
              >
                <Phone size={18} />
                Chamar no WhatsApp
              </a>
              <p className="text-xs text-brand-200 mt-4">
                Atendimento rápido e sem compromisso
              </p>
            </div>

            {/* Google Maps */}
            <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-brand-100">
              <iframe
                title="Localização JMF Estética"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d887.0!2d-49.4073625!3d-26.219449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ddd495a0a5616d%3A0x983948b22c5b8751!2sEst%C3%A9tica%20Jussara%20Muehlbauer%20Fran%C3%A7a!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
