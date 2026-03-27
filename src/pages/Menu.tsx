import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

type MenuItem = {
  name: string;
  price: number;
  description?: string;
  tag?: string;
  pieces?: string;
  addOns?: { name: string; price: number }[];
};

type MenuCategory = {
  name: string;
  items: MenuItem[];
};

const menuData: MenuCategory[] = [
  {
    name: "Breakfast & Brunch",
    items: [
      { name: "Freshly Baked Croissant", price: 5.5, description: "Your choice of plain, chocolate, cheese or thyme." },
      { name: "Eggs Benedict", price: 8.5, description: "Poached eggs, spinach, Hollandaise sauce, and grilled loaf bread, served with side salad, sauteed cherry tomato and potato.", addOns: [{ name: "Add turkey", price: 4 }, { name: "Add salmon", price: 5 }] },
      { name: "Gambini's Omelette", price: 10, description: "Eggs or egg whites, potatoes, oven blushed tomato, served with sliced bread.", addOns: [{ name: "Add swiss cheese", price: 1 }, { name: "Add mozzarella cheese", price: 1 }, { name: "Add cheddar cheese", price: 1 }] },
      { name: "Toasts for All", price: 10, description: "Grilled loaf served with side salad, cherry tomatoes and ratte potato, avocado, boiled eggs, tomatoes, feta cheese." },
      { name: "Labneh Man'ousheh", price: 7.5, description: "C&G famous flat thyme bread, labneh, cucumbers, mint leaves, olives and olive oil." },
      { name: "Grilled Halloumi", price: 9, description: "Halloumi, rocket leaves, sundried tomatoes, basil, ciabatta bread, served with a side salad." },
      { name: "Lahm B Ajin", price: 8, description: "Meat mix, lime slice, pizza dough", tag: "NEW" },
      { name: "Halloumi Pesto Fusion", price: 13, description: "Cereal loaf, avocado mix, grilled halloumi pesto sauce micro greens fresh mint rocca oven blushed tomato.", tag: "NEW" },
      { name: "Royal Egg Avocado", price: 9, description: "Cereal loaf, avocado mix, poached eggs, feta cheese, chili butter, micro greens.", tag: "NEW" },
      { name: "White Fitness Omelette", price: 10, description: "Egg white omelette, quinoa, avocado, smoked turkey, oven blushed tomato, cereal loaf.", tag: "NEW" },
      { name: "Turkey Croissant Sandwich", price: 8, description: "Homemade baked thyme croissant, smoked turkey, fresh mint, olives, fresh tomato, swiss cheese.", tag: "NEW" },
      { name: "Yogurt & Berries", price: 10, description: "Greek yogurt, berries mix, honey banana, nuts, red fruit sauce.", tag: "NEW" },
    ],
  },
  {
    name: "Soups",
    items: [
      { name: "Home-Style Lentil Soup", price: 5, description: "Soup made with lentils and vegetable broth, served with lemon and garlic croutons.", tag: "V" },
      { name: "Carrot & Ginger Soup", price: 5, description: "Carrot soup with ginger, almonds, pumpkin seeds, fresh cream, with crispy croutons." },
      { name: "Mushrooms Soup", price: 6, description: "A medley of fresh Mushrooms & Shitaki Mushrooms and an aromatic bread slice.", tag: "NEW" },
    ],
  },
  {
    name: "Starters",
    items: [
      { name: "Vietnamese Rolls", price: 8, description: "Crisp veggies, avocado, and homemade Asian dip." },
      { name: "French Fries", price: 3.5, description: "Golden potato fries served with ketchup dip.", tag: "V GF" },
      { name: "Chicken Tenders", price: 8, description: "Crispy chicken tenders seasoned in panko crumbs, served golden with honey mustard dip and parmesan cheese." },
      { name: "Pepperoni Rolls", price: 6, description: "Melted cheese, pepperoni, and olives rolled in bread" },
      { name: "Crispy Calamari", price: 12, description: "Fried calamari, served with tartar sauce and lemon wedges", tag: "NEW" },
      { name: "Chipotli Hummus", price: 7, description: "Chipotle hummus and roasted chickpeas with a mix of spices", tag: "NEW" },
      { name: "Mozzarella Sticks", price: 7.5, description: "Golden crisp breaded mozzarella cheese served with creamy island sauce" },
      { name: "Spinach & Cheese Dip", price: 11.5, description: "Cheese mix with braised spinach served with our homemade toasted ciabatta crips." },
      { name: "Dynamite Shrimp", price: 13.5, description: "Tempura shrimp, crisp red cabbage, sesame seeds, and spicy sauce." },
      { name: "Truffle Potato", price: 8, description: "French fries, creamy truffle sauce, and parmesan cheese.", tag: "GF" },
      { name: "Nachos Cheese", price: 10, description: "Tortilla chips covered with melted cheese, jalapenos, served with sides of crushed guacamole, tomato salsa and sour cream.", tag: "GF" },
      { name: "Beef Sliders", price: 12, description: "Beef burger bun, caramelized onions, Swiss, special sauce, and wild rocca." },
      { name: "Corn Wedges", price: 5, description: "Oven baked corn, Mexican spices and parmesan cheese", tag: "GF" },
    ],
  },
  {
    name: "Salads",
    items: [
      { name: "Asian Sesame Chicken", price: 11.5, description: "Togarashi chicken, Asian vegetable salad, wonton crisps, peanuts, pickled ginger, and sesame Japanese dressing." },
      { name: "Santa Fe Chicken", price: 12.5, description: "Spicy roasted chicken breast, beans and corn on fresh leaves with mango chutney, guacamole, tomato salsa, mozzarella with citrus dressings and corn tortilla crisp." },
      { name: "Quinoa", price: 11.5, description: "Quinoa, mixed greens, chicken, dry cranberries, carrots, shredded cabbage, green apple, almonds and sunflower seeds and citrus dressing." },
      { name: "Harvest", price: 10, description: "Rocket leaves, baby spinach and mixed greens, feta cheese, strawberries, raw pumpkin seeds, candied walnuts, and balsamic vinegar dressing.", tag: "GF" },
      { name: "Halloumi & Peach", price: 12, description: "Grilled halloumi, mixed greens, remove and roasted nuts, add caramileized oat, oven blushed tomato, with a melodic grilled peach, in a lemon-pesto dressing.", tag: "NEW" },
      { name: "Shrimp Burghul Salad", price: 15, description: "Shrimp, with Cherry tomatoes, avocado, Bulgur, fresh cucumber, fresh peach, and mint served with honey vinaigrette", tag: "NEW" },
      { name: "Strawberry Rocket Salad", price: 16, description: "A vibrant composition of lemon-lime sorbet, baby rocca and strawberry delicate crispy vermicelli, and a velvety parmesan cream.", tag: "NEW" },
      { name: "Beetroot Salad", price: 11.5, description: "Mix of beetroot, fresh oranges, broccoli finished with pistachio and creamy parmesan sauce and honey vinaigrette.", tag: "NEW" },
      { name: "Mediterranean", price: 11, description: "Wild rocca, baby spinach, almond, parmesan cheese, cherry tomato, fresh herbs, orzo, white cheese, black olives, roasted cauliflower, and citrus dressing." },
      { name: "Chicken Caesar Salad", price: 10.5, description: "Lettuce leaves with Grana Padano parmesan and C&G Caesar dressing served with crunchy garlic flavored croutons and chicken." },
      { name: "Greek Salad", price: 9.5, description: "Lettuce mixture, rocca, cucumber, cherry tomato, black olives, feta cheese, and oregano. Served with Greek dressing." },
      { name: "Shrimps Caesar Salad", price: 13.5, description: "Lettuce leaves with Grana Padano parmesan and C&G Caesar dressing served with crunchy garlic flavored croutons and shrimps." },
    ],
  },
  {
    name: "Sandwiches & Pizzas",
    items: [
      { name: "Boneless Chicken Wrap", price: 12, description: "Crispy chicken strips, B.B.Q sauce, cheddar cheese sauce, mayonnaise, potato crisps, and lettuce, served with French fries and honey mustard sauce." },
      { name: "Chicken Quesadillas Sandwich", price: 13, description: "Grilled chicken, cheese mix, pepper, mushrooms, tortilla bread, sour cream, guacamole, and french fries." },
      { name: "Chicken & Avocado Sandwich", price: 13, description: "Grilled chicken, avocado, spinach, tomatoes, basil leaves, almonds, tarragon mayo and mustard on ciabatta." },
      { name: "C&G Club Sandwich", price: 14, description: "Chicken breast, smoked bacon, eggs, smoked turkey, Swiss cheese, lettuce, tomatoes, pickles, and Caeser mayonnaise served with french fries." },
      { name: "Philly Cheese Steak Sandwich", price: 16.5, description: "Prime beef, mushroom, bell pepper, tomatoes, onions, cheese, white baguette, and french fries." },
      { name: "Steak Sandwich", price: 16, description: "Tenderloin steak, beetroot pickles, caramelized onion, balsamic glazed baby rocket leaves, and a grainy mustard mayo served on a cereal loaf bread.", tag: "NEW" },
      { name: "Halloumi Pesto Pizza", price: 14, description: "Pesto sauce, mozzarella cheese, parmesan cheese, sundried tomato", tag: "NEW" },
      { name: "Tartufo Pizza", price: 14, description: "Truffle paste, mozzarella, parmesan, fresh thyme, cream cheese and basil." },
      { name: "Classic Pepperoni Pizza", price: 14, description: "Beef pepperoni, mozzarella, fresh basil, oregano, with C&G authentic pizza sauce." },
      { name: "Margherita Pizza", price: 11.5, description: "Mozzarella, parmesan, fresh basil, and authentic pizza sauce." },
      { name: "Italian Classic Pizza", price: 14, description: "Smoked turkey, mozzarella cheese, fresh mushrooms, fresh basil, olives and oregano." },
      { name: "Smokey Pizza", price: 13, description: "Smoked BBQ sauce, mozzarella cheese, crispy chicken, and oregano." },
    ],
  },
  {
    name: "Burgers",
    items: [
      { name: "Chicken Mushroom Burger", price: 13, description: "Burger bun, Grilled chicken breast, melted cheese, sautéed mushrooms, lettuce, tomatoes, mayo, and french fries.", addOns: [{ name: "Add eggs", price: 1 }, { name: "Add mozzarella", price: 1 }, { name: "Add bacon", price: 2 }] },
      { name: "Mexican Burger", price: 13.5, description: "Burger bun, mexican sauce, rocca, jalapenos, tomato, beef patty, onion pepper, tortilla chips and cheddar cheese. Fries and ketchup aside." },
      { name: "Good Melt Burger", price: 14.5, description: "Burger bun, beef patty, mayonise, rocca, pickless, breaded mozzarella cheese, and cheddar cheese. Fries and ketchup aside" },
      { name: "Crispy Chicken Burger", price: 11, description: "Burger bun, aioli sauce, rocca, pickless, crispy chicken and coleslaw. Fries and ketchup aside.", addOns: [{ name: "Add eggs", price: 1 }, { name: "Add mushrooms", price: 1.5 }] },
      { name: "House Burger", price: 11.5, description: "Prime beef, onions, mesclun, tomatoes, melted cheese, special smoked sauce, and french fries." },
      { name: "Swiss Mushrooms Burger", price: 16, description: "Burger patty, mushroom sauce, baby rocca, swiss cheese and french fries.", tag: "NEW" },
      { name: "Black Angus Burger", price: 20, description: "Black angus brisket beef patty, horseradish mayo, wild rocket, blue cheese sauce and french fries.", tag: "NEW" },
      { name: "Chicken Teriyaki Burger", price: 15, description: "Teriyaki chicken breast with ginger pickles, crispy salad, sesame Japanese spread, and french fries.", tag: "NEW" },
      { name: "Pulled Beef Burger", price: 13.5, description: "Slow-cooked chuckroll beef, grainy mayo sauce, wild rocket, in a soft burger bun.", tag: "NEW" },
    ],
  },
  {
    name: "Mains & Pastas",
    items: [
      { name: "Steak & Fries", price: 25, description: "Herb flavored prime grilled steak topped with sauteed mushrooms and our homemade signature sauce." },
      { name: "Filet Mignon", price: 26, description: "Grilled prime beef tenderloin, served with mashed potato, seasonal vegetables, and white mushroom creamy sauce." },
      { name: "C&G Asian Chicken", price: 11, description: "Caramelized chicken and sushi rice." },
      { name: "Cordon Bleu", price: 16, description: "Crispy chicken, turkey, mozzarella, mashed potatoes, vegetables, and creamy sauce." },
      { name: "Lemony Chicken", price: 17, description: "Chicken breast, roast garlic, mashed potatoes, seasonal vegetables and lemon butter sauce" },
      { name: "Ginger Salmon", price: 30, description: "Grilled salmon, Basmati rice, sweet peppers, tomato-ginger, broccoli, and poke sauce" },
      { name: "Fish and Chips", price: 15, description: "Crispy white fish served with french fries and tartar dip" },
      { name: "Grilled White Fish", price: 35, description: "Grilled white fish with herbs. Served with seasonal vegetables and fresh potato cubes.", tag: "NEW" },
      { name: "Smoked Short Ribs", price: 60, description: "Premium black angus Short ribs, served with gravy sauce, comfit shallots, baby carrots, pistachio, crispy onion, and beef's infused with fresh thyme.", tag: "NEW" },
      { name: "Chicken Roulade", price: 26, description: "Premium black angus Short ribs, served with gravy sauce, comfit shallots, baby carrots, pistachio, crispy onion, and beef's infused with fresh thyme.", tag: "NEW" },
      { name: "Spaghetti Bolognese", price: 15, description: "Homemade spaghetti with C&G' authentic Bolognese sauce, Grana Padano parmesan" },
      { name: "Shrimp Pesto Pasta", price: 18, description: "Fusilli pasta, basil pesto, shrimps, fresh cream, Parmesan cheese, and pine nuts" },
      { name: "Chicken Pesto Pasta", price: 15, description: "Fusilli pasta, basil pesto, chicken, fresh cream, Parmesan cheese, and pine nuts" },
      { name: "Fettuccini Alfredo Pasta", price: 16, description: "A rich blend of fettuccini pasta, breaded chicken, fresh mushroom, onions, fresh basil and sprinkled with Parmesan cheese." },
      { name: "Penne Arabiata", price: 10, description: "Penne, Tomato Sauce, Spices.", tag: "NEW", addOns: [{ name: "Add chicken", price: 4 }, { name: "Add shrimps", price: 7 }] },
      { name: "Shrimp Linguine", price: 15, description: "Linguine cooked in bisque, served with grilled shrimp, fresh chili, chives.", tag: "NEW" },
      { name: "Mushrooms Risotto", price: 15, description: "Creamy Arborio rice with wild mushrooms, garlic, and shallots, finished with white wine and parmesan for a rich comforting dish.", tag: "NEW" },
      { name: "Burrata Truffle", price: 25, description: "An exquisite dish featuring burrata Cheese, truffle, Portobello and Shimeji mushrooms.", tag: "NEW" },
    ],
  },
  {
    name: "Sushi & Rolls",
    items: [
      { name: "Alaskan", price: 15, description: "Crab salmon mix, and crispy panko.", pieces: "6 pcs." },
      { name: "Crispy Crazy", price: 15, description: "Crab, carrot, crispy panko, and mayo.", pieces: "6 pcs." },
      { name: "Flying Salmon", price: 17, description: "Salmon, shredded crab, and carrot.", pieces: "6 pcs." },
      { name: "Philadelphia", price: 18, description: "Salmon, avocado, and cream cheese.", pieces: "6 pcs." },
      { name: "C&G Roll", price: 17, description: "Shrimp, crispy panko, wasabi flakes, and mayo-teriyaki sauce.", pieces: "6 pcs." },
      { name: "Crab Roll", price: 19, description: "Shrimp, avocado, crab wrap.", pieces: "6 pcs." },
      { name: "Sesame California Roll", price: 11, description: "Sesame mix, fresh avocado, fresh cucumbers, crab sticks.", pieces: "6 pcs.", tag: "NEW" },
      { name: "Shrimp Tempura Roll", price: 18, description: "Shrimp tempura, fresh avocado, spice creamy sauce, topped with shrimp mix, tobiko, unagi sauce.", pieces: "6 pcs.", tag: "NEW" },
      { name: "Crispy Salmon", price: 18, description: "Creamy salmon mix, unagi sauce, micro greens, sesame seeds.", pieces: "5 pcs.", tag: "NEW" },
      { name: "Mango Roll", price: 20, description: "Shrimp, mango wrap, and exotic glaze.", pieces: "6 pcs." },
      { name: "Crispy Shrimp", price: 10, description: "Shrimp and crispy panko.", pieces: "3 pcs." },
      { name: "Crispy Salmon Roll", price: 18, description: "Salmon, crispy panko, and spices.", pieces: "6 pcs." },
      { name: "Geisha", price: 15, description: "Salmon, crab mix, and avocado wrap.", pieces: "6 pcs." },
      { name: "Crispy Dragon Roll", price: 20, description: "Crispy wrap, shrimp tempura, avocado, fresh salmon, & teriyaki sauce", pieces: "8 pcs." },
      { name: "Green Dragon Roll", price: 21, description: "Fried shrimp tempura, avocado, fresh salmon, teriyaki, & sweet chilli mayo", pieces: "6 pcs." },
      { name: "Truffle Roll", price: 15.5, description: "Shrimp tempuara, truffle sauce, fresh salmon, micro greens.", pieces: "6 pcs.", tag: "NEW" },
      { name: "Salmon Volcano Roll", price: 17, description: "Fresh salmon, fresh avocado, volcano sauce, unagi sauce, tobiko.", pieces: "6 pcs.", tag: "NEW" },
      { name: "Crispy California Salad", price: 16, description: "Crab, carrot, cucumber, cabbage, avocado, and crispy panko." },
      { name: "Salmon Poke Salad", price: 17, description: "Fresh salmon, sushi rice, avocado, sesame, nori leaves, and soy sauce." },
      { name: "Crispy Salmon Salad", price: 24, description: "Fresh salmon, crab shreds, and crispy panko." },
    ],
  },
  {
    name: "Kids",
    items: [
      { name: "Mac & Cheese", price: 6, description: "Piccolini pasta, cheese, and your choice of tomato or white sauce." },
      { name: "Kids Chicken Tenders", price: 7, description: "Chicken tenders, ketchup, and French fries." },
      { name: "Mini Chicken Burger", price: 7, description: "Breaded chicken burger, burger bun, cheese, rosemary sauce, and French fries." },
      { name: "Mickey & Minnie Pizza", price: 8, description: "Mickey and minnie mouse shaped pizza, mozzarella, tomato sauce, pepper, and olives." },
      { name: "Mini Beef Burger", price: 9.5, description: "Beef burger bun, cheese, rosemary sauce, and French fries." },
    ],
  },
  {
    name: "Desserts",
    items: [
      { name: "Apple Crumble", price: 9.5, description: "Baked apples, cinnamon, crumbled walnuts, vanilla ice cream, and salted caramel." },
      { name: "Pain Perdu", price: 9.5, description: "French brioche soaked with crème Anglaise, covered with caramel sauce, and served with vanilla ice cream." },
      { name: "Frozen Yogurt Ice Cream", price: 9, description: "Fat-free yogurt ice cream, granola, and fresh fruits." },
      { name: "The Trio Waffle", price: 10, description: "White, milk and dark chocolate with chocolate cream, chocolate zest, almond flakes and feillentine." },
      { name: "Fruity Red Velvet", price: 10, description: "Red velvet cake layered with mascarpone cheese, served with red fruits." },
      { name: "Chocolate Fondant", price: 11, description: "Molten chocolate, and vanilla ice cream." },
      { name: "Pancakes - Nutella", price: 10, description: "Served with banana, hazelnut and cream." },
      { name: "Pancakes - Original", price: 7.5, description: "Served with seasonal fruits and your choice of maple syrup or honey." },
      { name: "Pancakes - Lotus", price: 7.5, description: "Served with crunchy lotus spread and crumbs, seasonal fruits and cream." },
      { name: "Bernadette's Cake", price: 10, description: "Chocolate cake, and vanilla ice cream." },
      { name: "Homemade Ice Cream", price: 6, description: "3 scoops of homemade ice cream and all natural sorbets." },
      { name: "The Original Waffle", price: 8, description: "Ice cream vanilla, banana, mango and strawberry with granola and honey." },
    ],
  },
  {
    name: "Coffee & Beyond",
    items: [
      { name: "Espresso, Ristretto or Lungo", price: 4.5, description: "Aromatic straight shot." },
      { name: "Doppio", price: 6.5, description: "Double Espresso shot." },
      { name: "Café Macchiato", price: 5, description: "Espresso shot stained with foam." },
      { name: "Café Mocha", price: 6.5, description: "Espresso, milk, and chocolate powder." },
      { name: "Hot Chocolate", price: 6, description: "Low-fat chocolate, skimmed milk." },
      { name: "Caspresso Lebanese Coffee", price: 4.5, description: "As traditional as can be!" },
      { name: "Cappuccino", price: 6, description: "Espresso shot and creamy milk with foam" },
      { name: "Café Latte", price: 6, description: "Espresso shot, steamed, foam." },
      { name: "Cookies and Cream", price: 9, description: "Cookie powder, milk, and whipped cream" },
      { name: "Café Cortado", price: 5, description: "Espresso shot, frothed milk." },
      { name: "Espresso Freeze", price: 6.5, description: "Vanilla ice cream drowned in a shot of hot espresso with hazelnut syrup, topped with grated hazelnut" },
      { name: "Nutella Mocafe", price: 10, description: "Nutella, Mocafe powder, milk, and whipped cream" },
      { name: "Oreo Milkshake", price: 10, description: "Oreo, milk, and whipped cream" },
    ],
  },
  {
    name: "Tea & More",
    items: [
      { name: "Homemade Iced Tea", price: 10, description: "Your choice of lemon or peach." },
      { name: "Pomegranate Mojito", price: 10, description: "Fresh pomegranate, mojito mix, lemon wheel, lemon juice, fresh mint, and soda water." },
      { name: "Citronnade Ginger Detox", price: 4.5, description: "Fresh lemon juice, fresh ginger, honey, and lemon slice." },
      { name: "Mint Mojito", price: 10, description: "Mojito mix, fresh mint, lemon wheel, lemon juice and soda water." },
      { name: "Revolution Tea", price: 3.5, description: "Premium infused tea." },
      { name: "Iraqi Tea Pot (2 Persons)", price: 3.5 },
    ],
  },
  {
    name: "Boba Drinks & Smoothies",
    items: [
      { name: "Boba Milk", price: 8, description: "Milk tea and Boba pearls." },
      { name: "Peach Lemonade", price: 8.5, description: "Peach Puree and fresh lemonade blended with ice." },
      { name: "Strawberry Passion Banana", price: 8.5, description: "Strawberry Puree, Passion fruit Puree and Banana." },
      { name: "Mango Passion Banana", price: 8.5, description: "Mango Puree, Passion fruit Puree and Banana." },
    ],
  },
  {
    name: "Shisha",
    items: [
      { name: "Casper Blend", price: 15 },
      { name: "Gambinis Blend", price: 15 },
      { name: "Cake Puff", price: 13 },
      { name: "Castro", price: 13 },
      { name: "Homdayat", price: 13 },
      { name: "Ice Cream", price: 14 },
      { name: "Lemon Mint", price: 13 },
      { name: "Gum Mint", price: 14 },
      { name: "Fruity", price: 13 },
      { name: "Grape Mint", price: 13 },
      { name: "Max Blue", price: 13 },
      { name: "Tefehteyn", price: 13 },
    ],
  },
];

const categories = menuData.map((c) => c.name);

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const activeMenu = menuData.find((c) => c.name === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-6 px-6 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="font-display text-2xl font-semibold">Our Menu</h1>
          <span className="ml-auto font-body text-xs text-primary-foreground/60 uppercase tracking-wider">
            All prices include VAT
          </span>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-[72px] z-40 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto overflow-x-auto scrollbar-hide">
          <div className="flex gap-1 px-6 py-3 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-sm font-body text-sm tracking-wide whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-8 lowercase">
          {activeCategory}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {activeMenu?.items.map((item) => (
            <div key={item.name} className="border-b border-border pb-6">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-body font-semibold text-foreground uppercase text-sm tracking-wide">
                      {item.name}
                    </h3>
                    {item.pieces && (
                      <span className="font-accent text-xs text-accent">{item.pieces}</span>
                    )}
                    {item.tag && (
                      <span className="font-body text-[10px] font-medium tracking-wider uppercase text-accent px-1.5 py-0.5 border border-accent/30 rounded-sm">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  {item.description && (
                    <p className="font-body text-sm text-muted-foreground mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                  {item.addOns && (
                    <div className="mt-2 space-y-0.5">
                      {item.addOns.map((a) => (
                        <p key={a.name} className="font-body text-xs text-muted-foreground">
                          {a.name}{" "}
                          <span className="text-foreground/70">{a.price.toFixed(3)}</span>
                        </p>
                      ))}
                    </div>
                  )}
                </div>
                <span className="font-body text-sm font-medium text-foreground whitespace-nowrap">
                  {item.price.toFixed(3)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer info */}
      <div className="bg-card px-6 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-body text-sm font-semibold text-accent tracking-wider uppercase mb-2">
            45 Operations, 10 Countries, 1 Brand
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Our menu items may contain traces of allergens. Please ask your waiter for more details regarding any item.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
