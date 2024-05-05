import { useLangStore } from '@/store';
import { langOptions } from '@/constants';
import { TLang } from '@/types';
import { Select } from 'antd';

export const LangSwitcher = () => {
  const { lang, setLang } = useLangStore();

  const handleLanguageChange = (value: TLang) => {
    setLang(value);
  };

  return <Select onChange={handleLanguageChange} defaultValue={lang} options={langOptions} />;
};
