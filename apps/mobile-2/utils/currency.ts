import { supportedLocales } from "@/lang/i18n";
import type { SupportedLocale } from "@/lang/i18n";

const supportedCurrencies = ["EUR", "PLN"] as const;
export type SupportedCurrency = (typeof supportedCurrencies)[number];

export const supportedLocalesCurrencyMap: Record<
  SupportedLocale,
  SupportedCurrency
> = {
  en: "EUR",
  pl: "PLN",
};

export const formatCurrency = (locale: SupportedLocale) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: supportedLocalesCurrencyMap[locale],
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const getSupportedCurrency = (locale: string): SupportedCurrency => {
  if (!isSupportedLocale(locale)) {
    return "EUR";
  }

  const currency = supportedLocalesCurrencyMap[locale];

  return currency;
};

export const isSupportedCurrency = (
  currency: string
): currency is SupportedCurrency => {
  return supportedCurrencies.includes(currency as SupportedCurrency);
};

export const isSupportedLocale = (
  locale: string
): locale is SupportedLocale => {
  return supportedLocales.includes(locale as SupportedLocale);
};
