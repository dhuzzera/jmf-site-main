import React, { useState, useEffect, useMemo } from "react";
import { Menu, X } from "lucide-react";
import { CONTACT } from "../constants";
import useActiveSection from "../hooks/useActiveSection";

const navLinks = [
  { label: "Início", href: "#inicio", id: "inicio" },
  { label: "Sobre", href: "#sobre", id: "sobre" },
  { label: "Serviços", href: "#servicos", id: "servicos" },
  { label: "Diferenciais", href: "#diferenciais", id: "diferenciais" },
  { label: "Depoimentos", href: "#depoimentos", id: "depoimentos" },
  { label: "Contato", href: "#contato", id: "contato" }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sectionIds = useMemo(() => navLinks.map((l) => l.id), []);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src="/logo-jmf.png"
            alt="Logo JMF Estética"
            width="48"
            height="48"
            className="h-12 w-auto object-contain"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? "text-brand-700 border-b-2 border-brand-600 pb-0.5"
                  : "text-gray-600 hover:text-brand-700"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`${CONTACT.whatsappLink}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar pelo WhatsApp"
            className="ml-2 px-5 py-2.5 bg-brand-600 text-white text-sm font-medium rounded-full hover:bg-brand-700 transition-colors shadow-sm"
          >
            Agendar
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-brand-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu with animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-brand-100 shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-1" aria-label="Navegação mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`py-3 font-medium transition-colors border-b border-gray-50 last:border-0 ${
                  activeSection === link.id
                    ? "text-brand-700"
                    : "text-gray-700 hover:text-brand-700"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`${CONTACT.whatsappLink}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar pelo WhatsApp"
              className="mt-3 px-5 py-3 bg-brand-600 text-white text-center font-medium rounded-full hover:bg-brand-700 transition-colors"
            >
              Agendar pelo WhatsApp
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
