import { Link } from 'react-router-dom';
import { useSeo } from '@/hooks/useSeo';
import { business, mainLocation } from '@/data/business';
import { CallButton } from '@/components/CallButton';

export function NotFoundPage() {
  useSeo({
    title: `Page Not Found | ${business.name}`,
    description: 'The page you are looking for could not be found. Please browse our electrical services or call us for assistance.',
    canonical: '/404',
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 pt-20">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-slate-900">404</h1>
        <p className="mt-4 text-xl text-slate-600">Page not found</p>
        <p className="mt-2 text-slate-500">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-800"
          >
            Back to Home
          </Link>
          <CallButton label={business.phoneDisplay} />
        </div>
      </div>
    </div>
  );
}
