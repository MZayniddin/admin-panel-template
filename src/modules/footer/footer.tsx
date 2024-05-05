import { Layout } from 'antd';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return <Layout.Footer>{t('copyright')}</Layout.Footer>;
};
