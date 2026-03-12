// TODO: Zmień na prawdziwe dane swojej firmy / agencji
export const SITE_CONFIG = {
  name: "sitexe",
  tagline: "Elitarna inżynieria webu, mobile i aplikacji",
  description: "Tworzymy strony internetowe oraz aplikacje webowe i mobilne.",
  url: "https://www.sitexe.dev",
  email: "kontakt@sitexe.dev",
  phone: "+48 514 090 860",
}

export const NAV_LINKS = [
  { name: "// USŁUGI", href: "#services" },
  { name: "// TECHNOLOGIE", href: "#tech" },
  { name: "// REALIZACJE", href: "#portfolio" },
  { name: "// DLACZEGO MY", href: "#why-us" },
  { name: "// KONTAKT", href: "#contact" },
]

export const SERVICES = [
  {
    group: "CORE_SERVICES",
    items: [
      {
        id: "01",
        title: "Dedykowane Strony Internetowe",
        description: "Projektowanie i wdrażanie stron internetowych na zamówienie, tworzonych od zera pod konkretne cele biznesowe klienta.",
        icon: "Globe",
      },
      {
        id: "02",
        title: "Aplikacje App Store i Google Play",
        description: "Tworzenie i publikacja aplikacji mobilnych gotowych do dystrybucji w Apple App Store oraz Google Play.",
        icon: "Smartphone",
      },
    ],
  },
  {
    group: "EXTENDED_SERVICES",
    items: [
      {
        id: "03",
        title: "Integracje Płatności",
        description: "Implementacja prostych i bezpiecznych systemów płatności bezpośrednio na stronie lub w aplikacji.",
        icon: "CreditCard",
      },
      {
        id: "04",
        title: "Bazy Danych",
        description: "Projektowanie i konfiguracja baz danych gwarantujących stabilny przepływ informacji i gotowość do skalowania.",
        icon: "Database",
      },
      {
        id: "05",
        title: "Hosting i Domeny",
        description: "Kompleksowa obsługa hostingu i domen, od konfiguracji po uruchomienie środowiska produkcyjnego.",
        icon: "Server",
      },
      {
        id: "06",
        title: "Design Pod Klienta",
        description: "Warstwa wizualna i UX przygotowywane w pełnej zgodności z preferencjami klienta i charakterem marki.",
        icon: "Palette",
      },
    ],
  },
]

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "ZEBRANIE_WYMAGAŃ",
    desc: "Klient opisuje potrzeby, oczekiwany wygląd projektu, przesyła inspiracje oraz komplet niezbędnych danych.",
  },
  {
    num: "02",
    title: "SZYBKIE_PRZYGOTOWANIE",
    desc: "W ciągu kilku dni wracamy z gotowym projektem opartym o uzgodnione wymagania i cele wdrożeniowe.",
  },
  {
    num: "03",
    title: "WDROŻENIE_I_AKCEPTACJA",
    desc: "Prezentujemy finalny efekt, dopracowujemy szczegóły i finalizujemy projekt po pełnej akceptacji klienta.",
  },
  {
    num: "04",
    title: "STAŁE_WSPARCIE_ZMIAN",
    desc: "Po realizacji klient ma stały kanał kontaktu i może zlecać kolejne modyfikacje w dowolnym momencie.",
  },
]

export const PAYMENT_TERMS = {
  upfront: "20% na start",
  final: "80% po realizacji i pełnej akceptacji",
}

export const PROJECTS = [
  {
    id: 1,
    title: "Projekt: LUMINA",
    category: "Aplikacja Web",
    image: "/images/placeholder-1.jpg", // TODO: Podmień obrazki w public/images
    link: "https://my-google-ai-studio-applet-733146659897.us-west1.run.app/",
  },
  {
    id: 2,
    title: "Projekt: YUGEN",
    category: "Aplikacja Web",
    image: "/images/placeholder-2.jpg",
    link: "https://yugen-733146659897.us-west1.run.app/",
  },
  {
    id: 3,
    title: "Projekt: PRIZM_DRIVE",
    category: "Przechowywanie Danych",
    image: "/images/placeholder-3.jpg",
    link: "https://prizm-drive-733146659897.us-west1.run.app/",
  },
]