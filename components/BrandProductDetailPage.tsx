'use client';

import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, Sparkles, ShieldCheck, CheckCircle, Mail, MessageSquare, Cpu, Bolt, Gauge, Container, Calendar, Clock } from 'lucide-react';
import Header from './Header';
import FloatingContact from './FloatingContact';
import productsData from '../data/products.json';

interface BrandProductDetailPageProps {
  params: {
    slug: string;
  };
  brand: string;
}

export default function BrandProductDetailPage({ params, brand }: BrandProductDetailPageProps) {
  // Find product by slug
  const product = productsData.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const technicalSpecs = [
    { label: 'Engine Model', value: product.engine },
    { label: 'Rated Power', value: product.power },
    { label: 'Bucket Capacity', value: product.bucketCapacity },
    { label: 'Operating Weight', value: product.weight },
    { label: 'Production Year', value: String(product.year) },
    { label: 'Operating Hours', value: `${product.hours.toLocaleString()} hrs` },
    { label: 'Undercarriage Status', value: product.undercarriage }
  ];

  const maintenanceOptions = [
    { title: 'Precision Detailing', desc: 'On-demand original factory yellow paint detailing, track shoe tension recalibration, and cabin deep sterilization.' },
    { title: 'SGS Load Testing', desc: 'Coordination of independent SGS on-site inspectors to conduct full load-testing and pressure documentation.' },
    { title: 'Secure Marine Lashing', desc: 'Weekly shipping allotments on Maersk/COSCO with heavy steel-wire flat rack lashing and hydraulic cylinder anti-rust spray.' }
  ];

  const brandPath = `/products/${brand.toLowerCase()}-excavators`;

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#050505', color: '#fff', position: 'relative' }}>
      <Header />

      {/* Navigation Breadcrumb */}
      <div className="container" style={{ paddingTop: '140px', paddingBottom: '20px' }}>
        <Link href={brandPath} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#a0a0a0', textDecoration: 'none', fontSize: '0.95rem' }} className="hover-gold">
          <ArrowLeft size={16} /> Back to {brand} Category
        </Link>
      </div>

      {/* Main Detail Grid */}
      <section style={{ paddingBottom: '60px' }}>
        <div className="container">
          <div className="detail-grid">
            {/* Left: Gallery with Angles */}
            <div>
              <div className="detail-gallery" style={{ marginBottom: '20px' }}>
                <span className="detail-gallery-badge">Model {product.id}</span>
                <img src={product.image} alt={`${product.model} Premium Used Excavator Details`} className="detail-gallery-image" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                <div style={{ border: '1px solid #333', borderRadius: '4px', overflow: 'hidden', cursor: 'pointer' }}>
                  <img src={product.image} alt="Angle 1" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                </div>
                <div style={{ border: '1px solid #d4af37', borderRadius: '4px', overflow: 'hidden', cursor: 'pointer', position: 'relative' }}>
                  <img src={product.image} alt="Angle 2" style={{ width: '100%', height: 'auto', objectFit: 'cover', opacity: 0.6 }} />
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: '#d4af37', fontWeight: 600, textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>Detail Zoom</div>
                </div>
                <div style={{ border: '1px solid #333', borderRadius: '4px', overflow: 'hidden', cursor: 'pointer', position: 'relative' }}>
                  <img src={product.image} alt="Angle 3" style={{ width: '100%', height: 'auto', objectFit: 'cover', opacity: 0.6 }} />
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: '#fff', fontWeight: 600, textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>Engine View</div>
                </div>
              </div>
            </div>

            {/* Right: Technical Specs & Quotes */}
            <div>
              <div style={{ textTransform: 'uppercase', color: '#d4af37', fontSize: '0.85rem', letterSpacing: '0.2em', marginBottom: '12px', fontWeight: 600 }}>
                <Sparkles size={12} style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle' }} />
                Artisanal Certified - {product.year} Original Model
              </div>
              <h1 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '16px', lineHeight: '1.2', fontFamily: '"Playfair Display", serif' }}>
                {product.model}
              </h1>
              
              <div style={{ display: 'flex', gap: '20px', marginBottom: '24px', flexWrap: 'wrap' }}>
                <div style={{ color: '#d4af37', fontWeight: 600, fontSize: '1.2rem' }}>MOQ: 1 Unit</div>
                <div style={{ color: '#a0a0a0', fontSize: '1.1rem' }}>|</div>
                <div style={{ color: '#a0a0a0', fontSize: '1.1rem' }}>Lead Time: 7-10 Days</div>
                {product.price > 0 && (
                  <>
                    <div style={{ color: '#a0a0a0', fontSize: '1.1rem' }}>|</div>
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: '1.2rem' }}>${product.price.toLocaleString()} USD</div>
                  </>
                )}
              </div>

              <p style={{ color: '#cccccc', marginBottom: '28px', fontSize: '1.05rem', lineHeight: '1.6' }}>
                {product.condition}
              </p>

              <h2 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '12px', borderBottom: '1px solid #222', paddingBottom: '8px', fontFamily: '"Playfair Display", serif' }}>Technical Specifications</h2>
              <table className="specs-table" style={{ marginBottom: '30px' }}>
                <tbody>
                  {technicalSpecs.map((spec, i) => (
                    <tr key={i}>
                      <td style={{ color: '#888', fontWeight: 500, width: '40%' }}>{spec.label}</td>
                      <td style={{ color: '#fff' }}>{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="btn-group" style={{ flexDirection: 'column', gap: '12px', alignItems: 'stretch' }}>
                <a href="/#contact" className="btn btn-primary" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '16px' }}>
                  <Mail size={18} /> Request Custom CIF Quote & Inspection Video
                </a>
                <a href="https://wa.me/8618326001631" className="btn" style={{ border: '1px solid #25d366', color: '#25d366', backgroundColor: 'transparent', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '16px' }} target="_blank" rel="noopener noreferrer">
                  <MessageSquare size={18} /> Chat via WhatsApp for Fast Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailing & Testing Process Options */}
      <section className="section" style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid #111' }}>
        <div className="container">
          <div className="section-title-wrapper" style={{ marginBottom: '40px' }}>
            <h2 className="section-title" style={{ fontSize: '2rem', fontFamily: '"Playfair Display", serif' }}>Pre-Shipping Servicing Processes</h2>
            <p className="section-desc">Tailor every physical check, original component detailing, and sea shipping lashing before loading.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {maintenanceOptions.map((opt, idx) => (
              <div key={idx} style={{ padding: '24px', backgroundColor: '#111', border: '1px solid #222', borderRadius: '4px' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#d4af37', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: '"Playfair Display", serif' }}>
                  <CheckCircle size={18} /> {opt.title}
                </h3>
                <p style={{ color: '#a0a0a0', fontSize: '0.95rem', lineHeight: '1.5' }}>{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FloatingContact />
    </main>
  );
}

// Reusable function to generate static parameters for compilation
export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}
