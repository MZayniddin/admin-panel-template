export enum TLang {
  UZ = 'uz',
  RU = 'ru',
  EN = 'en',
}

export type TLangStore = {
  lang: string;
  setLang: (lang: TLang) => void;
};
