import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ArrowRight, GraduationCap, BookOpen, FileText, Scale } from 'lucide-react';
import { CURRICULUM } from '@/src/constants';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    // Redirect to subjects page with search query
    navigate(`/subjects?search=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="space-y-12 pb-20">
      {/* Hero Section */}
      <section className="relative bg-ink text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold-light text-xs font-bold tracking-widest uppercase mb-6"
          >
            LLB 5-Year Survival Toolkit
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight"
          >
            Master the Law with <br />
            <span className="text-gold italic">Shahan Guidance</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            The complete online hub for Punjab University LLB students. 
            Access past papers, structured notes, and searchable bare acts in one place.
          </motion.p>

          {/* Search Bar */}
          <motion.form 
            onSubmit={handleSearch}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="relative max-w-xl mx-auto mb-10 group"
          >
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gold group-focus-within:text-gold-light transition-colors" />
            <input
              type="text"
              placeholder="Search subjects, acts, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-32 py-4 rounded-full border border-gold/30 bg-white/5 backdrop-blur-md text-white focus:outline-none focus:border-gold focus:bg-white/10 transition-all shadow-2xl"
            />
            <button 
              type="submit"
              className="absolute right-2 top-2 bottom-2 bg-gold hover:bg-gold-light text-ink font-bold px-6 rounded-full transition-all text-sm"
            >
              Search
            </button>
          </motion.form>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/subjects" className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3 rounded-full transition-all border border-white/10 flex items-center gap-2">
              Browse Subjects <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/ai-tutor" className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3 rounded-full transition-all border border-white/10">
              Ask AI Tutor
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Access Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { title: 'Past Papers', icon: FileText, color: 'bg-blue-500/10 text-blue-600', link: '/past-papers' },
            { title: 'Bare Acts', icon: Scale, color: 'bg-gold/10 text-gold', link: '/bare-acts' },
            { title: 'Study Notes', icon: BookOpen, color: 'bg-green-500/10 text-green-600', link: '/notes' },
            { title: 'Exam Tips', icon: GraduationCap, color: 'bg-purple-500/10 text-purple-600', link: '/blog' },
          ].map((item, i) => (
            <Link 
              key={i} 
              to={item.link}
              className="bg-white border border-muted/10 p-6 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform", item.color)}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-1">{item.title}</h3>
              <p className="text-muted text-sm">Access organized resources for {item.title.toLowerCase()}.</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Subjects */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-serif font-bold">Featured Subjects</h2>
          <Link to="/subjects" className="text-gold font-bold flex items-center gap-1 hover:underline">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(CURRICULUM).slice(0, 3).map(([part, subjects]) => (
            <div key={part} className="space-y-4">
              <h3 className="text-gold font-bold uppercase tracking-widest text-xs border-b border-gold/20 pb-2">{part}</h3>
              <div className="space-y-3">
                {subjects.slice(0, 3).map((sub) => (
                  <Link 
                    key={sub.id} 
                    to={`/subject/${sub.id}`}
                    className="flex items-center justify-between p-4 bg-cream border border-muted/10 rounded-xl hover:border-gold transition-colors group"
                  >
                    <div>
                      <h4 className="font-bold text-sm">{sub.name}</h4>
                      <p className="text-xs text-muted">{sub.paper}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted group-hover:text-gold transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Promo */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-ink rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-3xl rounded-full -mr-32 -mt-32"></div>
          <div className="flex-1 space-y-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Stuck on a Section?</h2>
            <p className="text-gray-400 leading-relaxed">
              Our AI Legal Tutor is trained on Pakistani statutes and can help you 
              understand complex legal concepts, translate jargon, and find relevant case laws instantly.
            </p>
            <Link to="/ai-tutor" className="inline-block bg-gold text-ink font-bold px-8 py-3 rounded-full hover:bg-gold-light transition-all">
              Start Chatting Now
            </Link>
          </div>
          <div className="w-full md:w-1/3 relative z-10">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                  <Scale className="w-4 h-4 text-ink" />
                </div>
                <div className="h-2 w-24 bg-white/20 rounded"></div>
              </div>
              <div className="space-y-3">
                <div className="h-2 w-full bg-white/10 rounded"></div>
                <div className="h-2 w-3/4 bg-white/10 rounded"></div>
                <div className="h-2 w-5/6 bg-white/10 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
