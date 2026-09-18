import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FaqSection({ faqs, title }: { faqs: { question: string; answer: string }[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
          {title || 'Frequently Asked Questions'}
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-amber-500 transition-transform ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
