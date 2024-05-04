import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

export const defaultNS = 'translation';
export const lng = 'uz';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    lng,
    fallbackLng: lng,
    defaultNS,
    react: {
      useSuspense: true,
    },
    ns: ['auth'],
    returnEmptyString: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
