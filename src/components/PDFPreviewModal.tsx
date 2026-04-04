import React from 'react';
import { X, ExternalLink, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface PDFPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
}

export default function PDFPreviewModal({ isOpen, onClose, pdfUrl, title }: PDFPreviewModalProps) {
  const [viewerType, setViewerType] = React.useState<'google' | 'google-ng'>('google');
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);
  
  const viewers = {
    'google': `https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`,
    'google-ng': `https://docs.google.com/viewerng/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`
  };

  React.useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setHasError(false);
      // If still loading after 5 seconds, show the error/help state
      const timer = setTimeout(() => {
        setIsLoading(false);
        setHasError(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, viewerType]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/95 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-6xl h-full max-h-[95vh] bg-white rounded-2xl md:rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 md:p-5 border-b border-muted/10 flex items-center justify-between bg-parchment/50">
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gold flex items-center justify-center text-ink shadow-sm">
                  <Download className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="max-w-[150px] sm:max-w-[250px] md:max-w-md">
                  <h3 className="font-serif font-bold text-sm md:text-lg leading-tight truncate">{title}</h3>
                  <p className="text-[8px] md:text-[10px] text-muted uppercase font-bold tracking-widest">Official Document</p>
                </div>
              </div>
              
              <div className="flex items-center gap-1 md:gap-2">
                <div className="hidden lg:flex items-center bg-parchment rounded-lg p-1 border border-muted/10 mr-2">
                  <button 
                    onClick={() => setViewerType('google')}
                    className={cn(
                      "px-2 py-1 text-[10px] font-bold rounded transition-all",
                      viewerType === 'google' ? "bg-white shadow-sm text-gold" : "text-muted hover:text-ink"
                    )}
                  >
                    Viewer A
                  </button>
                  <button 
                    onClick={() => setViewerType('google-ng')}
                    className={cn(
                      "px-2 py-1 text-[10px] font-bold rounded transition-all",
                      viewerType === 'google-ng' ? "bg-white shadow-sm text-gold" : "text-muted hover:text-ink"
                    )}
                  >
                    Viewer B
                  </button>
                </div>
                <a 
                  href={pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 md:px-4 md:py-2 bg-gold text-ink rounded-xl text-[10px] md:text-sm font-bold hover:bg-gold/90 transition-all shadow-sm whitespace-nowrap"
                >
                  <ExternalLink className="w-3 h-3 md:w-4 md:h-4" /> Open Full PDF
                </a>
                <button 
                  onClick={onClose}
                  className="p-1.5 md:p-2 hover:bg-muted/10 rounded-full transition-colors ml-1"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 bg-gray-200 relative group overflow-hidden">
              {isLoading && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-parchment/90 backdrop-blur-sm">
                  <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin mb-4"></div>
                  <p className="text-ink font-bold text-sm uppercase tracking-widest">Connecting to University Server...</p>
                  <p className="text-muted text-[10px] mt-2 max-w-xs text-center">This can take a few seconds depending on your connection.</p>
                </div>
              )}

              {hasError && !isLoading && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6">
                    <ExternalLink className="w-8 h-8 text-red-400" />
                  </div>
                  <h4 className="text-xl font-serif font-bold mb-2">Preview Blocked by Server</h4>
                  <p className="text-muted text-sm max-w-md mb-8">
                    The University of Punjab server is preventing this document from being viewed inside the website for security reasons.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href={pdfUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-ink text-white rounded-2xl font-bold hover:bg-black transition-all shadow-xl flex items-center gap-2 justify-center"
                    >
                      <ExternalLink className="w-5 h-5" /> Open in New Tab
                    </a>
                    <button 
                      onClick={() => setViewerType(viewerType === 'google' ? 'google-ng' : 'google')}
                      className="px-8 py-4 bg-parchment text-ink rounded-2xl font-bold hover:bg-muted/10 transition-all border border-muted/10"
                    >
                      Try Alternative Viewer
                    </button>
                  </div>
                </div>
              )}
              
              <iframe
                key={viewerType}
                src={viewers[viewerType]}
                className="w-full h-full border-none"
                title={title}
                onLoad={() => setIsLoading(false)}
              />
              
              {/* Overlay Help */}
              {!hasError && (
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <p className="text-white text-xs text-center font-medium">
                    If the preview says "No preview available", please use the gold <span className="text-gold font-bold">"Open Full PDF"</span> button at the top.
                  </p>
                </div>
              )}
            </div>
            
            {/* Mobile Footer */}
            <div className="p-3 border-t border-muted/10 md:hidden bg-parchment/20 flex gap-2">
              <a 
                href={pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-ink text-white rounded-xl text-xs font-bold shadow-lg"
              >
                <ExternalLink className="w-4 h-4" /> View in Browser
              </a>
              <a 
                href={pdfUrl} 
                download
                className="flex items-center justify-center p-3 bg-gold text-ink rounded-xl shadow-lg"
              >
                <Download className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
