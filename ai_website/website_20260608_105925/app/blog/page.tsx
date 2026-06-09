import { BookOpen, Calendar, User, ArrowRight } from "lucide-react";
import blogsData from "../../data/blogs.json";

export default function BlogList() {
  return (
    <div className="bg-[#0b0f19] py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        {/* Header Banner */}
        <div className="border-b border-gray-950 pb-8 space-y-2">
          <div className="flex items-center space-x-2 text-amber-500 text-xs font-black tracking-wide uppercase">
            <BookOpen size={14} className="text-amber-500" />
            <span>Heavy Machinery Knowledge Hub</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Buyer Guides & <span className="text-amber-500">Maintenance Blogs</span>
          </h1>
          <p className="text-gray-400 text-sm max-w-xl">
            Professional insights, inspection check-sheets, global shipping guides, and tracks/undercarriage service tips from our certified heavy equipment engineers.
          </p>
        </div>

        {/* Blogs Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((b) => (
            <div key={b.id} className="bg-[#111625] border border-gray-800 hover:border-amber-500/30 rounded-2xl overflow-hidden group transition-all hover:-translate-y-1 shadow-xl hover:shadow-2xl flex flex-col justify-between">
              {/* Image Banner */}
              <div className="relative h-52 bg-gray-900 overflow-hidden">
                <img 
                  src={b.image} 
                  alt={b.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Specs & Content Preview */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-4 text-[10px] text-gray-500">
                    <span className="flex items-center"><Calendar size={12} className="mr-1 text-amber-500" /> {b.date}</span>
                    <span className="flex items-center"><User size={12} className="mr-1 text-amber-500" /> {b.author.split(" ")[0]}</span>
                  </div>
                  
                  <h3 className="text-lg font-black text-white group-hover:text-amber-500 transition-colors line-clamp-2 min-h-[3.5rem]">
                    {b.title}
                  </h3>
                  
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                    {b.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-900">
                  <a href={`/blog/${b.slug}`} className="inline-flex items-center text-xs font-bold text-amber-500 hover:text-amber-400 group/link">
                    Read Complete Guide <ArrowRight size={14} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
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
