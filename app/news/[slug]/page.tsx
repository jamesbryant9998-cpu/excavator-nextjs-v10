import { ArrowLeft, Calendar, Tag, ChevronRight, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../../../components/Header';
import FloatingContact from '../../../components/FloatingContact';
import newsData from '../../../data/news.json';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static routes for Next.js build compilation
export async function generateStaticParams() {
  return newsData.map((article) => ({
    slug: article.slug,
  }));
}

export default function NewsDetailPage({ params }: PageProps) {
  const article = newsData.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  // Get other recommended articles
  const recommendations = newsData
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  // Split content into readable sections based on standard sentences
  const paragraphs = article.content
    .split("\n\n")
    .map(p => p.trim())
    .filter(Boolean);

  return (
    <main style={{ minHeight: '100vh', position: 'relative', backgroundColor: '#050505', color: '#fff', paddingTop: '120px' }}>
      <Header />

      {/* Breadcrumb Bar */}
      <div style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.08)', padding: '16px 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#666' }}>
          <a href="/" style={{ color: '#666', textDecoration: 'none' }}>Home</a>
          <ChevronRight size={12} />
          <a href="/news" style={{ color: '#666', textDecoration: 'none' }}>News</a>
          <ChevronRight size={12} />
          <span style={{ color: '#d4af37' }}>{article.title}</span>
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
                  {article.category}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#888', fontSize: '0.85rem' }}>
                  <Calendar size={12} style={{ color: '#d4af37' }} />
                  Published: {article.date}
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
                {article.title}
              </h1>

              {/* Cover Image */}
              <div style={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(212, 175, 55, 0.12)',
                backgroundColor: '#101010',
                marginBottom: '32px'
              }}>
                <img 
                  src={article.image} 
                  alt={article.title} 
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              {/* Paragraphs */}
              <div style={{ fontSize: '1.05rem', lineHeight: '1.85', color: '#ccc' }}>
                {paragraphs.map((p, idx) => {
                  if (idx === 0) {
                    return (
                      <p key={idx} style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '24px', lineHeight: '1.8' }}>
                        {p}
                      </p>
                    );
                  }
                  if (idx === 2) {
                    return (
                      <div key={idx}>
                        <blockquote style={{
                          borderLeft: '3px solid #d4af37',
                          backgroundColor: '#0d0d0d',
                          padding: '24px 30px',
                          margin: '32px 0',
                          borderRadius: '0 8px 8px 0',
                          fontSize: '1.15rem',
                          fontStyle: 'italic',
                          color: '#d4af37',
                          lineHeight: '1.6',
                          fontFamily: '"Playfair Display", serif'
                        }}>
                          "Strategic B2B logistical expanding cuts sea transit times by up to 8 days, optimizing the overall landed costs and providing high security of shipping."
                        </blockquote>
                        <p style={{ marginBottom: '24px' }}>{p}</p>
                      </div>
                    );
                  }
                  return <p key={idx} style={{ marginBottom: '24px' }}>{p}</p>;
                })}
              </div>

              {/* Focus Keywords */}
              <div style={{ 
                borderTop: '1px solid rgba(212, 175, 55, 0.08)', 
                paddingTop: '20px', 
                margin: '32px 0'
              }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.82rem', color: '#555', fontWeight: 600, textTransform: 'uppercase' }}>Focus Keywords:</span>
                  {['machinery export announcements', 'SGS certification exporter', 'container logistics expand', 'heavy equipment stock arrivals'].map((kw, kIdx) => (
                    <span 
                      key={kIdx}
                      style={{
                        backgroundColor: 'rgba(212, 175, 55, 0.03)',
                        border: '1px solid rgba(212, 175, 55, 0.08)',
                        color: '#a0a0a0',
                        fontSize: '0.8rem',
                        padding: '3px 10px',
                        borderRadius: '30px'
                      }}
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
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
                  href="/news" 
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
                  Back to News
                </a>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <span style={{ color: '#555', fontSize: '0.85rem' }}>EXCAVATOR PRO Newsroom</span>
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
                  Trending <span style={{ color: '#d4af37' }}>Announcements</span>
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {recommendations.map((rec) => (
                    <div key={rec.id} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <span style={{ color: '#d4af37', fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {rec.category}
                      </span>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 600, lineHeight: '1.4', margin: 0 }}>
                        <a 
                          href={`/news/${rec.slug}`}
                          style={{ color: '#fff', textDecoration: 'none' }}
                        >
                          {rec.title}
                        </a>
                      </h4>
                      <span style={{ color: '#555', fontSize: '0.78rem' }}>{rec.date}</span>
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
