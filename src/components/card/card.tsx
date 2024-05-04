import { Card as AntdCard, CardProps } from 'antd';

export const Card = ({ children, ...props }: CardProps) => {
  return (
    <AntdCard bordered={false} {...props}>
      {children}
    </AntdCard>
  );
};
