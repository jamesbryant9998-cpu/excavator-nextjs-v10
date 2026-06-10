'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { 
  Award, 
  ShieldCheck, 
  Compass, 
  Globe, 
  Users, 
  CheckCircle, 
  UploadCloud, 
  Clock, 
  Workflow, 
  FileText, 
  Sparkles, 
  ChevronRight,
  HardHat,
  Anchor,
  BookOpen,
  Mail,
  Send,
  HelpCircle,
  Gauge,
  Bolt,
  Cpu
} from 'lucide-react';
import Header from '../components/Header';
import ReviewsSlider from '../components/ReviewsSlider';
import FloatingContact from '../components/FloatingContact';
import productsData from '../data/products.json';
import guidesData from '../data/guides.json';

export default function Home() {
  const [selectedBrand, setSelectedBrand] = useState('All');
  
  // RFQ Form States
  const [productType, setProductType] = useState('Caterpillar Excavators');
  const [tonnage, setTonnage] = useState('Standard (20 - 24 Tons)');
  const [email, setEmail] = useState('');
  const [port, setPort] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [fileName, setFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Get unique brands
  const brands = ['All', ...Array.from(new Set(productsData.map((p) => p.brand)))];

  // Filter products based on selected brand
  const filteredProducts = selectedBrand === 'All' 
    ? productsData 
    : productsData.filter((p) => p.brand === selectedBrand);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleRfqSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      setPort('');
      setPhone('');
      setNotes('');
      setFileName('');
    }, 1200);
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#050505', position: 'relative' }}>
      <Header />

      {/* Hero Wrapper Section */}
      <section className="hero-wrapper" style={{ backgroundImage: "linear-gradient(rgba(5, 5, 5, 0.4), rgba(5, 5, 5, 0.85)), url('/images/carousel_inventory.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container" style={{ zIndex: 10, position: 'relative' }}>
          <div className="hero-content">
            <span className="hero-subtitle">
              <Sparkles size={14} style={{ display: 'inline-block', marginRight: '6px', verticalAlign: 'middle' }} />
              Massive Direct-Sourced Live Inventory
            </span>
            <h1 className="hero-title" style={{ fontSize: '3.6rem', fontFamily: '"Playfair Display", serif' }}>
              500+ Active Units In Stock &<br />
              <span style={{ color: '#d4af37', fontStyle: 'italic', display: 'inline' }}>Ready for Global Dispatch</span>
            </h1>
            <p className="hero-desc">
              Our massive 50,000 m² Shanghai yard holds certified pre-owned heavy excavators from top brands. Direct B2B wholesale sourcing ensures original components and unbeatable export port prices.
            </p>
            <div className="btn-group">
              <a href="#products" className="btn btn-primary">
                Browse Live Inventory
              </a>
              <a href="#contact" className="btn" style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }}>
                Request Custom CIF Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Static 4-Dimensional Factory Strengths Grid */}
      <section className="section" style={{ backgroundColor: '#0a0a0a', borderBottom: '1px solid rgba(212, 175, 55, 0.08)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px' }}>
            {/* Advantage 1 */}
            <div style={{ padding: '30px', backgroundColor: '#0d0d0d', border: '1px solid rgba(212, 175, 55, 0.05)', borderRadius: '8px', transition: 'all 0.3s' }} onMouseEnter={(e)=>{e.currentTarget.style.borderColor='rgba(212,175,55,0.25)'}} onMouseLeave={(e)=>{e.currentTarget.style.borderColor='rgba(212,175,55,0.05)'}}>
              <Award className="text-amber-500" size={28} style={{ color: '#d4af37', marginBottom: '16px' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '12px', fontFamily: '"Playfair Display", serif' }}>Original Components</h3>
              <p style={{ fontSize: '0.85rem', color: '#888', lineHeight: '1.6' }}>
                100% guaranteed genuine diesel engines, main hydraulic pumps, and rotary motor blocks. Strictly no low-quality refurbished parts.
              </p>
            </div>
            {/* Advantage 2 */}
            <div style={{ padding: '30px', backgroundColor: '#0d0d0d', border: '1px solid rgba(212, 175, 55, 0.05)', borderRadius: '8px', transition: 'all 0.3s' }} onMouseEnter={(e)=>{e.currentTarget.style.borderColor='rgba(212,175,55,0.25)'}} onMouseLeave={(e)=>{e.currentTarget.style.borderColor='rgba(212,175,55,0.05)'}}>
              <ShieldCheck className="text-emerald-500" size={28} style={{ color: '#d4af37', marginBottom: '16px' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '12px', fontFamily: '"Playfair Display", serif' }}>120-Point SGS Inspect</h3>
              <p style={{ fontSize: '0.85rem', color: '#888', lineHeight: '1.6' }}>
                Comprehensive on-site physical load testing, cylinder response times and oil leakage mapping. Full SGS export certification provided.
              </p>
            </div>
            {/* Advantage 3 */}
            <div style={{ padding: '30px', backgroundColor: '#0d0d0d', border: '1px solid rgba(212, 175, 55, 0.05)', borderRadius: '8px', transition: 'all 0.3s' }} onMouseEnter={(e)=>{e.currentTarget.style.borderColor='rgba(212,175,55,0.25)'}} onMouseLeave={(e)=>{e.currentTarget.style.borderColor='rgba(212,175,55,0.05)'}}>
              <Anchor className="text-blue-500" size={28} style={{ color: '#d4af37', marginBottom: '16px' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '12px', fontFamily: '"Playfair Display", serif' }}>Secure Sea Logistics</h3>
              <p style={{ fontSize: '0.85rem', color: '#888', lineHeight: '1.6' }}>
                Strategic weekly container allotments and Flat Rack lashing services directly out of Shanghai Port. Guaranteed zero transport damage.
              </p>
            </div>
            {/* Advantage 4 */}
            <div style={{ padding: '30px', backgroundColor: '#0d0d0d', border: '1px solid rgba(212, 175, 55, 0.05)', borderRadius: '8px', transition: 'all 0.3s' }} onMouseEnter={(e)=>{e.currentTarget.style.borderColor='rgba(212,175,55,0.25)'}} onMouseLeave={(e)=>{e.currentTarget.style.borderColor='rgba(212,175,55,0.05)'}}>
              <CheckCircle className="text-amber-500" size={28} style={{ color: '#d4af37', marginBottom: '16px' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '12px', fontFamily: '"Playfair Display", serif' }}>98.4% On-Time Delivery</h3>
              <p style={{ fontSize: '0.85rem', color: '#888', lineHeight: '1.6' }}>
                Direct partnerships with COSCO, Maersk, and CMA CGM. Fast customs declaration and transparent port-to-port tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filterable Products Inventory Grid */}
      <section id="products" className="section">
        <div className="container">
          <div className="section-title-wrapper">
            <span style={{ color: '#d4af37', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>HEAVY MACHINERY SELECTION</span>
            <h2 className="section-title" style={{ fontFamily: '"Playfair Display", serif' }}>Certified Used Excavator Stock</h2>
            <p className="section-desc">
              All machines are fully detailed, tested under loading, and ready for global export customs declaration.
            </p>
          </div>

          {/* Brand Filter Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginBottom: '50px' }}>
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => setSelectedBrand(b)}
                style={{
                  padding: '12px 24px',
                  backgroundColor: selectedBrand === b ? '#d4af37' : '#0d0d0d',
                  color: selectedBrand === b ? '#050505' : '#a0a0a0',
                  border: selectedBrand === b ? '1px solid #d4af37' : '1px solid rgba(212, 175, 55, 0.15)',
                  borderRadius: '30px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                  if (selectedBrand !== b) {
                    e.currentTarget.style.borderColor = '#d4af37';
                    e.currentTarget.style.color = '#fff';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedBrand !== b) {
                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.15)';
                    e.currentTarget.style.color = '#a0a0a0';
                  }
                }}
              >
                {b}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '30px' }}>
            {filteredProducts.map((p) => (
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
                {/* Image & Badge */}
                <div style={{ height: '240px', overflow: 'hidden', position: 'relative', backgroundColor: '#101010' }}>
                  <img
                    src={p.image}
                    alt={p.model}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <span style={{
                    position: 'absolute',
                    top: '15px',
                    left: '15px',
                    backgroundColor: 'rgba(5, 5, 5, 0.85)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    color: '#d4af37',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    backdropFilter: 'blur(5px)'
                  }}>
                    {p.brand}
                  </span>
                  
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
                      href={`/products/${p.brand.toLowerCase()}-excavators/${p.slug}`}
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
                      onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#d4af37'}
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

      {/* Reviews Slider */}
      <ReviewsSlider />

      {/* Buyers Guides Section */}
      <section className="section" style={{ backgroundColor: '#0a0a0a' }}>
        <div className="container">
          <div className="section-title-wrapper">
            <span style={{ color: '#d4af37', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>EXPERT KNOWLEDGE LIBRARY</span>
            <h2 className="section-title" style={{ fontFamily: '"Playfair Display", serif' }}>Heavy Equipment Buyer Guides</h2>
            <p className="section-desc">
              Understand inspect rules, price depreciation mapping, container shipping methods, and brand comparisons before placing order.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {guidesData.map((g) => (
              <div
                key={g.slug}
                style={{
                  backgroundColor: '#0d0d0d',
                  border: '1px solid rgba(212, 175, 55, 0.05)',
                  borderRadius: '12px',
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.25)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.05)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <div>
                  <span style={{ fontSize: '0.72rem', color: '#d4af37', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
                    {g.category}
                  </span>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff', marginBottom: '12px', fontFamily: '"Playfair Display", serif' }}>
                    {g.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#888', lineHeight: '1.6', marginBottom: '24px' }}>
                    {g.shortDesc}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid rgba(212, 175, 55, 0.08)', paddingTop: '20px' }}>
                  <Link
                    href={`/guides/${g.slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#d4af37',
                      textDecoration: 'none',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase'
                    }}
                  >
                    <span>{g.actionText.replace(' →', '')}</span>
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Advantages section */}
      <section id="about" className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '40px', alignItems: 'center' }} className="grid-about">
            <div style={{ gridColumn: 'span 7' }} className="about-text-col">
              <span style={{ color: '#d4af37', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>TRUST BUILT ON TRANSPARENCY</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#fff', marginBottom: '20px', fontFamily: '"Playfair Display", serif' }}>
                Why Global Importers Choose EXCAVATOR PRO
              </h2>
              <p style={{ color: '#a0a0a0', lineHeight: '1.7', fontSize: '1rem', marginBottom: '24px' }}>
                With over a decade of heavy machinery exporting history, we understand that trust is built on absolute transparency. We do not hide machine issues; every technical detail is documented.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <CheckCircle size={20} style={{ color: '#d4af37', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#fff' }}>Full Video Inspection</h4>
                    <p style={{ color: '#666', fontSize: '0.85rem', marginTop: '4px' }}>Live video walk-around, testing cylinder response and engine revs upon request.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <CheckCircle size={20} style={{ color: '#d4af37', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#fff' }}>Official Customs Declaration Support</h4>
                    <p style={{ color: '#666', fontSize: '0.85rem', marginTop: '4px' }}>Our customs team takes complete care of container strapping, lashing audits, and export clearance.</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ gridColumn: 'span 5' }} className="about-img-col">
              <div style={{ border: '1px solid rgba(212, 175, 55, 0.15)', padding: '12px', backgroundColor: '#0d0d0d', borderRadius: '12px' }}>
                <img
                  src="/images/carousel_inventory.webp"
                  alt="Pre-owned Excavator Fleet Storage Yard"
                  style={{ width: '100%', height: 'auto', borderRadius: '6px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RFQ / Sourcing Form Section */}
      <section id="contact" className="section" style={{ backgroundColor: '#0a0a0a', borderTop: '1px solid rgba(212, 175, 55, 0.08)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '40px', alignItems: 'center' }} className="grid-about">
            <div style={{ gridColumn: 'span 5' }} className="about-text-col">
              <span style={{ color: '#d4af37', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>DIRECT B2B CHANNEL</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#fff', marginBottom: '20px', fontFamily: '"Playfair Display", serif' }}>
                Request On-Site <span style={{ color: '#d4af37', fontStyle: 'italic' }}>CIF/FOB Pricing</span>
              </h2>
              <p style={{ color: '#a0a0a0', lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '32px' }}>
                Submit your specific fleet or single machinery requests. Our expert export coordinators will calibrate shipping volume weights and deliver customized quotes within 12 hours.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <ShieldCheck size={24} style={{ color: '#d4af37' }} />
                  <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>SGS Verified Yard Exporter</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <ShieldCheck size={24} style={{ color: '#d4af37' }} />
                  <span style={{ fontSize: '0.9rem', color: '#a0a0a0' }}>Guaranteed Original Engine & Hydraulic Pump</span>
                </div>
              </div>
            </div>

            <div style={{ gridColumn: 'span 7' }} className="about-img-col">
              <div style={{
                backgroundColor: '#0d0d0d',
                border: '1px solid rgba(212, 175, 55, 0.15)',
                borderRadius: '16px',
                padding: '40px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.8)'
              }}>
                {isSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <div style={{ display: 'inline-flex', padding: '16px', backgroundColor: 'rgba(212, 175, 55, 0.05)', border: '1px solid #d4af37', borderRadius: '50%', color: '#d4af37', marginBottom: '24px' }}>
                      <CheckCircle size={36} />
                    </div>
                    <h3 style={{ fontSize: '1.6rem', color: '#fff', fontWeight: 700, marginBottom: '12px', fontFamily: '"Playfair Display", serif' }}>Inquiry Submitted Successfully!</h3>
                    <p style={{ color: '#a0a0a0', fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '400px', margin: '0 auto' }}>
                      Thank you. Our machinery export coordinator will contact you on your registered business email and WhatsApp within 4 hours with full tiered CIF/FOB pricing.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleRfqSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }} className="grid-about">
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Target Product Brand</label>
                        <select
                          value={productType}
                          onChange={(e) => setProductType(e.target.value)}
                          style={{ backgroundColor: '#111', border: '1px solid rgba(212,175,55,0.15)', borderRadius: '4px', padding: '12px', color: '#fff', fontSize: '0.9rem', outline: 'none' }}
                        >
                          <option>Caterpillar Excavators</option>
                          <option>Komatsu Excavators</option>
                          <option>Hitachi Excavators</option>
                          <option>Sany Excavators</option>
                          <option>Doosan Excavators</option>
                          <option>Kubota Excavators</option>
                        </select>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Tonnage Tier</label>
                        <select
                          value={tonnage}
                          onChange={(e) => setTonnage(e.target.value)}
                          style={{ backgroundColor: '#111', border: '1px solid rgba(212,175,55,0.15)', borderRadius: '4px', padding: '12px', color: '#fff', fontSize: '0.9rem', outline: 'none' }}
                        >
                          <option>Mini (1 - 6 Tons)</option>
                          <option>Medium (12 - 15 Tons)</option>
                          <option>Standard (20 - 24 Tons)</option>
                          <option>Heavy / Mining (30+ Tons)</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }} className="grid-about">
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Business Email*</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. james@heavyimport.com"
                          style={{ backgroundColor: '#111', border: '1px solid rgba(212,175,55,0.15)', borderRadius: '4px', padding: '12px', color: '#fff', fontSize: '0.9rem', outline: 'none' }}
                        />
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Port of Delivery</label>
                        <input
                          type="text"
                          value={port}
                          onChange={(e) => setPort(e.target.value)}
                          placeholder="e.g. Port of Rotterdam"
                          style={{ backgroundColor: '#111', border: '1px solid rgba(212,175,55,0.15)', borderRadius: '4px', padding: '12px', color: '#fff', fontSize: '0.9rem', outline: 'none' }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em' }}>WhatsApp / Phone</label>
                      <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +1 (555) 019-2834"
                        style={{ backgroundColor: '#111', border: '1px solid rgba(212,175,55,0.15)', borderRadius: '4px', padding: '12px', color: '#fff', fontSize: '0.9rem', outline: 'none' }}
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Message / Custom Specifications</label>
                      <textarea
                        rows={4}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Provide model specifications, target year, maximum hours, or project details..."
                        style={{ backgroundColor: '#111', border: '1px solid rgba(212,175,55,0.15)', borderRadius: '4px', padding: '12px', color: '#fff', fontSize: '0.9rem', outline: 'none', resize: 'none' }}
                      />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#666', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Attach Tender / Specification PDF</label>
                      <div 
                        onClick={() => fileInputRef.current?.click()}
                        style={{ border: '1px dashed rgba(212,175,55,0.3)', borderRadius: '4px', padding: '20px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s' }}
                        onMouseEnter={(e)=>e.currentTarget.style.borderColor='#d4af37'}
                        onMouseLeave={(e)=>e.currentTarget.style.borderColor='rgba(212,175,55,0.3)'}
                      >
                        <UploadCloud size={24} style={{ color: '#d4af37', margin: '0 auto 8px' }} />
                        <span style={{ fontSize: '0.85rem', color: '#a0a0a0', display: 'block' }}>
                          {fileName ? `Attached: ${fileName}` : 'Click to Upload Project Dieline / Spec File'}
                        </span>
                        <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} />
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      className="btn btn-primary"
                      disabled={isSubmitting}
                      style={{ padding: '14px', width: '100%', fontSize: '0.95rem', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                    >
                      {isSubmitting ? 'Sending Request...' : 'Request Best CIF Pricing Quote'}
                      <Send size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Area */}
      <footer style={{ backgroundColor: '#070b13', borderTop: '1px solid rgba(212, 175, 55, 0.08)', padding: '60px 0 30px', color: '#a0a0a0' }}>
        <div className="container grid-about" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '0.12em', color: '#fff' }}>
              EXCAVATOR<span style={{ color: '#d4af37' }}>PRO</span>
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.6', color: '#555', margin: 0 }}>
              Premium Used Excavators Global Supplier. Over 15 years of construction equipment exporting experience. We guarantee machinery condition with transparent inspection reports.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
              <li><Link href="/" style={{ color: 'inherit', textDecoration: 'none' }} className="hover-gold">Home Landing</Link></li>
              <li><Link href="/blog" style={{ color: 'inherit', textDecoration: 'none' }} className="hover-gold">Guides Blog</Link></li>
              <li><Link href="/news" style={{ color: 'inherit', textDecoration: 'none' }} className="hover-gold">Company News</Link></li>
              <li><Link href="/about" style={{ color: 'inherit', textDecoration: 'none' }} className="hover-gold">Yard Certification</Link></li>
            </ul>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>Popular Brands</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem', color: '#555' }}>
              <li>Caterpillar Excavators (CAT)</li>
              <li>Komatsu Hydraulic Series</li>
              <li>Sany High Performance</li>
              <li>Hitachi Premium Diggers</li>
            </ul>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>Guaranteed Quality</h3>
            <div style={{ display: 'flex', gap: '10px', fontSize: '0.85rem', color: '#555' }}>
              <Award size={16} style={{ color: '#d4af37', flexShrink: 0, marginTop: '2px' }} />
              <p style={{ margin: 0 }}>All excavators undergo a rigorous 120-point inspection before loading.</p>
            </div>
            <div style={{ display: 'flex', gap: '10px', fontSize: '0.85rem', color: '#555' }}>
              <ShieldCheck size={16} style={{ color: '#d4af37', flexShrink: 0, marginTop: '2px' }} />
              <p style={{ margin: 0 }}>Official customs clearance declarations and SGS certification assistance provided.</p>
            </div>
          </div>
        </div>

        <div className="container" style={{ borderTop: '1px solid rgba(255,255,255,0.04)', marginTop: '40px', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', fontSize: '0.8rem', color: '#444' }}>
          <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} EXCAVATOR PRO Global Export. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>

      <FloatingContact />

      <style jsx global>{`
        @media (max-width: 768px) {
          .grid-about {
            display: flex !important;
            flex-direction: column !important;
            gap: 30px !important;
          }
          .about-text-col, .about-img-col {
            grid-column: span 12 !important;
            width: 100% !important;
          }
        }
      `}</style>
    </main>
  );
}
