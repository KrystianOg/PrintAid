import "i18next";
import { defaultNS, resources } from "./lang/i18n";
import type { SupportedLocale } from "./lang/i18n";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: (typeof resources)["en"];
  }

  interface i18n {
    language: SupportedLocale;
  }
}

export {};
