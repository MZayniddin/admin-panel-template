export enum TLang {
  UZ = 'uz',
  RU = 'ru',
  EN = 'en',
}

export type TLangStore = {
  lang: TLang;
  setLang: (lang: TLang) => void;
};
