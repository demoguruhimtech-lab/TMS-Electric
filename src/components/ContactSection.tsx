import { Phone, MapPin, Clock, Mail, Send } from 'lucide-react';
import { business } from '@/data/business';

export function ContactSection({ locationName }: { locationName?: string }) {
  return (
    <section className="bg-slate-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Contact TMS Electric
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            {locationName
              ? `Serving ${locationName} and all of North County San Diego`
              : 'Serving Oceanside and all of North County San Diego'}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <a
              href={`tel:${business.phoneRaw}`}
              className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5 transition-all hover:shadow-xl hover:ring-amber-200"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-400 text-slate-900 shrink-0">
                <Phone className="h-7 w-7" />
              </div>
              <div>
                <div className="text-sm text-slate-500">Call Us Now</div>
                <div className="text-xl font-bold text-slate-900">{business.phoneDisplay}</div>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-700 shrink-0">
                <MapPin className="h-7 w-7" />
              </div>
              <div>
                <div className="text-sm text-slate-500">Visit Us</div>
                <div className="text-base font-semibold text-slate-900">
                  {business.address}<br />
                  {business.city}, {business.state} {business.zip}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-700 shrink-0">
                <Clock className="h-7 w-7" />
              </div>
              <div>
                <div className="text-sm text-slate-500">Business Hours</div>
                <div className="text-base font-semibold text-slate-900">
                  {business.hours}<br />
                  <span className="text-sm font-normal text-slate-500">Sun: Closed &middot; Emergency service available</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-700 shrink-0">
                <Mail className="h-7 w-7" />
              </div>
              <div>
                <div className="text-sm text-slate-500">Email Us</div>
                <div className="text-base font-semibold text-slate-900">{business.email}</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 min-h-[400px]">
            <iframe
              src={business.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`TMS Electric location in ${business.city}, ${business.state}`}
            />
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-slate-900 p-8 text-center">
          <h3 className="text-2xl font-bold text-white">Ready to Get Started?</h3>
          <p className="mt-2 text-slate-400">
            Call now for fast, reliable electrical service in {locationName || business.city} and surrounding areas.
          </p>
          <a
            href={`tel:${business.phoneRaw}`}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-400 px-8 py-4 text-lg font-bold text-slate-900 shadow-lg shadow-amber-400/20 transition-all hover:bg-amber-300"
          >
            <Phone className="h-5 w-5" />
            {business.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
