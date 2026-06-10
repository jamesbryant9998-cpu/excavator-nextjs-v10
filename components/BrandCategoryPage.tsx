'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ShieldCheck, CheckCircle, ChevronRight, ArrowLeft } from 'lucide-react';
import Header from './Header';
import FloatingContact from './FloatingContact';
import productsData from '../data/products.json';

interface BrandCategoryPageProps {
  brand: string;
}

export default function BrandCategoryPage({ brand }: BrandCategoryPageProps) {
  // Get all products belonging to this brand
  const brandProducts = productsData.filter(
    (p) => p.brand.toLowerCase() === brand.toLowerCase()
  );

  // Fallback featured image
  const featuredImage = brandProducts[0]?.image || '/images/carousel_inventory.webp';

  const specs = [
    { name: 'Power Configuration', val: '100% Genuine Certified Diesel Engine & Main Hydraulic Pump' },
    { name: 'Standard MOQ', val: '1 Unit' },
    { name: 'Inspection Standard', val: 'Rigorous 120-Point On-Site Load & Pressure Testing with SGS report assistance' },
    { name: 'Sea Logistics Options', val: 'Heavy-duty Flat Rack Steel-wire Lashing / Disassembled 40HQ High-Cube bracing' },
    { name: 'Custom Detailing', val: 'On-demand original factory-paint touchup, track shoe recalibration & cabin deep cleaning' },
    { name: 'Lead Time', val: '7 - 10 Working Days (Pre-shipping servicing & port export clearance included)' }
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#050505', position: 'relative' }}>
      <Header />

      {/* Hero Category Details Section */}
      <section className="product-detail-hero" style={{ paddingTop: '140px' }}>
        <div className="container">
          {/* Back breadcrumb */}
          <div style={{ marginBottom: '30px' }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#a0a0a0', textDecoration: 'none', fontSize: '0.9rem' }} className="hover-gold">
              <ArrowLeft size={16} /> Back to Live Inventory
            </Link>
          </div>

          <div className="detail-grid">
            {/* Left: Featured Image Gallery */}
            <div className="detail-gallery">
              <span className="detail-gallery-badge">Certified Pre-Owned</span>
              <img src={featuredImage} alt={`${brand} Hydraulic Excavators Manufacturer`} className="detail-gallery-image" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
            </div>

            {/* Right: Brand Technical Specs & Description */}
            <div>
              <div style={{ textTransform: 'uppercase', color: '#d4af37', fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '12px', fontWeight: 600 }}>
                <Sparkles size={12} style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle' }} />
                Premium Global Machinery Brand
              </div>
              <h1 style={{ fontSize: '2.8rem', color: '#fff', marginBottom: '20px', lineHeight: '1.2', fontFamily: '"Playfair Display", serif' }}>
                Bespoke {brand} Excavators
              </h1>
              <p style={{ marginBottom: '24px', fontSize: '1.05rem', color: '#a0a0a0', lineHeight: '1.6' }}>
                Our handcrafted, fully servised used {brand} hydraulic crawler excavators are engineered to provide maximum operational uptime, robust fuel economy, and timeless structural rigidity. Ideal for heavy infrastructure, municipal pipeline excavations, and high-intensity mining projects.
              </p>

              <table className="specs-table">
                <tbody>
                  {specs.map((s, idx) => (
                    <tr key={idx}>
                      <td>{s.name}</td>
                      <td>{s.val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="btn-group" style={{ justifyContent: 'start' }}>
                <a href="#brand-models" className="btn btn-primary" style={{ flexGrow: 1, textAlign: 'center' }}>
                  Explore Available {brand} Models Below
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Certified Points */}
      <section className="section" style={{ borderBottom: 'none', backgroundColor: '#090909' }}>
        <div className="container" style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Original {brand} Diesel Engines</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Flawless Hydraulic Pressure Tested</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldCheck size={20} style={{ color: '#d4af37' }} />
            <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Certified 95% New Component Status</span>
          </div>
        </div>
      </section>

      {/* Available Models Grid Section */}
      <section id="brand-models" className="section" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.08)' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '50px' }}>
            <h2 className="section-title" style={{ fontFamily: '"Playfair Display", serif', fontSize: '2rem' }}>Available {brand} Models In Stock</h2>
            <p className="section-desc">Explore our verified pre-owned catalog of {brand} machinery units, currently parked in our Shanghai export yard.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '30px' }}>
            {brandProducts.map((p) => (
              <div
                key={p.id}
                style={{
                  backgroundColor: '#0d0d0d',
                  border: '1px solid rgba(212, 175, 55, 0.08)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.25)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Image & Price */}
                <div style={{ height: '240px', overflow: 'hidden', position: 'relative', backgroundColor: '#101010' }}>
                  <img
                    src={p.image}
                    alt={p.model}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  {p.price > 0 ? (
                    <span style={{
                      position: 'absolute',
                      bottom: '15px',
                      right: '15px',
                      backgroundColor: '#d4af37',
                      color: '#050505',
                      fontSize: '0.9rem',
                      fontWeight: 800,
                      padding: '4px 10px',
                      borderRadius: '4px'
                    }}>
                      ${p.price.toLocaleString()} USD
                    </span>
                  ) : (
                    <span style={{
                      position: 'absolute',
                      bottom: '15px',
                      right: '15px',
                      backgroundColor: 'rgba(5, 5, 5, 0.85)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: '#fff',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '4px'
                    }}>
                      Inquire Price
                    </span>
                  )}
                </div>

                {/* Info Area */}
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: '8px', fontFamily: '"Playfair Display", serif' }}>
                      {p.model}
                    </h3>
                    <div style={{ display: 'flex', gap: '15px', fontSize: '0.8rem', color: '#666', marginBottom: '16px' }}>
                      <span>Year: <strong>{p.year}</strong></span>
                      <span>|</span>
                      <span>Hours: <strong>{p.hours} hrs</strong></span>
                      <span>|</span>
                      <span>Weight: <strong>{p.weight}</strong></span>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: '#888', lineHeight: '1.5', marginBottom: '24px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {p.condition}
                    </p>
                  </div>

                  <div style={{ borderTop: '1px solid rgba(212, 175, 55, 0.08)', paddingTop: '20px' }}>
                    <Link
                      href={`/products/${brand.toLowerCase()}-excavators/${p.slug}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        textDecoration: 'none',
                        color: '#d4af37',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase'
                      }}
                    >
                      <span>Explore Technical Specs</span>
                      <ChevronRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  );
}
