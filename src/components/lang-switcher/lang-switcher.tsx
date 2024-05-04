import { useLangStore } from '@/store';
import { TLang } from '@/types';
import { Select } from 'antd';

export const LangSwitcher = () => {
  const { lang, setLang } = useLangStore();

  const handleLanguageChange = (value: TLang) => {
    setLang(value);
  };

  return (
    <Select
      onChange={handleLanguageChange}
      defaultValue={lang}
      options={[
        { value: TLang.UZ, label: 'UZ' },
        { value: TLang.EN, label: 'EN' },
        { value: TLang.RU, label: 'RU' },
      ]}
    />
  );
};
