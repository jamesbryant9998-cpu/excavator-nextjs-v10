import Link from "next/link";
import { ArrowLeft, BookOpen, Clock, Calendar, ShieldCheck, ChevronRight } from "lucide-react";
import guidesData from "../../../data/guides.json";

// For static HTML export compatibility in Next.js App Router
export async function generateStaticParams() {
  return guidesData.map((g) => ({
    slug: g.slug,
  }));
}

export default function GuideDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const guide = guidesData.find((g) => g.slug === slug);

  if (!guide) {
    return (
      <div className="min-h-screen bg-[#0b0f19] flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl font-black text-white">404</h1>
        <p className="text-gray-400 mt-2">Guide article not found.</p>
        <Link href="/" className="mt-6 text-amber-500 font-bold hover:underline inline-flex items-center">
          <ArrowLeft size={16} className="mr-2" /> Back to Home
        </Link>
      </div>
    );
  }

  // Filter other guides as recommendations
  const otherGuides = guidesData.filter((g) => g.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-300">
      {/* Article Navigation Header */}
      <div className="border-b border-gray-900 bg-gray-950/40 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xs font-bold text-gray-400 hover:text-amber-500 inline-flex items-center transition-colors">
            <ArrowLeft size={14} className="mr-1.5" /> Back to Home
          </Link>
          <span className="text-xs font-black tracking-widest text-amber-500 uppercase">
            HEAVYEXPO Buyer Guides
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content Area */}
        <article className="lg:col-span-8 space-y-8 bg-[#111625]/40 border border-gray-800/80 p-6 md:p-10 rounded-3xl backdrop-blur-sm">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-1.5 text-xs text-gray-500 font-semibold uppercase tracking-wider">
            <Link href="/" className="hover:text-amber-500">Home</Link>
            <ChevronRight size={12} />
            <span className="text-amber-500">{guide.category}</span>
          </nav>

          {/* Title and Meta */}
          <div className="space-y-4 border-b border-gray-900 pb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
              {guide.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-xs text-gray-500">
              <span className="flex items-center"><Clock size={14} className="mr-1.5 text-amber-500" /> 6 min read</span>
              <span className="flex items-center"><Calendar size={14} className="mr-1.5 text-amber-500" /> June 2026</span>
              <span className="inline-flex items-center px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-[10px] font-bold text-amber-500 uppercase tracking-widest">
                {guide.category}
              </span>
            </div>
          </div>

          {/* Article Body HTML */}
          <div 
            className="prose prose-invert max-w-none prose-headings:text-white prose-headings:font-black prose-h1:text-3xl prose-h2:text-2xl prose-p:text-gray-300 prose-p:leading-relaxed prose-li:text-gray-400 prose-strong:text-amber-500 prose-strong:font-black prose-a:text-amber-500 hover:prose-a:text-amber-400 prose-table:border prose-table:border-gray-800 prose-th:bg-[#111625] prose-th:p-3 prose-td:p-3 prose-td:border-b prose-td:border-gray-800"
            dangerouslySetInnerHTML={{ __html: guide.content }}
          />
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Sourcing CTA card */}
          <div className="bg-[#111625] border border-gray-800 p-6 rounded-3xl relative overflow-hidden space-y-4">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-500/40 via-yellow-500/70 to-transparent"></div>
            <h3 className="text-lg font-black text-white inline-flex items-center">
              <ShieldCheck size={20} className="mr-2 text-amber-500" /> Direct-Yard Wholesale
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              We specialize in exporting verified used heavy machinery with 100% genuine components, 120-point SGS inspection, and weekly worldwide logistics options.
            </p>
            <div className="pt-2">
              <Link href="/#contact" className="w-full bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs py-3 rounded-xl transition-all shadow-lg shadow-amber-500/10 flex justify-center items-center">
                Submit Sourcing Request
              </Link>
            </div>
          </div>

          {/* Recommend guides */}
          <div className="space-y-4">
            <h3 className="text-xs font-black text-gray-500 uppercase tracking-widest">
              More Buyer Guides
            </h3>
            <div className="space-y-4">
              {otherGuides.map((g) => (
                <Link key={g.slug} href={`/guides/${g.slug}`} className="block bg-[#111625]/40 border border-gray-800/80 p-5 rounded-2xl transition-all hover:border-gray-700/80 group">
                  <span className="text-[10px] font-extrabold text-amber-500 tracking-wider uppercase block mb-1">
                    {g.category}
                  </span>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-500 transition-colors duration-200 line-clamp-1">
                    {g.title}
                  </h4>
                  <p className="text-xs text-gray-500 line-clamp-2 mt-1.5">
                    {g.shortDesc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
