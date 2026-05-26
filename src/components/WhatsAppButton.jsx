import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "../constants";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={`${CONTACT.whatsappLink}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp"
      className={`fixed bottom-6 left-6 z-50 flex items-center gap-3 px-4 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:shadow-xl hover:scale-105 transition-all duration-300 group ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-pulse-soft opacity-40 -z-10" />
      <MessageCircle size={24} className="fill-white" />
      <span className="text-sm font-medium hidden sm:inline group-hover:inline">
        WhatsApp
      </span>
    </a>
  );
}
