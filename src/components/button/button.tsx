import { ButtonProps } from 'antd';
import { StyledButton } from './styles';

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <StyledButton type="primary" block {...props}>
      {children}
    </StyledButton>
  );
};
