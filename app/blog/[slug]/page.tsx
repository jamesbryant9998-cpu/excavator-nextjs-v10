import { ArrowLeft, Calendar, User, Clock, ShieldCheck, Award } from "lucide-react";
import blogsData from "../../../data/blogs.json";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostDetail({ params }: PageProps) {
  // Find blog by slug
  const blog = blogsData.find((b) => b.slug === params.slug);

  // If blog not found
  if (!blog) {
    return (
      <div className="bg-[#0b0f19] py-32 text-center space-y-6 min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-black text-white">Article Not Found</h1>
        <p className="text-gray-400 text-sm">The blog post with slug "{params.slug}" does not exist.</p>
        <div className="pt-4">
          <a href="/blog" className="bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs px-6 py-3 rounded-xl transition-all">
            Back to Knowledge Hub
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
          <a href="/blog" className="inline-flex items-center text-xs text-gray-400 hover:text-amber-500 font-bold tracking-wide transition-colors">
            <ArrowLeft size={14} className="mr-2" /> Back to Knowledge Hub
          </a>
          <span className="text-xs text-gray-600 font-semibold uppercase">BLOG ID: {blog.id}</span>
        </div>

        {/* Article Meta Header */}
        <div className="space-y-4 border-b border-gray-900 pb-6">
          <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight tracking-tight">
            {blog.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-gray-400">
            <span className="flex items-center"><Calendar size={14} className="mr-1.5 text-amber-500" /> Published on {blog.date}</span>
            <span className="flex items-center"><User size={14} className="mr-1.5 text-amber-500" /> By {blog.author}</span>
            <span className="flex items-center"><Clock size={14} className="mr-1.5 text-amber-500" /> 5 Min Read</span>
          </div>
        </div>

        {/* Big Cover Image */}
        <div className="bg-[#111625] border border-gray-800 rounded-3xl p-3 shadow-2xl overflow-hidden">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-64 sm:h-96 object-cover rounded-2xl border border-gray-900"
          />
        </div>

        {/* Article Content Area */}
        <article className="prose prose-invert max-w-none text-gray-300 text-sm sm:text-base leading-relaxed space-y-6">
          {blog.content.split("\n\n").map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </article>

        {/* Bottom Call to Action for buyers */}
        <div className="bg-[#111625] border border-gray-800 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 mt-12 relative overflow-hidden">
          <div className="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_right,rgba(245,158,11,0.02),transparent)] pointer-events-none"></div>
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-lg font-extrabold text-white">Importing Used Excavator?</h3>
            <p className="text-gray-400 text-xs max-w-md">
              Speak to our certified machinery exporter. We provide customized inspection reports, secure packing, and competitive CIF delivery quotes.
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
  return blogsData.map((blog) => ({
    slug: blog.slug,
  }));
}
