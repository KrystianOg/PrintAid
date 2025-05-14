import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./en";
import { pl } from "./pl";

export const resources = {
  en,
  pl,
};

export const supportedLocales = Object.keys(
  resources
) as (keyof typeof resources)[];
export type SupportedLocale = (typeof supportedLocales)[number];

export const defaultNS = "common";

void i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  defaultNS,
  fallbackLng: "en",
  debug: true,
});

export default i18n;
