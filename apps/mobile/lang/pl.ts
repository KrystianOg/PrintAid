import type { Resources } from "./en";

export const pl = {
  common: {
    hello: "Cześć",
    world: "Świat",
    loading: "Ładowanie...",
  },
  tabs: {
    index: "Strona główna",
    browse: "Przeglądaj",
    cart: "Koszyk",
    settings: "Ustawienia",
  },
  home: {
    banner: "Witamy w aplikacji!",
    browseProducts: "Przeglądaj produkty",
    shopByCategory: "Zakupy według kategorii",
    popular: "Popularne",
  },
  browse: {
    search: "Szukaj",
    filter: "Filtruj",
    sort: "Sortuj",
  },
  product: {
    name: "Nazwa produktu",
    description: "Opis produktu",
    price: "Cena",
    addToCart: "Dodaj do koszyka",
    category: "Kategoria",
    similar: "Podobne produkty",
    related: "Powiązane produkty",
    realizationTime: "Czas realizacji",
  },
  cart: {
    noItems: "Brak przedmiotów w koszyku",
    total: "Razem",
    checkout: "Zamówienie",
    subtotal: "Suma częściowa",
  },
  settings: {
    title: "Ustawienia",
    changeLanguage: "Zmień język",
    toggleTheme: "Przełącz motyw",
  },
} satisfies Resources;
