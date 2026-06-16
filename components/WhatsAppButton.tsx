"use client";

import React from "react";
import { MessageCircle, Tag } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "8618949020107";
  const message = "Hello, I am interested in your heavy excavators. Could you please provide a free quote and machinery inspection report?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* 1. LUXOPACK STYLE: GOLD FLOATING CTA (Bottom Right) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] flex items-center justify-center 
                   bg-[#C9A84C] text-[#0b0f19] px-6 py-3.5 rounded-full 
                   font-black text-xs uppercase tracking-widest
                   shadow-[0_8px_32px_rgba(201,168,76,0.5)]
                   hover:scale-105 transition-all duration-300
                   group animate-gold-pulse"
      >
        <Tag size={16} className="mr-2" />
        <span>Get a Free Quote</span>
        
        <style jsx global>{`
          @keyframes gold-pulse {
            0%, 100% { box-shadow: 0 8px 32px rgba(201, 168, 76, 0.5); }
            50% { box-shadow: 0 8px 48px rgba(201, 168, 76, 0.85); }
          }
          .animate-gold-pulse {
            animation: gold-pulse 2.5s infinite;
          }
        `}</style>
      </a>

      {/* 2. LUXOPACK STYLE: GREEN WHATSAPP ICON (Bottom Left) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 z-[100] group"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-xl hover:scale-110 transition-transform duration-300">
          {/* Ring Pulse Effect */}
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
          
          <MessageCircle size={28} className="text-white fill-white/10" />
          
          {/* Tooltip on Hover */}
          <div className="absolute left-full ml-4 bg-white text-gray-900 text-[10px] font-bold py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0 whitespace-nowrap shadow-2xl pointer-events-none border border-gray-100">
            Chat with Yard Specialist 🏭
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rotate-45 border-l border-b border-gray-100"></div>
          </div>
        </div>
      </a>
    </>
  );
}
