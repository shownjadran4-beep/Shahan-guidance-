import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scale, BookOpen, FileText, Clock, Search, MessageSquare, Home, Menu, X, GraduationCap } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Semester', path: '/semester', icon: GraduationCap },
    { name: 'Outlines', path: '/outlines', icon: FileText },
    { name: 'Subjects', path: '/subjects', icon: BookOpen },
    { name: 'Bare Acts', path: '/bare-acts', icon: Scale },
    { name: 'Past Papers', path: '/past-papers', icon: FileText },
    { name: 'AI Tutor', path: '/ai-tutor', icon: Search },
  ];

  return (
    <nav className="bg-ink text-white sticky top-0 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-gold p-1.5 rounded-lg">
              <Scale className="w-6 h-6 text-ink" />
            </div>
            <span className="font-serif text-xl font-bold tracking-tight">
              Shahan <span className="text-gold-light italic font-normal">Guidance</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2",
                  location.pathname === link.path 
                    ? "bg-gold/10 text-gold-light" 
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                )}
              >
                <link.icon className="w-4 h-4" />
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-ink border-t border-white/10 px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium flex items-center gap-3",
                location.pathname === link.path 
                  ? "bg-gold/20 text-gold-light" 
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              )}
            >
              <link.icon className="w-5 h-5" />
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
