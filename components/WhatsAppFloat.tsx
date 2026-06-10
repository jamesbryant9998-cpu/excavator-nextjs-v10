'use client';

import Image from 'next/image';
import React from 'react';

export default function WhatsAppFloat() {
  const whatsappUrl = "https://wa.me/8618326001631?text=Hi%20Excavator%20Pro%2C%20I%20am%20looking%20for%20premium%20used%20excavators.";

  return (
    <>
      <style>{`
        @keyframes whatsapp-pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
            transform: scale(1.05);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
            transform: scale(1);
          }
        }
        
        .whatsapp-float-container {
          position: fixed;
          left: 24px;
          bottom: 24px;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .whatsapp-float-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #25D366;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: none;
          transition: all 0.3s ease;
          animation: whatsapp-pulse 2.5s infinite ease-in-out;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4);
          text-decoration: none;
        }

        .whatsapp-float-btn:hover {
          background-color: #128C7E;
          transform: translateY(-3px) scale(1.08);
          animation-play-state: paused;
          box-shadow: 0 12px 28px rgba(18, 140, 126, 0.6);
        }

        .whatsapp-float-icon {
          width: 34px;
          height: 34px;
          object-fit: contain;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15));
        }

        @media (max-width: 768px) {
          .whatsapp-float-container {
            left: 16px;
            bottom: 16px;
          }
          .whatsapp-float-btn {
            width: 52px;
            height: 52px;
          }
          .whatsapp-float-icon {
            width: 30px;
            height: 30px;
          }
        }
      `}</style>

      <div className="whatsapp-float-container">
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="whatsapp-float-btn"
          title="Chat with us on WhatsApp"
          aria-label="Chat with us on WhatsApp"
        >
          <Image 
            src="/images/whatsapp-icon.webp" 
            alt="WhatsApp Chat Icon" 
            width={34}
            height={34}
            className="whatsapp-float-icon" 
          />
        </a>
      </div>
    </>
  );
}
