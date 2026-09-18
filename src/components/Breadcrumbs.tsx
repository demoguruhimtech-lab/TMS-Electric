import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumbs({ items }: { items: { name: string; path?: string }[] }) {
  return (
    <nav className="flex items-center gap-1 text-sm text-slate-500 overflow-x-auto whitespace-nowrap" aria-label="Breadcrumb">
      <Link to="/" className="flex items-center gap-1 hover:text-amber-600 transition-colors">
        <Home className="h-3.5 w-3.5" />
        <span>Home</span>
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
          {item.path ? (
            <Link to={item.path} className="hover:text-amber-600 transition-colors">
              {item.name}
            </Link>
          ) : (
            <span className="text-slate-700 font-medium">{item.name}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
