import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation('auth');
  return (
    <Form.Item
      rules={[
        {
          required: isRequired ?? true,
          message: t('formErrors.required'),
        },
        ...(rule ? rule : []),
      ]}
      {...props}
    >
      {children ? children : isPassword ? <Input.Password {...props} /> : <Input {...props} />}
    </Form.Item>
  );
};
