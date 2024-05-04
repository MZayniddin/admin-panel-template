import { useState } from 'react';
import { Form } from 'antd';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { Box, Button, Card, Field, LangSwitcher } from '@/components';
import { AuthCardSecondaryText, AuthCardSettingWrapper, AuthCardTitle, AuthSection } from './style';

export const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggleAuthType = () => setIsSignUp(!isSignUp);

  return (
    <AuthSection>
      <Card>
        <Box $mb="32px">
          <AuthCardTitle>{isSignUp ? 'sign up' : 'sign in'}</AuthCardTitle>

          <AuthCardSecondaryText>
            Enter your email and password to {isSignUp ? 'register' : 'login'}
          </AuthCardSecondaryText>
        </Box>

        <Form layout="vertical">
          {isSignUp && <Field name="name" label="Name" placeholder="Enter your name" />}
          <Field name="email" label="Email" placeholder="example@gmail.com" />
          <Field name="password" label="Password" isPassword={true} placeholder="Your password" />

          <Button htmlType="submit">Sign in</Button>
        </Form>

        <Box $justify="center" $m="20px 0">
          <AuthCardSecondaryText>Or continue with</AuthCardSecondaryText>
        </Box>

        <Box $gap="20px" $justify="center" $mb="20px">
          <Button shape="circle" type="default" block={false}>
            <FcGoogle size={22} />
          </Button>

          <Button shape="circle" type="default" block={false}>
            <FaFacebookF size={22} color="hsl(217, 99%, 51%)" />
          </Button>
        </Box>

        <Box $justify="center" $align="center">
          <p>{isSignUp ? 'Already have an account?' : "Dont' have an account?"}</p>

          <Button type="link" block={false} onClick={handleToggleAuthType}>
            {isSignUp ? 'SIGN IN' : 'SIGN UP'}
          </Button>
        </Box>

        <AuthCardSettingWrapper>
          <LangSwitcher />
        </AuthCardSettingWrapper>
      </Card>
    </AuthSection>
  );
};
