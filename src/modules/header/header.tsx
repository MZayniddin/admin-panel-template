import { Button } from '@/components';
import { Layout } from 'antd';
import { RiMenuUnfold4Line, RiMenuUnfold3Line } from 'react-icons/ri';

// const headerStyle: React.CSSProperties = {
//   position: 'sticky',
//   top: 0,
//   color: '#fff',
// };

type THeaderProps = {
  isSidebarCollapsed: boolean;
  toggleSidebarCollapsed: () => void;
};

export const Header = ({ isSidebarCollapsed, toggleSidebarCollapsed }: THeaderProps) => {
  return (
    <Layout.Header>
      <Button
        type="text"
        icon={
          isSidebarCollapsed ? (
            <RiMenuUnfold4Line fontSize="var(--default-icon-size)" />
          ) : (
            <RiMenuUnfold3Line fontSize={'var(--default-icon-size)'} />
          )
        }
        block={false}
        onClick={toggleSidebarCollapsed}
      />
    </Layout.Header>
  );
};
