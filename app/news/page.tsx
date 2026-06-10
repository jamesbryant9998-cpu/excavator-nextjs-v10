import { Newspaper, Calendar, Tag, ArrowRight } from "lucide-react";
import newsData from "../../data/news.json";

export default function NewsList() {
  return (
    <div className="bg-[#0b0f19] py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        {/* Header Banner */}
        <div className="border-b border-gray-950 pb-8 space-y-2">
          <div className="flex items-center space-x-2 text-amber-500 text-xs font-black tracking-wide uppercase">
            <Newspaper size={14} className="text-amber-500" />
            <span>Heavy Equipment Newsroom</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Company Updates & <span className="text-amber-500">Industry News</span>
          </h1>
          <p className="text-gray-400 text-sm max-w-xl">
            Keep up with our latest stock arrivals, corporate certification, logistics enhancements, global customs declaration policy updates, and hybrid machinery trends.
          </p>
        </div>

        {/* News Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((n) => (
            <div key={n.id} className="bg-[#111625] border border-gray-800 hover:border-amber-500/30 rounded-2xl overflow-hidden group transition-all hover:-translate-y-1 shadow-xl hover:shadow-2xl flex flex-col justify-between">
              {/* Image Banner */}
              <div className="relative h-52 bg-gray-900 overflow-hidden">
                <img 
                  src={n.image} 
                  alt={n.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-amber-500 text-black text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
                  {n.category}
                </div>
              </div>

              {/* Specs & Content Preview */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-4 text-[10px] text-gray-500">
                    <span className="flex items-center"><Calendar size={12} className="mr-1 text-amber-500" /> {n.date}</span>
                    <span className="flex items-center"><Tag size={12} className="mr-1 text-amber-500" /> {n.category.split(" ")[0]}</span>
                  </div>
                  
                  <h3 className="text-lg font-black text-white group-hover:text-amber-500 transition-colors line-clamp-2 min-h-[3.5rem]">
                    {n.title}
                  </h3>
                  
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                    {n.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-900">
                  <a href={`/news/${n.slug}`} className="inline-flex items-center text-xs font-bold text-amber-500 hover:text-amber-400 group/link">
                    Read Full Announcement <ArrowRight size={14} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
