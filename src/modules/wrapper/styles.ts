import { Layout, LayoutProps } from 'antd';
import styled from 'styled-components';

type TBodyWrapperProps = {
  $ml?: string;
};

export const Wrapper = styled(Layout)<TBodyWrapperProps & LayoutProps>`
  margin-left: ${({ $ml }) => $ml};
  transition: margin, 0.2s ease-in-out;
`;
