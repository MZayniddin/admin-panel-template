import styled from 'styled-components';
import { Layout } from 'antd';

export const SiderbarWrapper = styled(Layout.Sider)`
  min-height: 100vh;
  height: 100%;
  position: fixed !important;
  z-index: 50;
  overflow: auto;
  left: 0;
  top: 0;
  bottom: 0;

  .ant-menu {
    height: 100%;
  }
`;
