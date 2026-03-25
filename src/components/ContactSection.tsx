import { MapPin, Clock, Phone, Utensils } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-accent text-lg tracking-[0.2em] uppercase text-primary-foreground/70 mb-4">
          Visit Us
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-semibold mb-12">
          Find Us at Dream City
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="flex flex-col items-center gap-3">
            <MapPin className="w-6 h-6 text-accent" />
            <p className="font-body text-sm text-primary-foreground/80">
              Dream City Mall<br />Baghdad, Iraq
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Clock className="w-6 h-6 text-accent" />
            <p className="font-body text-sm text-primary-foreground/80">
              Open Daily<br />Until 11 PM
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Phone className="w-6 h-6 text-accent" />
            <p className="font-body text-sm text-primary-foreground/80">
              0770 707 0711
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Utensils className="w-6 h-6 text-accent" />
            <p className="font-body text-sm text-primary-foreground/80">
              Dine-in · Pickup<br />Delivery
            </p>
          </div>
        </div>

        <a
          href="https://talabat.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-accent text-accent-foreground font-body font-medium tracking-wider uppercase text-sm hover:opacity-90 transition-opacity"
        >
          Order on Talabat
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
