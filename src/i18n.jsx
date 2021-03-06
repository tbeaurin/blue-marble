import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationFR from './i18n/fr.json';

const defaultLanguage = 'fr';

const resources = {
  fr: {
    translation: translationFR,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng: defaultLanguage,
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
