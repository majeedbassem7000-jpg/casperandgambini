const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-accent text-lg tracking-[0.2em] uppercase text-accent mb-4">
          Our Story
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-8">
          A Taste of Elegance in Baghdad
        </h2>
        <div className="w-16 h-px bg-accent mx-auto mb-8" />
        <p className="font-body text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-6">
          Nestled in the heart of Dream City Mall, Casper & Gambini's brings a world-class dining 
          experience to Baghdad. Our menu blends international flavors with local warmth — from 
          fresh sushi platters to aromatic sesame chicken, artisan coffees to decadent desserts.
        </p>
        <p className="font-body text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
          With elegant interiors, attentive service, and a passion for quality, every visit 
          is designed to be unforgettable.
        </p>

        <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto">
          <div>
            <p className="font-display text-4xl font-bold text-foreground">4.2</p>
            <p className="font-body text-sm text-muted-foreground mt-1">Rating</p>
          </div>
          <div>
            <p className="font-display text-4xl font-bold text-foreground">439</p>
            <p className="font-body text-sm text-muted-foreground mt-1">Reviews</p>
          </div>
          <div>
            <p className="font-display text-4xl font-bold text-foreground">★</p>
            <p className="font-body text-sm text-muted-foreground mt-1">Top Rated</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
