import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, ChevronRight } from 'lucide-react';
import { DUBAI_AREAS } from '../data/areaData';

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: "Hello! I'm EstateIQ. I can help you find the perfect investment. What are you looking for?" }
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
      if (option.value === 'high_yield') {
        recommendations = DUBAI_AREAS.filter(a => a.category === 'High Yield').slice(0, 3);
        responseText = "For maximum Cash Flow, I recommend these high-yield districts:";
      } 
      else if (option.value === 'luxury') {
        recommendations = DUBAI_AREAS.filter(a => a.category === 'Luxury' || a.category === 'Ultra Luxury').slice(0, 3);
        responseText = "If you want prestige and stability, look at these prime locations:";
      }
      else if (option.value === 'appreciation') {
        recommendations = DUBAI_AREAS.filter(a => a.category === 'Appreciation').slice(0, 3);
        responseText = "For 5-year capital growth, these are the hottest future hotspots:";
      }
      else if (option.value === 'budget') {
        // Sort by price (parsing "AED 950k" to numbers is hard, so we use string matching or simple filter)
        recommendations = DUBAI_AREAS.filter(a => a.avgPrice && a.avgPrice.includes('k')).slice(0, 3);
        responseText = "Here are the best entry-level options under AED 1M:";
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
    { label: "💰 Find High ROI", value: "high_yield" },
    { label: "📈 Best Capital Growth", value: "appreciation" },
    { label: "💎 Luxury Living", value: "luxury" },
    { label: "🏷️ Budget under 1M", value: "budget" }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* CHAT WINDOW */}
      {isOpen && (
        <div className="bg-white w-[350px] h-[500px] rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden mb-4 animate-in slide-in-from-bottom-10 fade-in duration-300">
          
          {/* Header */}
          <div className="bg-slate-900 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-full">
                <Bot size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-sm">EstateIQ Assistant</h3>
                <div className="flex items-center gap-1.5 opacity-80">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-medium uppercase tracking-wide">Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded transition">
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl p-3 text-sm shadow-sm ${
                  msg.type === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none'
                }`}>
                  <p>{msg.text}</p>
                  
                  {/* RENDER RECOMMENDATIONS IF AVAILABLE */}
                  {msg.data && (
                    <div className="mt-3 space-y-2">
                      {msg.data.map((area) => (
                        <a key={area.id} href={`/area/${area.id}`} className="block bg-slate-50 hover:bg-blue-50 border border-slate-200 p-2 rounded-lg transition group">
                          <div className="flex justify-between items-start">
                            <span className="font-bold text-slate-900 text-xs">{area.name}</span>
                            <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-bold">{area.roi} ROI</span>
                          </div>
                          <div className="text-[10px] text-slate-500 mt-1 flex items-center gap-1">
                            View Analysis <ChevronRight size={10} className="group-hover:translate-x-1 transition-transform" />
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
                <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-none p-3 shadow-sm flex gap-1">
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions (Footer) */}
          <div className="p-3 bg-white border-t border-slate-100">
            <div className="grid grid-cols-2 gap-2">
              {options.map((opt) => (
                <button 
                  key={opt.value} 
                  onClick={() => handleOptionClick(opt)}
                  className="text-xs bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-600 font-medium py-2 px-3 rounded-lg border border-slate-200 transition text-left truncate"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* TOGGLE BUTTON (FLOATING) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-3 bg-slate-900 hover:bg-blue-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
      >
        <div className="relative">
          <MessageSquare size={24} fill="currentColor" className="text-white" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
        </div>
        <span className="font-bold text-sm hidden group-hover:block whitespace-nowrap pr-2 animate-in slide-in-from-right-2 duration-300">
          Ask AI Assistant
        </span>
      </button>

    </div>
  );
};

export default AIChatWidget;