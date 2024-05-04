import { Form, Input, InputProps } from 'antd';
import { FormItemProps, Rule } from 'antd/es/form';
import { ReactNode } from 'react';

export type TFieldProps = {
  rule?: Rule[];
  isRequired?: boolean;
  isPassword?: boolean;
  children?: ReactNode;
} & Partial<FormItemProps & InputProps>;

export const Field = ({
  rule,
  isPassword = false,
  isRequired,
  children,
  ...props
}: TFieldProps) => {
  return (
    <Form.Item
      rules={[
        {
          required: isRequired ?? true,
          message: 'Please fill the field',
        },
        ...(rule ? rule : []),
      ]}
      {...props}
    >
      {children ? children : isPassword ? <Input.Password {...props} /> : <Input {...props} />}
    </Form.Item>
  );
};
