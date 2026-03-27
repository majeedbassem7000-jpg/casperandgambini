import heroImage from "@/assets/hero-restaurant.jpg";
import { MapPin, Clock, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Casper & Gambini's elegant restaurant interior"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="hero-overlay absolute inset-0" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-accent text-lg md:text-xl tracking-[0.3em] uppercase gold-text mb-4 animate-fade-in">
          Est. Baghdad
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 animate-fade-in-up leading-tight">
          Casper &<br />Gambini's
        </h1>
        <p className="font-accent text-xl md:text-2xl text-primary-foreground/80 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Where Every Meal Becomes a Memory
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/70 text-sm animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Dream City Mall, Baghdad</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-primary-foreground/30" />
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Open until 11 PM</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-primary-foreground/30" />
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>0770 707 0711</span>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a href="/menu" className="px-8 py-3 bg-accent text-accent-foreground font-body font-medium tracking-wider uppercase text-sm hover:opacity-90 transition-opacity">
            View Menu
          </a>
          <a href="tel:07707070711" className="px-8 py-3 border border-primary-foreground/40 text-primary-foreground font-body font-medium tracking-wider uppercase text-sm hover:bg-primary-foreground/10 transition-colors">
            Reserve a Table
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-primary-foreground/40 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
