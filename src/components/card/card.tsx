import { PropsWithChildren } from 'react';
import { Card as AntdCard } from 'antd';

export const Card = ({ children }: PropsWithChildren) => {
  return <AntdCard>{children}</AntdCard>;
};
