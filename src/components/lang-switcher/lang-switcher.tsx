import { useLangStore } from '@/store';
import { Select } from 'antd';

export const LangSwitcher = () => {
  const { lang } = useLangStore();

  return (
    <Select
      defaultValue={lang}
      options={[
        { value: 'uz', label: 'UZ' },
        { value: 'en', label: 'EN' },
        { value: 'ru', label: 'RU' },
      ]}
    />
  );
};
