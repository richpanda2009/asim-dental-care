import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles, Phone } from 'lucide-react';

export const WhatsAppFloating: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Hi Dr. Asim, I would like to book a dental appointment at your Rawalpindi clinic.');

  const quickInquiries = [
    'Book an appointment with Dr. Asim',
    'Inquire about Root Canal (RCT) cost',
    'Dental Implants Swiss / German cost query',
    'Emergency toothache visit today',
    'Clinic location near Saddar Metro'
  ];

  const handleWhatsAppRedirect = (customMessage?: string) => {
    const textToSend = customMessage || selectedTopic;
    const encoded = encodeURIComponent(textToSend);
    const url = `https://wa.me/923005552424?text=${encoded}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* WhatsApp Chat Popup Box */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">
                  👨‍⚕️
                </div>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-400 border-2 border-white"></span>
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Asim Dental Care WhatsApp</h4>
                <p className="text-[11px] text-emerald-100">Typical reply: &lt; 5 minutes</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-50 space-y-3 max-h-80 overflow-y-auto">
            {/* Reception Message */}
            <div className="bg-white p-3.5 rounded-2xl rounded-tl-sm shadow-sm border border-slate-100 text-xs text-slate-800 space-y-1.5">
              <p className="font-semibold text-emerald-800">Assalam-o-Alaikum! 👋</p>
              <p className="text-slate-600 leading-relaxed">
                Welcome to Asim Dental Care Rawalpindi. How can our clinic front-desk assist you today?
              </p>
              <span className="text-[10px] text-slate-400 block text-right">Just now</span>
            </div>

            {/* Quick Option Chips */}
            <div className="space-y-1.5 pt-1">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Select Quick Inquiry:
              </p>
              <div className="flex flex-col gap-1.5">
                {quickInquiries.map((inquiry, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedTopic(`Hi Dr. Asim, I would like to: ${inquiry}.`);
                      handleWhatsAppRedirect(`Hi Dr. Asim, I would like to: ${inquiry}.`);
                    }}
                    className="text-left text-xs font-medium px-3 py-2 rounded-xl bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 border border-slate-200/80 hover:border-emerald-300 transition shadow-2xs flex items-center justify-between group"
                  >
                    <span>{inquiry}</span>
                    <Send className="h-3 w-3 text-emerald-500 opacity-0 group-hover:opacity-100 transition" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Input */}
          <div className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
            <input
              type="text"
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 text-xs px-3 py-2 rounded-xl bg-slate-100 border-none focus:ring-2 focus:ring-emerald-500 text-slate-800"
            />
            <button
              onClick={() => handleWhatsAppRedirect()}
              className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition shadow-sm"
              title="Send to WhatsApp"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group h-14 w-14 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all focus:outline-none ring-4 ring-emerald-400/30"
        aria-label="Open WhatsApp Chat"
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40"></span>
        <MessageSquare className="h-7 w-7 text-white fill-white relative z-10" />
        
        {/* Pulse Badge */}
        <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-amber-400 border-2 border-white flex items-center justify-center text-[9px] font-bold text-slate-900 z-20">
          1
        </span>
      </button>
    </div>
  );
};
