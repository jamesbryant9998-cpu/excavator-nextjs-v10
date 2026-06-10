'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Award, Users, MapPin, CheckCircle, ArrowRight, Gauge, Anchor, HelpCircle } from 'lucide-react';
import Header from '../../components/Header';
import FloatingContact from '../../components/FloatingContact';

export default function AboutPage() {
  const coreValues = [
    {
      icon: <Award size={32} style={{ color: '#d4af37', marginBottom: '16px' }} />,
      title: 'Rigorous 120-Point Inspection',
      desc: 'Our certified mechanics conduct meticulous physical load-testing, hydraulic system pressure diagnostics, and cylinder response speed checks to guarantee ready-to-work machines.'
    },
    {
      icon: <ShieldCheck size={32} style={{ color: '#d4af37', marginBottom: '16px' }} />,
      title: 'Component Integrity Guarantee',
      desc: 'We guarantee 100% genuine diesel engines, main hydraulic pumps, and swing bearings on all equipment. Strictly no low-quality refurbished or non-standard parts.'
    },
    {
      icon: <Users size={32} style={{ color: '#d4af37', marginBottom: '16px' }} />,
      title: 'Global Maritime Logistics',
      desc: 'Serving construction contractors and fleet managers across North America, Europe, Australia, and the Middle East with direct Flat Rack and container sea shipping.'
    }
  ];

  return (
    <main style={{ minHeight: '100vh', position: 'relative', backgroundColor: '#050505', color: '#fff', paddingTop: '120px' }}>
      <Header />

      {/* Hero Banner Section */}
      <section style={{ padding: '80px 0 60px', borderBottom: '1px solid rgba(212, 175, 55, 0.08)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span style={{ color: '#d4af37', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
              WHO WE ARE
            </span>
            <h1 style={{ fontSize: '3rem', fontWeight: 700, letterSpacing: '0.05em', lineHeight: '1.2', marginBottom: '24px' }}>
              Defining Heavy Machinery <span style={{ color: '#d4af37' }}>Export Sourcing</span>
            </h1>
            <p style={{ color: '#a0a0a0', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '0' }}>
              Established with a singular focus on verified pre-owned heavy equipment, EXCAVATOR PRO is a global leader in pre-owned hydraulic excavator exporting, blending comprehensive technical certification with reliable maritime logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Main Corporate Profile & Shipping Yard */}
      <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(212, 175, 55, 0.08)' }}>
        <div className="container grid-about" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '40px', alignItems: 'center' }}>
          {/* Text Content */}
          <div style={{ gridColumn: 'span 7' }} className="about-text-col">
            <h2 style={{ fontSize: '2.2rem', fontWeight: 600, marginBottom: '24px', letterSpacing: '0.05em' }}>
              Our 50,000 m² Shanghai Shipping Yard & Testing Facility
            </h2>
            <p style={{ color: '#a0a0a0', lineHeight: '1.8', marginBottom: '16px' }}>
              With over 50,000 square meters of specialized heavy machinery storage yard and 3 fully equipped testing tracks near Shanghai Port, we house over 500 active units of certified pre-owned excavators. Our facility is equipped with high-precision hydraulic pressure sensors, engine diagnostic computers, and dedicated mechanical detailing bays.
            </p>
            <p style={{ color: '#a0a0a0', lineHeight: '1.8', marginBottom: '24px' }}>
              In our commercial exhibition yard, we showcase models from top global brands like Caterpillar, Komatsu, Hitachi, Sany, Doosan, and Kubota. Our engineering team assists B2B buyers in verifying every detail, offering full on-site physical load testing and live video walk-arounds to ensure absolute purchasing transparency.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px 40px', marginTop: '30px' }}>
              <div>
                <div style={{ fontSize: '2.4rem', fontWeight: 700, color: '#d4af37' }}>15+</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Years Experience</div>
              </div>
              <div>
                <div style={{ fontSize: '2.4rem', fontWeight: 700, color: '#d4af37' }}>100%</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Original Components</div>
              </div>
              <div>
                <div style={{ fontSize: '2.4rem', fontWeight: 700, color: '#d4af37' }}>500+</div>
                <div style={{ fontSize: '0.85rem', color: '#666', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Annual Export Fleet</div>
              </div>
            </div>
          </div>

          {/* Showroom Image Display */}
          <div style={{ gridColumn: 'span 5' }} className="about-img-col">
            <div style={{
              border: '1px solid rgba(212, 175, 55, 0.15)',
              padding: '12px',
              backgroundColor: '#0d0d0d',
              borderRadius: '12px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
            }}>
              <Image 
                src="/images/carousel_inventory.webp" 
                alt="Heavy Machinery Storage Yard Massive Stock Exhibition" 
                width={800}
                height={500}
                sizes="(max-width: 768px) 100vw, 800px"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '6px',
                  display: 'block'
                }}
              />
              <div style={{ padding: '12px 6px 4px', textAlign: 'center', fontSize: '0.8rem', color: '#888' }}>
                <MapPin size={12} style={{ color: '#d4af37', marginRight: '4px', verticalAlign: 'middle', display: 'inline' }} />
                Corporate High-End Heavy Machinery Storage & Shipping Yard
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(212, 175, 55, 0.08)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 600, letterSpacing: '0.05em' }}>
              Our Pillars of Mechanical Excellence
            </h2>
            <div style={{ width: '60px', height: '1px', backgroundColor: '#d4af37', margin: '20px auto 0' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }} className="grid-values">
            {coreValues.map((val, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#0d0d0d',
                  border: '1px solid rgba(212, 175, 55, 0.05)',
                  borderRadius: '8px',
                  padding: '40px 30px',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.05)';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                {val.icon}
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '14px', letterSpacing: '0.02em' }}>{val.title}</h3>
                <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: 0 }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Certification Badges */}
      <section style={{ padding: '80px 0', backgroundColor: '#090909' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '40px', alignItems: 'center' }} className="grid-about">
            <div style={{ gridColumn: 'span 4' }} className="about-text-col">
              <h2 style={{ fontSize: '2rem', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '16px' }}>
                SGS & International <span style={{ color: '#d4af37' }}>Export Certifications</span>
              </h2>
              <p style={{ color: '#888', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: 0 }}>
                We believe that trust in B2B importing is built on rigorous, standardized technical compliance. Our machines undergo comprehensive quality check verifications.
              </p>
            </div>
            
            <div style={{ gridColumn: 'span 8' }} className="about-badges-col">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                {[
                  { title: 'SGS Audited & Certified Exporter', desc: 'Full physical yard audits verifying our corporate registration, active machinery stock, and export declaration compliance.' },
                  { title: 'ISO 9001:2015 Quality Management', desc: 'Standardized mechanical testing, cataloging, pre-shipping detailing, and strict loading supervision protocols.' },
                  { title: 'Third-Party SGS Quality Check Assistance', desc: 'Providing official third-party SGS on-site inspections, loading supervision, and certificate assistance before vessel loading.' },
                  { title: 'Global Maritime Transit Protection', desc: 'Weekly shipping allotments with major ocean carriers. Robust steel-wire cable lashing and cylinder anti-rust spray safeguards.' }
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle size={20} style={{ color: '#d4af37', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>{item.title}</h4>
                      <p style={{ color: '#666', fontSize: '0.8rem', lineHeight: '1.5', marginBottom: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '100px 0', textAlign: 'center', borderTop: '1px solid rgba(212, 175, 55, 0.08)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.4rem', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '20px' }}>
            Secure Your Verified Heavy Fleet Today
          </h2>
          <p style={{ color: '#a0a0a0', maxWidth: '600px', margin: '0 auto 36px', lineHeight: '1.6' }}>
            Get in touch with our elite heavy machinery export engineers. We provide free video walk-arounds, transparent 120-point mechanical reports, and competitive port-to-port CIF quotes.
          </p>
          <Link href="/#contact" className="btn btn-primary" style={{ padding: '14px 40px', fontSize: '0.9rem', borderRadius: '4px' }}>
            Request A Free Custom Quote <ArrowRight size={16} style={{ marginLeft: '8px', verticalAlign: 'middle', display: 'inline' }} />
          </Link>
        </div>
      </section>

      <FloatingContact />

      <style jsx global>{`
        @media (max-width: 768px) {
          .grid-about {
            display: flex !important;
            flex-direction: column !important;
            gap: 30px !important;
          }
          .about-text-col, .about-img-col, .about-badges-col {
            grid-column: span 12 !important;
            width: 100% !important;
          }
          .grid-values {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </main>
  );
}
