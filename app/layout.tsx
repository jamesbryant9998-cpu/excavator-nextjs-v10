import "./globals.css";
import { HardHat, Compass, Mail, Phone, Clock, Award, ShieldCheck, Globe } from "lucide-react";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata = {
  title: "HEAVY MACHINERY PRO (HMP) | Global Premium Used Equipment Supplier",
  description: "Global trust leader in premium used excavators export, including Caterpillar, Komatsu, Volvo, Sany, and Doosan. 120-point SGS inspected, work-ready machinery for worldwide shipping.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="flex flex-col min-h-screen bg-[#0b0f19] text-[#f3f4f6]">
        {/* Info Top Bar */}
        <div className="hidden md:block bg-[#070b13] py-2 border-b border-gray-800 text-xs text-gray-400">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <span className="flex items-center"><Phone size={13} className="text-amber-500 mr-2" /> +8618949020107</span>
              <span className="flex items-center"><Mail size={13} className="text-amber-500 mr-2" /> jamesbryant9998@gmail.com</span>
              <span className="flex items-center"><Clock size={13} className="text-amber-500 mr-2" /> Hours: Mon-Sat 8:00 - 18:00 (UTC+8)</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="flex items-center"><ShieldCheck size={13} className="text-emerald-500 mr-1" /> SGS Certified Exporter</span>
              <span className="flex items-center"><Globe size={13} className="text-blue-500 mr-1" /> Global Shipping Enabled</span>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <header className="sticky top-0 z-50 bg-[#0b0f19]/90 backdrop-blur-md border-b border-gray-800/80">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" className="flex items-center group">
              <img 
                src="/logo.webp" 
                alt="HEAVY MACHINERY PRO Logo" 
                className="h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </a>
            
            <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold">
              <a href="/" className="text-gray-300 hover:text-amber-500 transition-colors">Home</a>
              
              {/* B2B Widescreen Multi-Level Dropdown Mega Menu */}
              <div className="relative group py-2">
                <button className="text-gray-300 hover:text-amber-500 flex items-center transition-colors focus:outline-none">
                  Products
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Mega Menu Grid Panel - Redesigned by Brand */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#111625]/95 border border-gray-800 rounded-2xl p-6 shadow-2xl w-[90vw] max-w-[900px] z-50 backdrop-blur-md">
                  
                  {/* Brand 1: Caterpillar */}
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-widest border-b border-gray-800 pb-1.5 mb-2">Caterpillar</h4>
                    <ul className="space-y-1 text-xs text-gray-300">
                      <li><a href="/products/used-cat-320d2-excavator" className="hover:text-amber-500 transition-colors block py-0.5">CAT 320D (21.5T)</a></li>
                      <li><a href="/products/used-cat-336d2-excavator" className="hover:text-amber-500 transition-colors block py-0.5">CAT 336D (36T)</a></li>
                      <li><a href="/products/used-cat-349gc-excavator" className="hover:text-amber-500 transition-colors block py-0.5">CAT 349D (48T)</a></li>
                      <li><a href="/#products" className="text-gray-500 text-[10px] hover:text-amber-500 transition-colors">View All CAT →</a></li>
                    </ul>
                  </div>

                  {/* Brand 2: Komatsu */}
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-widest border-b border-gray-800 pb-1.5 mb-2">Komatsu</h4>
                    <ul className="space-y-1 text-xs text-gray-300">
                      <li><a href="/products/used-komatsu-pc210-excavator" className="hover:text-amber-500 transition-colors block py-0.5">PC210 (21T)</a></li>
                      <li><a href="/products/used-komatsu-pc220-excavator" className="hover:text-amber-500 transition-colors block py-0.5">PC220 (22T)</a></li>
                      <li><a href="/products/used-komatsu-pc240lc-excavator" className="hover:text-amber-500 transition-colors block py-0.5">PC240 (24T)</a></li>
                      <li><a href="/#products" className="text-gray-500 text-[10px] hover:text-amber-500 transition-colors">View All Komatsu →</a></li>
                    </ul>
                  </div>

                  {/* Brand 3: Doosan */}
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-widest border-b border-gray-800 pb-1.5 mb-2">Doosan</h4>
                    <ul className="space-y-1 text-xs text-gray-300">
                      <li><a href="/products/used-doosan-dx300lc-excavator" className="hover:text-amber-500 transition-colors block py-0.5">DX300LC (30T)</a></li>
                      <li><a href="/#products" className="text-gray-500 text-[10px] hover:text-amber-500 transition-colors">View All Doosan →</a></li>
                    </ul>
                  </div>

                  {/* Brand 4: Hitachi */}
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-widest border-b border-gray-800 pb-1.5 mb-2">Hitachi</h4>
                    <ul className="space-y-1 text-xs text-gray-300">
                      <li><a href="/products/used-hitachi-zx200-excavator" className="hover:text-amber-500 transition-colors block py-0.5">ZX200 (20T)</a></li>
                      <li><a href="/products/used-hitachi-zx210-excavator" className="hover:text-amber-500 transition-colors block py-0.5">ZX210 (21T)</a></li>
                      <li><a href="/#products" className="text-gray-500 text-[10px] hover:text-amber-500 transition-colors">View All Hitachi →</a></li>
                    </ul>
                  </div>

                  {/* Brand 5: Sany */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-widest border-b border-gray-800 pb-1.5 mb-2">Sany</h4>
                    <ul className="space-y-1 text-xs text-gray-300">
                      <li><a href="/products/used-sany-sy65c-excavator" className="hover:text-amber-500 transition-colors block py-0.5">SY65C (6.5T)</a></li>
                      <li><a href="/products/used-sany-sy485h-mining-excavator" className="hover:text-amber-500 transition-colors block py-0.5">SY485H (49T)</a></li>
                      <li><a href="/#products" className="text-gray-500 text-[10px] hover:text-amber-500 transition-colors">View All Sany →</a></li>
                    </ul>
                  </div>

                  {/* Brand 6: Hyundai */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-widest border-b border-gray-800 pb-1.5 mb-2">Hyundai</h4>
                    <ul className="space-y-1 text-xs text-gray-300">
                      <li><a href="/products/used-hyundai-220lc-9s-excavator" className="hover:text-amber-500 transition-colors block py-0.5">R220LC-9 (22T)</a></li>
                      <li><a href="/products/used-hyundai-335-9t-excavator" className="hover:text-amber-500 transition-colors block py-0.5">R335-9T (33.5T)</a></li>
                      <li><a href="/#products" className="text-gray-500 text-[10px] hover:text-amber-500 transition-colors">View All Hyundai →</a></li>
                    </ul>
                  </div>

                  {/* Brand 7: Volvo */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-widest border-b border-gray-800 pb-1.5 mb-2">Volvo</h4>
                    <ul className="space-y-1 text-xs text-gray-300">
                      <li><a href="/products/used-volvo-ec210-excavator" className="hover:text-amber-500 transition-colors block py-0.5">EC210 (21T)</a></li>
                      <li><a href="/products/used-volvo-ec300dl-excavator" className="hover:text-amber-500 transition-colors block py-0.5">EC300DL (30T)</a></li>
                      <li><a href="/products/used-volvo-ec480-excavator" className="hover:text-amber-500 transition-colors block py-0.5">EC480 (48T)</a></li>
                    </ul>
                  </div>

                  {/* Other / Mini */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-widest border-b border-gray-800 pb-1.5 mb-2">Others</h4>
                    <ul className="space-y-1 text-xs text-gray-300">
                      <li><a href="/#products" className="hover:text-amber-500 transition-colors block py-0.5">Kubota KX155 (5.5T)</a></li>
                      <li><a href="/#products" className="hover:text-amber-500 transition-colors block py-0.5">Kobelco SK Series</a></li>
                      <li><a href="/#products" className="hover:text-amber-500 transition-colors block py-0.5">Liugong Heavy Duty</a></li>
                    </ul>
                  </div>

                </div>
              </div>

              <a href="/blog" className="text-gray-300 hover:text-amber-500 transition-colors">Blog</a>
              <a href="/news" className="text-gray-300 hover:text-amber-500 transition-colors">News</a>
              <a href="#about" className="text-gray-300 hover:text-amber-500 transition-colors">About Us</a>
              <a href="#contact" className="text-gray-300 hover:text-amber-500 transition-colors">Inquiry Form</a>
            </nav>

            <div className="flex items-center space-x-4">
              <a href="#contact" className="hidden sm:inline-flex bg-amber-500 hover:bg-amber-400 text-black text-xs md:text-sm font-bold px-4 py-2 rounded-lg transition-all shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 items-center">
                <Mail size={16} className="mr-2" /> Get FOB Quote
              </a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Professional B2B Footer */}
        <footer className="bg-[#070b13] border-t border-gray-800 text-gray-400 py-12">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <img src="/logo.webp" alt="HEAVY MACHINERY PRO Logo" className="h-12 w-auto object-contain" />
              </div>
              <p className="text-xs leading-relaxed text-gray-500">
                HEAVY MACHINERY PRO (HMP) — Global Premium Used Equipment Supplier. Over 15 years of construction equipment exporting experience. We guarantee machinery condition with transparent inspection reports.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Quick Links</h3>
              <ul className="space-y-2 text-xs">
                <li><a href="/" className="hover:text-amber-500 transition-colors">Home Landing</a></li>
                <li><a href="/blog" className="hover:text-amber-500 transition-colors">Guides Blog</a></li>
                <li><a href="/news" className="hover:text-amber-500 transition-colors">Company News</a></li>
                <li><a href="#about" className="hover:text-amber-500 transition-colors">Company Certification</a></li>
                <li><a href="#contact" className="hover:text-amber-500 transition-colors">Get B2B Best Price</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Popular Brands</h3>
              <ul className="space-y-2 text-xs">
                <li>Caterpillar Excavators (CAT)</li>
                <li>Komatsu Hydraulic Series</li>
                <li>Sany High Performance</li>
                <li>Hitachi Premium Diggers</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Guaranteed Quality</h3>
              <div className="flex items-start space-x-3 text-xs text-gray-500">
                <Award size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <p>All excavators undergo a rigorous 120-point inspection before loading.</p>
              </div>
              <div className="flex items-start space-x-3 text-xs text-gray-500">
                <ShieldCheck size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                <p>Official customs clearance declarations and SGS certification assistance provided.</p>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 pt-8 mt-8 border-t border-gray-900 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-600">
            <p>&copy; {new Date().getFullYear()} HEAVY MACHINERY PRO (HMP). All rights reserved.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <span className="hover:text-amber-500 transition-colors cursor-pointer">Privacy Policy</span>
              <span>&bull;</span>
              <span className="hover:text-amber-500 transition-colors cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </footer>
        <WhatsAppButton />
      </body>
    </html>
  );
}

