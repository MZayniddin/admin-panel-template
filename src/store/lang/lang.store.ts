import { create } from 'zustand';
import { LANG } from '@/constants';
import { createSelectors, getLocalStorage, setLocalStorage } from '@/utils';
import { TLang, TLangStore } from '@/types/lang.types';
import { lng } from '@/i18n';

const useTheme = create<TLangStore>()((set) => ({
  lang: getLocalStorage(LANG) || lng,
  setLang: (lang: TLang) =>
    set(() => {
      setLocalStorage(LANG, lang);
      return { lang };
    }),
}));

export const useLangStore = createSelectors(useTheme);
