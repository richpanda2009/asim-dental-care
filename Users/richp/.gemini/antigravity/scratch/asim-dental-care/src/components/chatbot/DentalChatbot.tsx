import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  User, 
  Calendar, 
  Phone, 
  MapPin, 
  MessageSquare,
  HelpCircle,
  Minimize2
} from 'lucide-react';
import { getInitialBotMessage, processUserMessage, ChatMessage } from '../../services/chatService';

interface DentalChatbotProps {
  onOpenBooking: (treatmentId?: string) => void;
  onNavigate: (route: any, data?: any) => void;
}

export const DentalChatbot: React.FC<DentalChatbotProps> = ({ onOpenBooking, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([getInitialBotMessage()]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = processUserMessage(query);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 600);
  };

  const handleQuickReply = (reply: string) => {
    if (reply.includes('Book') || reply.includes('Appointment')) {
      onOpenBooking();
      setIsOpen(false);
      return;
    }
    if (reply.includes('Pricing') || reply.includes('PKR')) {
      onNavigate('pricing');
      setIsOpen(false);
      return;
    }
    if (reply.includes('Emergency')) {
      onNavigate('emergency');
      setIsOpen(false);
      return;
    }
    if (reply.includes('Location') || reply.includes('Map')) {
      onNavigate('contact');
      setIsOpen(false);
      return;
    }
    if (reply.includes('WhatsApp')) {
      window.open('https://wa.me/923005552424', '_blank');
      return;
    }
    if (reply.includes('Dr. Asim') || reply.includes('Team')) {
      onNavigate('about');
      setIsOpen(false);
      return;
    }

    handleSendMessage(reply);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start">
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-sky-600 to-teal-600 text-white shadow-2xl hover:scale-105 active:scale-95 transition-all ring-4 ring-sky-400/20"
          aria-label="Open Dental AI Chatbot"
        >
          <div className="relative">
            <Bot className="h-5 w-5 animate-bounce" style={{ animationDuration: '2s' }} />
            <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-emerald-400 border border-white"></span>
          </div>
          <span className="text-xs font-bold tracking-wide">AsimCare AI</span>
        </button>
      )}

      {/* Interactive Chat Window */}
      {isOpen && (
        <div className="w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[520px] animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Top Bar */}
          <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-2xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-sm">AsimCare AI</h4>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-semibold px-1.5 py-0.2 rounded border border-emerald-500/30">
                    Online
                  </span>
                </div>
                <p className="text-[10px] text-slate-400">Ask symptoms, prices (PKR), or clinic advice</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <Minimize2 className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Message Stream */}
          <div className="flex-1 p-4 overflow-y-auto bg-slate-50 space-y-3">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="h-7 w-7 rounded-full bg-sky-600 text-white flex items-center justify-center shrink-0 mt-1 text-xs">
                    🤖
                  </div>
                )}

                <div className="max-w-[82%] space-y-2">
                  <div
                    className={`p-3.5 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-sky-600 text-white rounded-br-none shadow-sm'
                        : 'bg-white text-slate-800 rounded-tl-none border border-slate-200/80 shadow-xs'
                    }`}
                  >
                    <div className="whitespace-pre-line">{msg.text}</div>
                    <span className={`text-[9px] block text-right mt-1 ${
                      msg.sender === 'user' ? 'text-sky-200' : 'text-slate-400'
                    }`}>
                      {msg.timestamp}
                    </span>
                  </div>

                  {/* Quick Action Chips from Bot */}
                  {msg.quickReplies && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {msg.quickReplies.map((reply, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleQuickReply(reply)}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white hover:bg-sky-50 text-slate-700 hover:text-sky-700 border border-slate-200 hover:border-sky-300 transition shadow-2xs"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-slate-400 pl-9">
                <div className="flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-sky-400 animate-bounce" />
                  <div className="h-2 w-2 rounded-full bg-sky-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <div className="h-2 w-2 rounded-full bg-sky-400 animate-bounce" style={{ animationDelay: '0.4s' }} />
                </div>
                <span>Dr. Asim AI is formulating answer...</span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Chat Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-slate-100 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask a question (e.g. RCT price, toothache)..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 text-xs px-3.5 py-2.5 rounded-xl bg-slate-100 border-none focus:ring-2 focus:ring-sky-500 text-slate-900"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 disabled:opacity-50 text-white transition shadow-sm"
              title="Send Message"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
