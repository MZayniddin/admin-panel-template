import { Box, Card } from '@/components';
import { ROUTES } from '@/constants';
import { Breadcrumb } from 'antd';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Finance = () => {
  const { t } = useTranslation();

  const breadcrumbItems = [
    {
      title: t('menu.dashboard.title'),
    },
    {
      title: <Link to={ROUTES.root}>{t('menu.dashboard.finance')}</Link>,
    },
  ];

  return (
    <section>
      <Breadcrumb items={breadcrumbItems} />

      <Box $pt="20px" $gap="20px" $direction="column">
        {/* WARNING: Inline styles only for demo showcase  */}
        <Card style={{ minHeight: 400 }}>FINANCE</Card>
        <Card style={{ minHeight: 400 }}>DEMO CARD</Card>
      </Box>
    </section>
  );
};
