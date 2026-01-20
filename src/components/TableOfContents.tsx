import { useState, useEffect } from 'react';
import { List } from 'lucide-react';

const sections = [
  { id: 'overview', title: 'Quick Answer' },
  { id: 'why-confusion', title: 'Why the Confusion?' },
  { id: 'history', title: 'History of the Bahamas' },
  { id: 'geography', title: 'Geographic Location' },
  { id: 'travel-requirements', title: 'Travel Requirements 2026' },
  { id: 'comparison', title: 'Bahamas vs US Territories' },
  { id: 'currency', title: 'Currency & Money' },
  { id: 'faq', title: 'Frequently Asked Questions' },
];

const TableOfContents = () => {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -60% 0px' }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="card-elevated sticky top-24">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
        <List className="w-5 h-5 text-primary" />
        <h3 className="font-display font-semibold text-foreground">Table of Contents</h3>
      </div>
      <nav>
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`toc-link ${activeSection === section.id ? 'active' : ''}`}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TableOfContents;