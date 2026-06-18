"use client";

import { ShieldCheck } from "lucide-react";

interface InquiryFormProps {
  model: string;
  id: string;
}

export default function InquiryForm({ model, id }: { model: string; id: string }) {
  return (
    <div className="bg-[#111625] border border-gray-800 rounded-3xl p-6 space-y-4">
      <div className="space-y-1">
        <h3 className="text-base font-extrabold text-white">Get CIF/FOB Quote for {model}</h3>
        <p className="text-gray-400 text-[10px]">Pre-filled wholesale inquiry for model {id}.</p>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-500 uppercase">Your Name</label>
          <input 
            type="text" 
            placeholder="e.g. James Bryant" 
            className="w-full bg-[#0b0f19] border border-gray-800 focus:border-amber-500 text-white rounded-lg px-3 py-2.5 text-xs focus:outline-none transition-colors"
          />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-500 uppercase">Business Email</label>
          <input 
            type="email" 
            placeholder="e.g. james@heavyimport.com" 
            className="w-full bg-[#0b0f19] border border-gray-800 focus:border-amber-500 text-white rounded-lg px-3 py-2.5 text-xs focus:outline-none transition-colors"
            required
          />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-500 uppercase">WhatsApp / Phone</label>
          <input 
            type="text" 
            placeholder="e.g. +8618949020107" 
            className="w-full bg-[#0b0f19] border border-gray-800 focus:border-amber-500 text-white rounded-lg px-3 py-2.5 text-xs focus:outline-none transition-colors"
          />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-bold text-gray-500 uppercase">Port of Delivery</label>
          <input 
            type="text" 
            placeholder="e.g. Port of Rotterdam, Netherlands" 
            className="w-full bg-[#0b0f19] border border-gray-800 focus:border-amber-500 text-white rounded-lg px-3 py-2.5 text-xs focus:outline-none transition-colors"
          />
        </div>

        <div className="pt-2">
          <button 
            type="button" 
            className="w-full bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs py-3 rounded-xl transition-all shadow-lg"
            onClick={() => alert(`Inquiry for ${model} received successfully! Our machinery export specialist will contact you in 4 hours with full CIF/FOB pricing.`)}
          >
            Request Best Pricing Quote
          </button>
        </div>
      </form>
      <div className="pt-2 text-center text-[10px] text-gray-500 flex items-center justify-center">
        <ShieldCheck size={12} className="text-emerald-500 mr-1" /> Safe payment & trade protection guaranteed.
      </div>
    </div>
  );
}
