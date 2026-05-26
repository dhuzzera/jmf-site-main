import React from "react";
import { Heart } from "lucide-react";
import { CONTACT, ADDRESS } from "../constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src="/logo-full.png"
              alt="Logo JMF Estética"
              width="56"
              height="56"
              className="h-16 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-brand-300 text-sm leading-relaxed">
              Estética avançada e humanizada em São Bento do Sul/SC.
              Transformando vidas através do cuidado desde 2006.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-brand-200">
              Navegação
            </h4>
            <ul className="space-y-2">
              {["Início", "Sobre", "Serviços", "Contato"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                    className="text-sm text-brand-300 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-brand-200">
              Serviços
            </h4>
            <ul className="space-y-2">
              {[
                "Radiofrequência Facial",
                "Limpeza de Pele",
                "Peeling Diamante",
                "Tratamento Corporal",
                "Spa Day",
                "Cuidado Paliativo"
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-brand-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-brand-200">
              Contato
            </h4>
            <ul className="space-y-2 text-sm text-brand-300">
              <li>{ADDRESS.street} - {ADDRESS.neighborhood}</li>
              <li>{ADDRESS.city}/{ADDRESS.state}</li>
              <li>{CONTACT.phone}</li>
              <li>
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {CONTACT.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-brand-400">
            © {currentYear} Jussara Muehlbauer França. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-brand-500 flex items-center gap-1">
            Feito com <Heart size={12} className="text-brand-400" /> em São
            Bento do Sul
          </p>
        </div>
      </div>
    </footer>
  );
}
