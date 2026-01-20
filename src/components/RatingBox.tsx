import { Star, Users, ThumbsUp } from 'lucide-react';

const RatingBox = () => {
  return (
    <div className="card-elevated bg-gradient-to-br from-secondary/80 to-secondary/40">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <p className="text-sm text-muted-foreground mb-1">Reader Rating</p>
          <div className="flex items-center gap-2">
            <div className="rating-stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-5 h-5 ${star <= 5 ? 'fill-current' : ''}`}
                />
              ))}
            </div>
            <span className="font-semibold text-foreground">4.9/5</span>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="text-center">
            <div className="flex items-center gap-1 text-primary">
              <Users className="w-4 h-4" />
              <span className="font-semibold">847</span>
            </div>
            <p className="text-xs text-muted-foreground">Reviews</p>
          </div>
          <div className="text-center">
            <div className="flex items-center gap-1 text-palm">
              <ThumbsUp className="w-4 h-4" />
              <span className="font-semibold">97%</span>
            </div>
            <p className="text-xs text-muted-foreground">Helpful</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingBox;