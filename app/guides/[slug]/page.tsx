import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, ChevronRight, Clock, ShieldCheck, CheckCircle } from 'lucide-react';
import Header from '../../../components/Header';
import FloatingContact from '../../../components/FloatingContact';
import guidesData from '../../../data/guides.json';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static routes for Next.js build compilation
export async function generateStaticParams() {
  return guidesData.map((g) => ({
    slug: g.slug,
  }));
}

export default function GuideDetailPage({ params }: PageProps) {
  const { slug } = params;
  const guide = guidesData.find((g) => g.slug === slug);

  if (!guide) {
    notFound();
  }

  // Get other recommended guides
  const recommendations = guidesData
    .filter((g) => g.slug !== slug)
    .slice(0, 3);

  return (
    <main style={{ minHeight: '100vh', position: 'relative', backgroundColor: '#050505', color: '#fff', paddingTop: '120px' }}>
      <Header />

      {/* Breadcrumb Bar */}
      <div style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.08)', padding: '16px 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#666' }}>
          <a href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</a>
          <ChevronRight size={12} />
          <span style={{ color: '#666' }}>Guides</span>
          <ChevronRight size={12} />
          <span style={{ color: '#d4af37' }}>{guide.title}</span>
        </div>
      </div>

      <article style={{ padding: '60px 0 80px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div className="news-detail-grid">
            {/* Left: Main Content Column */}
            <div className="news-detail-main">
              {/* Category & Date */}
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
                <span style={{
                  backgroundColor: 'rgba(212, 175, 55, 0.08)',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  color: '#d4af37',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <Tag size={12} />
                  {guide.category}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#888', fontSize: '0.85rem' }}>
                  <Clock size={12} style={{ color: '#d4af37' }} />
                  6 min read
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#888', fontSize: '0.85rem' }}>
                  <Calendar size={12} style={{ color: '#d4af37' }} />
                  Updated: June 2026
                </span>
              </div>

              {/* Title */}
              <h1 style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                lineHeight: '1.25',
                color: '#fff',
                marginBottom: '28px',
                fontFamily: '"Playfair Display", serif',
                letterSpacing: '0.02em'
              }}>
                {guide.title}
              </h1>

              {/* Cover/Placeholder Image */}
              <div style={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(212, 175, 55, 0.12)',
                backgroundColor: '#101010',
                marginBottom: '40px'
              }}>
                <img 
                  src="/images/carousel_inventory.webp" 
                  alt={guide.title} 
                  style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '400px', objectFit: 'cover' }}
                />
              </div>

              {/* Article Body HTML */}
              <div 
                className="prose prose-invert max-w-none prose-headings:text-white prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-p:text-gray-300 prose-p:leading-relaxed prose-li:text-gray-400 prose-strong:text-amber-500 prose-strong:font-black prose-a:text-amber-500 hover:prose-a:text-amber-400"
                style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#ccc' }}
                dangerouslySetInnerHTML={{ __html: guide.content }}
              />

              {/* Bottom Nav */}
              <div style={{
                borderTop: '1px solid rgba(212, 175, 55, 0.08)',
                paddingTop: '24px',
                marginTop: '48px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px'
              }}>
                <a 
                  href="/" 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#d4af37',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 600
                  }}
                >
                  <ArrowLeft size={16} />
                  Back to Home
                </a>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <span style={{ color: '#555', fontSize: '0.85rem' }}>EXCAVATOR PRO Buyer Guides</span>
                </div>
              </div>
            </div>

            {/* Right: Sidebar Recommendation Column */}
            <div className="news-detail-sidebar">
              <div style={{
                position: 'sticky',
                top: '140px',
                backgroundColor: '#0d0d0d',
                border: '1px solid rgba(212, 175, 55, 0.08)',
                borderRadius: '12px',
                padding: '30px 24px'
              }}>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: '#fff',
                  fontFamily: '"Playfair Display", serif',
                  marginBottom: '20px',
                  borderBottom: '1px solid rgba(212, 175, 55, 0.15)',
                  paddingBottom: '10px'
                }}>
                  More <span style={{ color: '#d4af37' }}>Buyer Guides</span>
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {recommendations.map((rec) => (
                    <div key={rec.slug} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <span style={{ color: '#d4af37', fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {rec.category}
                      </span>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 600, lineHeight: '1.4', margin: 0 }}>
                        <a 
                          href={`/guides/${rec.slug}`}
                          style={{ color: '#fff', textDecoration: 'none' }}
                        >
                          {rec.title}
                        </a>
                      </h4>
                      <p style={{ color: '#666', fontSize: '0.78rem', margin: 0 }}>{rec.shortDesc}</p>
                    </div>
                  ))}
                </div>

                {/* Direct B2B Wholesale Contact CTA Widget */}
                <div style={{
                  marginTop: '40px',
                  backgroundColor: '#050505',
                  border: '1px solid rgba(212, 175, 55, 0.15)',
                  borderRadius: '8px',
                  padding: '24px 20px',
                  textAlign: 'center'
                }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 10px', color: '#fff', fontFamily: '"Playfair Display", serif' }}>
                    Need Machinery <span style={{ color: '#d4af37' }}>CIF/FOB Quote</span>?
                  </h4>
                  <p style={{ color: '#888', fontSize: '0.8rem', lineHeight: '1.5', margin: '0 0 18px' }}>
                    Get direct-yard wholesale pricing and transparent 120-point SGS inspection reports on Maersk/COSCO shipping.
                  </p>
                  <a 
                    href="https://wa.me/8618326001631?text=Hi%20Excavator%20Pro%2C%20I%20am%20looking%20for%20premium%20used%20excavators."
                    className="btn btn-primary"
                    style={{ display: 'block', padding: '10px', fontSize: '0.82rem', borderRadius: '4px' }}
                  >
                    Inquire on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <FloatingContact />
    </main>
  );
}
