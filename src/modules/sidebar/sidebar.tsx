import { Menu, MenuTheme } from 'antd';
import { SiderbarWrapper } from './styles';
import { useThemeStore } from '@/store';

type TSidebarProps = {
  isSidebarCollapsed: boolean;
};

export const Sidebar = ({ isSidebarCollapsed }: TSidebarProps) => {
  const { theme } = useThemeStore();

  return (
    <SiderbarWrapper trigger={null} collapsible collapsed={isSidebarCollapsed}>
      <Menu
        theme={theme as MenuTheme}
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            label: 'nav 1',
          },
          {
            key: '2',
            label: 'nav 2',
          },
          {
            key: '3',
            label: 'nav 3',
          },
        ]}
      />
    </SiderbarWrapper>
  );
};
