import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Subjects from './pages/Subjects';
import SubjectDetail from './pages/SubjectDetail';
import AIAssistant from './components/AIAssistant';
import { Scale } from 'lucide-react';

import SemesterSystem from './pages/SemesterSystem';
import Outlines from './pages/Outlines';
import PastPapers from './pages/PastPapers';
import BareActs from './pages/BareActs';

function AIAssistantPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-serif font-bold">AI Legal Tutor</h1>
        <p className="text-muted max-w-xl mx-auto">
          Get instant help with legal definitions, section explanations, and case law summaries. 
          Our AI is specialized in Pakistani LLB curriculum.
        </p>
      </div>
      <AIAssistant />
    </div>
  );
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 text-center space-y-6">
      <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto">
        <Scale className="w-10 h-10 text-gold" />
      </div>
      <h1 className="text-4xl font-serif font-bold">{title}</h1>
      <p className="text-muted max-w-md mx-auto">
        This section is currently being populated with verified materials for Punjab University students. 
        Check back soon for updates!
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/semester" element={<SemesterSystem />} />
            <Route path="/outlines" element={<Outlines />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/subject/:id" element={<SubjectDetail />} />
            <Route path="/bare-acts" element={<BareActs />} />
            <Route path="/past-papers" element={<PastPapers />} />
            <Route path="/notes" element={<PlaceholderPage title="Study Notes" />} />
            <Route path="/ai-tutor" element={<AIAssistantPage />} />
            <Route path="/discuss" element={<PlaceholderPage title="Discussion Forum" />} />
            <Route path="/blog" element={<PlaceholderPage title="Legal Blog & Tips" />} />
          </Routes>
        </main>
        
        <footer className="bg-ink text-white py-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Scale className="w-6 h-6 text-gold" />
                <span className="font-serif text-xl font-bold">Shahan Guidance</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering the next generation of Pakistani lawyers with organized, 
                accessible, and high-quality educational resources.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-gold-light uppercase tracking-widest text-xs">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-gold-light uppercase tracking-widest text-xs">Official Sources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://pakistancode.gov.pk" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Pakistan Code</a></li>
                <li><a href="http://punjablaws.gov.pk" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Punjab Laws</a></li>
                <li><a href="https://pu.edu.pk" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Punjab University</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-white/5 text-center text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Shahan Guidance. All rights reserved. Designed for LLB Law Students.
          </div>
        </footer>
      </div>
    </Router>
  );
}
