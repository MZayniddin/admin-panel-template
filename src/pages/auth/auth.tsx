import { Box, Card, Field } from '@/components';
import { AuthCardSubTitle, AuthCardTitle, AuthSection } from './style';
import { Form } from 'antd';

export const Auth = () => {
  return (
    <AuthSection>
      <Card>
        <Box $mb="32px">
          <AuthCardTitle>sign in</AuthCardTitle>

          <AuthCardSubTitle>Enter your email and password to login</AuthCardSubTitle>
        </Box>

        <Form layout="vertical">
          <Field name="email" label="Email" placeholder="example@gmail.com" />
          <Field name="password" label="Password" placeholder="Your password" />
        </Form>
      </Card>
    </AuthSection>
  );
};
