import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { brandConfig } from '../data/brandConfig';

export function AnnouncementBar({ onOpenBooking }) {
  return (
    <aside
      aria-label="Announcement"
      className="bg-[#231A19] text-[#F8F5F0] py-2 px-4 text-xs tracking-wider transition-all border-b border-[#3A2C2A]"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between sm:justify-center gap-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#E8C8C7] flex-shrink-0" />
          <span className="font-light tracking-[0.18em] text-[11px] sm:text-xs uppercase">
            {brandConfig.announcement}
          </span>
        </div>
        <button
          onClick={onOpenBooking}
          className="inline-flex items-center gap-1.5 text-[#E8C8C7] hover:text-white font-medium transition-colors underline-offset-4 hover:underline text-[11px] cursor-pointer"
        >
          <span>{brandConfig.announcementLinkText}</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </aside>
  );
}
