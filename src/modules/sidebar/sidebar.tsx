import { useTranslation } from 'react-i18next';
import { useThemeStore } from '@/store';
import { Menu, MenuTheme } from 'antd';
import { SiderbarWrapper } from './styles';
import { menuItems } from '@/constants';

type TSidebarProps = {
  isSidebarCollapsed: boolean;
};

export const Sidebar = ({ isSidebarCollapsed }: TSidebarProps) => {
  const { theme } = useThemeStore();
  const { t } = useTranslation('', { keyPrefix: 'menu' });

  return (
    <SiderbarWrapper trigger={null} collapsible collapsed={isSidebarCollapsed}>
      <Menu
        theme={theme as MenuTheme}
        mode="inline"
        defaultSelectedKeys={['home']}
        defaultOpenKeys={['dashboard']}
        items={menuItems(t)}
      />
    </SiderbarWrapper>
  );
};
