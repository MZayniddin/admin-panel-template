import styled from 'styled-components';
import { Layout } from 'antd';

export const SiderbarWrapper = styled(Layout.Sider)`
  min-height: 100vh;
  height: 100%;
  position: fixed !important;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 50;
  background: ${({ theme }) => theme.body} !important;
  overflow-x: hidden;

  .ant-menu-root {
    height: calc(100% - 15px);
    overflow-y: auto;

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.gray[100]};
    }
  }
`;
