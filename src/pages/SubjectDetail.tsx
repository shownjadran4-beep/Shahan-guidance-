import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CURRICULUM, BARE_ACTS, CASE_LAWS, PAST_PAPERS, SEMESTER_CURRICULUM } from '@/src/constants';
import { FileText, BookOpen, Scale, HelpCircle, Download, ChevronRight, ArrowLeft, Eye } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import PDFPreviewModal from '../components/PDFPreviewModal';

export default function SubjectDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<'notes' | 'papers' | 'questions' | 'cases' | 'act'>('notes');
  const [previewDoc, setPreviewDoc] = useState<{ url: string; title: string } | null>(null);
  
  const allSubjects = [
    ...Object.values(CURRICULUM).flat(),
    ...Object.values(SEMESTER_CURRICULUM).flat()
  ];
  const subject = allSubjects.find(s => s.id === id);
  const bareAct = subject?.bareActId ? BARE_ACTS[subject.bareActId] : null;
  const subjectCases = CASE_LAWS.filter(c => c.subject.includes(subject?.name || ''));
  const subjectPapers = PAST_PAPERS.find(p => p.subject === subject?.name)?.years || [];

  if (!subject) return <div className="p-20 text-center">Subject not found.</div>;

  const tabs = [
    { id: 'notes', label: 'Study Notes', icon: BookOpen },
    { id: 'papers', label: 'Past Papers', icon: FileText },
    { id: 'questions', label: 'Imp. Questions', icon: HelpCircle },
    { id: 'cases', label: 'Case Laws', icon: Scale },
    { id: 'act', label: 'Bare Act', icon: Scale, hidden: !bareAct },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <PDFPreviewModal 
        isOpen={!!previewDoc} 
        onClose={() => setPreviewDoc(null)} 
        pdfUrl={previewDoc?.url || ''} 
        title={previewDoc?.title || ''} 
      />

      <Link to="/subjects" className="inline-flex items-center gap-2 text-muted hover:text-gold mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Subjects
      </Link>

      <div className="bg-white border border-muted/10 rounded-3xl overflow-hidden shadow-sm mb-12">
        <div className="bg-ink p-8 md:p-12 text-white relative">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Scale className="w-32 h-32" />
          </div>
          <div className="relative z-10">
            <p className="text-gold font-bold text-xs uppercase tracking-widest mb-2">
              {subject.semester ? `Semester ${subject.semester}` : subject.part} · {subject.paper}
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{subject.name}</h1>
            <p className="text-gray-400 max-w-2xl leading-relaxed">{subject.description}</p>
          </div>
        </div>

        <div className="border-b border-muted/10 flex overflow-x-auto no-scrollbar">
          {tabs.filter(t => !t.hidden).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={cn(
                "px-8 py-5 text-sm font-bold whitespace-nowrap transition-all border-b-2 flex items-center gap-2",
                activeTab === tab.id 
                  ? "border-gold text-gold bg-gold/5" 
                  : "border-transparent text-muted hover:text-ink hover:bg-parchment/50"
              )}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-8 md:p-12 min-h-[400px]">
          {activeTab === 'notes' && (
            <div className="space-y-6">
              <h3 className="text-2xl font-serif font-bold mb-6">Structured Notes</h3>
              {[
                { title: 'Introduction & Definitions', type: 'Short Note', pages: 4 },
                { title: 'Detailed Analysis of Key Sections', type: 'Detailed Note', pages: 12 },
                { title: 'Exam Revision Summary', type: 'Revision', pages: 2 },
              ].map((note, i) => (
                <div key={i} className="flex items-center justify-between p-6 bg-parchment/30 rounded-2xl border border-muted/10 hover:border-gold transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                      <BookOpen className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold">{note.title}</h4>
                      <p className="text-xs text-muted">{note.type} · {note.pages} Pages</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setPreviewDoc({ url: "https://pu.edu.pk/images/image/syllabus/LLB-5-Years-Semester-System-2025.pdf", title: note.title })}
                      className="text-gold hover:text-gold-light p-2"
                      title="Preview Note"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <a 
                      href="https://pu.edu.pk/images/image/syllabus/LLB-5-Years-Semester-System-2025.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gold hover:text-gold-light p-2"
                      title="Download Note"
                    >
                      <Download className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'papers' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {subjectPapers.length > 0 ? subjectPapers.map((paper) => (
                <div key={paper.year} className="p-6 bg-cream border border-muted/10 rounded-2xl flex items-center justify-between">
                  <div>
                    <h4 className="font-bold">Annual Examination {paper.year}</h4>
                    <p className="text-xs text-muted">Punjab University · {subject.name}</p>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setPreviewDoc({ url: paper.url, title: `Annual Exam ${paper.year} - ${subject.name}` })}
                      className="text-xs font-bold px-3 py-1.5 rounded-lg border border-gold/30 bg-gold/5 text-gold hover:bg-gold hover:text-ink transition-all flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" /> Preview
                    </button>
                    <a 
                      href={paper.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-ink text-white p-1.5 rounded-lg hover:bg-black transition-colors flex items-center"
                      title="Download PDF"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              )) : (
                <div className="col-span-full text-center py-20 text-muted">
                  No past papers available for this subject yet.
                </div>
              )}
            </div>
          )}

          {activeTab === 'questions' && (
            <div className="space-y-8">
              <div className="bg-gold/5 border border-gold/20 p-6 rounded-2xl">
                <h4 className="font-serif text-xl font-bold text-gold mb-4 italic">2024 Guess Paper Highlights</h4>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-sm">
                    <span className="text-gold font-bold">•</span>
                    <span>Explain the doctrine of 'Laches' with reference to the {subject.name}.</span>
                  </li>
                  <li className="flex gap-3 text-sm">
                    <span className="text-gold font-bold">•</span>
                    <span>What are the legal consequences of delay in filing a suit? Discuss Section 5.</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold uppercase tracking-widest text-xs text-muted">Frequently Asked (10 Years)</h4>
                {[
                  "Define the scope and object of the Act.",
                  "Difference between limitation and prescription.",
                  "Legal disability and its effects on limitation period."
                ].map((q, i) => (
                  <div key={i} className="p-4 bg-white border border-muted/10 rounded-xl flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-medium">{q}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'cases' && (
            <div className="space-y-8">
              {subjectCases.length > 0 ? subjectCases.map((c) => (
                <div key={c.id} className="bg-white border border-muted/10 rounded-2xl overflow-hidden">
                  <div className="bg-parchment p-6 border-b border-muted/10">
                    <h4 className="font-serif text-xl font-bold">{c.name}</h4>
                    <p className="text-xs text-gold font-bold uppercase mt-1">{c.subject}</p>
                  </div>
                  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-xs font-bold uppercase text-muted mb-2">Facts</h5>
                      <p className="text-sm leading-relaxed">{c.facts}</p>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold uppercase text-muted mb-2">Issue</h5>
                      <p className="text-sm leading-relaxed italic">{c.issue}</p>
                    </div>
                    <div className="md:col-span-2 bg-cream p-4 rounded-xl border border-gold/10">
                      <h5 className="text-xs font-bold uppercase text-gold mb-2">Judgment & Principle</h5>
                      <p className="text-sm leading-relaxed mb-2">{c.judgment}</p>
                      <div className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-bold rounded-full">
                        Principle: {c.principle}
                      </div>
                    </div>
                  </div>
                </div>
              )) : (
                <div className="text-center py-20 text-muted">
                  No case laws recorded for this subject yet.
                </div>
              )}
            </div>
          )}

          {activeTab === 'act' && bareAct && (
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setPreviewDoc({ url: bareAct.pdfUrl || '', title: bareAct.title })}
                  className="flex items-center gap-2 bg-gold text-ink px-4 py-2 rounded-lg text-sm font-bold hover:bg-gold-light transition-colors"
                >
                  <Eye className="w-4 h-4" /> Preview
                </button>
                <a 
                  href={bareAct.pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 bg-ink text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-black transition-colors"
                >
                  <Download className="w-4 h-4" /> Download PDF
                </a>
              </div>
              <div className="space-y-6">
                {bareAct.sections.map((sec) => (
                  <div key={sec.id} className="p-6 bg-white border border-muted/10 rounded-2xl">
                    <h4 className="font-bold text-gold mb-3">{sec.title}</h4>
                    <p className="text-sm leading-relaxed text-muted">{sec.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
