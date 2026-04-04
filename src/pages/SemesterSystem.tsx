import React, { useState } from 'react';
import { SEMESTER_CURRICULUM, OUTLINES } from '@/src/constants';
import { Link } from 'react-router-dom';
import { BookOpen, ChevronRight, Search, Info, GraduationCap, FileText, Eye } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';
import PDFPreviewModal from '@/src/components/PDFPreviewModal';

export default function SemesterSystem() {
  const [search, setSearch] = useState('');
  const [activeSemester, setActiveSemester] = useState<string | null>(null);
  const [previewGuide, setPreviewGuide] = useState<{ url: string; title: string } | null>(null);

  const filteredCurriculum = Object.entries(SEMESTER_CURRICULUM).filter(([sem]) => 
    !activeSemester || sem === activeSemester
  );

  const officialGuide = OUTLINES.find(o => o.id === 'semester-2025');

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      {/* Header */}
      <div className="bg-ink text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <GraduationCap className="w-32 h-32" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 bg-gold/20 text-gold text-[10px] font-bold uppercase tracking-widest rounded-full border border-gold/30">
              New System 2025
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold">Semester System Hub</h1>
            <p className="text-gray-400 max-w-2xl leading-relaxed">
              Official curriculum and scheme of studies for the LL.B 5-Years Program at University Law College, University of the Punjab.
            </p>
          </div>
          
          {officialGuide && (
            <button
              onClick={() => setPreviewGuide({ url: officialGuide.url, title: officialGuide.title })}
              className="flex items-center gap-2 px-6 py-3 bg-gold text-ink font-bold rounded-xl hover:bg-gold/90 transition-all shadow-lg hover:scale-105"
            >
              <Eye className="w-5 h-5" />
              View Official Guide (PDF)
            </button>
          )}
        </div>
      </div>

      {/* Basic Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Semesters', value: '10', icon: BookOpen },
          { label: 'Total Credit Hours', value: '166', icon: Info },
          { label: 'Department', value: 'Law College', icon: GraduationCap },
          { label: 'Faculty', value: 'Law', icon: FileText },
        ].map((stat, i) => (
          <div key={i} className="bg-white border border-muted/10 p-6 rounded-2xl flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-parchment flex items-center justify-center">
              <stat.icon className="w-6 h-6 text-gold" />
            </div>
            <div>
              <p className="text-xs text-muted uppercase font-bold tracking-wider">{stat.label}</p>
              <p className="text-2xl font-serif font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Search & Filter */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
            <input
              type="text"
              placeholder="Search semester subjects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-muted/20 bg-white focus:outline-none focus:border-gold transition-colors shadow-sm"
            />
          </div>
          <div className="flex overflow-x-auto no-scrollbar gap-2 w-full md:w-auto pb-2 md:pb-0">
            <button
              onClick={() => setActiveSemester(null)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border",
                !activeSemester ? "bg-gold border-gold text-ink" : "bg-white border-muted/20 text-muted hover:border-gold"
              )}
            >
              All
            </button>
            {Object.keys(SEMESTER_CURRICULUM).map((sem) => (
              <button
                key={sem}
                onClick={() => setActiveSemester(sem)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border",
                  activeSemester === sem ? "bg-gold border-gold text-ink" : "bg-white border-muted/20 text-muted hover:border-gold"
                )}
              >
                {sem.replace('Semester-', 'Sem ')}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="space-y-12">
          {filteredCurriculum.map(([sem, subjects]) => {
            const matchedSubjects = subjects.filter(s => 
              s.name.toLowerCase().includes(search.toLowerCase())
            );
            
            if (matchedSubjects.length === 0) return null;

            return (
              <motion.div 
                key={sem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-serif font-bold whitespace-nowrap">{sem}</h2>
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
              </motion.div>
            );
          })}
        </div>
      </div>

      {previewGuide && (
        <PDFPreviewModal
          isOpen={!!previewGuide}
          onClose={() => setPreviewGuide(null)}
          pdfUrl={previewGuide.url}
          title={previewGuide.title}
        />
      )}
    </div>
  );
}
