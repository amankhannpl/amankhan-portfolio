'use client';
import { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
}

export default function AskPage() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: 'assistant', content: 'Merhaba, ben Aman Khan\'ın yapay zeka asistanıyım. Onun mühendislik yetkinlikleri, Orthosyn Medikal tecrübesi veya projeleri hakkında ne bilmek istersiniz?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

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
        body: JSON.stringify({ message: text }),
      });
      const data = await response.json();
      
      setMessages(prev => [...prev, { id: Date.now() + 1, role: 'assistant', content: data.reply }]);
    } catch {
      setMessages(prev => [...prev, { id: Date.now() + 1, role: 'assistant', content: 'Bağlantı hatası oluştu. Lütfen tekrar deneyin.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="h-screen w-screen bg-[#09090b] text-zinc-100 flex overflow-hidden font-sans">
      {/* SOL PANEL - ÖNERİLEN SORULAR */}
      <section className="hidden lg:flex flex-col w-80 border-r border-zinc-800/80 bg-zinc-950/40 p-6 space-y-6">
        <div>
          <h2 className="text-lg font-bold tracking-tight">Aman Intelligence</h2>
          <p className="text-xs text-zinc-500">Doğrulanmış yapay zeka modeli</p>
        </div>
        <div className="space-y-2">
          <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-3">Hızlı Sorular</div>
          {[
            "Aman Khan kimdir? Özetle.",
            "Orthosyn Medikal'deki sorumlulukları neler?",
            "Teknofest projesinin detayları neydi?",
            "Hizlee Rider Connect projesi nedir?"
          ].map((prompt, i) => (
            <button
              key={i}
              onClick={() => sendMessage(prompt)}
              className="w-full text-left p-3 text-xs text-zinc-400 bg-zinc-900/30 hover:bg-zinc-900 border border-zinc-800/60 rounded-xl transition-all duration-200"
            >
              {prompt}
            </button>
          ))}
        </div>
      </section>

      {/* SAĞ PANEL - CHAT EKRANI */}
      <section className="flex-1 flex flex-col h-full bg-[#0c0c0e]/30 relative">
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

          {/* YÜKLENİYOR BALONU */}
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

        {/* ALT YAZI GİRİŞ ALANI */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/95 to-transparent p-6">
          <div className="max-w-3xl mx-auto relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
              placeholder="Aman hakkında bir şey sorun..."
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