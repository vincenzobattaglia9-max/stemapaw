export interface ProductVariant {
  id: string;
  name: string;
  colorHex: string;
  badge?: string;
  image: string;
}

export interface BundleTier {
  id: string;
  quantity: number;
  title: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  discountBadge?: string;
  isPopular?: boolean;
  savings: number;
  freebie?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  flag: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  petType: string;
  verified: boolean;
  avatar: string;
}

export const PRODUCT_DATA = {
  brand: "SteamPaws™",
  productName: "SteamPaws™ 3-in-1 Ultrasonic Steamy Pet Brush",
  tagline: "The Gentle Way to End Loose Fur & Keep Your Home Hair-Free",
  rating: 4.9,
  reviewCount: 2480,
  stockLeft: 13,
  aliExpressSupplierUrl: "https://it.aliexpress.com/w/wholesale-steamy-cat-brush.html",
  
  images: [
    {
      url: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1000&q=80",
      caption: "Gentle nano-mist calms pets while trapping loose undercoat fur",
      tag: "Steamy Nano-Mist"
    },
    {
      url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1000&q=80",
      caption: "Cats love the gentle silicone massage instead of harsh wire scratching",
      tag: "Soft Massage Teeth"
    },
    {
      url: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=1000&q=80",
      caption: "Works effortlessly for both short and long-haired dogs & cats",
      tag: "All Breeds & Coats"
    },
    {
      url: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1000&q=80",
      caption: "Trapped hair peels off in one neat disk with zero mess",
      tag: "1-Second Easy Clean"
    }
  ],

  variants: [
    {
      id: "mint-green",
      name: "Sage Mint Green",
      colorHex: "#10b981",
      badge: "Best Seller",
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "cream-yellow",
      name: "Warm Cream Sunshine",
      colorHex: "#f59e0b",
      badge: "Trending",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1000&q=80"
    }
  ] as ProductVariant[],

  bundles: [
    {
      id: "single",
      quantity: 1,
      title: "1x SteamPaws™ Brush",
      subtitle: "Standard Pack (Brush + USB-C Cable)",
      price: 24.99,
      originalPrice: 49.99,
      savings: 25.00,
      discountBadge: "SAVE 50%"
    },
    {
      id: "double",
      quantity: 2,
      title: "2x SteamPaws™ Duo Pack",
      subtitle: "1 for Dog + 1 for Cat, or Gift a Friend",
      price: 39.99,
      originalPrice: 99.98,
      savings: 59.99,
      discountBadge: "MOST POPULAR • EXTRA 20% OFF",
      isPopular: true,
      freebie: "FREE Tracked Priority Express EU Shipping"
    },
    {
      id: "triple",
      quantity: 3,
      title: "3x Family & Multi-Pet Pack",
      subtitle: "Best Value for Multi-Pet Households",
      price: 49.99,
      originalPrice: 149.97,
      savings: 99.98,
      discountBadge: "BEST VALUE • 66% TOTAL SAVINGS",
      freebie: "FREE Silicone Detangling Glove Included"
    }
  ] as BundleTier[],

  features: [
    {
      title: "Ultrasonic Nano-Mist Technology",
      description: "Generates an ultra-fine, noiseless cold mist that dampens loose hair just enough to trap 99% of flyaway fur instantly. No scary hissing sounds, 100% burn-free.",
      icon: "Droplets"
    },
    {
      title: "Medical-Grade Soft Silicone Teeth",
      description: "Unlike sharp metal pin brushes that scrape your pet's delicate skin, our rounded silicone bristles gently massage the scalp, stimulating natural blood flow and shiny coats.",
      icon: "Heart"
    },
    {
      title: "1-Second Clean & Peel Mechanism",
      description: "Because the mist binds shedding hair together, the collected fur forms a neat, cohesive disc on the brush face. Simply peel it off and toss it in the bin in one second flat.",
      icon: "Sparkles"
    },
    {
      title: "Type-C Rechargeable & Cordless",
      description: "A single 30-minute USB-C charge provides over 15 days of daily grooming sessions. Lightweight and ergonomic for fatigue-free brushing.",
      icon: "BatteryCharging"
    }
  ],

  comparisons: [
    {
      feature: "Stops fur from flying in the air",
      ourProduct: "Yes (Nano-Mist traps 99% of hairs)",
      competitor: "No (Static electricity spreads hair everywhere)"
    },
    {
      feature: "Pet comfort & skin safety",
      ourProduct: "Gentle silicone massage (Pets purr & relax)",
      competitor: "Sharp wire pins that often scratch skin"
    },
    {
      feature: "Cleaning after use",
      ourProduct: "Peels off in 1 clean solid disk",
      competitor: "Stuck in pins, requires picking out by hand"
    },
    {
      feature: "Works with coat conditioner/water",
      ourProduct: "Refillable tank with mist dispersion",
      competitor: "Dry only, static-prone"
    },
    {
      feature: "Guarantee & EU Shipping",
      ourProduct: "30-Day Money Back Guarantee + Tracked EU Delivery",
      competitor: "Often unverified sellers with no support"
    }
  ],

  reviews: [
    {
      id: "rev-1",
      author: "Sophie Müller",
      location: "Munich, Germany",
      flag: "🇩🇪",
      rating: 5,
      date: "3 days ago",
      title: "My Maine Coon usually hates brushes, but purred the whole time!",
      content: "I was skeptical about the 'steam' part, but it's actually a cool micro mist! It completely prevents his long fur from flying all over the living room couch. The fur peeled right off in one piece. Best 25€ I've spent on pet care this year.",
      petType: "Cat: Maine Coon (Long Hair)",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
    },
    {
      id: "rev-2",
      author: "Lars van Dijk",
      location: "Amsterdam, Netherlands",
      flag: "🇳🇱",
      rating: 5,
      date: "5 days ago",
      title: "Incredible for Golden Retriever shedding season",
      content: "Our Golden leaves hair literally everywhere. Used this for 10 minutes yesterday and got two huge balls of fur out without a single hair flying into the air. Delivery took 6 days to Amsterdam via PostNL. Highly recommended!",
      petType: "Dog: Golden Retriever",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
    },
    {
      id: "rev-3",
      author: "Claire Dupont",
      location: "Lyon, France",
      flag: "🇫🇷",
      rating: 5,
      date: "1 week ago",
      title: "Adieu les poils sur mes vêtements noirs !",
      content: "I wear black clothes every day and having two British Shorthairs was a nightmare. This steamy brush traps the undercoat before it falls on the floor. Battery lasts very long and the mist is completely silent. Top quality!",
      petType: "2x British Shorthair Cats",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
    },
    {
      id: "rev-4",
      author: "Marco Rossi",
      location: "Milan, Italy",
      flag: "🇮🇹",
      rating: 5,
      date: "2 weeks ago",
      title: "Spedizione velocissima e fa esattamente quello che promette",
      content: "Arrivata in 7 giorni esatti a Milano. I denti in silicone sono morbidissimi e il vapore freddo non infastidisce per niente il mio gatto persiano. Il fatto che i peli si stacchino in un blocco solo è fantastico.",
      petType: "Gatto: Persiano",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
    }
  ] as ReviewItem[],

  faqs: [
    {
      q: "Does the mist/steam feel hot or scare pets?",
      a: "Not at all! It is an ultrasonic cold nano-mist, meaning it is 100% burn-free and room temperature. The motor is engineered with whisper-quiet ultrasound (<30dB) so even timid cats and puppies relax during brushing."
    },
    {
      q: "How fast is shipping to European countries?",
      a: "All orders are dispatched with priority tracked European carriers (DHL, Colissimo, PostNL, Correos, Poste Italiane). Delivery typically takes 6 to 9 business days across all EU countries and the UK. A tracking link is automatically generated for every order."
    },
    {
      q: "What liquids can I put inside the water tank?",
      a: "You can use standard tap water or purified water. For an extra soft and fragrant coat, you can also add 1-2 drops of pet-safe leave-in coat serum or grooming essence."
    },
    {
      q: "What is your 30-Day Money-Back Guarantee?",
      a: "We want both you and your pet to be completely in love with SteamPaws™. If for any reason your pet doesn't enjoy their grooming experience, contact our support team within 30 days for a full, hassle-free refund under EU consumer protection regulations."
    },
    {
      q: "How do I clean the brush after grooming?",
      a: "The mist causes the fur to bind into a soft, solid disc. Simply slide your fingers under the edge and peel the whole clump off in under one second. The brush head is water-resistant and can be rinsed under a tap."
    }
  ]
};
