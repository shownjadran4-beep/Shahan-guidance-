import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Send, Bot, User, Loader2, Scale } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function AIAssistant() {
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMsg,
        config: {
          systemInstruction: "You are a professional legal tutor for Shahan Guidance, an educational platform for LLB students in Pakistan (specifically Punjab University). Help students understand legal concepts, section numbers, case laws, and exam strategies. Be precise, academic, and encouraging. Use simple language to explain complex legal jargon.",
        }
      });

      setMessages(prev => [...prev, { role: 'ai', content: response.text || "I'm sorry, I couldn't process that request." }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'ai', content: "I'm having trouble connecting to my legal database. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-cream border border-muted/20 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-ink p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
          <Scale className="w-6 h-6 text-ink" />
        </div>
        <div>
          <h3 className="text-white font-serif text-lg leading-tight">Legal AI Tutor</h3>
          <p className="text-gold-light text-xs">Powered by Shahan Guidance</p>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-parchment/30">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center p-8 opacity-60">
            <Bot className="w-12 h-12 mb-4 text-muted" />
            <h4 className="font-serif text-xl mb-2">How can I help your studies?</h4>
            <p className="text-sm max-w-xs">Ask about specific sections, case laws, or how to attempt exam questions.</p>
          </div>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={cn("flex gap-3", msg.role === 'user' ? "flex-row-reverse" : "flex-row")}>
            <div className={cn("w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0", 
              msg.role === 'user' ? "bg-ink text-white" : "bg-gold text-ink")}>
              {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
            </div>
            <div className={cn("max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed",
              msg.role === 'user' ? "bg-ink text-white rounded-tr-none" : "bg-white border border-muted/20 rounded-tl-none shadow-sm")}>
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center animate-pulse">
              <Bot className="w-5 h-5 text-ink" />
            </div>
            <div className="bg-white border border-muted/20 p-3 rounded-2xl rounded-tl-none flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-gold" />
              <span className="text-xs text-muted">Consulting legal records...</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t border-muted/10 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask about a section or case law..."
          className="flex-1 bg-parchment/50 border border-muted/20 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-gold transition-colors"
        />
        <button
          onClick={handleSend}
          disabled={isLoading}
          className="bg-gold hover:bg-gold-light text-ink p-2 rounded-full transition-all disabled:opacity-50"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
