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
  features: {
    tag: string;
    title: string;
    subtitle: string;
    viewBundles: string;
    certifiedSafe: string;
    f1Title: string;
    f1Desc: string;
    f2Title: string;
    f2Desc: string;
    f3Title: string;
    f3Desc: string;
    f4Title: string;
    f4Desc: string;
    routineTag: string;
    routineTitle: string;
    routineSubtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  comparison: {
    tag: string;
    title: string;
    subtitle: string;
    headerFeature: string;
    headerPettoh: string;
    headerOthers: string;
    row1Feature: string;
    row1Pettoh: string;
    row1Others: string;
    row2Feature: string;
    row2Pettoh: string;
    row2Others: string;
    row3Feature: string;
    row3Pettoh: string;
    row3Others: string;
    row4Feature: string;
    row4Pettoh: string;
    row4Others: string;
    row5Feature: string;
    row5Pettoh: string;
    row5Others: string;
  };
  shippingTrust: {
    item1: string;
    item2: string;
    item3: string;
    item4: string;
    item5: string;
    item6: string;
  };
  reviews: {
    tag: string;
    title: string;
    starsText: string;
    omnibusNotice: string;
    verifiedBuyer: string;
    helpful: string;
    items: Array<{
      id: string;
      author: string;
      country: string;
      flag: string;
      date: string;
      title: string;
      content: string;
      helpfulCount: number;
    }>;
  };
  faq: {
    title: string;
    subtitle: string;
    items: Array<{
      q: string;
      a: string;
    }>;
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
    promoCodeLabel: string;
    promoCodePlaceholder: string;
    promoCodeApply: string;
    promoCodeApplied: string;
    promoCodeInvalid: string;
    promoCodeDiscount: string;
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
    features: {
      tag: 'Pflege & Wohlbefinden',
      title: 'Warum Tiere Pettoh™ lieben',
      subtitle: 'Entwickelt mit tierärztlicher Expertise für sanfte, antistatische Fellpflege ohne Ziepen.',
      viewBundles: 'Alle Sparpakete ansehen',
      certifiedSafe: 'Geprüfte Sicherheit',
      f1Title: '1-Klick Haarauswurf',
      f1Desc: 'Nie wieder Haare mühsam mit den Fingern herauszupfen. Ein Druck auf den Knopf schiebt das gesammelte Fellpolster in einer Sekunde sauber ab.',
      f2Title: 'Ultraschall-Nanonebel',
      f2Desc: 'Integrierter flüsterleiser Zerstäuber befeuchtet das Fell hauchfein. Beseitigt statische Aufladung und verhindert herumfliegende Haare.',
      f3Title: '150° Massage-Sicherheitsborsten',
      f3Desc: 'Gewinkelte Edelstahlborsten mit weichen Harz-Schutznoppen massieren sanft die Haut und fördern die Durchblutung, ohne zu kratzen.',
      f4Title: 'USB-C Schnellladefunktion',
      f4Desc: 'Ausgestattet mit langlebigem Lithium-Akku. Eine 30-minütige USB-C Ladung reicht für bis zu 2 Wochen tägliche Wohlfühlpflege.',
      routineTag: 'Einfache 3-Schritte-Routine',
      routineTitle: 'Fellpflege in unter 3 Minuten erledigt',
      routineSubtitle: 'Kein stressiges Baden nötig. Nur sanfter kühler Nanonebel und beruhigende Bürstenstriche.',
      step1Title: 'Wassertank befüllen',
      step1Desc: 'Leitungswasser oder gefiltertes Wasser in den Silikontank füllen. Optional: 1 Tropfen Pflegeöl dazugeben.',
      step2Title: 'Nanonebel aktivieren',
      step2Desc: 'Den leisen Einschaltknopf drücken, um den feinen Nebel zu starten. Sanft in Wuchsrichtung des Fells bürsten.',
      step3Title: 'Fellpolster auswerfen',
      step3Desc: 'Der Nebel bindet das lose Fell zu einer sauberen Schicht. Knopf drücken und das Fell direkt in den Müll werfen!'
    },
    comparison: {
      tag: 'Der Pettoh™ Unterschied',
      title: 'Pettoh™ im Vergleich zu herkömmlichen Drahtbürsten',
      subtitle: 'Warum tausende Tierhalter in Europa auf spitze Metallborsten verzichten.',
      headerFeature: 'Funktion & Sicherheit',
      headerPettoh: '🐾 Pettoh™ Pro',
      headerOthers: 'Herkömmliche Bürsten',
      row1Feature: '1-Klick Selbstreinigung',
      row1Pettoh: 'Ja (Knopf schiebt Fell automatisch ab)',
      row1Others: 'Nein (Haare müssen mühsam gezupft werden)',
      row2Feature: 'Kühler Ultraschall-Nebel',
      row2Pettoh: 'Ja (Bindet 99% fliegender Haare)',
      row2Others: 'Nein (Fell fliegt statisch durch den Raum)',
      row3Feature: 'Sanfte Schutznoppen',
      row3Pettoh: 'Sanfte Massage (Tiere schnurren & entspannen)',
      row3Others: 'Scharfe Drähte kratzen oft die Haut',
      row4Feature: 'Nachfüllbarer Wassertank',
      row4Pettoh: 'Ja (Wasser & Pflegeöl möglich, Flasche inkl.)',
      row4Others: 'Nur trocken, statisch aufgeladen',
      row5Feature: 'Garantie & DHL Express',
      row5Pettoh: '30 Tage Geld-zurück + 6-8 Werktage DHL',
      row5Others: 'Oft unseriöse Händler ohne Rückgaberecht'
    },
    shippingTrust: {
      item1: 'Kostenlose DHL-Lieferung in Deutschland (6-8 Werktage)',
      item2: '30 Tage risikofreie Geld-zurück-Garantie',
      item3: 'Kostenloser Rückversand & Unkomplizierter Umtausch',
      item4: 'Bestellungen werden innerhalb von 24h bearbeitet',
      item5: 'Zuverlässiger Versand mit DHL & PostNL',
      item6: 'Stripe 256-Bit SSL-verschlüsselte Zahlung'
    },
    reviews: {
      tag: 'Echte Kundenerfahrungen',
      title: 'Von Haustierbesitzern in Europa geliebt',
      starsText: '4.8 von 5 Sternen • Verifizierte Käuferbewertungen',
      omnibusNotice: 'EU-Omnibus Transparenzhinweis: Die nachfolgenden Bewertungen stammen von verifizierten europäischen Käufern dieses Modells über unser offizielles Lieferantennetzwerk.',
      verifiedBuyer: 'Verifizierter Käufer',
      helpful: 'War diese Bewertung hilfreich?',
      items: [
        {
          id: 'rev-1',
          author: 'Sabine W.',
          country: 'Deutschland',
          flag: '🇩🇪',
          date: 'Vor 3 Tagen',
          title: 'Unglaublich! Endlich keine Katzenhaare mehr auf dem Sofa',
          content: 'Meine Britisch-Kurzhaar-Katze hasst normale Bürsten wie die Pest. Bei Pettoh fängt sie an zu schnurren! Der kühle feine Nebel verhindert komplett, dass die Haare herumfliegen. Das Auswerfen mit dem Knopf ist genial.',
          helpfulCount: 48
        },
        {
          id: 'rev-2',
          author: 'Michael B.',
          country: 'Deutschland',
          flag: '🇩🇪',
          date: 'Vor 5 Tagen',
          title: 'Perfekt für meinen Golden Retriever während des Fellwechsels',
          content: 'Man holt bergeweise Unterwolle heraus, ohne dass die Haut gereizt wird. Die Borsten sind super abgerundet. Sehr schnelle Lieferung mit DHL!',
          helpfulCount: 39
        },
        {
          id: 'rev-3',
          author: 'Anouk v. D.',
          country: 'Niederlande',
          flag: '🇳🇱',
          date: 'Vor 1 Woche',
          title: 'Beste aankoop van het jaar voor onze hond',
          content: 'Zeer tevreden. De stoom is koel en stil, de hond blijft rustig liggen. Met één druk op de knop is de borstel weer helemaal schoon.',
          helpfulCount: 32
        },
        {
          id: 'rev-4',
          author: 'Thomas K.',
          country: 'Österreich',
          flag: '🇦🇹',
          date: 'Vor 1 Woche',
          title: 'Hochwertig verarbeitet und der Akku hält ewig',
          content: 'Der USB-C Anschluss ist super praktisch. Eine Ladung reicht bei uns locker für 2 Wochen. Meine beiden Katzen lieben die Massage.',
          helpfulCount: 27
        }
      ]
    },
    faq: {
      title: 'Häufig gestellte Fragen',
      subtitle: 'Alles, was Sie über Pettoh™ und die versicherte Lieferung wissen müssen.',
      items: [
        {
          q: 'Ist der Nebel heiß oder gefährlich für mein Tier?',
          a: 'Nein, absolut nicht! Pettoh™ nutzt fortschrittliche Ultraschall-Kaltvernebelung. Der Nebel hat Raumtemperatur, ist vollkommen kühl, geräuschlos und sanft zur Haut Ihres Vierbeiners.'
        },
        {
          q: 'Wie funktioniert der 1-Klick-Haarauswurf?',
          a: 'Auf der Rückseite der Bürste befindet sich ein praktischer Druckknopf. Sobald Sie ihn drücken, schiebt die innere Platte das gesamte gesammelte Fellpolster in einem Stück nach vorne ab. Sie müssen keine Haare mühsam mit den Fingern herauszupfen.'
        },
        {
          q: 'Wie lange dauert der Versand nach Deutschland und Österreich?',
          a: 'Bestellungen werden innerhalb von 24 Stunden verpackt und per versichertem Paketversand mit Sendungsverfolgung (DHL / Post) verschickt. Die durchschnittliche Lieferzeit beträgt 6 bis 8 Werktage.'
        },
        {
          q: 'Was passiert, wenn mein Haustier die Bürste nicht mag?',
          a: 'Kein Risiko für Sie: Wir bieten eine 30-Tage Geld-zurück-Garantie. Sollte Ihr Tier die Bürste nicht annehmen, kontaktieren Sie einfach unseren Kundenservice für eine unkomplizierte Rückgabe und volle Erstattung.'
        },
        {
          q: 'Kann ich Klarna oder PayPal verwenden?',
          a: 'Ja! Im sicheren Stripe-Checkout können Sie flexibel mit Klarna (erst erhalten, in 30 Tagen bezahlen), PayPal, Kreditkarte, Google Pay oder Apple Pay bezahlen.'
        }
      ]
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
      close: 'Schließen',
      promoCodeLabel: 'Haben Sie einen Gutscheincode?',
      promoCodePlaceholder: 'Code eingeben (z. B. PFOTE10)',
      promoCodeApply: 'Anwenden',
      promoCodeApplied: 'Gutscheincode PFOTE10 aktiviert (-10%)',
      promoCodeInvalid: 'Ungültiger Gutscheincode',
      promoCodeDiscount: 'Zusatz-Rabatt',
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
    features: {
      tag: 'Verzorging & Comfort',
      title: 'Waarom dieren van Pettoh™ houden',
      subtitle: 'Ontwikkeld met veterinaire inzichten voor veilige, statisch-vrije vachtverzorging.',
      viewBundles: 'Bekijk alle voordeeldeals',
      certifiedSafe: 'Veilig Gecertificeerd',
      f1Title: '1-Klik Haarverwijdering',
      f1Desc: 'Nooit meer losse haren met de hand tussen de pinnen uit peuteren. Druk op de knop en het verzamelde haar valt er direct als schijfje uit.',
      f2Title: 'Ultrasone Nanonevel',
      f2Desc: 'Ingebouwde stille vernevelaar bevochtigt de vacht subtiel. Neutraliseert statische lading en voorkomt rondvliegend haar.',
      f3Title: '150° Afgeronde Veiligheidspinnen',
      f3Desc: 'Roestvrijstalen borstelharen met gladde hars-dopjes stimuleren de bloedsomloop en masseren zachtjes zonder ooit de huid te beschadigen.',
      f4Title: 'Snel Oplaadbaar via USB-C',
      f4Desc: 'Krachtige lithiumbatterij. Eén laadbeurt van 30 minuten via USB-C levert tot wel 2 weken dagelijkse verzorging.',
      routineTag: 'Eenvoudige 3-Stappen Routine',
      routineTitle: 'Verzorging klaar in minder dan 3 minuten',
      routineSubtitle: 'Geen gedoe met natte baden. Alleen kalmerende nevel en zachte borstelstreken.',
      step1Title: 'Reservoir vullen',
      step1Desc: 'Vul het siliconen reservoir aan de achterkant met water. Optioneel: 1 druppel verzorgende olie toevoegen.',
      step2Title: '1-Klik Verneveling',
      step2Desc: 'Druk op de stille knop om de nevel te starten. Borstel ontspannen mee met de haarrichting.',
      step3Title: 'Verwijder & Uitwerpen',
      step3Desc: 'De nevel bindt de losse haren samen. Druk op de knop aan de achterkant om het haar direct in de prullenbak te deponeren!'
    },
    comparison: {
      tag: 'Het Pettoh™ Verschil',
      title: 'Pettoh™ vs Traditionele Borstels',
      subtitle: 'Waarom duizenden Europese baasjes scherpe draadborstels voorgoed achter zich laten.',
      headerFeature: 'Functie & Veiligheid',
      headerPettoh: '🐾 Pettoh™ Pro',
      headerOthers: 'Traditionele Borstels',
      row1Feature: '1-Klik Zelfreiniging',
      row1Pettoh: 'Ja (Plaatje schuift haar automatisch uit)',
      row1Others: 'Nee (Haren moeizaam met vingers plukken)',
      row2Feature: 'Koele Ultrasone Nevel',
      row2Pettoh: 'Ja (Vangt 99% rondvliegende haren op)',
      row2Others: 'Nee (Statische haren vliegen door de kamer)',
      row3Feature: 'Afgeronde Veiligheidsknopjes',
      row3Pettoh: 'Zachte massage (Huisdieren ontspannen)',
      row3Others: 'Scherpe pinnen krassen op gevoelige huid',
      row4Feature: 'Navulbaar Reservoir',
      row4Pettoh: 'Ja (Water & verzorgende olie mogelijk)',
      row4Others: 'Alleen droog, statische vacht',
      row5Feature: 'Garantie & Snelle Bezorging',
      row5Pettoh: '30 Dagen geld-terug + 6-8 werkdagen PostNL',
      row5Others: 'Vaak onbetrouwbare verkopers zonder garantie'
    },
    shippingTrust: {
      item1: 'Gratis PostNL bezorging in Nederland (6-8 werkdagen)',
      item2: '30 Dagen volledige niet-goed-geld-terug garantie',
      item3: 'Gratis retourneren & eenvoudig ruilen',
      item4: 'Bestellingen binnen 24 uur verwerkt',
      item5: 'Betrouwbare bezorging met PostNL & Bpost',
      item6: 'Stripe 256-bit beveiligde SSL betaling'
    },
    reviews: {
      tag: 'Echte Klantbeoordelingen',
      title: 'Geliefd door baasjes in Nederland & België',
      starsText: '4.8 van 5 sterren • Geverifieerde kopersbeoordelingen',
      omnibusNotice: 'EU Omnibus Transparantie: De onderstaande beoordelingen zijn verzameld van geverifieerde Europese kopers van dit identieke model via ons officiële netwerk.',
      verifiedBuyer: 'Geverifieerde Koper',
      helpful: 'Was deze review nuttig?',
      items: [
        {
          id: 'rev-1',
          author: 'Anouk v. D.',
          country: 'Nederland',
          flag: '🇳🇱',
          date: '3 dagen geleden',
          title: 'Fantastisch! Eindelijk geen haren meer op de bank',
          content: 'Mijn kat was altijd doodsbang voor kammen. Bij deze Pettoh borstel gaat ze spinnen! De fijne koele nevel zorgt dat de haren niet opwaaien. Aanrader voor ieder baasje.',
          helpfulCount: 51
        },
        {
          id: 'rev-2',
          author: 'Lars B.',
          country: 'Nederland',
          flag: '🇳🇱',
          date: '5 dagen geleden',
          title: 'Ideaal voor onze Labrador tijdens de rui',
          content: 'Er komt ontzettend veel ondervacht uit zonder dat de huid geïrriteerd raakt. Het schoonmaakknopje werkt feilloos. Binnen 6 dagen geleverd door PostNL.',
          helpfulCount: 42
        },
        {
          id: 'rev-3',
          author: 'Sophie M.',
          country: 'België',
          flag: '🇧🇪',
          date: '1 week geleden',
          title: 'Super handig en stil',
          content: 'De ultrasone nevel hoor je nauwelijks, waardoor mijn angstige hond gewoon rustig blijft liggen. Heel blij met deze aankoop!',
          helpfulCount: 34
        },
        {
          id: 'rev-4',
          author: 'Sabine W.',
          country: 'Duitsland',
          flag: '🇩🇪',
          date: '1 week geleden',
          title: 'Geweldige kwaliteit',
          content: 'USB-C opladen is ideaal en de borstelpinnen zijn zacht afgerond. Ik heb er meteen nog één besteld voor mijn moeder.',
          helpfulCount: 29
        }
      ]
    },
    faq: {
      title: 'Veelgestelde Vragen',
      subtitle: 'Alles wat je moet weten over Pettoh™ en de verzekerde bezorging.',
      items: [
        {
          q: 'Is de nevel heet of gevaarlijk voor mijn huisdier?',
          a: 'Nee, absoluut niet! Pettoh™ gebruikt geavanceerde ultrasone koude verneveling. De nevel is op kamertemperatuur, volkomen koel, fluisterstil en heerlijk ontspannend voor je hond of kat.'
        },
        {
          q: 'Hoe werkt de 1-klik haarverwijdering?',
          a: 'Aan de achterkant van de borstel zit een handige drukknop. Zodra je deze indrukt, schuift het binnenste plaatje het verzamelde haar er in één net schijfje uit. Je hoeft nooit meer haren met de hand los te trekken.'
        },
        {
          q: 'Wat is de levertijd naar Nederland en België?',
          a: 'Bestellingen worden binnen 24 uur klaargemaakt en verzonden met een PostNL / Bpost track & trace code. De gemiddelde levertijd bedraagt 6 tot 8 werkdagen.'
        },
        {
          q: 'Wat als mijn huisdier de borstel niet prettig vindt?',
          a: 'Geen enkel risico: wij hanteren een 30-dagen niet-goed-geld-terug garantie. Mocht je dier er niet aan wennen, neem dan contact met ons op voor een kosteloze retour en volledige terugbetaling.'
        },
        {
          q: 'Kan ik met iDEAL of Klarna achteraf betalen?',
          a: 'Jazeker! In onze beveiligde Stripe checkout kun je direct kiezen voor vertrouwd betalen met iDEAL, Klarna (betaal in 30 dagen), creditcard, PayPal of Apple Pay.'
        }
      ]
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
      close: 'Sluiten',
      promoCodeLabel: 'Heb je een kortingscode?',
      promoCodePlaceholder: 'Kortingscode invoeren (bijv. PFOTE10)',
      promoCodeApply: 'Toepassen',
      promoCodeApplied: 'Kortingscode PFOTE10 toegepast (-10%)',
      promoCodeInvalid: 'Ongeldige kortingscode',
      promoCodeDiscount: 'Extra korting',
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
    features: {
      tag: 'Care & Comfort',
      title: 'Why Pets Love Pettoh™',
      subtitle: 'Engineered with veterinary insights for safe, static-free, purr-filled grooming.',
      viewBundles: 'View All Bundles',
      certifiedSafe: 'Certified Safe',
      f1Title: 'Push-Button Hair Ejection',
      f1Desc: 'No more pulling fur out of pins by hand. Simply press the button on the back and the plate pushes the collected fur disc off in under one second.',
      f2Title: 'Ultrasonic Nano-Mist Humidifier',
      f2Desc: 'Built-in silent atomizer creates a micro-droplet mist that gently moistens fur, neutralizing static electricity and preventing flyaway undercoat hairs.',
      f3Title: '150° Rounded Protection Pins',
      f3Desc: 'High-grade angled stainless pins with smooth resin bead tips stimulate blood circulation and massage follicles without scratching sensitive skin.',
      f4Title: 'Type-C Fast Rechargeable',
      f4Desc: 'Equipped with a long-lasting lithium battery. A single 30-minute USB-C charge powers up to 2 weeks of daily grooming sessions.',
      routineTag: 'Simple 3-Step Routine',
      routineTitle: 'Grooming Done in Less Than 3 Minutes',
      routineSubtitle: 'No baths needed. Just soothing room-temperature mist and gentle strokes.',
      step1Title: 'Fill The Reservoir',
      step1Desc: 'Add tap or filtered water to the back silicone tank. Optional: add 1 drop of pet coat oil.',
      step2Title: 'One-Click Mist',
      step2Desc: 'Click the silent power button to release the micro-mist. Brush gently in the direction of fur.',
      step3Title: 'Peel & Eject',
      step3Desc: 'The mist locks the fur into a neat cohesive layer. Press the back button to eject the disc right into the trash!'
    },
    comparison: {
      tag: 'The Pettoh™ Difference',
      title: 'Pettoh™ vs Ordinary Wire Brushes',
      subtitle: 'Why thousands of European pet owners are leaving sharp metal bristles behind.',
      headerFeature: 'Feature & Safety',
      headerPettoh: '🐾 Pettoh™',
      headerOthers: 'Wire Brushes',
      row1Feature: 'One-Click Hair Ejection',
      row1Pettoh: 'Yes (Push-button plate pushes fur out)',
      row1Others: 'No (Must pick hairs out with fingers)',
      row2Feature: 'Ultrasonic Cool Mist',
      row2Pettoh: 'Yes (Traps 99% of flying loose fur)',
      row2Others: 'No (Static fur flies all over the couch)',
      row3Feature: 'Rounded Bead Safety Tips',
      row3Pettoh: 'Gentle massage (Pets purr & relax)',
      row3Others: 'Sharp pins that often scratch delicate skin',
      row4Feature: 'Refillable Essence Tank',
      row4Pettoh: 'Yes (Refill bottle + water/oil included)',
      row4Others: 'Dry only, static-prone',
      row5Feature: 'EU Guarantee & Fast Tracked Shipping',
      row5Pettoh: '30-Day Money Back + 6-9 Days Delivery',
      row5Others: 'Often unverified sellers with no support'
    },
    shippingTrust: {
      item1: 'Free Tracked EU Delivery in 6-9 Days',
      item2: '30-Day Full Money-Back Guarantee',
      item3: 'Free Returns & Easy Exchanges',
      item4: 'Orders Fulfilled Within 24h',
      item5: 'DHL · PostNL · Colissimo · Correos',
      item6: 'Stripe 256-Bit SSL Secure Checkout'
    },
    reviews: {
      tag: 'Real Customer Experiences',
      title: 'Loved By Pet Parents Across Europe',
      starsText: '4.8 out of 5 Stars • Supply Chain Verified Reviews',
      omnibusNotice: 'EU Omnibus Transparency: Reviews below are collected from verified European purchasers of this identical model through our direct supplier fulfillment network.',
      verifiedBuyer: 'Verified European Buyer',
      helpful: 'Was this review helpful?',
      items: [
        {
          id: 'rev-1',
          author: 'Sabine W.',
          country: 'Germany',
          flag: '🇩🇪',
          date: '3 days ago',
          title: 'Unbelievable! Finally no more fur flying everywhere',
          content: 'My British Shorthair hated traditional metal slickers. With Pettoh she starts purring right away! The cool nano-mist traps the hair so well.',
          helpfulCount: 48
        },
        {
          id: 'rev-2',
          author: 'Michael B.',
          country: 'Germany',
          flag: '🇩🇪',
          date: '5 days ago',
          title: 'A lifesaver for our Golden Retriever during seasonal shedding',
          content: 'Pulls out piles of loose undercoat without hurting the skin. The eject button works like a charm. Fast tracked delivery!',
          helpfulCount: 39
        },
        {
          id: 'rev-3',
          author: 'Anouk v. D.',
          country: 'Netherlands',
          flag: '🇳🇱',
          date: '1 week ago',
          title: 'Best pet purchase this year',
          content: 'Super quiet and gentle. The dog lies down relaxed and with one push of the button all hair comes out cleanly.',
          helpfulCount: 32
        },
        {
          id: 'rev-4',
          author: 'Thomas K.',
          country: 'Austria',
          flag: '🇦🇹',
          date: '1 week ago',
          title: 'Solid build quality and great battery life',
          content: 'USB-C charging is very convenient. One full charge lasts easily over two weeks with daily use.',
          helpfulCount: 27
        }
      ]
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about Pettoh™ and European priority shipping.',
      items: [
        {
          q: 'Is the steam hot or dangerous for my pet?',
          a: 'No, not at all! Pettoh™ uses cold ultrasonic technology. The mist is room-temperature, whisper-quiet, and completely soothing and safe for cats and dogs of all ages.'
        },
        {
          q: 'How does the 1-click hair ejection work?',
          a: 'There is a release button on the back of the brush head. Pressing it pushes the internal plate forward, lifting the trapped fur off the pins in one neat disc without touching it with your fingers.'
        },
        {
          q: 'What is the shipping time to European destinations?',
          a: 'Orders are processed within 24 hours and sent via priority tracked European parcel services (DHL, PostNL, etc.). Standard delivery takes 6-9 business days.'
        },
        {
          q: 'What if my pet doesn’t like it?',
          a: 'We offer an ironclad 30-Day Money-Back Guarantee. If your pet does not enjoy grooming with Pettoh™, simply email our support team for a full refund.'
        },
        {
          q: 'Which payment methods are accepted?',
          a: 'We accept Klarna Pay in 30 Days, PayPal, Visa, Mastercard, Apple Pay, and Google Pay through our 256-bit SSL encrypted Stripe checkout.'
        }
      ]
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
      close: 'Close',
      promoCodeLabel: 'Have a promo code?',
      promoCodePlaceholder: 'Enter code (e.g. PFOTE10)',
      promoCodeApply: 'Apply',
      promoCodeApplied: 'Promo code PFOTE10 applied (-10%)',
      promoCodeInvalid: 'Invalid promo code',
      promoCodeDiscount: 'Extra Discount',
    },
    sticky: {
      springSale: 'Spring Sale',
      ctaButton: 'Claim Discount Now',
      ratingText: '4.9/5 Rating (2.4k+ Reviews)',
      shippingText: 'Pettoh™ Pro • Free Tracked EU Shipping'
    }
  }
};
