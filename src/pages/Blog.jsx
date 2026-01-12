import { Calendar, User, ArrowRight } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 1,
    title: "Why JVC is the ROI King of 2026",
    excerpt: "With new metro lines announced and rents rising by 12%, JVC remains the top choice for yield investors.",
    date: "Jan 05, 2026",
    author: "EstateAI Analytics",
    category: "Market Trends",
    imageColor: "bg-blue-100"
  },
  {
    id: 2,
    title: "Off-Plan vs Ready: Where is the money?",
    excerpt: "We analyzed 500 transactions in Downtown Dubai. The results might surprise capital appreciation chasers.",
    date: "Jan 02, 2026",
    author: "Sarah Jenkins",
    category: "Investment Strategy",
    imageColor: "bg-green-100"
  },
  {
    id: 3,
    title: "Is Dubai South the Next Marina?",
    excerpt: "With the airport expansion, early investors are looking at Dubai South. Here is the 5-year forecast.",
    date: "Dec 28, 2025",
    author: "EstateAI Analytics",
    category: "Emerging Areas",
    imageColor: "bg-purple-100"
  }
];

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl font-extrabold mb-4">Market Insights</h1>
        <p className="text-slate-500 text-lg">
          Data-backed analysis to help you make smarter real estate decisions in Dubai.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BLOG_POSTS.map(post => (
          <article key={post.id} className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition">
            {/* Image Placeholder */}
            <div className={`h-48 ${post.imageColor} flex items-center justify-center`}>
               <span className="font-bold text-slate-500 opacity-50">{post.category} Image</span>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                <span className="flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                <span className="flex items-center gap-1"><User size={12}/> {post.author}</span>
              </div>
              
              <h2 className="text-xl font-bold text-slate-900 mb-3 leading-tight">{post.title}</h2>
              <p className="text-slate-500 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
              
              <button className="text-blue-600 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                Read Analysis <ArrowRight size={14} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;