import styled from 'styled-components';
import { Layout } from 'antd';

export const HeaderWrapper = styled(Layout.Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 20;
  box-shadow: 0 0 10px 0 ${({ theme }) => theme.secondaryBg};
  padding: 10px 20px;
`;
