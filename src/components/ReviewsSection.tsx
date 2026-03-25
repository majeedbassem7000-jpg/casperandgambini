import { Star } from "lucide-react";

const reviews = [
  {
    name: "Majid Al-Bahadli",
    text: "This is my first time attending Casper coffee place inside the dream city mall in Baghdad. The atmosphere was beautiful, the service was great.",
    rating: 5,
    time: "2 years ago",
  },
  {
    name: "Maryam Jamal",
    text: "My favourite place for sushi and the amount of food is good. Always come back for more!",
    rating: 5,
    time: "5 months ago",
  },
  {
    name: "Happy Customer",
    text: "This is the thousandth time you visit this place and definitely not the last. When I told them about the issue they were very sorry and gave us a cake. Still always my favorite!",
    rating: 4,
    time: "1 year ago",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-accent text-lg tracking-[0.2em] uppercase text-accent mb-4">
            Guest Experiences
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">
            What Our Guests Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-card p-8 border border-border">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="font-body text-muted-foreground leading-relaxed mb-6 text-sm">
                "{review.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-display text-sm font-semibold text-foreground">{review.name}</p>
                <p className="font-body text-xs text-muted-foreground mt-1">{review.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
