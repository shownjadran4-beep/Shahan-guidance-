import React, { useState } from 'react';
import { BARE_ACTS } from '@/src/constants';
import { Scale, Search, Download, ExternalLink, Calendar, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import PDFPreviewModal from '../components/PDFPreviewModal';

export default function BareActs() {
  const [search, setSearch] = useState('');
  const [previewAct, setPreviewAct] = useState<{ url: string; title: string } | null>(null);

  const filteredActs = Object.values(BARE_ACTS).filter(act => 
    act.title.toLowerCase().includes(search.toLowerCase()) ||
    act.year.includes(search)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      <PDFPreviewModal 
        isOpen={!!previewAct} 
        onClose={() => setPreviewAct(null)} 
        pdfUrl={previewAct?.url || ''} 
        title={previewAct?.title || ''} 
      />
      
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold">Bare Acts Library</h1>
        <p className="text-muted">
          Access official statutes and legal documents of Pakistan. 
          Search by name or year to find specific legislation.
        </p>
        
        <div className="relative max-w-md mx-auto mt-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
          <input
            type="text"
            placeholder="Search acts (e.g. Contract, 1872)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full border border-muted/20 bg-white focus:outline-none focus:border-gold transition-colors shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredActs.map((act, i) => (
          <motion.div
            key={act.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white border border-muted/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col"
          >
            <div className="bg-ink p-5 text-white relative">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Scale className="w-12 h-12" />
              </div>
              <div className="relative z-10 space-y-1">
                <div className="flex items-center gap-2 text-gold text-[10px] font-bold uppercase tracking-widest">
                  <Calendar className="w-3 h-3" /> {act.year}
                </div>
                <h3 className="text-lg font-serif font-bold leading-tight group-hover:text-gold transition-colors">
                  {act.title}
                </h3>
              </div>
            </div>
            
            <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
              <p className="text-sm text-muted leading-relaxed line-clamp-3">
                {act.description}
              </p>
              
              <div className="pt-4 border-t border-muted/5 flex flex-col gap-2">
                <div className="flex gap-2">
                  <button 
                    onClick={() => setPreviewAct({ url: act.pdfUrl || '', title: act.title })}
                    className="flex-1 bg-gold text-ink text-xs font-bold py-2 rounded-xl hover:bg-gold-light transition-all flex items-center justify-center gap-2"
                  >
                    <Eye className="w-3.5 h-3.5" /> Preview
                  </button>
                  <a 
                    href={act.pdfUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 bg-parchment text-muted py-2 rounded-xl hover:text-ink transition-all flex items-center justify-center"
                    title="Download PDF"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
                <a 
                  href={act.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-[10px] text-center text-muted hover:text-gold transition-colors font-bold uppercase tracking-widest py-1"
                >
                  Open in New Tab
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredActs.length === 0 && (
        <div className="text-center py-20 text-muted">
          <p>No acts found matching your search.</p>
        </div>
      )}
    </div>
  );
}
