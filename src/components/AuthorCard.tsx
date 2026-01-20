import { Calendar, Award, MapPin } from 'lucide-react';
import authorPhoto from '@/assets/author-photo.jpg';

const AuthorCard = () => {
  return (
    <div className="author-card">
      <img
        src={authorPhoto}
        alt="Michael Thompson - Travel journalist and Caribbean expert"
        className="w-20 h-20 rounded-full object-cover border-2 border-primary/20"
      />
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-display font-semibold text-foreground">Michael Thompson</h4>
          <Award className="w-4 h-4 text-sand" aria-label="Verified Expert" />
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          Travel journalist and Caribbean specialist with over 12 years of experience exploring the Bahamas and Caribbean region. I've visited the Bahamas more than 40 times and lived in Nassau for 2 years.
        </p>
        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            Updated: January 20, 2026
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            Based in Miami, FL
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;