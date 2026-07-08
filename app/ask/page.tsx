'use client';
import { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
}

export default function AskPage() {
  const [lang, setLang] = useState<'en' | 'tr'>('en');
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Content dictionary for both languages
  const content = {
    en: {
      title: "Aman Intelligence",
      subtitle: "Verified AI Agent",
      placeholder: "Ask something about Aman...",
      quickQuestions: "Quick Questions",
      welcome: "Hello, I am Aman Khan's AI assistant. Ask me anything about his engineering skills, role at Orthosyn Medikal, projects, or his internship as a Foreign Trade Analyst at OSTIM OSB Foreign Trade Department.",
      errorMsg: "Connection error occurred. Please try again.",
      prompts: [
        "Tell me about Aman's experience at OSTIM OSB Foreign Trade Department.",
        "What are his responsibilities at Orthosyn Medikal?",
        "What is the Hizlee Rider Connect project?",
        "Tell me about his Teknofest project."
      ]
    },
    tr: {
      title: "Aman Zekası",
      subtitle: "Doğrulanmış Yapay Zeka Modeli",
      placeholder: "Aman hakkında bir şey sorun...",
      quickQuestions: "Hızlı Sorular",
      welcome: "Merhaba, ben Aman Khan'ın yapay zeka asistanıyım. Mühendislik yetkinlikleri, Orthosyn Medikal tecrübesi, projeleri veya OSTIM OSB Dış Ticaret Koordinatörlüğü'ndeki Dış Ticaret Analisti stajı hakkında ne bilmek istersiniz?",
      errorMsg: "Bağlantı hatası oluştu. Lütfen tekrar deneyin.",
      prompts: [
        "Aman'ın OSTIM OSB Dış Ticaret Departmanı'ndaki tecrübesinden bahset.",
        "Orthosyn Medikal'deki sorumlulukları neler?",
        "Hizlee Rider Connect projesi nedir?",
        "Teknofest projesinin detayları neydi?"
      ]
    }
  };

  // Initialize or reset welcome message when language changes
  useEffect(() => {
    setMessages([
      { id: 1, role: 'assistant', content: content[lang].welcome }
    ]);
  }, [lang]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMsg: Message = { id: Date.now(), role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, language: lang }),
      });
      const data = await response.json();
      
      setMessages(prev => [...prev, { id: Date.now() + 1, role: 'assistant', content: data.reply }]);
    } catch {
      setMessages(prev => [...prev, { id: Date.now() + 1, role: 'assistant', content: content[lang].errorMsg }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="h-screen w-screen bg-[#09090b] text-zinc-100 flex overflow-hidden font-sans">
      {/* SIDEBAR - QUICK QUESTIONS */}
      <section className="hidden lg:flex flex-col w-80 border-r border-zinc-800/80 bg-zinc-950/40 p-6 space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-lg font-bold tracking-tight">{content[lang].title}</h2>
            <p className="text-xs text-zinc-500">{content[lang].subtitle}</p>
          </div>
          
          {/* LANGUAGE TOGGLE SWITCH */}
          <div className="flex border border-zinc-800 bg-zinc-900 rounded-lg p-0.5 text-xs font-bold">
            <button 
              onClick={() => setLang('en')} 
              className={`px-2 py-1 rounded-md transition-colors ${lang === 'en' ? 'bg-purple-600 text-white' : 'text-zinc-400 hover:text-zinc-200'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLang('tr')} 
              className={`px-2 py-1 rounded-md transition-colors ${lang === 'tr' ? 'bg-purple-600 text-white' : 'text-zinc-400 hover:text-zinc-200'}`}
            >
              TR
            </button>
          </div>
        </div>

        <div className="space-y-2 flex-1 overflow-y-auto">
          <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">
            {content[lang].quickQuestions}
          </div>
          {content[lang].prompts.map((prompt, i) => (
            <button
              key={i}
              onClick={() => sendMessage(prompt)}
              className="w-full text-left p-3 text-xs text-zinc-400 bg-zinc-900/30 hover:bg-zinc-900 border border-zinc-800/60 rounded-xl transition-all duration-200 leading-relaxed"
            >
              {prompt}
            </button>
          ))}
        </div>
      </section>

      {/* CHAT DISPLAY WINDOW */}
      <section className="flex-1 flex flex-col h-full bg-[#0c0c0e]/30 relative">
        {/* Mobile Language Bar */}
        <div className="lg:hidden flex justify-end p-4 border-b border-zinc-800/60 bg-zinc-950/20">
          <div className="flex border border-zinc-800 bg-zinc-900 rounded-lg p-0.5 text-xs font-bold">
            <button onClick={() => setLang('en')} className={`px-2 py-1 rounded-md ${lang === 'en' ? 'bg-purple-600 text-white' : 'text-zinc-400'}`}>EN</button>
            <button onClick={() => setLang('tr')} className={`px-2 py-1 rounded-md ${lang === 'tr' ? 'bg-purple-600 text-white' : 'text-zinc-400'}`}>TR</button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 max-w-3xl w-full mx-auto pb-32 pt-12">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed shadow-md ${
                msg.role === 'user'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium'
                  : 'bg-zinc-900/80 border border-zinc-800 text-zinc-200'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}

          {/* LOADING INDICATOR */}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-4 flex space-x-1.5 items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* INPUT AREA */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/95 to-transparent p-6">
          <div className="max-w-3xl mx-auto relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
              placeholder={content[lang].placeholder}
              className="w-full bg-zinc-950/90 border border-zinc-800 rounded-xl py-4 pl-5 pr-16 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-all shadow-2xl"
            />
            <button
              onClick={() => sendMessage(input)}
              className="absolute right-3 p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-purple-400 transition-colors border border-zinc-800"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}