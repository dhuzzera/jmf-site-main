import React, { useState, useEffect } from "react";
import { X, MessageCircle } from "lucide-react";
import { CONTACT } from "../constants";

export default function ExitIntent() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Only on desktop
    if (window.innerWidth < 768) return;

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !dismissed) {
        setShow(true);
      }
    };

    // Delay activation to avoid triggering on page load
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [dismissed]);

  const handleDismiss = () => {
    setShow(false);
    setDismissed(true);
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn"
      onClick={handleDismiss}
    >
      <div
        className="relative bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        <div className="w-16 h-16 mx-auto rounded-full bg-green-50 flex items-center justify-center mb-5">
          <MessageCircle size={28} className="text-green-500" />
        </div>

        <h3 className="font-display text-xl font-bold text-gray-900 mb-3">
          Já vai? 💆‍♀️
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          Que tal agendar uma avaliação gratuita? Descubra o tratamento ideal
          para você — sem compromisso.
        </p>

        <a
          href={`${CONTACT.whatsappLink}?text=${encodeURIComponent("Olá Jussara! Vi o site e gostaria de agendar uma avaliação gratuita.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors shadow-lg"
          onClick={handleDismiss}
        >
          <MessageCircle size={18} />
          Agendar Avaliação Gratuita
        </a>

        <p className="text-xs text-gray-400 mt-4">
          Resposta rápida pelo WhatsApp
        </p>
      </div>
    </div>
  );
}
