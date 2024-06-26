import styled from 'styled-components';
import Sider, { SiderProps } from 'antd/es/layout/Sider';
import { Box, Button } from '@/components';

type TSettingsTextProps = {
  $fontSize?: string;
  $align?: 'left' | 'center' | 'right';
};

type TSettingsWrapperProps = {
  $hidden?: boolean;
};

export const SettingsWrapper = styled(Sider)<SiderProps & TSettingsWrapperProps>`
  max-width: 450px !important;
  width: 100% !important;
  min-height: 100vh;
  position: fixed !important;
  background: ${({ theme }) => theme.body} !important;
  inset-block: 0;
  right: 0;
  z-index: 100;
  padding: 28px 16px;
  transform: translateX(${({ $hidden }) => $hidden && '100%'});
`;

export const SettingsBox = styled(Box)`
  padding: 14px;
  border: 1px dashed ${({ theme }) => theme.icon};
  border-radius: 8px;
`;

export const SettingsPrimaryText = styled.p<TSettingsTextProps>`
  text-align: ${({ $align }) => $align};
  color: ${({ theme }) => theme.contrast};
  font-size: ${({ $fontSize }) => $fontSize || 'var(--base)'};
  font-weight: 600;
`;

export const SettingsSecondaryText = styled.p<TSettingsTextProps>`
  text-align: ${({ $align }) => $align};
  color: ${({ theme }) => theme.icon};
  font-size: ${({ $fontSize }) => $fontSize || 'var(--xs)'};
  font-weight: 500;
`;

export const SettingsOverlay = styled.div`
  position: fixed;
  background: hsla(0, 0%, 0%, 0.5);
  inset: 0;
  z-index: 50;
`;

export const ThemeSwitchersWrapper = styled.div`
  display: flex;
  margin-top: 12px;
  gap: 8px;

  @media screen and (max-width: 470px) {
    flex-direction: column;
  }
`;

export const ThemeSwitcherBtn = styled(Button)`
  gap: 8px;
  padding-inline: 10px;
`;

export const CloseButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 5px;
  font-size: var(--2xl);
  padding: 6px;
`;

export const SettingsToggleBtn = styled(Button)`
  height: 50px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-100%, -50%);
  font-size: var(--2xl);
  border-radius: 0;
  border-end-start-radius: 100%;
  border-start-start-radius: 100%;
  z-index: 100;

  svg {
    animation: infinite 4s linear spin;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
