// Shared content extracted from /content/ (the scraped flagiosielsko.pl data).
// Single source of truth for all 10 homepage examples.

export const company = {
  name: "J-ART",
  fullName: "J-ART Flagi Osielsko",
  legalName: "J-ART Janusz Wlekliński",
  foundedYear: 1984,
  industryYear: 1989,
  yearsInBusiness: 42,
  yearsInFlags: 36,
  region: "Kujawsko-Pomorskie",
  city: "Osielsko",
  address: "ul. Centralna 12 B",
  postal: "86-031",
  nip: "PL 5541105954",
  phone: "+48 602 619 763",
  phoneHref: "tel:+48602619763",
  emails: [
    "flagi@j-art.eu",
    "flagi@flagiosielsko.pl",
    "j-art@datum.pl",
  ],
  primaryEmail: "flagi@j-art.eu",
  hours: {
    weekdays: "Pon–Pt 8:00–18:00",
    saturday: "Sob 9:00–16:00",
    note: "sobota po wcześniejszym kontakcie",
  },
} as const;

export const taglines = [
  "Flagi szyte z pasją od 1984 roku",
  "Rodzinna manufaktura flag z Kujaw",
  "Twoja flaga. Nasza precyzja.",
  "Od 1984 roku produkujemy flagi, które trwają",
  "Manufaktura flag · od pokoleń",
];

export const aboutShort =
  "Firma J-ART to firma rodzinna, działająca na rynku od roku 1984, a w branży reklamowej od roku 1989. Nasze ponad 30-letnie doświadczenie sprawia, że w produkcji flag firmowych, narodowych i innych zajmujemy znaczącą pozycję w regionie kujawsko-pomorskim.";

export const aboutLong =
  "Produkowane przez nas flagi oraz inne materiały reklamowe wykonane są z odpowiednich materiałów wysokiej jakości, a do każdego zamówienia, niezależnie od wielkości, podchodzimy z najwyższą starannością.";

export const services = [
  { label: "Flagi firmowe, gabinetowe, państw, miast, gmin, klubowe", short: "Flagi" },
  { label: "Windery — flagi plażowe", short: "Windery" },
  { label: "Banery reklamowe", short: "Banery" },
  { label: "Godła w ramkach", short: "Godła" },
  { label: "Nadruki na tkaninach", short: "Nadruki" },
  { label: "Projektowanie graficzne", short: "Projekt" },
  { label: "Wizytówki, ulotki, plakaty", short: "Druk" },
  { label: "Maszty składane", short: "Maszty" },
  { label: "Akcesoria do masztów", short: "Akcesoria" },
];

export const productCategories = [
  {
    slug: "flagi",
    title: "Flagi",
    summary: "Firmowe, państw, miast, gmin, klubowe, gabinetowe",
    description:
      "Poliester 110–120 g/m², sitodruk lub sublimacja, profesjonalne obszycie, wytrzymałość do 60 km/h wiatru.",
    image:
      "https://flagiosielsko.pl/wp-content/uploads/2026/03/Obrazek-z-flagami-733x1024.png",
    fallback:
      "https://images.unsplash.com/photo-1568575257606-f76823c61b39?w=1200&q=80",
  },
  {
    slug: "flagietki",
    title: "Flagietki",
    summary: "Małe flagi z kanalikiem na drążek",
    description:
      "Druk cyfrowy lub sitodruk na poliestrze. Standardowo z zaszytym kanalikiem 4 mm.",
    image: "https://flagiosielsko.pl/wp-content/uploads/2026/03/flagietka-150x150.jpg",
    fallback:
      "https://images.unsplash.com/photo-1604147495798-57beb5d6af73?w=1200&q=80",
  },
  {
    slug: "banery",
    title: "Banery",
    summary: "Frontlit 500 g/m² lub mesh 330 g/m²",
    description:
      "Wodoodporne, na tkaninie powlekanej PCV. Brzegi zagrzewane, kółka plandekowe co 50 cm.",
    image: "https://flagiosielsko.pl/wp-content/uploads/2026/03/BANER1-150x150.jpg",
    fallback:
      "https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?w=1200&q=80",
  },
  {
    slug: "proporczyki",
    title: "Proporczyki",
    summary: "Dwustronny druk na satynie lub poliestrze",
    description:
      "Sitodruk lub druk cyfrowy na poliestrze usztywnianym lub satynie. Indywidualne rozmiary i kształty.",
    image:
      "https://flagiosielsko.pl/wp-content/uploads/2026/03/Proporczyk-150x150.jpg",
    fallback:
      "https://images.unsplash.com/photo-1601758174039-5b46f7be62cd?w=1200&q=80",
  },
  {
    slug: "koszulki",
    title: "Koszulki",
    summary: "Trwały sitodruk wielokolorowy",
    description:
      "Nadruk metodą sitodruku, na koszulkach klienta lub zakupionych przez J-ART.",
    image:
      "https://flagiosielsko.pl/wp-content/uploads/2026/03/KOSZULKA1-1-150x150.jpg",
    fallback:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=80",
  },
  {
    slug: "maszty",
    title: "Maszty",
    summary: "Składane, winder, gabinetowe",
    description:
      "Aluminium anodowane 50 mm, włókno szklane, łukowe premium — wysokości 2,5–6,4 m.",
    image:
      "https://flagiosielsko.pl/wp-content/uploads/2026/03/SPORTWAY_winder-150x150.jpg",
    fallback:
      "https://images.unsplash.com/photo-1564506411-ffa7d5ee8ab9?w=1200&q=80",
  },
  {
    slug: "podstawy",
    title: "Podstawy",
    summary: "Szpile, krzyżakowe, płaskie, zbiorniki",
    description:
      "Pełna gama podstaw do masztów winder i flag gabinetowych — od 6 do 20 kg, w tym najazdowe.",
    image:
      "https://flagiosielsko.pl/wp-content/uploads/2026/03/Flaga-gabinetowa-na-stojaku-SILVER-1-150x150.png",
    fallback:
      "https://images.unsplash.com/photo-1542317854-e3c1ec9fe6b8?w=1200&q=80",
  },
  {
    slug: "stojaczki",
    title: "Stojaczki",
    summary: "Do proporczyków i flagietek",
    description:
      "Metalowe złote i srebrne, kamienne lub drewniane. Jedno- i wieloramienne.",
    image:
      "https://flagiosielsko.pl/wp-content/uploads/2026/03/Flagi-gabinetowe-na-stojakach-SILVER-2-150x150.png",
    fallback:
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=1200&q=80",
  },
] as const;

export const gallery = [
  { src: "https://flagiosielsko.pl/wp-content/uploads/2026/03/nissan-2-150x150.png", caption: "flagi masztowe sitodruk", client: "Nissan", category: "flagi" },
  { src: "https://flagiosielsko.pl/wp-content/uploads/2026/04/YAMAHA-150x150.png", caption: "flagi YAMAHA sitodruk", client: "Yamaha", category: "flagi" },
  { src: "https://flagiosielsko.pl/wp-content/uploads/2026/03/PRIME-FOOD-150x150.jpg", caption: "flagi masztowe sitodruk", client: "Prime Food", category: "flagi" },
  { src: "https://flagiosielsko.pl/wp-content/uploads/2026/03/MAC-GRAF-150x150.jpg", caption: "flagi masztowe technika mieszana", client: "Mac-Graf", category: "flagi" },
  { src: "https://flagiosielsko.pl/wp-content/uploads/2026/03/PIXEL-150x150.jpg", caption: "flagi masztowe wszywane", client: "Pixel", category: "flagi" },
  { src: "https://flagiosielsko.pl/wp-content/uploads/2026/03/gmina-osielsko-150x150.png", caption: "flagi masztowe technika mieszana", client: "Gmina Osielsko", category: "flagi" },
  { src: "https://flagiosielsko.pl/wp-content/uploads/2026/03/urzad-wojewodzki-150x150.png", caption: "flaga Polski na maszcie", client: "Urząd Wojewódzki", category: "narodowe" },
  { src: "https://flagiosielsko.pl/wp-content/uploads/2026/03/SPORTWAY_winder-150x150.jpg", caption: "windery sublimacja", client: "Sportway", category: "windery" },
  { src: "https://flagiosielsko.pl/wp-content/uploads/2026/03/Flagi_winder_WSG-150x150.jpg", caption: "windery sitodruk i zszywanie", client: "WSG", category: "windery" },
  { src: "https://flagiosielsko.pl/wp-content/uploads/2026/03/DUDEK_winder-150x150.jpg", caption: "windery sitodruk", client: "Dudek", category: "windery" },
  { src: "https://flagiosielsko.pl/wp-content/uploads/2026/03/cortez-150x150.png", caption: "windery sublimacja", client: "Cortez", category: "windery" },
  { src: "https://flagiosielsko.pl/wp-content/uploads/2026/03/Flaga-gabinetowa-na-stojaku-SILVER-1-150x150.png", caption: "flaga gabinetowa satyna", client: "linia SILVER", category: "gabinetowe" },
  { src: "https://flagiosielsko.pl/wp-content/uploads/2026/03/Proporczyk-150x150.jpg", caption: "proporczyki sitodruk", client: null, category: "proporczyki" },
  { src: "https://flagiosielsko.pl/wp-content/uploads/2026/03/wilk-150x150.png", caption: "proporzec sublimacja", client: null, category: "proporczyki" },
  { src: "https://flagiosielsko.pl/wp-content/uploads/2026/03/BANER1-150x150.jpg", caption: "banery frontlit", client: null, category: "banery" },
  { src: "https://flagiosielsko.pl/wp-content/uploads/2026/03/kladka-150x150.png", caption: "banery frontlit", client: null, category: "banery" },
] as const;

export const clients = [
  "Nissan",
  "Yamaha",
  "Prime Food",
  "Mac-Graf",
  "Pixel",
  "Sportway",
  "WSG",
  "Dudek",
  "Cortez",
  "Gmina Osielsko",
  "Urząd Wojewódzki",
];

export const pricing = {
  groups: [
    {
      title: "Flagi Polski",
      items: [
        { name: "Banderka 32 × 20 cm", price: "18,45 zł" },
        { name: "110 × 70 cm na drzewiec", price: "24,60 zł" },
        { name: "110 × 70 cm na maszt", price: "30,75 zł" },
        { name: "150 × 94 cm na maszt", price: "55,35 zł" },
        { name: "200 × 125 cm na maszt", price: "88,56 zł" },
        { name: "240 × 150 cm na maszt", price: "98,40 zł" },
      ],
    },
    {
      title: "Flagi UE",
      items: [
        { name: "110 × 70 cm na maszt", price: "55,35 zł" },
        { name: "150 × 94 cm na maszt", price: "82,41 zł" },
        { name: "200 × 125 cm na maszt", price: "159,90 zł" },
        { name: "240 × 150 cm na maszt", price: "172,20 zł" },
      ],
    },
    {
      title: "Pozostałe",
      items: [
        { name: "Flagietka 21 × 13 cm", price: "od 11,07 zł" },
        { name: "Proporczyk dwustronny", price: "od 49,20 zł" },
        { name: "Godło w ramce 30 × 40 cm", price: "od 49,20 zł" },
      ],
    },
  ],
};

export const valueProps = [
  {
    label: "Doświadczenie",
    value: "30+ lat",
    detail: "w produkcji flag",
  },
  {
    label: "Rok założenia",
    value: "1984",
    detail: "firma rodzinna",
  },
  {
    label: "Wytrzymałość",
    value: "60 km/h",
    detail: "wiatru bez uszkodzeń",
  },
  {
    label: "Termin realizacji",
    value: "od 4 dni",
    detail: "roboczych",
  },
];

export const faqs = [
  {
    q: "Ile czeka się na flagę?",
    a: "Minimum 4 dni robocze od potwierdzenia zamówienia. Większe projekty wycenamy indywidualnie — z jasnym terminem na początku rozmowy.",
  },
  {
    q: "Czy projektujecie sami?",
    a: "Tak — mamy własny dział projektowania graficznego. Dostarcz logo lub brief, my zaprojektujemy pełen layout flagi.",
  },
  {
    q: "Jak wytrzymała jest flaga?",
    a: "Wytrzymuje wiatr do 60 km/h. Przy silniejszym zalecamy opuszczenie. Pranie raz w miesiącu w 40°C wyraźnie przedłuża żywotność.",
  },
  {
    q: "Czy jedna sztuka też?",
    a: "Tak. Robimy od jednej sztuki — nie dyskryminujemy małych zamówień. Cena za sztukę spada od 5+ sztuk.",
  },
  {
    q: "Jak wygląda wysyłka?",
    a: "DPD, Paczkomat InPost lub firma kurierska wskazana przez Ciebie. Wysyłka rusza po opłaceniu faktury proforma.",
  },
  {
    q: "Wystawiacie fakturę VAT?",
    a: "Oczywiście. Pełna księgowość. Faktura na firmę, instytucję publiczną lub osobę prywatną — jak potrzebujesz.",
  },
];

export const techniques = [
  { name: "Sitodruk", short: "Trwały, jednorodne kolory, ekonomiczny przy większych nakładach" },
  { name: "Sublimacja", short: "Druk cyfrowy, fotorealistyczny, drobne detale i gradient" },
  { name: "Technika mieszana", short: "Łączy sitodruk i sublimację dla efektu premium" },
  { name: "Wszywane aplikacje", short: "Najtrwalsze, rzemieślnicze wykończenie" },
];

export const examples = [
  { slug: "example-1", name: "Klasyczny — heritage", note: "Krem, czerwień, serif · linia czasu 1984–2026", accent: "#9b1d20" },
  { slug: "example-2", name: "Szwajcarski minimalizm", note: "Numerowane sekcje · proces 6-krokowy", accent: "#dc143c" },
  { slug: "example-3", name: "Statement + manifest", note: "Ogromna typografia, marquee, 4-punktowy manifest", accent: "#e30613" },
  { slug: "example-4", name: "Mroczne kino · premium", note: "Glassmorphism + studium realizacji dla Yamaha", accent: "#ef3b46" },
  { slug: "example-5", name: "Bento w hero + sekcje", note: "Bento tylko w hero, klasyczne sekcje niżej", accent: "#dc143c" },
  { slug: "example-6", name: "Lookbook / katalog", note: "Rozdziały, alternujące spready, serif italic", accent: "#c1121f" },
  { slug: "example-7", name: "Neo-brutalizm + FAQ", note: "Grube ramki, przekrzywione karty, FAQ", accent: "#ff3b30" },
  { slug: "example-8", name: "Patriotyczny + instytucje", note: "Biało-czerwona + sekcja dla urzędów", accent: "#b1102f" },
  { slug: "example-9", name: "Rzemiosło + list założyciela", note: "Terakota, list z pracowni, rozbudowana stopka", accent: "#b85c38" },
  { slug: "example-10", name: "Manufaktura przemysłowa", note: "Stal + żółty, blueprint, zapytanie ofertowe", accent: "#facc15" },
];
