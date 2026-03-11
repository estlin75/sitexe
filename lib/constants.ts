// TODO: Zmień na prawdziwe dane swojej firmy / agencji
export const SITE_CONFIG = {
  name: "sitexe",
  tagline: "Elitarne Inzynieria Web i Aplikacji",
  description: "Nowoczesna wizytowka agencji tworzenia stron i aplikacji",
  email: "kontakt@sitexe.dev",
  phone: "+48 514 090 860",
}

export const NAV_LINKS = [
  { name: "// USLUGI", href: "#services" },
  { name: "// TECHNOLOGIE", href: "#tech" },
  { name: "// REALIZACJE", href: "#portfolio" },
  { name: "// KONTAKT", href: "#why-us" },
  { name: "// KONTAKT", href: "#contact" },
]

export const SERVICES = [
  {
    group: "CORE_SERVICES",
    items: [
      {
        id: "01",
        title: "Dedykowane Strony Internetowe",
        description: "Projektowanie i wdrazanie stron internetowych na zamowienie, tworzonych od zera pod konkretne cele biznesowe klienta.",
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
        title: "Integracje Platnosci",
        description: "Implementacja prostych i bezpiecznych systemow platnosci bezposrednio na stronie lub w aplikacji.",
        icon: "CreditCard",
      },
      {
        id: "04",
        title: "Bazy Danych",
        description: "Projektowanie i konfiguracja baz danych gwarantujacych stabilny przeplyw informacji i gotowosc do skalowania.",
        icon: "Database",
      },
      {
        id: "05",
        title: "Hosting i Domeny",
        description: "Kompleksowa obsluga hostingu i domen, od konfiguracji po uruchomienie srodowiska produkcyjnego.",
        icon: "Server",
      },
      {
        id: "06",
        title: "Design Pod Klienta",
        description: "Warstwa wizualna i UX przygotowywane w pelnej zgodnosci z preferencjami klienta i charakterem marki.",
        icon: "Palette",
      },
    ],
  },
]

export const PROCESS_STEPS = [
  {
    num: "01",
    title: "ZEBRANIE_WYMAGAN",
    desc: "Klient opisuje potrzeby, oczekiwany wyglad projektu, przesyla inspiracje oraz komplet niezbednych danych.",
  },
  {
    num: "02",
    title: "SZYBKIE_PRZYGOTOWANIE",
    desc: "W ciagu kilku dni wracamy z gotowym projektem opartym o uzgodnione wymagania i cele wdrozeniowe.",
  },
  {
    num: "03",
    title: "WDROZENIE_I_AKCEPTACJA",
    desc: "Prezentujemy finalny efekt, dopracowujemy szczegoly i finalizujemy projekt po pelnej akceptacji klienta.",
  },
  {
    num: "04",
    title: "STALE_WSPARCIE_ZMIAN",
    desc: "Po realizacji klient ma staly kanal kontaktu i moze zlecac kolejne modyfikacje w dowolnym momencie.",
  },
]

export const PAYMENT_TERMS = {
  upfront: "20% na start",
  final: "80% po realizacji i pelnej akceptacji",
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