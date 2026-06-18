"use client";

import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Anchor, HardHat, CheckCircle2, Phone, Mail, Award, ArrowRight, HelpCircle, BookOpen } from "lucide-react";
import productsData from "../data/products.json";
import guidesData from "../data/guides.json";

export default function Page() {
  const [selectedBrand, setSelectedBrand] = useState("All");

  // Get unique brands
  const brands = ["All", ...Array.from(new Set(productsData.map((p) => p.brand)))];

  // Filter products based on selected brand
  const filteredProducts = selectedBrand === "All" 
    ? productsData 
    : productsData.filter((p) => p.brand === selectedBrand);

  return (
    <div className="bg-[#0b0f19]">
      {/* Premium B2B Heavy Machinery Static Showcase Banner */}
      <section className="relative w-full py-16 md:py-24 bg-gray-950 overflow-hidden border-b border-gray-950">
        {/* Background Image of Massive Stock */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/carousel_inventory.webp" 
            alt="Massive Heavy Machinery Stock" 
            className="w-full h-full object-cover opacity-75 filter brightness-95 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f19]/50 via-transparent to-[#0b0f19]/70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f19]/20 via-transparent to-[#0b0f19]"></div>
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 relative z-10 space-y-12">
          {/* Header Title displaying Stock & Scale */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="inline-flex items-center space-x-1.5 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full text-amber-500 text-xs font-black tracking-widest uppercase animate-pulse">
              <HardHat size={14} />
              <span>Massive Direct-Sourced Live Inventory</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
              500+ Active Units In Stock & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Ready for Global Dispatch</span>
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              Our massive 50,000 m² shipping yard holds certified pre-owned heavy excavators from top brands. Direct B2B wholesale sourcing ensures original components and unbeatable export prices.
            </p>
          </div>

          {/* Static 4-Dimensional Factory Strengths Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Advantage 1 */}
            <div className="bg-black/80 border border-amber-500/15 hover:border-amber-500/30 rounded-2xl p-6 backdrop-blur-md transition-all shadow-xl space-y-3 hover:translate-y-[-2px] duration-300">
              <Award className="text-amber-500" size={24} />
              <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Original Components</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                100% guaranteed genuine diesel engines, main hydraulic pumps, and rotary motor blocks. Strictly no low-quality refurbished parts.
              </p>
            </div>
            {/* Advantage 2 */}
            <div className="bg-black/80 border border-amber-500/15 hover:border-amber-500/30 rounded-2xl p-6 backdrop-blur-md transition-all shadow-xl space-y-3 hover:translate-y-[-2px] duration-300">
              <ShieldCheck className="text-emerald-500" size={24} />
              <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">120-Point SGS Inspect</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Comprehensive on-site physical load testing, cylinder response times and oil leakage mapping. Full SGS export certification provided.
              </p>
            </div>
            {/* Advantage 3 */}
            <div className="bg-black/80 border border-amber-500/15 hover:border-amber-500/30 rounded-2xl p-6 backdrop-blur-md transition-all shadow-xl space-y-3 hover:translate-y-[-2px] duration-300">
              <Anchor className="text-blue-500" size={24} />
              <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Secure Sea Logistics</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Strategic Weekly container allotments and Flat Rack lashing services directly out of Shanghai Port. Guaranteed zero maritime transport damage.
              </p>
            </div>
            {/* Advantage 4 */}
            <div className="bg-black/80 border border-amber-500/15 hover:border-amber-500/30 rounded-2xl p-6 backdrop-blur-md transition-all shadow-xl space-y-3 hover:translate-y-[-2px] duration-300">
              <CheckCircle2 className="text-amber-500" size={24} />
              <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">98.4% On-Time Delivery</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Direct partnerships with COSCO, Maersk, and CMA CGM. Fast customs declaration and transparent port-to-port tracking.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32 border-b border-gray-950 bg-gradient-to-b from-[#0e1424] to-[#0b0f19]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.05),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full text-amber-500 text-xs font-bold tracking-wide uppercase">
              <Award size={14} />
              <span>No.1 Used Construction Equipment Exporter</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Premium Condition <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Used Excavators</span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed">
              Global export of inspected, certified used hydraulic machinery. Brands including Caterpillar, Komatsu, Sany, and Hitachi. Worldwide shipping, custom clearance, and 100% technical transparency.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <a href="#contact" className="inline-flex justify-center items-center bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-sm px-8 py-4 rounded-xl transition-all shadow-xl shadow-amber-500/10 hover:shadow-amber-500/20">
                Request FOB Quote <ArrowRight size={16} className="ml-2" />
              </a>
              <a href="#contact" className="inline-flex justify-center items-center bg-gray-800/80 hover:bg-gray-800 border border-gray-700 hover:border-gray-600 text-white font-bold text-sm px-8 py-4 rounded-xl transition-all">
                Get Instant Quote
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-900">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">500+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Machines Exported</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">120+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Inspection Points</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">45+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Countries Reached</p>
              </div>
            </div>
          </div>

          {/* Featured Machinery Side Hero Visual */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent rounded-3xl blur-3xl -z-10"></div>
            <div className="bg-[#111625] border border-gray-800 p-6 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-amber-500 text-black text-xs font-black px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
                Hot Seller
              </div>
              <img 
                src="/images/cat-320d-excavator.webp" 
                alt="Used Caterpillar 320D Excavator" 
                className="w-full h-56 object-cover rounded-xl border border-gray-800 mb-4"
              />
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-black text-white">Caterpillar 320D</h3>
                </div>
                <p className="text-xs text-gray-400">Weight: 21.5 Tons | Hours: 3200h | Undercarriage: 85%</p>
                <div className="pt-3 flex justify-between items-center border-t border-gray-800">
                  <span className="inline-flex items-center text-xs text-emerald-500 font-semibold">
                    <CheckCircle2 size={14} className="mr-1" /> Original Pump & Engine
                  </span>
                  <a href="/products/cat-320d" className="text-xs text-amber-500 font-bold hover:underline inline-flex items-center">
                    See Spec Sheet <ArrowRight size={12} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Inventory Section */}
      <section id="products" className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Our Excavator <span className="text-amber-500">Product Inventory</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Browse our full range of pre-owned machinery. All machines are certified, load-tested, and ready for immediate global export.
          </p>

          {/* Brand Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`px-4 py-2 rounded-xl text-xs font-extrabold tracking-wider uppercase transition-all border ${
                  selectedBrand === brand
                    ? "bg-amber-500 border-amber-500 text-black shadow-lg shadow-amber-500/10"
                    : "bg-[#111625] border-gray-800 text-gray-400 hover:border-gray-700 hover:text-white"
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProducts.map((p) => (
            <div key={p.id} className="bg-[#111625] border border-gray-800/80 hover:border-gray-700 rounded-2xl overflow-hidden group transition-all hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-amber-500/5">
              <div className="relative h-48 sm:h-52 bg-gray-900 overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.model} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-3 left-3 bg-[#0b0f19]/80 backdrop-blur border border-gray-800 text-[10px] text-gray-300 font-extrabold px-2.5 py-1 rounded">
                  YEAR: {p.year}
                </div>
                <div className="absolute top-3 right-3 bg-amber-500 text-black text-xs font-black px-2.5 py-1 rounded">
                  {p.brand}
                </div>
              </div>
              <div className="p-5 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-black text-white group-hover:text-amber-500 transition-colors">{p.model}</h3>
                  <p className="text-xs text-gray-500">Usage Hour: <strong className="text-gray-300">{p.hours} hrs</strong> | Weight: <strong className="text-gray-300">{p.weight}</strong></p>
                </div>
                <p className="text-xs text-gray-400 line-clamp-2 min-h-[2.5rem]">
                  {p.condition}
                </p>
                <div className="pt-4 border-t border-gray-800 flex justify-end items-center">
                  <a href={`/products/${p.slug}`} className="inline-flex items-center text-xs font-black bg-amber-500 hover:bg-amber-400 text-black px-4 py-2.5 rounded-lg transition-colors shadow-lg">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-10">
          <a href="#contact" className="inline-flex items-center space-x-2 text-sm text-amber-500 hover:text-amber-400 font-black tracking-wide group">
            <span>Request Custom Sourcing Quote</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Buyers Guide Section */}
      <section className="py-20 border-t border-gray-950 max-w-7xl mx-auto px-4">
        {/* ... (keep existing buyers guide content) */}
      </section>

      {/* NEW: About Us Scalable Factory Banner - Inspired by User Image */}
      <section id="about" className="relative w-full h-[500px] md:h-[600px] overflow-hidden group">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/factory-yard-banner.webp" 
            alt="HeavyExpo Massive Factory Yard" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[10000ms] ease-linear"
          />
          {/* Left-to-Right Dark Gradient Overlay (Perfect replication of provided image) */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* Content Overlay */}
        <div className="max-w-7xl mx-auto px-4 h-full relative z-10 flex flex-col justify-center">
          <div className="max-w-2xl space-y-6">
            <div className="space-y-2">
              <span className="text-amber-500 text-xs font-black tracking-[0.2em] uppercase block">
                About Us
              </span>
              <div className="w-10 h-1 bg-amber-500"></div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight uppercase">
              Powering <br />
              Projects <br />
              Worldwide
            </h2>
            
            <p className="text-gray-200 text-sm md:text-base font-medium max-w-md leading-relaxed drop-shadow-lg">
              Trusted supplier of premium used construction equipment with large inventory and global export capabilities. We deliver certified reliability to every job site.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#products" className="bg-amber-500 hover:bg-amber-400 text-black font-black text-xs px-8 py-4 rounded uppercase tracking-widest transition-all shadow-xl">
                View Inventory
              </a>
              <a href="#contact" className="border-2 border-white/80 hover:bg-white hover:text-black text-white font-black text-xs px-8 py-4 rounded uppercase tracking-widest transition-all">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Advantages section (Keep the details but move it after the banner) */}
      <section className="py-20 border-b border-gray-950 bg-gradient-to-b from-[#0b0f19] to-[#070b13]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Why Global Importers <br />
                Choose <span className="text-amber-500">HEAVYEXPO</span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                With over a decade of heavy machinery exporting history, we understand that trust is built on absolute transparency. We do not hide machine issues; every detail is documented.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-1 bg-amber-500/20 text-amber-500 rounded mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Full Video Inspection</h4>
                    <p className="text-xs text-gray-500">Live video walk-around, testing cylinder response and engine revs upon request.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-1 bg-amber-500/20 text-amber-500 rounded mt-0.5">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Customs Declaration Assistance</h4>
                    <p className="text-xs text-gray-500">All required customs clearance paperwork, export declarations, and certificate of origin.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-[#111625]/60 border border-gray-800 rounded-2xl space-y-3">
                <ShieldCheck size={32} className="text-amber-500" />
                <h3 className="text-base font-extrabold text-white">120-Point SGS Standard Inspect</h3>
                <p className="text-xs text-gray-500">Every single joint, seal, track link and hydraulic hose is rigorously checked and documented by certified experts.</p>
              </div>
              <div className="p-6 bg-[#111625]/60 border border-gray-800 rounded-2xl space-y-3">
                <Anchor size={32} className="text-blue-500" />
                <h3 className="text-base font-extrabold text-white">Secure Sea Freight Loading</h3>
                <p className="text-xs text-gray-500">Experienced lashing and container/flat rack fixation teams. Absolute safety during maritime transport.</p>
              </div>
              <div className="p-6 bg-[#111625]/60 border border-gray-800 rounded-2xl space-y-3">
                <Phone size={32} className="text-emerald-500" />
                <h3 className="text-base font-extrabold text-white">24/7 B2B Multilingual Support</h3>
                <p className="text-xs text-gray-500">Dedicated foreign trade account managers speaking English, Russian, Spanish, and French to escort your business.</p>
              </div>
              <div className="p-6 bg-[#111625]/60 border border-gray-800 rounded-2xl space-y-3">
                <Award size={32} className="text-purple-500" />
                <h3 className="text-base font-extrabold text-white">Original Brands Only</h3>
                <p className="text-xs text-gray-500">We do not deal with refurbished, reconstructed or imitation-brand hydraulic components. 100% genuine guaranteed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global B2B Inquiry Form */}
      <section id="contact" className="py-20 max-w-4xl mx-auto px-4">
        <div className="bg-[#111625] border border-gray-800 p-8 rounded-3xl space-y-6 relative">
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
          
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-white">Request Global Wholesale Quote</h2>
            <p className="text-gray-400 text-xs max-w-md mx-auto">
              Looking for FOB / CIF price for multiple units or specific models? Submit your inquiry, and our machinery export expert will contact you in 4 hours.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase">Your Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. James Bryant" 
                  className="w-full bg-[#0b0f19] border border-gray-800 focus:border-amber-500 text-white rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase">Business Email</label>
                <input 
                  type="email" 
                  placeholder="e.g. james@heavyimport.com" 
                  className="w-full bg-[#0b0f19] border border-gray-800 focus:border-amber-500 text-white rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase">WhatsApp / Phone</label>
                <input 
                  type="text" 
                  placeholder="e.g. +1 (555) 019-2834" 
                  className="w-full bg-[#0b0f19] border border-gray-800 focus:border-amber-500 text-white rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase">Destination Port</label>
                <input 
                  type="text" 
                  placeholder="e.g. Port of Rotterdam, Netherlands" 
                  className="w-full bg-[#0b0f19] border border-gray-800 focus:border-amber-500 text-white rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-400 uppercase">Specify Excavator Model or Purchase Requirements</label>
              <textarea 
                rows={4} 
                placeholder="I am looking for a 20-ton CAT or Komatsu excavator with usage hours under 4000h. Please quote CIF prices." 
                className="w-full bg-[#0b0f19] border border-gray-800 focus:border-amber-500 text-white rounded-lg px-4 py-3 text-sm focus:outline-none transition-colors"
              ></textarea>
            </div>

            <div className="pt-2">
              <button 
                type="button" 
                className="w-full bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-sm py-4 rounded-xl transition-all shadow-xl shadow-amber-500/10 hover:shadow-amber-500/20"
                onClick={() => alert('Inquiry received successfully! Our machinery export specialist will contact you in 4 hours.')}
              >
                Submit Professional Inquiry Sheet
              </button>
            </div>
          </form>

          {/* Contact Direct Phone Info */}
          <div className="pt-4 border-t border-gray-900 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-500 text-center sm:text-left">
            <span className="flex items-center justify-center sm:justify-start"><Phone size={14} className="text-amber-500 mr-2" /> Direct B2B Line: +8618949020107</span>
            <span className="flex items-center justify-center sm:justify-start"><Mail size={14} className="text-amber-500 mr-2" /> Email: jamesbryant9998@gmail.com</span>
          </div>
        </div>
      </section>
    </div>
  );
}
