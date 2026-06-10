'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, Sparkles, HardHat } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for premium floating header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productCategories = [
    { name: 'Caterpillar Excavators', path: '/products/caterpillar-excavators', desc: 'Pre-owned CAT heavy duty crawlers' },
    { name: 'Komatsu Excavators', path: '/products/komatsu-excavators', desc: 'Japanese engineered high-precision models' },
    { name: 'Hitachi Excavators', path: '/products/hitachi-excavators', desc: 'Extremely durable and responsive diggers' },
    { name: 'Doosan Excavators', path: '/products/doosan-excavators', desc: 'Robust and highly cost-efficient heavy rigs' },
    { name: 'Sany Excavators', path: '/products/sany-excavators', desc: 'Chinese market leader fuel efficient systems' },
    { name: 'Kubota Excavators', path: '/products/kubota-excavators', desc: 'Compact highly versatile mini excavators' },
  ];

  const getLink = (anchor: string) => {
    return isHome ? anchor : `/${anchor}`;
  };

  return (
    <header style={{
      position: scrolled ? 'fixed' : 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      padding: scrolled ? '16px 0' : '24px 0',
      backgroundColor: scrolled ? 'rgba(5, 5, 5, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.15)' : '1px solid rgba(212, 175, 55, 0.08)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Brand Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ fontSize: '1.4rem', fontWeight: 700, letterSpacing: '0.12em', color: '#fff' }}>
            EXCAVATOR<span style={{ color: '#d4af37' }}>PRO</span>
            <span style={{ fontSize: '0.75rem', verticalAlign: 'super', color: '#a0a0a0', marginLeft: '3px', fontWeight: 400 }}>B2B</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ display: 'none', gap: '30px', alignItems: 'center' }} className="desktop-nav-container">
          {/* Products Dropdown Wrapper */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setIsProductsDropdownOpen(true)}
            onMouseLeave={() => setIsProductsDropdownOpen(false)}
          >
            <button 
              aria-expanded={isProductsDropdownOpen}
              aria-haspopup="true"
              aria-label="Toggle products navigation dropdown"
              style={{ 
                background: 'none',
                border: 'none',
                color: isProductsDropdownOpen ? '#d4af37' : '#a0a0a0', 
                fontSize: '0.9rem', 
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'color 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 0'
              }}
            >
              Products
              <ChevronDown 
                size={14} 
                style={{ 
                  transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)', 
                  transform: isProductsDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' 
                }} 
              />
            </button>

            {/* Dropdown Menu Container */}
            {isProductsDropdownOpen && (
              <div 
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#0a0a0a',
                  border: '1px solid rgba(212, 175, 55, 0.15)',
                  borderRadius: '8px',
                  padding: '24px',
                  width: '560px',
                  boxShadow: '0 20px 45px rgba(0, 0, 0, 0.9), 0 0 25px rgba(212, 175, 55, 0.05)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '12px 24px',
                  zIndex: 110,
                  animation: 'fadeIn 0.2s ease-out'
                }}
              >
                {productCategories.map((p, idx) => (
                  <Link 
                    key={idx} 
                    href={p.path} 
                    style={{ 
                      display: 'block', 
                      padding: '10px 14px',
                      textDecoration: 'none',
                      borderRadius: '6px',
                      transition: 'all 0.2s ease-out',
                      border: '1px solid transparent'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.04)';
                      e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.1)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.borderColor = 'transparent';
                      e.currentTarget.style.transform = 'none';
                    }}
                  >
                    <div style={{ 
                      color: '#fff', 
                      fontSize: '0.9rem', 
                      fontWeight: 600, 
                      marginBottom: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      {p.name}
                    </div>
                    <div style={{ color: '#666', fontSize: '0.75rem', lineHeight: '1.4' }}>{p.desc}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a 
            href={getLink('#products')} 
            style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }} 
            onMouseEnter={(e)=>e.currentTarget.style.color='#d4af37'} 
            onMouseLeave={(e)=>e.currentTarget.style.color='#a0a0a0'}
          >
            Live Inventory
          </a>

          <a 
            href={getLink('#about')} 
            style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }} 
            onMouseEnter={(e)=>e.currentTarget.style.color='#d4af37'} 
            onMouseLeave={(e)=>e.currentTarget.style.color='#a0a0a0'}
          >
            Factory Strength
          </a>

          <a 
            href="/about" 
            style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }} 
            onMouseEnter={(e)=>e.currentTarget.style.color='#d4af37'} 
            onMouseLeave={(e)=>e.currentTarget.style.color='#a0a0a0'}
          >
            About Us
          </a>

          <a 
            href="/news" 
            style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }} 
            onMouseEnter={(e)=>e.currentTarget.style.color='#d4af37'} 
            onMouseLeave={(e)=>e.currentTarget.style.color='#a0a0a0'}
          >
            News
          </a>

          <a 
            href="/blog" 
            style={{ color: '#a0a0a0', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.2s' }} 
            onMouseEnter={(e)=>e.currentTarget.style.color='#d4af37'} 
            onMouseLeave={(e)=>e.currentTarget.style.color='#a0a0a0'}
          >
            Blog
          </a>

          <a 
            href={getLink('#contact')} 
            className="btn btn-primary" 
            style={{ 
              padding: '10px 24px', 
              fontSize: '0.8rem', 
              borderRadius: '4px',
              marginLeft: '10px'
            }}
          >
            Inquire Now
          </a>
        </nav>

        {/* Mobile Navigation Trigger */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle main mobile navigation menu"
          aria-controls="mobile-navigation-menu"
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            zIndex: 120
          }}
          className="mobile-nav-trigger"
        >
          {isMobileMenuOpen ? <X size={24} style={{ color: '#d4af37' }} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: '#050505',
          zIndex: 90,
          display: 'flex',
          flexDirection: 'column',
          padding: '100px 30px 40px',
          overflowY: 'auto'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
            {/* Products Accordion for Mobile */}
            <div style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.08)', paddingBottom: '16px' }}>
              <button 
                onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
                aria-expanded={isMobileProductsOpen}
                aria-label="Toggle mobile products sub-menu"
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  color: '#fff',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  textAlign: 'left',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                Products
                <ChevronDown 
                  size={18} 
                  style={{ 
                    color: '#d4af37',
                    transition: 'transform 0.3s',
                    transform: isMobileProductsOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                  }} 
                />
              </button>
              
              {isMobileProductsOpen && (
                <div style={{ 
                   display: 'flex', 
                   flexDirection: 'column', 
                   gap: '14px', 
                   marginTop: '16px',
                   paddingLeft: '12px',
                   borderLeft: '2px solid rgba(212, 175, 55, 0.2)'
                }}>
                  {productCategories.map((p, idx) => (
                    <Link 
                      key={idx} 
                      href={p.path} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{ 
                        color: '#a0a0a0', 
                        textDecoration: 'none', 
                        fontSize: '0.95rem' 
                      }}
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href={getLink('#products')} 
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ 
                color: '#fff', 
                textDecoration: 'none', 
                fontSize: '1.2rem', 
                fontWeight: 600,
                borderBottom: '1px solid rgba(212, 175, 55, 0.08)',
                paddingBottom: '16px'
              }}
            >
              Live Inventory
            </Link>

            <Link 
              href={getLink('#about')} 
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ 
                color: '#fff', 
                textDecoration: 'none', 
                fontSize: '1.2rem', 
                fontWeight: 600,
                borderBottom: '1px solid rgba(212, 175, 55, 0.08)',
                paddingBottom: '16px'
              }}
            >
              Factory Strength
            </Link>

            <Link 
              href="/about" 
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ 
                color: '#fff', 
                textDecoration: 'none', 
                fontSize: '1.2rem', 
                fontWeight: 600,
                borderBottom: '1px solid rgba(212, 175, 55, 0.08)',
                paddingBottom: '16px'
              }}
            >
              About Us
            </Link>

             <Link 
              href="/news" 
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ 
                color: '#fff', 
                textDecoration: 'none', 
                fontSize: '1.2rem', 
                fontWeight: 600,
                borderBottom: '1px solid rgba(212, 175, 55, 0.08)',
                paddingBottom: '16px'
              }}
            >
              News
            </Link>

            <Link 
              href="/blog" 
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ 
                color: '#fff', 
                textDecoration: 'none', 
                fontSize: '1.2rem', 
                fontWeight: 600,
                borderBottom: '1px solid rgba(212, 175, 55, 0.08)',
                paddingBottom: '16px'
              }}
            >
              Blog
            </Link>

            <Link 
              href={getLink('#contact')} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn btn-primary" 
              style={{ 
                width: '100%',
                padding: '14px', 
                fontSize: '1rem', 
                borderRadius: '4px',
                marginTop: '12px'
              }}
            >
              Inquire Now
            </Link>
          </div>
        </div>
      )}

      {/* Embedded CSS for responsive display logic */}
      <style jsx global>{`
        @media (min-width: 769px) {
          .desktop-nav-container {
            display: flex !important;
          }
          .mobile-nav-trigger {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .desktop-nav-container {
            display: none !important;
          }
          .mobile-nav-trigger {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
