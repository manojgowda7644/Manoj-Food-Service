export type MenuCategory =
  | 'All'
  | 'Starters'
  | 'South Indian Food'
  | 'North Indian Food'
  | 'Chinese Food'
  | 'Fast Food'
  | 'Desserts'
  | 'Beverages';

export interface MenuItem {
  id: string;
  name: string;
  category: Exclude<MenuCategory, 'All'>;
  description: string;
  price: string;
  dietary: 'Pure Veg' | 'Signature' | 'Chef Special';
  spiceNote: string;
  image: string;
}

export interface SpecialDish {
  id: string;
  name: string;
  cuisine: string;
  description: string;
  price: string;
  servingNote: string;
  image: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  capacityNote: string;
  description: string;
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  caption: string;
  image: string;
}

export interface WhyChooseItem {
  number: string;
  title: string;
  summary: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  context: string;
  rating: number;
  quote: string;
}

export const IMAGES = {
  heroFeast: '/src/assets/images/hero_feast_spread_1795504415476.jpg',
  aboutChef: '/src/assets/images/about_chef_kitchen_1795504415967.jpg',
  starters: '/src/assets/images/dish_starters_tandoori_1795504415818.jpg',
  southIndian: '/src/assets/images/dish_south_indian_1795504416685.jpg',
  northIndian: '/src/assets/images/dish_north_indian_1795504417246.jpg',
  chinese: '/src/assets/images/dish_chinese_hakka_1795504417715.jpg',
  fastFood: '/src/assets/images/dish_fast_food_1795504418341.jpg',
  desserts: '/src/assets/images/dish_desserts_gulab_1795504418681.jpg',
  beverages: '/src/assets/images/dish_beverages_lassi_1795504419798.jpg',
  catering: '/src/assets/images/catering_buffet_setup_1795504419762.jpg',
} as const;

export const MENU_CATEGORIES: MenuCategory[] = [
  'All',
  'Starters',
  'South Indian Food',
  'North Indian Food',
  'Chinese Food',
  'Fast Food',
  'Desserts',
  'Beverages',
];

export const SPECIAL_DISHES: SpecialDish[] = [
  {
    id: 'sp-1',
    name: 'Royal Saffron Dum Biryani',
    cuisine: 'North Indian Heritage',
    description:
      'Long-grain aged basmati steamed in a sealed copper handi with saffron milk, caramelized onions, fresh mint, and hand-ground garam masala.',
    price: '₹380',
    servingNote: 'Served with burhani raita',
    image: IMAGES.northIndian,
  },
  {
    id: 'sp-2',
    name: 'Charcoal Paneer Tikka Platter',
    cuisine: 'Tandoor Starters',
    description:
      'Cottage cheese marinated overnight in hung curd, Kashmiri chili, and roasted cumin, skewered over glowing charcoal with crisp bell peppers.',
    price: '₹310',
    servingNote: 'Served with mint-coriander chutney',
    image: IMAGES.starters,
  },
  {
    id: 'sp-3',
    name: 'Ghee Roast Masala Dosa',
    cuisine: 'South Indian Classic',
    description:
      'Fermented golden rice-lentil crepe brushed with pure cow ghee, filled with tempered turmeric potato masala and served on banana leaf.',
    price: '₹210',
    servingNote: 'With drumstick sambar & trio chutneys',
    image: IMAGES.southIndian,
  },
  {
    id: 'sp-4',
    name: 'Saffron Pistachio Rasmalai & Gulab Jamun',
    cuisine: 'Artisanal Desserts',
    description:
      'Warm cardamom-scented khoya dumplings alongside chilled saffron milk medallions finished with crushed Iranian pistachios and rose petals.',
    price: '₹190',
    servingNote: 'Prepared fresh every morning',
    image: IMAGES.desserts,
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // Starters
  {
    id: 'st-1',
    name: 'Tandoori Paneer Tikka',
    category: 'Starters',
    description:
      'Char-grilled cottage cheese cubes glazed with smoked paprika yogurt marinade, bell peppers, and pickled shallots.',
    price: '₹290',
    dietary: 'Chef Special',
    spiceNote: 'Medium Spice',
    image: IMAGES.starters,
  },
  {
    id: 'st-2',
    name: 'Crispy Onion & Herb Pakora Basket',
    category: 'Starters',
    description:
      'Golden gram-flour fritters laced with roasted coriander seeds, curry leaves, and tangy tamarind-mint dips.',
    price: '₹180',
    dietary: 'Pure Veg',
    spiceNote: 'Mild Spice',
    image: IMAGES.starters,
  },
  {
    id: 'st-3',
    name: 'Hara Bhara Kebab',
    category: 'Starters',
    description:
      'Pan-seared spinach, green pea, and roasted cashew medallions lightly spiced with chaat masala and ginger.',
    price: '₹240',
    dietary: 'Pure Veg',
    spiceNote: 'Mild Spice',
    image: IMAGES.heroFeast,
  },
  {
    id: 'st-4',
    name: 'Smoked Seekh Kebab Platter',
    category: 'Starters',
    description:
      'Flame-roasted minced skewers infused with crushed black pepper, fresh herbs, and caramelized lemon.',
    price: '₹340',
    dietary: 'Signature',
    spiceNote: 'Rich Spice',
    image: IMAGES.heroFeast,
  },

  // South Indian Food
  {
    id: 'si-1',
    name: 'Crisp Ghee Masala Dosa',
    category: 'South Indian Food',
    description:
      'Paper-crisp fermented crepe folded over spiced potato-onion tempering, paired with aromatic sambar and fresh coconut chutney.',
    price: '₹195',
    dietary: 'Chef Special',
    spiceNote: 'Mild Spice',
    image: IMAGES.southIndian,
  },
  {
    id: 'si-2',
    name: 'Mysore Butter Masala Dosa',
    category: 'South Indian Food',
    description:
      'Golden dosa layered with fiery red garlic-lentil chutney, roasted cashews, and farm butter.',
    price: '₹220',
    dietary: 'Pure Veg',
    spiceNote: 'Medium-Hot',
    image: IMAGES.southIndian,
  },
  {
    id: 'si-3',
    name: 'Steamed Mallige Idli & Medu Vada',
    category: 'South Indian Food',
    description:
      'Fluffy steamed rice cakes paired with crisp urad dal lentil doughnuts, served hot with tiffin sambar.',
    price: '₹160',
    dietary: 'Pure Veg',
    spiceNote: 'Mild Spice',
    image: IMAGES.southIndian,
  },
  {
    id: 'si-4',
    name: 'Vegetable Onion Uttapam',
    category: 'South Indian Food',
    description:
      'Thick stone-griddled savory pancake studded with sweet red onions, tomatoes, green chilies, and fresh cilantro.',
    price: '₹185',
    dietary: 'Pure Veg',
    spiceNote: 'Mild Spice',
    image: IMAGES.southIndian,
  },

  // North Indian Food
  {
    id: 'ni-1',
    name: 'Paneer Butter Masala & Garlic Naan',
    category: 'North Indian Food',
    description:
      'Velvety vine-ripened tomato and cashew gravy simmered with fenugreek leaves, accompanied by blistered tandoori garlic naan.',
    price: '₹330',
    dietary: 'Chef Special',
    spiceNote: 'Rich & Mild',
    image: IMAGES.northIndian,
  },
  {
    id: 'ni-2',
    name: 'Royal Handi Dum Biryani',
    category: 'North Indian Food',
    description:
      'Fragrant saffron basmati layered with caramelized shallots, mint, whole spices, and slow-cooked aromatic gravy.',
    price: '₹380',
    dietary: 'Signature',
    spiceNote: 'Aromatic Medium',
    image: IMAGES.northIndian,
  },
  {
    id: 'ni-3',
    name: 'Dal Bukhara Tadka',
    category: 'North Indian Food',
    description:
      'Slow-simmered black lentils cooked overnight over charcoal with tomato puree, white butter, and roasted cumin.',
    price: '₹275',
    dietary: 'Pure Veg',
    spiceNote: 'Comforting Mild',
    image: IMAGES.heroFeast,
  },
  {
    id: 'ni-4',
    name: 'Kadai Subz & Lachha Paratha',
    category: 'North Indian Food',
    description:
      'Seasonal garden vegetables tossed in crushed coriander-peppercorn masala with flaky multi-layered wheat parathas.',
    price: '₹285',
    dietary: 'Pure Veg',
    spiceNote: 'Medium Spice',
    image: IMAGES.northIndian,
  },

  // Chinese Food
  {
    id: 'ch-1',
    name: 'Wok-Tossed Hakka Noodles',
    category: 'Chinese Food',
    description:
      'High-flame stir-fried noodles tossed with julienned bell peppers, spring onions, roasted garlic, and dark soy.',
    price: '₹230',
    dietary: 'Chef Special',
    spiceNote: 'Savory Mild',
    image: IMAGES.chinese,
  },
  {
    id: 'ch-2',
    name: 'Crispy Veg Manchurian',
    category: 'Chinese Food',
    description:
      'Crisp vegetable dumplings glazed in tangy ginger-garlic soy reduction and finished with toasted sesame.',
    price: '₹245',
    dietary: 'Signature',
    spiceNote: 'Medium Spice',
    image: IMAGES.chinese,
  },
  {
    id: 'ch-3',
    name: 'Chilli Paneer Dry',
    category: 'Chinese Food',
    description:
      'Wok-seared cottage cheese tossed with green chilies, scallions, crushed black pepper, and chili-garlic glaze.',
    price: '₹275',
    dietary: 'Pure Veg',
    spiceNote: 'Fiery Spice',
    image: IMAGES.chinese,
  },
  {
    id: 'ch-4',
    name: 'Schezwan Burnt Garlic Fried Rice',
    category: 'Chinese Food',
    description:
      'Smoky wok-tossed rice infused with crispy golden garlic, house-made Schezwan chili paste, and crunchy greens.',
    price: '₹240',
    dietary: 'Pure Veg',
    spiceNote: 'Hot & Smoky',
    image: IMAGES.chinese,
  },

  // Fast Food
  {
    id: 'ff-1',
    name: 'Crispy Herb & Cheddar Burger',
    category: 'Fast Food',
    description:
      'Brioche bun layered with crunchy spiced herb patty, aged cheddar, pickled onions, and smoky chipotle mayo.',
    price: '₹210',
    dietary: 'Chef Special',
    spiceNote: 'Savory Crunch',
    image: IMAGES.fastFood,
  },
  {
    id: 'ff-2',
    name: 'Triple-Decker Café Club Sandwich',
    category: 'Fast Food',
    description:
      'Toasted sourdough stacked with herbed cottage cheese, grilled vegetables, melted cheese, and peri-peri slaw.',
    price: '₹225',
    dietary: 'Signature',
    spiceNote: 'Mild & Zesty',
    image: IMAGES.fastFood,
  },
  {
    id: 'ff-3',
    name: 'Peri-Peri Masala Fries',
    category: 'Fast Food',
    description:
      'Hand-cut double-fried potatoes dusted with house spice blend and served with roasted garlic aioli.',
    price: '₹150',
    dietary: 'Pure Veg',
    spiceNote: 'Zesty Medium',
    image: IMAGES.fastFood,
  },
  {
    id: 'ff-4',
    name: 'Wood-Fired Paneer Tikka Wrap',
    category: 'Fast Food',
    description:
      'Soft roomali flatbread rolled with smoky tandoori paneer, crunchy slaw, and mint yogurt drizzle.',
    price: '₹195',
    dietary: 'Pure Veg',
    spiceNote: 'Medium Spice',
    image: IMAGES.fastFood,
  },

  // Desserts
  {
    id: 'ds-1',
    name: 'Warm Saffron Gulab Jamun',
    category: 'Desserts',
    description:
      'Melt-in-mouth golden milk-solid dumplings steeped in warm cardamom, saffron, and rosewater syrup.',
    price: '₹140',
    dietary: 'Chef Special',
    spiceNote: 'Sweet & Warm',
    image: IMAGES.desserts,
  },
  {
    id: 'ds-2',
    name: 'Royal Pistachio Rasmalai',
    category: 'Desserts',
    description:
      'Delicate poached paneer discs soaked in chilled saffron-infused reduced milk and topped with pistachios.',
    price: '₹175',
    dietary: 'Signature',
    spiceNote: 'Chilled Sweet',
    image: IMAGES.desserts,
  },
  {
    id: 'ds-3',
    name: 'Moong Dal Halwa',
    category: 'Desserts',
    description:
      'Slow-roasted yellow lentil pudding caramelized in pure ghee with toasted almonds and green cardamom.',
    price: '₹185',
    dietary: 'Pure Veg',
    spiceNote: 'Rich Traditional',
    image: IMAGES.desserts,
  },
  {
    id: 'ds-4',
    name: 'Matka Kesar Kulfi',
    category: 'Desserts',
    description:
      'Traditional slow-churned clay-pot ice cream flavored with Kashmiri saffron strands and roasted nuts.',
    price: '₹155',
    dietary: 'Pure Veg',
    spiceNote: 'Chilled Creamy',
    image: IMAGES.desserts,
  },

  // Beverages
  {
    id: 'bv-1',
    name: 'Alphonso Mango Saffron Lassi',
    category: 'Beverages',
    description:
      'Thick hand-churned probiotic yogurt blended with ripe Alphonso mango pulp, saffron, and pistachio crumble.',
    price: '₹160',
    dietary: 'Chef Special',
    spiceNote: 'Chilled Refreshing',
    image: IMAGES.beverages,
  },
  {
    id: 'bv-2',
    name: 'Kulhad Adrak Masala Chai',
    category: 'Beverages',
    description:
      'Assam CTC tea simmered with crushed ginger, green cardamom, cloves, and fresh milk, served in earthen clay cups.',
    price: '₹80',
    dietary: 'Signature',
    spiceNote: 'Hot Spiced',
    image: IMAGES.beverages,
  },
  {
    id: 'bv-3',
    name: 'Fresh Mint Nimbu Shikanji',
    category: 'Beverages',
    description:
      'Zesty chilled lime cooler spiced with roasted cumin, black salt, and bruised garden mint leaves.',
    price: '₹110',
    dietary: 'Pure Veg',
    spiceNote: 'Chilled Tangy',
    image: IMAGES.beverages,
  },
  {
    id: 'bv-4',
    name: 'Filter Kaapi & Badam Milk',
    category: 'Beverages',
    description:
      'Traditional South Indian brass-davara decoction coffee alongside warm saffron-almond milk.',
    price: '₹125',
    dietary: 'Pure Veg',
    spiceNote: 'Aromatic Classic',
    image: IMAGES.beverages,
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    number: '01',
    title: 'Restaurant Food Service',
    capacityNote: 'Daily Dine-In · 11:00 AM – 11:00 PM',
    description:
      'Warm table hospitality in an inviting modern dining room serving freshly prepared multi-cuisine breakfast, lunch, and dinner.',
    highlights: ['Live tandoor & dosa counters', 'Family-friendly seating', 'Private dining alcove'],
  },
  {
    id: 'srv-2',
    number: '02',
    title: 'Catering Services',
    capacityNote: '50 to 2,500+ Guests',
    description:
      'End-to-end outdoor and indoor catering featuring customized multi-cuisine menus, uniformed service staff, and pristine buffet presentation.',
    highlights: ['Custom tasting sessions', 'Hygienic mobile kitchens', 'Complete crockery & chafers'],
  },
  {
    id: 'srv-3',
    number: '03',
    title: 'Birthday Party Food Service',
    capacityNote: '25 to 300 Guests',
    description:
      'Crowd-pleasing celebration menus combining live chaat, fast food favorites, Indo-Chinese woks, and custom dessert spreads.',
    highlights: ['Kid-friendly & adult menus', 'Live pasta & burger bars', 'Zero-hassle setup'],
  },
  {
    id: 'srv-4',
    number: '04',
    title: 'Wedding Catering',
    capacityNote: '200 to 3,000+ Guests',
    description:
      'Grand royal wedding banquets spanning Sangeet, Mehendi, Haldi, and Reception with regional specialties and dramatic live food stations.',
    highlights: ['Regional royal thalis', 'Dedicated banquet captain', 'Artisanal mithai & dessert bars'],
  },
  {
    id: 'srv-5',
    number: '05',
    title: 'Corporate Events',
    capacityNote: 'Conferences · Launches · Executive Lunches',
    description:
      'Punctual, polished culinary service tailored for boardrooms, annual summits, product showcases, and office celebrations.',
    highlights: ['Punctual setup guarantee', 'Executive boxed & buffet options', 'All-day tea & snack breaks'],
  },
  {
    id: 'srv-6',
    number: '06',
    title: 'Family Functions',
    capacityNote: 'Anniversaries · Poojas · Housewarmings',
    description:
      'Thoughtfully curated pure vegetarian and traditional homestyle feasts crafted for intimate milestones and cherished family gatherings.',
    highlights: ['Traditional pure-veg kitchens', 'Warm homestyle recipes', 'Flexible portion planning'],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Grand Evening Feast',
    category: 'Signature Dining',
    caption: 'Saffron biryani, tandoor platters, and warm butter naan served fresh from the kitchen.',
    image: IMAGES.heroFeast,
  },
  {
    id: 'gal-2',
    title: 'Royal Wedding Buffet Setup',
    category: 'Wedding & Event Catering',
    caption: 'Gleaming hammered brass chafing stations styled for 800-guest reception dinners.',
    image: IMAGES.catering,
  },
  {
    id: 'gal-3',
    title: 'Chef-Led Culinary Craft',
    category: 'Inside Our Kitchen',
    caption: 'Every plate finished with precision, fresh microgreens, and house-roasted spices.',
    image: IMAGES.aboutChef,
  },
  {
    id: 'gal-4',
    title: 'Charcoal Tandoor Starters',
    category: 'Starters',
    caption: 'Paneer tikka skewers and golden pakoras paired with vibrant mint chutney.',
    image: IMAGES.starters,
  },
  {
    id: 'gal-5',
    title: 'Banana Leaf Masala Dosa',
    category: 'South Indian Food',
    caption: 'Crisp ghee-roasted dosa served alongside steaming lentil sambar and trio chutneys.',
    image: IMAGES.southIndian,
  },
  {
    id: 'gal-6',
    title: 'Copper Handi Curries',
    category: 'North Indian Food',
    caption: 'Slow-simmered butter masala and royal dum biryani with blistered garlic naan.',
    image: IMAGES.northIndian,
  },
  {
    id: 'gal-7',
    title: 'Wok-Fired Hakka & Manchurian',
    category: 'Chinese Food',
    caption: 'High-flame Indo-Chinese noodles and sesame-glazed Manchurian bowls.',
    image: IMAGES.chinese,
  },
  {
    id: 'gal-8',
    title: 'Gourmet Burgers & Sliders',
    category: 'Fast Food',
    caption: 'Crispy herb burgers, masala fries, and toasted café club sandwiches.',
    image: IMAGES.fastFood,
  },
];

export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    number: '01',
    title: 'Fresh Ingredients',
    summary:
      'Farm-sourced seasonal produce, whole spices ground in-house daily, and zero artificial preservatives or synthetic colors.',
  },
  {
    number: '02',
    title: 'Quality Food',
    summary:
      'Strict FSSAI-aligned kitchen hygiene, temperature-controlled prep stations, and standardized taste checks before every service.',
  },
  {
    number: '03',
    title: 'Professional Service',
    summary:
      'Courteous, uniformed hospitality teams and experienced banquet captains who manage timelines seamlessly from first starter to dessert.',
  },
  {
    number: '04',
    title: 'Affordable Pricing',
    summary:
      'Transparent, honest per-plate and event packages designed to deliver luxury culinary experiences without hidden surcharges.',
  },
  {
    number: '05',
    title: 'Customer Satisfaction',
    summary:
      'Backed by hundreds of repeat families and corporate hosts who trust us with their most meaningful celebrations.',
  },
];

export const CUSTOMER_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Rajeshwari Deshmukh',
    context: 'Wedding Reception Catering · 650 Guests',
    rating: 5,
    quote:
      'Manoj Food Service handled our daughter’s wedding reception flawlessly. Guests are still talking about the live dosa counter, saffron biryani, and warm gulab jamun. Every chafing dish stayed piping hot until midnight.',
  },
  {
    id: 'rev-2',
    name: 'Vikramaditya Kapoor',
    context: 'Corporate Annual Summit · 220 Guests',
    rating: 5,
    quote:
      'We booked Manoj Food Service for our two-day leadership summit. Their setup was completed 45 minutes ahead of schedule, the service staff was remarkably attentive, and the North Indian and Chinese spread pleased everyone.',
  },
  {
    id: 'rev-3',
    name: 'Ananya Nair',
    context: 'Family Dining & Birthday Celebration',
    rating: 5,
    quote:
      'Whether we visit for Sunday South Indian breakfast or host a birthday dinner, the consistency is unmatched. Fresh ingredients, generous portions, and genuinely warm hospitality at very reasonable pricing.',
  },
  {
    id: 'rev-4',
    name: 'Harshvardhan Mehta',
    context: '50th Anniversary Family Function · 120 Guests',
    rating: 5,
    quote:
      'Finding a caterer who understands pure vegetarian homestyle elegance is rare. Their paneer tikka starters, dal tadka, and pistachio rasmalai felt both comforting and celebratory.',
  },
];
