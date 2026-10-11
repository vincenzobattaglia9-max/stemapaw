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
  brand: "SteamPaws™ by Monito",
  productName: "SteamPaws™ Pro • 3-in-1 Self-Cleaning Ultrasonic Steamy Pet Brush",
  tagline: "One-Click Fur Ejection & Ultrasonic Nano-Mist For Stress-Free Grooming",
  rating: 4.9,
  reviewCount: 2480,
  stockLeft: 11,
  aliExpressSupplierUrl: "https://it.aliexpress.com/item/1005009329999811.html",
  
  images: [
    {
      url: "/images/product/real_product_1.jpg",
      caption: "Sleek ergonomic design with cool nano-mist spray, self-cleaning ejector & USB-C",
      tag: "Official Product"
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
      title: "1x SteamPaws™ Pro Brush",
      subtitle: "Includes Brush, Refill Dropper & USB-C Cable",
      price: 20.00,
      originalPrice: 39.99,
      savings: 19.99,
      discountBadge: "SAVE 50%"
    },
    {
      id: "double",
      quantity: 2,
      title: "2x SteamPaws™ Duo Pack",
      subtitle: "1 for Dog + 1 for Cat, or Gift a Pet Lover",
      price: 30.00,
      originalPrice: 79.98,
      savings: 49.98,
      discountBadge: "BEST SELLER • ONLY €15 EACH",
      isPopular: true,
      freebie: "FREE Tracked Priority EU Shipping"
    },
    {
      id: "triple",
      quantity: 3,
      title: "3x Family & Multi-Pet Pack",
      subtitle: "Maximum Value for Households with Multiple Pets",
      price: 40.00,
      originalPrice: 119.97,
      savings: 79.97,
      discountBadge: "BEST VALUE • ONLY €13.33 EACH",
      freebie: "FREE Detangling Pet Comb Included"
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

  reviews: [
    {
      id: "rev-1",
      author: "Sophie Müller",
      location: "Munich, Germany",
      flag: "🇩🇪",
      rating: 5,
      date: "3 days ago",
      title: "The button on the back to push out the hair is pure genius!",
      content: "I've tried so many brushes for my cat, but cleaning them was always annoying. With this one, the mist keeps the hair from flying around, and when you finish you just click the button and the whole hair disc drops right into the bin! Fast delivery to Munich in 6 days.",
      petType: "Cat: British Longhair",
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
      title: "Ordered the 2x pack for €30, worth every single cent!",
      content: "Got two brushes (one for our Golden Retriever, one for our neighbor). The build quality in white is top notch, looks like a high-end device. The steam is cool room temperature so our dog didn't flinch at all. Highly recommended!",
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
      title: "Fini les poils de chat sur tous mes vêtements noirs !",
      content: "The mist function is whisper-quiet. My timid cat usually runs away from brushes, but she stayed completely relaxed. The hair collects into a thick pad that pushes off with the button. Super satisfaite !",
      petType: "Cat: Ragdoll",
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
      title: "Prodotto identico alla descrizione, arrivato con cavetto e boccetta",
      content: "Spedizione tracciata e rapida a Milano. Il pulsante dietro per espellere i peli funziona benissimo e i dentini arrotondati non graffiano minimamente. Preso a 20€ in offerta, ottimo affare.",
      petType: "Cane: Shiba Inu",
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
      a: "We want both you and your pet to be completely in love with SteamPaws™. If for any reason your pet doesn't enjoy their grooming experience, contact our support team within 30 days for a full, hassle-free refund under EU consumer protection regulations."
    }
  ]
};
