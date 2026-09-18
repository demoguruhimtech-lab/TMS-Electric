import { Phone, Star, ShieldCheck, Clock, Award, Users } from 'lucide-react';
import { business } from '@/data/business';

export function TrustBar() {
  return (
    <section className="bg-slate-900 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5">
          <div className="flex items-center gap-2 text-slate-300">
            <Award className="h-8 w-8 text-amber-400 shrink-0" />
            <div>
              <div className="text-lg font-bold text-white">{business.yearsInBusiness}+ Years</div>
              <div className="text-xs text-slate-400">In Business</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Star className="h-8 w-8 text-amber-400 shrink-0" />
            <div>
              <div className="text-lg font-bold text-white">{business.rating}.0 Rating</div>
              <div className="text-xs text-slate-400">{business.reviewCount}+ Reviews</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <ShieldCheck className="h-8 w-8 text-amber-400 shrink-0" />
            <div>
              <div className="text-lg font-bold text-white">Licensed</div>
              <div className="text-xs text-slate-400">#{business.license}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Clock className="h-8 w-8 text-amber-400 shrink-0" />
            <div>
              <div className="text-lg font-bold text-white">Emergency</div>
              <div className="text-xs text-slate-400">Service Available</div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-4 lg:col-span-1 flex items-center gap-2 text-slate-300">
            <Users className="h-8 w-8 text-amber-400 shrink-0" />
            <div>
              <div className="text-lg font-bold text-white">1000+</div>
              <div className="text-xs text-slate-400">Jobs Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
