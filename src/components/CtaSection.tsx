import { Phone, CheckCircle2 } from 'lucide-react';
import { business } from '@/data/business';

export function CtaSection({
  title,
  subtitle,
  locationName,
}: {
  title: string;
  subtitle: string;
  locationName?: string;
}) {
  return (
    <section className="bg-gradient-to-br from-amber-400 to-amber-500 py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2>
        <p className="mt-3 text-lg text-slate-800">{subtitle}</p>
        <div className="mt-6 flex flex-col items-center gap-4">
          <a
            href={`tel:${business.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-slate-800 hover:scale-105"
          >
            <Phone className="h-5 w-5" />
            {business.phoneDisplay}
          </a>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-800">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4" />
              Licensed & Insured
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4" />
              Upfront Pricing
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4" />
              {locationName ? `Serving ${locationName}` : 'Serving North County San Diego'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
