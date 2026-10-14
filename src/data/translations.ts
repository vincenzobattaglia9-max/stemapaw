export type SupportedLanguage = 'de' | 'nl' | 'en';

export interface Translations {
  announcement: string;
  hero: {
    badge: string;
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    exploreCta: string;
    howItWorks: string;
    statsRating: string;
    statsReviews: string;
    statsSales: string;
    statsTrapped: string;
    statsScratch: string;
    statsCleaning: string;
    lessFur: string;
    nanoMist: string;
    buyBoxBadge: string;
    productTitle: string;
    productDesc: string;
  };
  bundles: {
    chooseColor: string;
    chooseQuantity: string;
    sellingFast: string;
    singleTitle: string;
    singleSubtitle: string;
    singleBadge: string;
    duoTitle: string;
    duoSubtitle: string;
    duoBadge: string;
    duoFreebie: string;
    familyTitle: string;
    familySubtitle: string;
    familyBadge: string;
    familyFreebie: string;
    deliveryTime: string;
    moneyBack: string;
    freeReturns: string;
    ctaButton: string;
    selectedNotice: string;
    dispatchedVia: string;
    tryAtHome: string;
    klarnaActive: string;
    save: string;
  };
  checkout: {
    headerTitle: string;
    headerSubtitle: string;
    step1: string;
    step2: string;
    contactTitle: string;
    emailPlaceholder: string;
    emailHint: string;
    fullName: string;
    streetAddress: string;
    postalCode: string;
    city: string;
    country: string;
    preferredPayment: string;
    klarnaBadge: string;
    cardsApplePay: string;
    klarnaPayLater: string;
    idealPayment: string;
    paypalDirect: string;
    proceedButton: string;
    connectingStripe: string;
    sslNotice: string;
    encrypted: string;
    freeShippingBadge: string;
    orderConfirmed: string;
    thankYou: string;
    orderSuccessDesc: string;
    orderId: string;
    trackingCode: string;
    totalPaid: string;
    trackPackage: string;
    close: string;
  };
  sticky: {
    springSale: string;
    ctaButton: string;
    ratingText: string;
    shippingText: string;
  };
}

export const TRANSLATIONS: Record<SupportedLanguage, Translations> = {
  de: {
    announcement: 'Frühlingsangebot: Bis zu 50% Rabatt + Kostenlose DHL-Lieferung in Deutschland (6-8 Werktage)',
    hero: {
      badge: '🐾 Offizieller Pettoh™ Store Deutschland',
      titlePart1: 'Schluss mit herumfliegenden Tierhaaren.',
      titlePart2: 'Sanfte Ultraschall-Dampfbürste.',
      subtitle: 'Die innovative 3-in-1 Dampfbürste von Pettoh™ kombiniert kühlen Ultraschall-Nanonebel mit 150°-Sicherheitsborsten und 1-Klick-Haarauswurf. Keine statische Aufladung, seidiges Fell und stressfreie Fellpflege für Hunde und Katzen.',
      exploreCta: 'Jetzt 50% Rabatt sichern',
      howItWorks: 'Funktionsweise ansehen',
      statsRating: '4.8 / 5.0 Bewertung',
      statsReviews: 'Verifizierte Käufer aus Deutschland',
      statsSales: 'Bestseller in Deutschland',
      statsTrapped: 'Fell gebunden',
      statsScratch: 'Massage-Noppen',
      statsCleaning: '1-Klick Reinigung',
      lessFur: '99% weniger fliegende Haare',
      nanoMist: 'Ultraschall-Nanonebel',
      buyBoxBadge: 'AUF LAGER (DE/EU) • OFFIZIELLER STORE',
      productTitle: 'Pettoh™ Pro • 3-in-1 Selbstreinigende Ultraschall-Dampfbürste',
      productDesc: 'Herkömmliche Drahtbürsten kratzen die empfindliche Tierhaut und verteilen Haare im ganzen Raum. Pettoh™ Pro befeuchtet das Fell sanft mit raumtemperiertem Nanonebel, bindet lose Haare und wirft das gesamte Fellpolster mit einem einzigen Klick rückstandsfrei aus.'
    },
    bundles: {
      chooseColor: 'Schritt 1: Wählen Sie Ihre Wunschfarbe',
      chooseQuantity: 'Schritt 2: Wählen Sie Ihr Sparpaket',
      sellingFast: '🔥 Beliebt bei Tierhaltern in Deutschland',
      singleTitle: '1x Pettoh™ Pro Bürste',
      singleSubtitle: 'Inklusive Bürste, Nachfüllfläschchen & USB-C Ladekabel',
      singleBadge: 'HEUTE 30% SPAREN',
      duoTitle: '2x Pettoh™ Duo-Sparpaket',
      duoSubtitle: '1 für Hund + 1 für Katze, oder als Geschenk (Nur 22,50€ pro Stück)',
      duoBadge: 'AM BELIEBTESTEN • 44% SPAREN',
      duoFreebie: 'KOSTENLOSER DHL Expressversand',
      familyTitle: '3x Familien & Mehr-Tier Paket',
      familySubtitle: 'Bester Preis für Haushalte mit mehreren Haustieren (Nur 19,99€ pro Stück)',
      familyBadge: 'BESTER PREIS • 50% SPAREN',
      familyFreebie: 'GRATIS Entfilzungshandschuh enthalten',
      deliveryTime: 'Kostenlose DHL-Lieferung (6-8 Werktage)',
      moneyBack: '30 Tage Geld-zurück-Garantie',
      freeReturns: 'Kostenloser Rückversand',
      ctaButton: 'Jetzt mit Rabatt bestellen',
      selectedNotice: 'Steuer inklusive • Versandkostenfrei',
      dispatchedVia: 'Versand mit nationalen Partnern:',
      tryAtHome: '30 Tage risikofrei zu Hause testen',
      klarnaActive: '🛍️ Klarna: Erst erhalten, in 30 Tagen zahlen',
      save: 'Sparen Sie'
    },
    checkout: {
      headerTitle: 'Pettoh™ • Schneller & Sicherer Checkout',
      headerSubtitle: 'Offizieller Stripe-Zahlungsschutz • Klarna, PayPal & Apple Pay',
      step1: 'Kontakt & Lieferadresse',
      step2: 'Zahlungsmethode',
      contactTitle: 'Schritt 1: Ihre Kontaktdaten',
      emailPlaceholder: 'E-Mail-Adresse (für DHL-Sendungsverfolgung & Bestätigung)',
      emailHint: 'Hierhin senden wir Ihre Bestellbestätigung und den DHL-Sendungsverfolgungslink.',
      fullName: 'Vollständiger Name',
      streetAddress: 'Straße und Hausnummer',
      postalCode: 'Postleitzahl',
      city: 'Stadt',
      country: 'Land',
      preferredPayment: 'Schritt 2: Bevorzugte Zahlungsart',
      klarnaBadge: '🛍️ Erst ansehen, später mit Klarna zahlen',
      cardsApplePay: '💳 Kreditkarte / Apple Pay',
      klarnaPayLater: '🛍️ Klarna (Rechnungskauf 30 Tage)',
      idealPayment: '🏦 iDEAL Direktüberweisung',
      paypalDirect: '🅿️ PayPal Käuferschutz',
      proceedButton: 'Weiter zur sicheren Zahlung',
      connectingStripe: 'Verbindung zu Stripe Gateway...',
      sslNotice: 'Offizielle 256-Bit SSL-Verschlüsselung • 30 Tage Käuferschutz',
      encrypted: '256-Bit SSL verschlüsselt',
      freeShippingBadge: 'Kostenloser DHL-Versand (6-8 Werktage)',
      orderConfirmed: 'Bestellung bestätigt!',
      thankYou: 'Vielen Dank',
      orderSuccessDesc: 'Ihre Bestellung ist bestätigt und wird sofort für den DHL-Versand vorbereitet. Eine Bestätigung wurde per E-Mail versendet.',
      orderId: 'Bestellnummer:',
      trackingCode: 'DHL Sendungscode:',
      totalPaid: 'Bezahlter Gesamtbetrag:',
      trackPackage: 'Paket online verfolgen ➔',
      close: 'Schließen'
    },
    sticky: {
      springSale: 'Frühlings-Rabatt',
      ctaButton: 'Jetzt Rabatt sichern',
      ratingText: '4.8/5 Bewertung (Verifizierte Käufer)',
      shippingText: 'Pettoh™ Pro • Kostenloser DHL-Versand'
    }
  },
  nl: {
    announcement: 'Lenteaanbieding: Tot 50% korting + Gratis PostNL bezorging in Nederland (6-8 werkdagen)',
    hero: {
      badge: '🐾 Officiële Pettoh™ Store Nederland',
      titlePart1: 'Geen rondvliegende haren meer in huis.',
      titlePart2: 'Zachte ultrasone stoomborstel.',
      subtitle: 'De innovatieve 3-in-1 stoomborstel van Pettoh™ combineert verkoelende ultrasone nanonevel met 150° beschermende borstelharen en 1-klik haarverwijdering. Zijdezachte vachtverzorging voor honden en katten.',
      exploreCta: 'Nu 50% korting claimen',
      howItWorks: 'Bekijk hoe het werkt',
      statsRating: '4.8 / 5.0 Beoordeling',
      statsReviews: 'Geverifieerde Nederlandse kopers',
      statsSales: 'Bestseller in Nederland',
      statsTrapped: 'Vacht opgevangen',
      statsScratch: 'Veiligheidsknopjes',
      statsCleaning: '1-Klik reiniging',
      lessFur: '99% minder rondvliegende haren',
      nanoMist: 'Ultrasone nanonevel',
      buyBoxBadge: 'OP VOORRAAD (NL/EU) • OFFICIËLE WINKEL',
      productTitle: 'Pettoh™ Pro • 3-in-1 Zelfreinigende Ultrasone Stoomborstel',
      productDesc: 'Traditionele metalen borstels krassen op de gevoelige huid en veroorzaken statische haren. Pettoh™ Pro bevochtigt de vacht lichtjes met kamertemperatuur nevel en werpt alle losse haren met één druk op de knop uit.'
    },
    bundles: {
      chooseColor: 'Stap 1: Kies je favoriete kleur',
      chooseQuantity: 'Stap 2: Kies je voordeelpakket',
      sellingFast: '🔥 Populair onder Nederlandse huisdiereigenaren',
      singleTitle: '1x Pettoh™ Pro Borstel',
      singleSubtitle: 'Inclusief borstel, navulflesje & USB-C kabel',
      singleBadge: 'VANDAAG 30% KORTING',
      duoTitle: '2x Pettoh™ Duo Pakket',
      duoSubtitle: '1 voor hond + 1 voor kat, of geef cadeau (Slechts €22,50 p.st.)',
      duoBadge: 'MEEST GEKOZEN • 44% KORTING',
      duoFreebie: 'GRATIS PostNL Express bezorging',
      familyTitle: '3x Familie & Voordeelpakket',
      familySubtitle: 'Beste prijs voor huishoudens met meerdere dieren (Slechts €19,99 p.st.)',
      familyBadge: 'BESTE DEAL • 50% KORTING',
      familyFreebie: 'GRATIS Verzorgingshandschoen inbegrepen',
      deliveryTime: 'Gratis PostNL bezorging (6-8 werkdagen)',
      moneyBack: '30 Dagen geld-terug-garantie',
      freeReturns: 'Gratis retourneren',
      ctaButton: 'Nu met korting bestellen',
      selectedNotice: 'Inclusief btw • Gratis verzending',
      dispatchedVia: 'Verzonden met erkende bezorgers:',
      tryAtHome: '30 Dagen thuis uitproberen',
      klarnaActive: '🛍️ iDEAL & Klarna achteraf betalen',
      save: 'Bespaar'
    },
    checkout: {
      headerTitle: 'Pettoh™ • Snelle & Veilige Checkout',
      headerSubtitle: 'Officiële Stripe betaalbeveiliging • iDEAL, Klarna & Apple Pay',
      step1: 'Contact & Bezorgadres',
      step2: 'Betaalmethode',
      contactTitle: 'Stap 1: Jouw contactgegevens',
      emailPlaceholder: 'E-mailadres (voor PostNL tracking & orderbevestiging)',
      emailHint: 'Hiernaartoe sturen we de orderbevestiging en PostNL tracking link.',
      fullName: 'Volledige naam',
      streetAddress: 'Straat en huisnummer',
      postalCode: 'Postcode',
      city: 'Woonplaats',
      country: 'Land',
      preferredPayment: 'Stap 2: Kies je betaalmethode',
      klarnaBadge: '🏦 iDEAL & Klarna actief',
      cardsApplePay: '💳 Kaart / Apple Pay',
      klarnaPayLater: '🛍️ Klarna (Betaal in 30d)',
      idealPayment: '🏦 iDEAL Online Bankieren',
      paypalDirect: '🅿️ PayPal Checkout',
      proceedButton: 'Doorgaan naar veilige betaling',
      connectingStripe: 'Verbinding maken met Stripe...',
      sslNotice: 'Officiële 256-Bit SSL-beveiliging • 30 dagen retourrecht',
      encrypted: '256-bit SSL beveiligd',
      freeShippingBadge: 'Gratis PostNL verzending (6-8 werkdagen)',
      orderConfirmed: 'Bestelling bevestigd!',
      thankYou: 'Hartelijk dank',
      orderSuccessDesc: 'Je bestelling is bevestigd en wordt klaargemaakt voor verzending. Een bevestiging is per e-mail verstuurd.',
      orderId: 'Bestelnummer:',
      trackingCode: 'PostNL Track & Trace:',
      totalPaid: 'Totaal betaald:',
      trackPackage: 'Volg je pakket ➔',
      close: 'Sluiten'
    },
    sticky: {
      springSale: 'Voorjaarsactie',
      ctaButton: 'Nu korting claimen',
      ratingText: '4.8/5 Beoordeling (Nederlandse kopers)',
      shippingText: 'Pettoh™ Pro • Gratis PostNL bezorging'
    }
  },
  en: {
    announcement: 'Spring Offer: Up to 50% OFF + FREE Tracked Delivery across Europe (6-9 Days)',
    hero: {
      badge: '🐾 Official Pettoh™ European Store',
      titlePart1: 'Say Goodbye to Flying Pet Hair.',
      titlePart2: 'Gentle Ultrasonic Steamy Brush.',
      subtitle: 'Pettoh™ combines gentle cold ultrasonic nano-mist and 150° protection pins with 1-click hair ejection. Traps loose undercoat without flying static fur, leaving pet coats lustrous, clean and knot-free.',
      exploreCta: 'Claim 50% Discount Now',
      howItWorks: 'View How It Works',
      statsRating: '4.8 / 5.0 Rating',
      statsReviews: 'Verified European Buyers',
      statsSales: 'Trending in Europe',
      statsTrapped: 'Fur Trapped',
      statsScratch: 'Bead Safety Pins',
      statsCleaning: '1-Click Cleaning',
      lessFur: '99% Less Flying Fur',
      nanoMist: 'Ultrasonic Nano-Mist',
      buyBoxBadge: 'IN STOCK (EU) • OFFICIAL STORE',
      productTitle: 'Pettoh™ Pro • 3-in-1 Self-Cleaning Ultrasonic Steamy Pet Brush',
      productDesc: 'Ordinary wire slickers scratch pet skin and create flying static fur. Pettoh™ Pro combines soothing room-temperature ultrasonic nano-mist and 150° protection pins with a push-button fur ejector for effortless grooming.'
    },
    bundles: {
      chooseColor: 'Step 1: Choose Your Color Variant',
      chooseQuantity: 'Step 2: Select Quantity (Value Bundles)',
      sellingFast: '🔥 Selling fast in Europe',
      singleTitle: '1x Pettoh™ Pro Brush',
      singleSubtitle: 'Includes Brush, Refill Dropper & USB-C Cable',
      singleBadge: 'SAVE 30% TODAY',
      duoTitle: '2x Pettoh™ Duo Pack',
      duoSubtitle: '1 for Dog + 1 for Cat, or Gift a Pet Lover (Only €22.50 each)',
      duoBadge: 'MOST POPULAR • SAVE 44%',
      duoFreebie: 'FREE Tracked Express EU Shipping',
      familyTitle: '3x Family & Multi-Pet Pack',
      familySubtitle: 'Best Value for Multi-Pet Households (Only €19.99 each)',
      familyBadge: 'BEST VALUE • SAVE 50%',
      familyFreebie: 'FREE Detangling Pet Glove Included',
      deliveryTime: 'Tracked EU Delivery (6-9 Days)',
      moneyBack: '30-Day Money Back',
      freeReturns: 'Free Returns',
      ctaButton: 'Claim Discount & Checkout Now',
      selectedNotice: 'Tax Included • Free Delivery',
      dispatchedVia: 'Dispatched via National Carriers:',
      tryAtHome: 'Try At Home First: 30-Day Free Return Policy',
      klarnaActive: '🛍️ Klarna Pay in 30 Days Active',
      save: 'Save'
    },
    checkout: {
      headerTitle: 'Pettoh™ • Fast European Checkout',
      headerSubtitle: 'Official Stripe Checkout • Apple Pay, Google Pay & Klarna',
      step1: 'Contact & Delivery',
      step2: 'Stripe Payment',
      contactTitle: 'Step 1: Your Contact Info',
      emailPlaceholder: 'Email Address (required for tracking link & order confirmation)',
      emailHint: 'We will send your order confirmation and priority EU tracking number here.',
      fullName: 'Full Name',
      streetAddress: 'Street Address & House No.',
      postalCode: 'Postal Code',
      city: 'City',
      country: 'Country',
      preferredPayment: 'Step 2: Preferred Payment Method',
      klarnaBadge: '🛍️ Pay after delivery with Klarna',
      cardsApplePay: '💳 Cards / Apple Pay',
      klarnaPayLater: '🛍️ Klarna (Pay in 30d)',
      idealPayment: '🏦 iDEAL Banking',
      paypalDirect: '🅿️ PayPal Checkout',
      proceedButton: 'Proceed to Payment',
      connectingStripe: 'Connecting to Stripe Secure Gateway...',
      sslNotice: 'Official Stripe 256-Bit SSL • 30-Day Money-Back Guarantee',
      encrypted: '256-bit encrypted',
      freeShippingBadge: 'Free Tracked EU Shipping (6-9 days)',
      orderConfirmed: 'Order Confirmed!',
      thankYou: 'Thank you',
      orderSuccessDesc: 'Your order is confirmed and queued for immediate fulfillment. A confirmation email was sent to your email.',
      orderId: 'Order ID:',
      trackingCode: 'Tracking Code:',
      totalPaid: 'Total Paid:',
      trackPackage: 'Track Your Package ➔',
      close: 'Close'
    },
    sticky: {
      springSale: 'Spring Sale',
      ctaButton: 'Claim Discount Now',
      ratingText: '4.9/5 Rating (2.4k+ Reviews)',
      shippingText: 'Pettoh™ Pro • Free Tracked EU Shipping'
    }
  }
};
