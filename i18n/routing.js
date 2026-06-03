import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: [
    "en", // English
    "hi", // Hindi
    "mr", // Marathi
    "ml", // Malayalam
    "kn", // Kannada
    "ta", // Tamil
    "te", // Telugu
    "or", // Odia
    "gu", // Gujarati
  ],
  defaultLocale: "en",
  localePrefix: "always",
});
