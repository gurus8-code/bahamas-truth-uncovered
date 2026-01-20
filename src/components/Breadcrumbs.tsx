import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = () => {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <span className="flex items-center gap-1 text-muted-foreground">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </span>
        </li>
        <ChevronRight className="w-4 h-4 text-muted-foreground" />
        <li>
          <span className="text-primary font-medium" aria-current="page">
            Is the Bahamas Part of the USA?
          </span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;