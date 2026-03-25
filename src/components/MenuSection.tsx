import sushiImg from "@/assets/menu-sushi.jpg";
import chickenImg from "@/assets/menu-chicken.jpg";
import coffeeImg from "@/assets/menu-coffee.jpg";
import dessertImg from "@/assets/menu-dessert.jpg";

const menuItems = [
  { name: "Fresh Sushi Platter", category: "Mains", image: sushiImg, description: "Premium salmon nigiri and maki rolls with wasabi" },
  { name: "Asian Sesame Chicken", category: "Mains", image: chickenImg, description: "Tender chicken glazed with sesame and fresh herbs" },
  { name: "Artisan Latte", category: "Beverages", image: coffeeImg, description: "Hand-crafted latte with signature latte art" },
  { name: "Cinnamon Ice Cream", category: "Desserts", image: dessertImg, description: "House-made ice cream with Ceylon cinnamon" },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-accent text-lg tracking-[0.2em] uppercase text-accent mb-4">
            Curated Selection
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-card-foreground">
            Menu Highlights
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems.map((item) => (
            <div key={item.name} className="group relative overflow-hidden bg-background">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={800}
                  height={800}
                />
              </div>
              <div className="p-6">
                <p className="font-accent text-sm tracking-[0.15em] uppercase text-accent mb-2">
                  {item.category}
                </p>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {item.name}
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://antventures.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-foreground/20 text-foreground font-body font-medium tracking-wider uppercase text-sm hover:bg-foreground/5 transition-colors"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
