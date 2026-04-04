import React, { useState } from 'react';
import { PAST_PAPERS } from '@/src/constants';
import { FileText, Folder, Search, Download, ChevronRight, ArrowLeft, Eye, ExternalLink } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import PDFPreviewModal from '../components/PDFPreviewModal';

export default function PastPapers() {
  const [search, setSearch] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [previewPaper, setPreviewPaper] = useState<{ url: string; title: string } | null>(null);

  const filteredPapers = PAST_PAPERS.filter(p => 
    p.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      <PDFPreviewModal 
        isOpen={!!previewPaper} 
        onClose={() => setPreviewPaper(null)} 
        pdfUrl={previewPaper?.url || ''} 
        title={previewPaper?.title || ''} 
      />
      
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold">Past Papers Repository</h1>
        <p className="text-muted">Browse verified Punjab University annual examination papers by subject and year.</p>
        
        <div className="relative max-w-md mx-auto mt-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
          <input
            type="text"
            placeholder="Search subjects (e.g. Minor Acts, CPC)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full border border-muted/20 bg-white focus:outline-none focus:border-gold transition-colors shadow-sm"
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!selectedSubject ? (
          <motion.div 
            key="folders"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {filteredPapers.map((paper) => (
              <button
                key={paper.subject}
                onClick={() => setSelectedSubject(paper.subject)}
                className="group bg-white border border-muted/10 p-6 rounded-2xl hover:shadow-xl hover:border-gold transition-all text-left flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-parchment flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors relative">
                  <Folder className="w-8 h-8 text-muted group-hover:text-gold" />
                  <span className="absolute -top-2 -right-2 bg-ink text-white text-[10px] font-bold px-2 py-1 rounded-full">
                    {paper.years.length}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold leading-tight mb-1 group-hover:text-gold transition-colors">
                  {paper.subject}
                </h3>
                <p className="text-[10px] text-muted uppercase font-bold tracking-widest">{paper.part}</p>
              </button>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            key="files"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <button 
              onClick={() => setSelectedSubject(null)}
              className="inline-flex items-center gap-2 text-muted hover:text-gold transition-colors font-bold text-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Folders
            </button>

            <div className="bg-ink text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Folder className="w-32 h-32" />
              </div>
              <div className="relative z-10 space-y-2">
                <p className="text-gold text-xs font-bold uppercase tracking-widest">Subject Folder</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold">{selectedSubject}</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredPapers.find(p => p.subject === selectedSubject)?.years.map((y) => (
                <div key={y.year} className="p-6 bg-white border border-muted/10 rounded-2xl flex items-center justify-between hover:border-gold transition-colors group shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-parchment flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                      <FileText className="w-6 h-6 text-muted group-hover:text-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold">Annual Examination {y.year}</h4>
                      <p className="text-xs text-muted">Punjab University · {y.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setPreviewPaper({ url: y.url, title: `${selectedSubject} - ${y.year}` })}
                      className="bg-gold text-ink p-2.5 rounded-xl hover:bg-gold-light transition-all flex items-center"
                      title="Preview PDF"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <a 
                      href={y.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-ink text-white p-2.5 rounded-xl hover:bg-black transition-all flex items-center"
                      title="Download PDF"
                    >
                      <Download className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
