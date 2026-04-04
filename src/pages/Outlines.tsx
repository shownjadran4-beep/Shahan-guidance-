import React, { useState } from 'react';
import { OUTLINES } from '@/src/constants';
import { FileText, Download, ExternalLink, Calendar, Layers, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import PDFPreviewModal from '../components/PDFPreviewModal';

export default function Outlines() {
  const [previewOutline, setPreviewOutline] = useState<{ url: string; title: string } | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      <PDFPreviewModal 
        isOpen={!!previewOutline} 
        onClose={() => setPreviewOutline(null)} 
        pdfUrl={previewOutline?.url || ''} 
        title={previewOutline?.title || ''} 
      />
      
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold">Syllabus Outlines</h1>
        <p className="text-muted">
          Access official curriculum documents for all LL.B program versions. 
          Stay updated with the latest changes from Punjab University.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {OUTLINES.map((outline, i) => (
          <motion.div
            key={outline.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white border border-muted/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
          >
            <div className="bg-ink p-6 text-white relative">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <FileText className="w-16 h-16" />
              </div>
              <div className="relative z-10 space-y-2">
                <div className="flex items-center gap-2 text-gold text-[10px] font-bold uppercase tracking-widest">
                  <Calendar className="w-3 h-3" /> {outline.year}
                </div>
                <h3 className="text-xl font-serif font-bold leading-tight group-hover:text-gold transition-colors">
                  {outline.title}
                </h3>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <p className="text-sm text-muted leading-relaxed">
                {outline.description}
              </p>
              
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-muted bg-parchment px-2 py-1 rounded">
                  <Layers className="w-3 h-3" /> {outline.type}
                </span>
              </div>

              <div className="pt-4 border-t border-muted/5 flex flex-col gap-2">
                <div className="flex gap-2">
                  <button 
                    onClick={() => setPreviewOutline({ url: outline.url, title: outline.title })}
                    className="flex-1 bg-gold text-ink text-xs font-bold py-2.5 rounded-xl hover:bg-gold-light transition-all flex items-center justify-center gap-2"
                  >
                    <Eye className="w-3.5 h-3.5" /> Preview
                  </button>
                  <a 
                    href={outline.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 bg-parchment text-muted py-2.5 rounded-xl hover:text-ink transition-all flex items-center justify-center"
                    title="Download PDF"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
                <a 
                  href={outline.url}
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

      {/* Notification Section */}
      <div className="bg-gold/5 border border-gold/20 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
        <div className="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center flex-shrink-0">
          <Info className="w-8 h-8 text-ink" />
        </div>
        <div className="space-y-2">
          <h4 className="text-xl font-serif font-bold">Important Notification</h4>
          <p className="text-sm text-muted leading-relaxed">
            The Syndicate at its meeting held on 09-03-2024 has approved the switch over from 
            Annual System to Semester System for LL.B. 05-Years Program with effect from 
            Academic Session 2023-2024.
          </p>
        </div>
      </div>
    </div>
  );
}

function Info({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
    </svg>
  );
}
