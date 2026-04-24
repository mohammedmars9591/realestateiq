import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, ChevronRight } from 'lucide-react';
import { DUBAI_AREAS } from '../data/areaData';

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Welcome to RealEstateIQ. I'm your AI investment specialist. How can I assist with your 2026 property strategy?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // --- SMART LOGIC ENGINE ---
  const handleOptionClick = (option) => {
    // 1. Add User Message
    setMessages(prev => [...prev, { type: 'user', text: option.label }]);
    setIsTyping(true);

    // 2. Simulate AI Thinking (delayed response)
    setTimeout(() => {
      let responseText = "";
      let recommendations = [];

      // LOGIC: Filter data based on user choice
      const list = Array.isArray(DUBAI_AREAS) ? DUBAI_AREAS : [];
      if (option.value === 'high_yield') {
        recommendations = list.filter(a => a.category === 'High Yield').slice(0, 3);
        responseText = "For maximum Cash Flow, I recommend these high-yield districts:";
      } 
      else if (option.value === 'luxury') {
        recommendations = list.filter(a => a.category === 'Luxury' || a.category === 'Ultra Luxury').slice(0, 3);
        responseText = "If you want prestige and stability, look at these prime locations:";
      }
      else if (option.value === 'appreciation') {
        recommendations = list.filter(a => a.category === 'Appreciation').slice(0, 3);
        responseText = "For 5-year capital growth, these are the hottest future hotspots:";
      }
      else if (option.value === 'budget') {
        recommendations = list.filter(a => a.avgPrice && a.avgPrice.includes('k')).slice(0, 3);
        responseText = "Here are the best entry-level nodes currently analyzed:";
      }

      // 3. Add Bot Response
      const newBotMessage = {
        type: 'bot',
        text: responseText,
        data: recommendations
      };
      
      setMessages(prev => [...prev, newBotMessage]);
      setIsTyping(false);

    }, 1000);
  };

  // OPTIONS TO SHOW
  const options = [
    { label: "💰 High Yield Zones", value: "high_yield" },
    { label: "📈 Growth Hotspots", value: "appreciation" },
    { label: "💎 Luxury Selection", value: "luxury" },
    { label: "🏷️ Entry Level", value: "budget" }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[1000] flex flex-col items-end">
      
      {/* CHAT WINDOW */}
      {isOpen && (
        <div className="bg-[#FDFBF7]/95 backdrop-blur-2xl w-[350px] h-[550px] rounded-[2rem] shadow-[0_40px_80px_rgba(0,0,0,0.2)] border border-white flex flex-col overflow-hidden mb-4 animate-in slide-in-from-bottom-10 fade-in duration-500">
          
          {/* Header */}
          <div className="bg-[#3A3125] p-6 text-white flex justify-between items-center border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="bg-[#C6A75E] p-2 rounded-xl shadow-[0_0_15px_rgba(198,167,94,0.3)]">
                <Bot size={20} className="text-[#3A3125]" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-sm tracking-tight text-[#F4DFA0]">AI Assistant</h3>
                <div className="flex items-center gap-1.5 opacity-60">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em]">Institutional Active</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1.5 rounded-lg transition-all">
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5 bg-gradient-to-b from-[#F3E9D2]/20 to-transparent">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-[1.5rem] p-4 text-xs shadow-sm leading-relaxed ${
                  msg.type === 'user' 
                    ? 'bg-[#F3E9D2] text-[#3A3125] border border-[rgba(198,167,94,0.2)] rounded-br-none font-bold' 
                    : 'bg-white border border-white text-[#5A4F40] rounded-bl-none font-medium'
                }`}>
                  <p>{msg.text}</p>
                  
                  {/* RENDER RECOMMENDATIONS IF AVAILABLE */}
                  {msg.data && (
                    <div className="mt-4 space-y-2">
                      {msg.data.map((area) => (
                        <a key={area.id} href={`/area/${area.id}`} className="block bg-[#FDFBF7] hover:bg-white border border-[rgba(198,167,94,0.1)] p-3 rounded-xl transition-all group shadow-sm">
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-serif font-black text-[#3A3125] text-xs">{area.name}</span>
                            <span className="text-[9px] bg-[#C6A75E] text-white px-2 py-0.5 rounded-full font-black uppercase">{area.roi}</span>
                          </div>
                          <div className="text-[9px] font-black uppercase tracking-widest text-[#C6A75E] flex items-center gap-1">
                            Market Insights <ChevronRight size={10} className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-white rounded-2xl rounded-bl-none p-4 shadow-sm flex gap-1.5 items-center">
                  <div className="w-1.5 h-1.5 bg-[#C6A75E]/40 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-[#C6A75E]/60 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-[#C6A75E] rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions (Footer) */}
          <div className="p-4 bg-white border-t border-[rgba(198,167,94,0.1)]">
            <div className="grid grid-cols-2 gap-2 mb-2">
              {options.map((opt) => (
                <button 
                  key={opt.value} 
                  onClick={() => handleOptionClick(opt)}
                  className="text-[10px] bg-[#FDFBF7] hover:bg-[#F3E9D2] hover:text-[#3A3125] text-[#7A6E60] font-black uppercase tracking-widest py-3 px-3 rounded-xl border border-[rgba(198,167,94,0.1)] transition-all text-left truncate shadow-sm active:scale-95"
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <div className="text-center">
               <p className="text-[8px] font-black uppercase tracking-[0.2em] text-[#C6A75E]/40 mt-2">Institutional Advisory v2.0</p>
            </div>
          </div>

        </div>
      )}

      {/* TOGGLE BUTTON (FLOATING) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-3 bg-[#3A3125] hover:bg-[#2A231A] text-white p-4 pr-5 rounded-full shadow-[0_20px_50px_rgba(58,49,37,0.3)] transition-all duration-500 hover:scale-105 active:scale-95 border border-white/5"
      >
        <div className="relative">
          <MessageSquare size={22} fill="currentColor" className="text-[#C6A75E]" />
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C6A75E] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C6A75E]"></span>
            </span>
          )}
        </div>
        <span className="font-serif font-black text-xs uppercase tracking-widest text-[#F4DFA0]">
          {isOpen ? "Close Console" : "AI Intelligence"}
        </span>
      </button>

    </div>
  );
};

export default AIChatWidget;