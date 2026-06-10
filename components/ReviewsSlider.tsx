'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  role: string;
  company: string;
  country: string;
  rating: number;
  avatarBg: string;
  avatarColor: string;
  text: string;
}

export default function ReviewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const reviews: Review[] = [
    {
      id: 1,
      name: 'Sarah Jenkins',
      role: 'Procurement Manager',
      company: 'Jenkins Construction Ltd',
      country: 'US',
      rating: 5,
      avatarBg: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
      avatarColor: '#fff',
      text: '"Excavator Pro exceeded every expectation. The Caterpillar 320D arrived at Houston port exactly on time, perfectly verified. Our engineers are highly satisfied with the certified CAT engine performance. Will definitely source our next fleet here."'
    },
    {
      id: 2,
      name: 'Marcus Vance',
      role: 'Director of Operations',
      company: 'Vance Heavy Logistics',
      country: 'GB',
      rating: 5,
      avatarBg: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
      avatarColor: '#fff',
      text: '"After trying 3 other China machinery yards, Excavator Pro is in a completely different league. Their 120-point SGS inspection was extremely transparent. The Komatsu PC200-8 hydraulic pressure is spotless and works perfectly on site."'
    },
    {
      id: 3,
      name: 'Amira Khalil',
      role: 'Import Coordinator',
      company: 'Khalil Infrastructure Group',
      country: 'SA',
      rating: 5,
      avatarBg: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
      avatarColor: '#fff',
      text: '"We source multiple 20-ton class excavators quarterly. Excavator Pro has never missed a COSCO shipping allotment. Their on-site walk-around video inspection provides unmatched peace of mind — I\'ve vetted over 15 suppliers."'
    },
    {
      id: 4,
      name: 'Jean-Pierre Dubois',
      role: 'Fleet Lead',
      company: 'Dubois & Sons Excavation',
      country: 'FR',
      rating: 5,
      avatarBg: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
      avatarColor: '#fff',
      text: '"The pre-owned Hitachi ZX200-3 is absolutely breath-taking. The original paint is immaculate, and the hydraulic cylinders respond with zero delay. Our road construction project was a massive success!"'
    },
    {
      id: 5,
      name: 'Aiko Tanaka',
      role: 'Purchasing Director',
      company: 'Tanaka Agricultural Developers',
      country: 'JP',
      rating: 5,
      avatarBg: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)',
      avatarColor: '#fff',
      text: '"Finding used compact excavators with pristine rubber tracks and tight swing joint play is rare. Excavator Pro\'s quality control is flawless. Every Kubota KX155 we ordered is in superb condition. Arigatou gozaimasu!"'
    },
    {
      id: 6,
      name: 'Elena Rostova',
      role: 'Project Operations Lead',
      company: 'Rostov Municipal Mining',
      country: 'AU',
      rating: 5,
      avatarBg: 'linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)',
      avatarColor: '#fff',
      text: '"Our Sany SY215C and Doosan heavy excavators arrived at Port of Melbourne in pristine condition. They have original main pumps and engines, passing our local Australian safety checks smoothly. Exceptional B2B support!"'
    }
  ];

  // Responsive logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = reviews.length - cardsToShow;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Swiping controls
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;
    if (diff > swipeThreshold) {
      nextSlide();
    } else if (diff < -swipeThreshold) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section id="reviews" className="section" style={{ backgroundColor: '#050505', overflow: 'hidden', padding: '100px 0' }}>
      <style>{`
        .reviews-header-container {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 50px;
        }
        
        .reviews-sub {
          text-transform: uppercase;
          color: #d4af37;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          margin-bottom: 12px;
        }

        .reviews-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
        }

        .reviews-title span {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          color: #d4af37;
          font-weight: 600;
        }

        .reviews-desc {
          color: #a0a0a0;
          font-size: 1rem;
          margin-top: 10px;
        }

        .reviews-nav-btns {
          display: flex;
          gap: 15px;
        }

        .reviews-nav-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background-color: rgba(255, 255, 255, 0.02);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .reviews-nav-btn:hover {
          background-color: #d4af37;
          color: #050505;
          border-color: #d4af37;
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(212, 175, 55, 0.25);
        }

        .slider-viewport {
          overflow: visible;
          position: relative;
        }

        .slider-track {
          display: flex;
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
          width: 100%;
        }

        .review-card-wrapper {
          flex-shrink: 0;
          padding: 0 15px;
          box-sizing: border-box;
          transition: all 0.5s ease;
        }

        .review-card {
          background-color: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 35px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-sizing: border-box;
          transition: all 0.4s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .review-card:hover {
          transform: translateY(-6px);
          background-color: rgba(255, 255, 255, 0.04);
          border-color: rgba(212, 175, 55, 0.25);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
        }

        .stars-container {
          display: flex;
          gap: 4px;
          margin-bottom: 24px;
        }

        .star-icon {
          color: #d4af37;
          fill: #d4af37;
        }

        .review-text {
          color: #e0e0e0;
          font-size: 1.05rem;
          line-height: 1.6;
          font-style: italic;
          margin-bottom: 30px;
          font-weight: 400;
          flex-grow: 1;
        }

        .client-profile-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 24px;
        }

        .client-profile-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .client-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.95rem;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
        }

        .client-info {
          display: flex;
          flex-direction: column;
        }

        .client-name {
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
        }

        .client-role {
          font-size: 0.85rem;
          color: #a0a0a0;
          margin-top: 2px;
        }

        .client-country {
          font-size: 0.9rem;
          font-weight: 700;
          color: #808080;
          letter-spacing: 0.05em;
        }

        .dots-container {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 40px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.15);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          background-color: #d4af37;
          width: 24px;
          border-radius: 4px;
        }

        @media (max-width: 768px) {
          .reviews-header-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
          .reviews-nav-btns {
            width: 100%;
            justify-content: space-between;
          }
          .review-card {
            padding: 25px;
          }
        }
      `}</style>

      <div className="container">
        <div className="reviews-header-container">
          <div>
            <div className="reviews-sub">Global Importers Feedback</div>
            <h2 className="reviews-title">
              What Our B2B Clients <span>Say</span>
            </h2>
            <p className="reviews-desc">
              Real testimonials from international contractors who source pre-owned excavators from our certified yards.
            </p>
          </div>
          <div className="reviews-nav-btns">
            <button className="reviews-nav-btn" onClick={prevSlide} aria-label="Previous review">
              <ChevronLeft size={20} />
            </button>
            <button className="reviews-nav-btn" onClick={nextSlide} aria-label="Next review">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div 
          className="slider-viewport"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="slider-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
            }}
          >
            {reviews.map((r) => (
              <div 
                key={r.id}
                className="review-card-wrapper"
                style={{
                  width: `${100 / cardsToShow}%`
                }}
              >
                <div className="review-card">
                  <div>
                    <div className="stars-container">
                      {[...Array(r.rating)].map((_, i) => (
                        <Star key={i} size={15} className="star-icon" />
                      ))}
                    </div>
                    <p className="review-text">{r.text}</p>
                  </div>

                  <div className="client-profile-row">
                    <div className="client-profile-left">
                      <div 
                        className="client-avatar"
                        style={{
                          background: r.avatarBg,
                          color: r.avatarColor
                        }}
                      >
                        {r.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="client-info">
                        <span className="client-name">{r.name}</span>
                        <span className="client-role">{r.role}, {r.company}</span>
                      </div>
                    </div>
                    <span className="client-country">{r.country}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dots-container" role="tablist" aria-label="Review slides">
          {[...Array(maxIndex + 1)].map((_, i) => (
            <button 
              key={i}
              role="tab"
              aria-selected={currentIndex === i ? 'true' : 'false'}
              aria-label={`Go to slide ${i + 1}`}
              className={`dot ${currentIndex === i ? 'active' : ''}`}
              onClick={() => setCurrentIndex(i)}
              style={{ border: 'none', padding: 0, display: 'inline-block' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
