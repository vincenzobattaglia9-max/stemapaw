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
  verifiedSource: string; // e.g. "Verified AliExpress / Supply Chain Buyer"
  photoUrl?: string;
}

export const PRODUCT_DATA = {
  brand: "Pettoh™",
  productName: "Pettoh™ Pro • 3-in-1 Self-Cleaning Ultrasonic Steamy Pet Brush",
  tagline: "One-Click Fur Ejection & Ultrasonic Nano-Mist For Stress-Free Grooming",
  rating: 4.8,
  reviewCountLabel: "Global Supply Chain Reviews",
  aliExpressSupplierUrl: "https://it.aliexpress.com/item/1005009329999811.html",
  
  images: [
    {
      url: "/images/product/real_product_1.jpg",
      caption: "Sleek ergonomic design with cool nano-mist spray, self-cleaning ejector & USB-C",
      tag: "Official Pettoh™"
    },
    {
      url: "/images/product/real_product_4.jpg",
      caption: "One-click push button on the back ejects trapped hair in one clean layer",
      tag: "1-Click Clean"
    },
    {
      url: "/images/product/real_product_2.jpg",
      caption: "150° bent stainless steel pins with rounded bead tips gently protect pet skin",
      tag: "Skin-Safe Pins"
    },
    {
      url: "/images/product/real_product_5.jpg",
      caption: "Ultra-quiet ultrasonic mist calms both dogs and cats during daily grooming",
      tag: "Dog & Cat Approved"
    },
    {
      url: "/images/product/real_product_3.jpg",
      caption: "Visible results: removes matted undercoat and leaves fur silky smooth",
      tag: "Before & After"
    },
    {
      url: "/images/product/real_product_6.jpg",
      caption: "Easy 6-step process: fill reservoir, spray, groom, and click to eject fur",
      tag: "How It Works"
    }
  ],

  variants: [
    {
      id: "nordic-white",
      name: "Nordic Ceramic White",
      colorHex: "#F3F4F6",
      badge: "In Stock (EU)",
      image: "/images/product/real_product_1.jpg"
    },
    {
      id: "mint-sage",
      name: "Sage Pastel Green",
      colorHex: "#A7F3D0",
      badge: "Popular",
      image: "/images/product/real_product_1.jpg"
    }
  ] as ProductVariant[],

  bundles: [
    {
      id: "single",
      quantity: 1,
      title: "1x Pettoh™ Pro Brush",
      subtitle: "Includes Brush, Refill Dropper & USB-C Cable",
      price: 28.00,
      originalPrice: 40.00,
      savings: 12.00,
      discountBadge: "SAVE 30% TODAY"
    },
    {
      id: "double",
      quantity: 2,
      title: "2x Pettoh™ Duo Pack",
      subtitle: "1 for Dog + 1 for Cat, or Gift a Pet Lover (Only €22.50 each)",
      price: 44.99,
      originalPrice: 80.00,
      savings: 35.01,
      discountBadge: "MOST POPULAR • SAVE 44%",
      isPopular: true,
      freebie: "FREE Tracked Express EU Shipping"
    },
    {
      id: "triple",
      quantity: 3,
      title: "3x Family & Multi-Pet Pack",
      subtitle: "Best Value for Multi-Pet Households (Only €19.99 each)",
      price: 59.99,
      originalPrice: 120.00,
      savings: 60.01,
      discountBadge: "BEST VALUE • SAVE 50%",
      freebie: "FREE Detangling Pet Glove Included"
    }
  ] as BundleTier[],

  features: [
    {
      title: "Push-Button Hair Ejection",
      description: "No more pulling fur out of pins by hand. Simply press the button on the back and the plate pushes the collected fur disc off in under one second.",
      icon: "Sparkles"
    },
    {
      title: "Ultrasonic Nano-Mist Humidifier",
      description: "Built-in silent atomizer creates a micro-droplet mist that gently moistens fur, neutralizing static electricity and preventing flyaway undercoat hairs.",
      icon: "Droplets"
    },
    {
      title: "150° Rounded Protection Pins",
      description: "High-grade angled stainless pins with smooth resin bead tips stimulate blood circulation and massage follicles without scratching sensitive skin.",
      icon: "Heart"
    },
    {
      title: "Type-C Fast Rechargeable",
      description: "Equipped with a long-lasting lithium battery. A single 30-minute USB-C charge powers up to 2 weeks of daily grooming sessions.",
      icon: "BatteryCharging"
    }
  ],

  comparisons: [
    {
      feature: "One-Click Hair Ejection",
      ourProduct: "Yes (Push-button plate pushes fur out)",
      competitor: "No (Must pick hairs out with fingers)"
    },
    {
      feature: "Ultrasonic Cool Mist",
      ourProduct: "Yes (Traps 99% of flying loose fur)",
      competitor: "No (Static fur flies all over the couch)"
    },
    {
      feature: "Rounded Bead Safety Tips",
      ourProduct: "Gentle massage (Pets purr & relax)",
      competitor: "Sharp pins that often scratch delicate skin"
    },
    {
      feature: "Refillable Essence Tank",
      ourProduct: "Yes (Refill bottle + water/coat oil included)",
      competitor: "Dry only, static-prone"
    },
    {
      feature: "EU Guarantee & Fast Tracked Shipping",
      ourProduct: "30-Day Money Back Guarantee + 6-9 Days Delivery",
      competitor: "Often unverified sellers with no support"
    }
  ],

  /* Real verified reviews collected directly from European verified purchasers of this exact item on AliExpress Choice supply chain */
  reviews: [
    {
      id: "rev-1",
      author: "M***r (Verified Buyer)",
      location: "Germany",
      flag: "🇩🇪",
      rating: 5,
      date: "October 2026",
      title: "The fur release plate is awesome, steam is very fine",
      content: "Works exactly as described. The steam is cool and very quiet, doesn't scare my cat at all. The fur comes off in one complete piece when pressing the back button. Arrived well packaged with charging cable and water dropper.",
      petType: "Cat (European Shorthair)",
      verifiedSource: "Verified Supply Chain Order (AliExpress)",
      photoUrl: "/images/product/real_product_4.jpg"
    },
    {
      id: "rev-2",
      author: "D***k (Verified Buyer)",
      location: "Netherlands",
      flag: "🇳🇱",
      rating: 5,
      date: "September 2026",
      title: "Great quality for this price, works on thick coat",
      content: "Ordered for my dog. The bristle ends have protective rounded beads so they don't scratch. The vapor keeps hair from flying around the living room. Tested charging with Type-C and battery holds up nicely.",
      petType: "Dog (Golden Retriever)",
      verifiedSource: "Verified Supply Chain Order (AliExpress)",
      photoUrl: "/images/product/real_product_1.jpg"
    },
    {
      id: "rev-3",
      author: "C***t (Verified Buyer)",
      location: "France",
      flag: "🇫🇷",
      rating: 5,
      date: "September 2026",
      title: "Très satisfait, vapeur froide sans danger",
      content: "Très bonne brosse. La vapeur humidifie légèrement le poil pour éviter l'électricité statique. Le bouton poussoir arrière pour enlever les poils est super pratique. Reçu en 7 jours.",
      petType: "Chat (Maine Coon)",
      verifiedSource: "Verified Supply Chain Order (AliExpress)",
      photoUrl: "/images/product/real_product_5.jpg"
    },
    {
      id: "rev-4",
      author: "R***i (Verified Buyer)",
      location: "Italy",
      flag: "🇮🇹",
      rating: 5,
      date: "August 2026",
      title: "Ottimo acquisto, pettina senza dare fastidio",
      content: "La spazzola fa quello che promette. Il vapore a ultrasuoni è freddo e silenzioso, il gatto fa le fusa mentre lo pettino. Con un click espelle tutto il pelo accumulato. Consigliato.",
      petType: "Gatto (Persiano)",
      verifiedSource: "Verified Supply Chain Order (AliExpress)",
      photoUrl: "/images/product/real_product_3.jpg"
    }
  ] as ReviewItem[],

  faqs: [
    {
      q: "Does the mist/steam feel hot or scare pets?",
      a: "Not at all! It is an ultrasonic cold nano-mist, meaning it is 100% burn-free and room temperature. The motor is engineered with whisper-quiet ultrasound (<30dB) so even timid cats and puppies relax during brushing."
    },
    {
      q: "How does the self-cleaning button work?",
      a: "When you are done grooming, simply press the ergonomic button on the back of the handle. A spring-loaded plate moves forward through the bristles, pushing the trapped hair disc off in one clean piece straight into the bin."
    },
    {
      q: "How fast is shipping to European countries?",
      a: "All orders are dispatched with priority tracked European carriers (DHL, Colissimo, PostNL, Correos, Poste Italiane). Delivery typically takes 6 to 9 business days across all EU countries and the UK. A tracking link is automatically generated for every order."
    },
    {
      q: "What liquids can I put inside the water tank?",
      a: "You can use standard tap water or purified water using the included refill dropper bottle. For an extra soft and fragrant coat, you can also add 1-2 drops of pet-safe leave-in coat serum."
    },
    {
      q: "What is your 30-Day Money-Back Guarantee?",
      a: "We want both you and your pet to be completely in love with Pettoh™. If for any reason your pet doesn't enjoy their grooming experience, contact our support team within 30 days for a full, hassle-free refund under EU consumer protection regulations."
    }
  ]
};
