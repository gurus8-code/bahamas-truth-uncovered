import { MapPin, Calendar } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 mt-16">
      <div className="container-article">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-primary" />
              <span className="font-display font-bold text-xl">Bahamas Travel Guide</span>
            </div>
            <p className="text-background/70 text-sm max-w-md">
              Your trusted source for accurate, up-to-date information about traveling to the Bahamas. Written by experts who know the Caribbean.
            </p>
          </div>
          
          <div className="text-sm text-background/70">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4" />
              <span>Last updated: January 20, 2026</span>
            </div>
            <p>All information verified for accuracy</p>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>© 2026 Bahamas Travel Guide. All rights reserved.</p>
            <p>
              Written with expertise and care for travelers worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;