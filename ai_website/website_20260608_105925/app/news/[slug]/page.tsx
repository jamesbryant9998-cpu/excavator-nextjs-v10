import { ArrowLeft, Calendar, Tag, Clock, ShieldCheck, Award } from "lucide-react";
import newsData from "../../../data/news.json";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function NewsPostDetail({ params }: PageProps) {
  // Find news by slug
  const newsItem = newsData.find((n) => n.slug === params.slug);

  // If news not found
  if (!newsItem) {
    return (
      <div className="bg-[#0b0f19] py-32 text-center space-y-6 min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-black text-white">Announcement Not Found</h1>
        <p className="text-gray-400 text-sm">The news article with slug "{params.slug}" does not exist in our system.</p>
        <div className="pt-4">
          <a href="/news" className="bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs px-6 py-3 rounded-xl transition-all">
            Back to Newsroom
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0b0f19] py-12 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 space-y-8">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center justify-between">
          <a href="/news" className="inline-flex items-center text-xs text-gray-400 hover:text-amber-500 font-bold tracking-wide transition-colors">
            <ArrowLeft size={14} className="mr-2" /> Back to Newsroom
          </a>
          <span className="text-xs text-gray-600 font-semibold uppercase">NEWS ID: {newsItem.id}</span>
        </div>

        {/* Article Meta Header */}
        <div className="space-y-4 border-b border-gray-900 pb-6">
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight tracking-tight">
            {newsItem.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-gray-400">
            <span className="flex items-center"><Calendar size={14} className="mr-1.5 text-amber-500" /> Published on {newsItem.date}</span>
            <span className="flex items-center"><Tag size={14} className="mr-1.5 text-amber-500" /> Category: {newsItem.category}</span>
            <span className="flex items-center"><Clock size={14} className="mr-1.5 text-amber-500" /> 3 Min Read</span>
          </div>
        </div>

        {/* Big Cover Image */}
        <div className="bg-[#111625] border border-gray-800 rounded-3xl p-3 shadow-2xl overflow-hidden">
          <img 
            src={newsItem.image} 
            alt={newsItem.title} 
            className="w-full h-64 sm:h-96 object-cover rounded-2xl border border-gray-900"
          />
        </div>

        {/* Article Content Area */}
        <article className="prose prose-invert max-w-none text-gray-300 text-sm sm:text-base leading-relaxed space-y-6">
          {newsItem.content.split("\n\n").map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </article>

        {/* Bottom Call to Action for buyers */}
        <div className="bg-[#111625] border border-gray-800 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 mt-12 relative overflow-hidden">
          <div className="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_right,rgba(245,158,11,0.02),transparent)] pointer-events-none"></div>
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-lg font-extrabold text-white">Partner with HEAVYEXPO</h3>
            <p className="text-gray-400 text-xs max-w-md">
              Whether you need custom clearance support or wholesale pricing on machinery lots, our certified export specialists are ready to design your cargo logistics.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a href="/#contact" className="inline-flex items-center bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/10">
              Get Professional Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for Next.js static export compilation
export async function generateStaticParams() {
  return newsData.map((newsItem) => ({
    slug: newsItem.slug,
  }));
}
