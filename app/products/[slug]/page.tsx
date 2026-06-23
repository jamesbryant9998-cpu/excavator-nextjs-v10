import Link from "next/link";
import { ArrowLeft, Phone, Mail, ShieldCheck, CheckCircle2, Calendar, Clock, Gauge, Award, Cpu, Bolt, Container, Info } from "lucide-react";
import productsData from "../../../data/products.json";
import InquiryForm from "../../../components/InquiryForm";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function Product({ params }: PageProps) {
  // Find product by slug
  const product: any = productsData.find((p) => p.slug === params.slug);

  // If product not found
  if (!product) {
    return (
      <div className="bg-[#0b0f19] py-32 text-center space-y-6 min-h-screen flex flex-col justify-center items-center">
        <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded-full inline-block">
          <Info size={36} />
        </div>
        <h1 className="text-3xl font-black text-white">Machinery Model Not Found</h1>
        <p className="text-gray-400 text-sm max-w-sm mx-auto">
          The requested excavator slug "{params.slug}" does not exist in our active inventory database.
        </p>
        <div className="pt-4">
          <a href="/" className="bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs px-6 py-3 rounded-xl transition-all">
            Return to Home Page
          </a>
        </div>
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.model,
    "image": `https://heavymachinerypro.com${product.image}`,
    "description": product.condition,
    "brand": {
      "@type": "Brand",
      "name": product.brand
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": product.price > 0 ? product.price : "Contact for Quote",
      "itemCondition": "https://schema.org/UsedCondition",
      "availability": "https://schema.org/InStock",
      "url": `https://heavymachinerypro.com/products/${product.slug}`
    }
  };

  return (
    <div className="bg-[#0b0f19] py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        
        {/* Breadcrumbs & Back Link */}
        <div className="flex items-center justify-between">
          <a href="/" className="inline-flex items-center text-xs text-gray-400 hover:text-amber-500 font-bold tracking-wide transition-colors">
            <ArrowLeft size={14} className="mr-2" /> Back to Home Page
          </a>
          <span className="text-xs text-gray-600 font-semibold uppercase">ID: {product.id}</span>
        </div>

        {/* Product Heading banner */}
        <div className="border-b border-gray-950 pb-6 space-y-2">
          <div className="flex items-center space-x-2">
            <span className="bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded text-amber-500 text-xs font-black tracking-widest uppercase">
              {product.brand}
            </span>
            <span className="text-xs text-gray-500 font-bold">{product.year} Model</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">{product.model}</h1>
          </div>
        </div>

        {/* Main Specs Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Big Photo & Guarantee */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-[#111625] border border-gray-800 rounded-3xl p-3 shadow-2xl relative overflow-hidden">
              <img 
                src={product.image} 
                alt={product.model} 
                className="w-full h-80 sm:h-96 object-cover rounded-2xl border border-gray-900"
              />
            </div>

            {/* Premium B2B trust guidelines */}
            <div className="bg-[#111625]/40 border border-gray-800 rounded-2xl p-6 space-y-4">
              <h3 className="text-base font-extrabold text-white flex items-center">
                <Award size={18} className="text-amber-500 mr-2" /> Verified Condition Guarantee
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Our heavy machinery inspection experts have conducted load-testing and hydraulic system pressure verification. 
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <span className="flex items-center text-xs text-emerald-500 font-semibold">
                  <CheckCircle2 size={14} className="mr-2" /> Original Engine & Main Pump
                </span>
                <span className="flex items-center text-xs text-emerald-500 font-semibold">
                  <CheckCircle2 size={14} className="mr-2" /> Undercarriage: {product.undercarriage}
                </span>
                <span className="flex items-center text-xs text-emerald-500 font-semibold">
                  <CheckCircle2 size={14} className="mr-2" /> Complete Customs Export Declared
                </span>
                <span className="flex items-center text-xs text-emerald-500 font-semibold">
                  <CheckCircle2 size={14} className="mr-2" /> Video Walk-around Available
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Spec Sheet Table & Quote Request Form */}
          <div className="lg:col-span-5 space-y-8">
            {/* Tech Spec Sheet Table */}
            <div className="bg-[#111625] border border-[#1f293d] rounded-3xl p-6 shadow-2xl space-y-4">
              <h3 className="text-base font-extrabold text-white tracking-wide uppercase flex items-center pb-3 border-b border-gray-900">
                <ShieldCheck size={18} className="text-amber-500 mr-2" /> Technical Specifications
              </h3>
              
              <div className="space-y-2.5 text-xs text-gray-300">
                <div className="flex justify-between py-2 border-b border-gray-900/60">
                  <span className="text-gray-500 flex items-center"><Cpu size={14} className="mr-2" /> Engine Model</span>
                  <strong className="text-white font-semibold">{product.engine}</strong>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-900/60">
                  <span className="text-gray-500 flex items-center"><Bolt size={14} className="mr-2" /> Rated Power</span>
                  <strong className="text-white font-semibold">{product.power}</strong>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-900/60">
                  <span className="text-gray-500 flex items-center"><Gauge size={14} className="mr-2" /> Bucket Capacity</span>
                  <strong className="text-white font-semibold">{product.bucketCapacity}</strong>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-900/60">
                  <span className="text-gray-500 flex items-center"><Container size={14} className="mr-2" /> Operating Weight</span>
                  <strong className="text-white font-semibold">{product.weight}</strong>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-900/60">
                  <span className="text-gray-500 flex items-center"><Calendar size={14} className="mr-2" /> Production Year</span>
                  <strong className="text-white font-semibold">{product.year}</strong>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-900/60">
                  <span className="text-gray-500 flex items-center"><Clock size={14} className="mr-2" /> Operating Hours</span>
                  <strong className="text-white font-semibold">{product.hours} hrs</strong>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-500 flex items-center"><ShieldCheck size={14} className="mr-2" /> Undercarriage Wear</span>
                  <strong className="text-white font-semibold">{product.undercarriage}</strong>
                </div>
              </div>
            </div>

            {/* Custom prefilled model Inquiry Form Component */}
            <InquiryForm model={product.model} id={product.id} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for Next.js static export compilation
export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}
}
            <div className="bg-[#111625]/40 border border-gray-800 rounded-3xl p-8 md:p-12 space-y-8">
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                Product <span className="text-amber-500">Overview</span>
              </h2>
              <div 
                className="text-gray-300 leading-relaxed text-sm md:text-base space-y-4 prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: product.longDescription }}
              />
            </div>

            {/* 2. Technical Detail Images Grid */}
            <div className="space-y-8">
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight text-center">
                Close-up <span className="text-amber-500">Mechanical Details</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {product.detailImages?.map((img: string, idx: number) => (
                  <div key={idx} className="bg-[#111625] border border-gray-800 rounded-3xl overflow-hidden group">
                    <img 
                      src={img} 
                      alt={`${product.model} detail ${idx + 1}`} 
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 3. Core Features Checklist */}
              <div className="bg-[#111625] border border-gray-800 rounded-3xl p-8 space-y-6">
                <h3 className="text-xl font-black text-white uppercase tracking-wider flex items-center">
                  <Cpu size={20} className="text-amber-500 mr-2" /> Key Features
                </h3>
                <ul className="space-y-4">
                  {product.features?.map((f: string, idx: number) => (
                    <li key={idx} className="flex items-start text-xs md:text-sm text-gray-300">
                      <div className="p-1 bg-amber-500/10 rounded mr-3 mt-0.5">
                        <CheckCircle2 size={14} className="text-amber-500" />
                      </div>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4. Why Choose HMP Section */}
              <div className="bg-[#111625] border border-gray-800 rounded-3xl p-8 space-y-6">
                <h3 className="text-xl font-black text-white uppercase tracking-wider flex items-center">
                  <ShieldCheck size={20} className="text-amber-500 mr-2" /> Why Source From HMP?
                </h3>
                <ul className="space-y-4">
                  {product.whyChooseUs?.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start text-xs md:text-sm text-gray-300">
                      <div className="p-1 bg-emerald-500/10 rounded mr-3 mt-0.5">
                        <CheckCircle2 size={14} className="text-emerald-500" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 5. FAQ Section */}
            <div className="bg-[#111625]/60 border border-gray-800/80 rounded-3xl p-8 md:p-12 space-y-10">
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                Frequently <span className="text-amber-500">Asked Questions</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {product.faqs?.map((faq: any, idx: number) => (
                  <div key={idx} className="space-y-3">
                    <h4 className="text-sm font-black text-white flex items-center">
                      <span className="w-6 h-6 rounded-full bg-amber-500 text-black flex items-center justify-center text-[10px] mr-2 shrink-0">Q</span>
                      {faq.q}
                    </h4>
                    <p className="text-xs text-gray-400 leading-relaxed pl-8">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

// Generate static params for Next.js static export compilation
export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}
