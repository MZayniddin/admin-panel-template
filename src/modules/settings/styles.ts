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
  min-width: 450px !important;
  min-height: 100vh;
  overflow: auto;
  position: fixed !important;
  background: ${({ theme }) => theme.body} !important;
  inset-block: 0;
  right: 0;
  z-index: 100;
  padding: 16px;
  margin-right: ${({ $hidden }) => $hidden && '-100%'};
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

export const ThemeSwitcherBtn = styled(Button)`
  gap: 8px;
  padding-inline: 10px;
`;

export const SettingsToggleBtn = styled(Button)`
  position: absolute !important;
  width: 30px;
  height: 30px;
  left: 100%;
  z-index: 200;
  top: 50%;
`;
