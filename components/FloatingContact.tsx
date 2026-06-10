'use client';

import { useState } from 'react';
import { MessageSquare, Mail, X, PhoneCall } from 'lucide-react';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  // B2B Contact Configuration for Excavator Exporter
  const contactConfig = {
    whatsapp: '8618326001631', // Sales Manager WhatsApp
    whatsappMsg: 'Hi Excavator Pro, I am looking for premium used excavators.',
    email: 'JamesBryant9998@gmail.com', // Official Inquiry Email
    emailSubject: 'Inquiry for Premium Used Excavators Sourcing',
  };

  const toggleOpen = () => setIsOpen(!isOpen);

  const containerStyle: React.CSSProperties = {
    position: 'fixed',
    right: '24px',
    bottom: '24px',
    zIndex: 9999,
    fontFamily: "'Inter', sans-serif",
  };

  const cardStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '80px',
    right: '0',
    width: '320px',
    backgroundColor: '#0d0d0d',
    border: '1px solid #d4af37',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8), 0 0 15px rgba(212, 175, 55, 0.1)',
    transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.85) translateY(20px)',
    opacity: isOpen ? 1 : 0,
    pointerEvents: isOpen ? 'auto' : 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  };

  const mainButtonStyle: React.CSSProperties = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#d4af37',
    color: '#050505',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 10px 25px rgba(212, 175, 55, 0.3)',
    transition: 'all 0.3s ease',
  };

  const cardHeaderStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2a2a22',
    paddingBottom: '12px',
  };

  const headerTitleStyle: React.CSSProperties = {
    fontSize: '1.1rem',
    fontWeight: 700,
    color: '#fff',
    margin: 0,
  };

  const channelBtnStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '0.9rem',
    transition: 'all 0.2s ease',
  };

  const channelLabelStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  };

  return (
    <div style={containerStyle}>
      {/* Expanded Support Card */}
      <div style={cardStyle} role="dialog" aria-modal="true" aria-label="Excavator Pro Contact Support Card">
        <div style={cardHeaderStyle}>
          <div style={headerTitleStyle}>
            <span style={{ color: '#d4af37' }}>EXCAVATOR</span> SUPPORT
          </div>
          <button
            onClick={toggleOpen}
            aria-label="Close contact support card"
            style={{
              background: 'none',
              border: 'none',
              color: '#a0a0a0',
              cursor: 'pointer',
              padding: '4px',
            }}
          >
            <X size={18} />
          </button>
        </div>

        <p style={{ fontSize: '0.85rem', color: '#a0a0a0', margin: 0 }}>
          Have any specific excavator requests or need CIF/FOB quotes? Our heavy machinery experts are online to help you.
        </p>

        {/* Channel 1: WhatsApp */}
        <a
          href={`https://wa.me/${contactConfig.whatsapp}?text=${encodeURIComponent(contactConfig.whatsappMsg)}`}
          aria-label="Chat with us on WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...channelBtnStyle,
            backgroundColor: '#128c7e',
            color: '#fff',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#075e54')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#128c7e')}
        >
          <MessageSquare size={20} />
          <div style={channelLabelStyle}>
            <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>WhatsApp Chat</span>
            <span style={{ fontSize: '0.75rem', fontWeight: 400, opacity: 0.8 }}>Online (Reply in mins)</span>
          </div>
        </a>

        {/* Channel 2: Email */}
        <a
          href={`mailto:${contactConfig.email}?subject=${encodeURIComponent(contactConfig.emailSubject)}`}
          aria-label="Send us an Email"
          style={{
            ...channelBtnStyle,
            backgroundColor: 'transparent',
            color: '#d4af37',
            border: '1px solid #d4af37',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <Mail size={20} />
          <div style={channelLabelStyle}>
            <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>Official Email</span>
            <span style={{ fontSize: '0.75rem', fontWeight: 400, opacity: 0.8 }}>Response within 12h</span>
          </div>
        </a>

        {/* Channel 3: Call */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.8rem',
            color: '#a0a0a0',
            justifyContent: 'center',
            marginTop: '4px',
          }}
        >
          <PhoneCall size={12} style={{ color: '#d4af37' }} />
          <span>Call Us: +86-183-2600-1631</span>
        </div>
      </div>

      {/* Main Float Button */}
      <button
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-label="Toggle contact support card"
        style={{
          ...mainButtonStyle,
          transform: isOpen ? 'rotate(90deg)' : 'rotate(0)',
          backgroundColor: isOpen ? '#161616' : '#d4af37',
          color: isOpen ? '#d4af37' : '#050505',
          border: isOpen ? '1px solid #d4af37' : 'none',
        }}
        onMouseEnter={(e) => {
          if (!isOpen) {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.backgroundColor = '#f3e5ab';
          }
        }}
        onMouseLeave={(e) => {
          if (!isOpen) {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.backgroundColor = '#d4af37';
          }
        }}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
}
