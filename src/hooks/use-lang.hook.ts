import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLangStore } from '@/store';

export const useLang = () => {
  const { i18n } = useTranslation();
  const { lang } = useLangStore();

  useEffect(() => {
    i18n.changeLanguage(lang as string);
  }, [lang, i18n]);
};
