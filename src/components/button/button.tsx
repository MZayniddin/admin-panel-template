import { Button as AntdButton, ButtonProps } from 'antd';

export const Button = ({ children }: ButtonProps) => {
  return (
    <AntdButton type="primary" block>
      {children}
    </AntdButton>
  );
};
