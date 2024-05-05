import { Box, Button, LangSwitcher, ThemeSwitcher } from '@/components';
import { RiMenuUnfold4Line, RiMenuUnfold3Line } from 'react-icons/ri';
import { HeaderWrapper } from './styles';

type THeaderProps = {
  isSidebarCollapsed: boolean;
  toggleSidebarCollapse: () => void;
};

export const Header = ({ isSidebarCollapsed, toggleSidebarCollapse }: THeaderProps) => {
  return (
    <HeaderWrapper>
      <Button
        type="text"
        shape="circle"
        icon={
          isSidebarCollapsed ? (
            <RiMenuUnfold3Line fontSize={'var(--default-icon-size)'} />
          ) : (
            <RiMenuUnfold4Line fontSize={'var(--default-icon-size)'} />
          )
        }
        onClick={toggleSidebarCollapse}
        block={false}
      />

      <Box $gap="10px" $align="center">
        <ThemeSwitcher />

        <LangSwitcher />
      </Box>
    </HeaderWrapper>
  );
};
