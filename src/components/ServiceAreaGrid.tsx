import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { serviceAreas } from '@/data/business';

export function ServiceAreaGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {serviceAreas.map((area) => (
        <div
          key={area.slug}
          className="group rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5 transition-all hover:shadow-xl hover:ring-amber-200"
        >
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="h-5 w-5 text-amber-500" />
            <h3 className="font-bold text-slate-900">{area.name}, {area.state}</h3>
          </div>
          <p className="text-sm text-slate-500 line-clamp-3 mb-4">{area.description}</p>
          <div className="flex flex-wrap gap-2">
            <Link
              to={`/electrician-${area.slug}`}
              className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-amber-100 hover:text-amber-700"
            >
              Electrician {area.name}
            </Link>
            <Link
              to={`/electrical-services-${area.slug}`}
              className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-amber-100 hover:text-amber-700"
            >
              Electrical Services {area.name}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
