import React, { useState, useEffect } from 'react';
import { CURRICULUM } from '@/src/constants';
import { Link, useSearchParams } from 'react-router-dom';
import { BookOpen, ChevronRight, Search } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Subjects() {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [activePart, setActivePart] = useState<string | null>(null);

  useEffect(() => {
    const query = searchParams.get('search');
    if (query) setSearch(query);
  }, [searchParams]);

  const filteredCurriculum = Object.entries(CURRICULUM).filter(([part]) => 
    !activePart || part === activePart
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold">LLB Curriculum</h1>
        <p className="text-muted">Explore subjects by part and access comprehensive study materials.</p>
        
        <div className="relative max-w-md mx-auto mt-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
          <input
            type="text"
            placeholder="Search subjects (e.g. Contract, CPC)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full border border-muted/20 bg-white focus:outline-none focus:border-gold transition-colors shadow-sm"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setActivePart(null)}
          className={cn(
            "px-6 py-2 rounded-full text-sm font-bold transition-all border",
            !activePart ? "bg-gold border-gold text-ink" : "bg-white border-muted/20 text-muted hover:border-gold"
          )}
        >
          All Parts
        </button>
        {Object.keys(CURRICULUM).map((part) => (
          <button
            key={part}
            onClick={() => setActivePart(part)}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-bold transition-all border",
              activePart === part ? "bg-gold border-gold text-ink" : "bg-white border-muted/20 text-muted hover:border-gold"
            )}
          >
            {part}
          </button>
        ))}
      </div>

      <div className="space-y-16">
        {filteredCurriculum.map(([part, subjects]) => {
          const matchedSubjects = subjects.filter(s => 
            s.name.toLowerCase().includes(search.toLowerCase())
          );
          
          if (matchedSubjects.length === 0) return null;

          return (
            <div key={part} className="space-y-6">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-serif font-bold whitespace-nowrap">{part}</h2>
                <div className="h-px bg-muted/10 w-full"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {matchedSubjects.map((sub) => (
                  <Link
                    key={sub.id}
                    to={`/subject/${sub.id}`}
                    className="group bg-white border border-muted/10 p-6 rounded-2xl hover:shadow-xl hover:border-gold transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-parchment flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                        <BookOpen className="w-5 h-5 text-muted group-hover:text-gold" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-muted bg-parchment px-2 py-1 rounded">
                        {sub.paper}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-2 group-hover:text-gold transition-colors">{sub.name}</h3>
                    <p className="text-muted text-sm line-clamp-2 mb-4">{sub.description}</p>
                    <div className="flex items-center text-xs font-bold text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore Materials <ChevronRight className="w-3 h-3 ml-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
