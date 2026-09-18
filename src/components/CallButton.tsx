import { Phone } from 'lucide-react';
import { business } from '@/data/business';

export function MobileCallButton() {
  return (
    <a
      href={`tel:${business.phoneRaw}`}
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3.5 text-sm font-bold text-slate-900 shadow-2xl shadow-amber-400/30 transition-transform hover:scale-105 active:scale-95 sm:hidden"
    >
      <Phone className="h-5 w-5 animate-pulse" />
      Call Now
    </a>
  );
}

export function CallButton({ className = '', label = 'Call Now' }: { className?: string; label?: string }) {
  return (
    <a
      href={`tel:${business.phoneRaw}`}
      className={`inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-base font-bold text-slate-900 shadow-lg shadow-amber-400/20 transition-all hover:bg-amber-300 hover:shadow-amber-400/40 ${className}`}
    >
      <Phone className="h-5 w-5" />
      {label}
    </a>
  );
}
