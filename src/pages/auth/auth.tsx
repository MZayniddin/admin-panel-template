import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Form } from 'antd';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { Box, Button, Card, Field, LangSwitcher } from '@/components';
import { AuthCardSecondaryText, AuthCardSettingWrapper, AuthCardTitle, AuthSection } from './style';

export const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const { t } = useTranslation('auth');

  const handleToggleAuthType = () => setIsSignUp(!isSignUp);

  return (
    <AuthSection>
      <Card>
        <Box $mb="32px">
          <AuthCardTitle>{t(isSignUp ? 'signUp.title' : 'signIn.title')}</AuthCardTitle>

          <AuthCardSecondaryText>
            {t(isSignUp ? 'signUp.subTitle' : 'signIn.subTitle')}
          </AuthCardSecondaryText>
        </Box>

        <Form layout="vertical">
          {isSignUp && (
            <Field name="name" label={t('formLabel.name')} placeholder={'formPlaceholder.name'} />
          )}
          <Field name="email" label={t('formLabel.email')} placeholder="example@gmail.com" />
          <Field
            name="password"
            label={t('formLabel.password')}
            isPassword={true}
            placeholder={t('formPlaceholder.password')}
          />

          <Button htmlType="submit">{t(isSignUp ? 'signUp.title' : 'signIn.title')}</Button>
        </Form>

        <Box $justify="center" $m="20px 0">
          <AuthCardSecondaryText>{t('continueWith')}</AuthCardSecondaryText>
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
          <p>{t(isSignUp ? 'signUp.footerText' : 'signIn.footerText')}</p>

          <Button type="link" block={false} onClick={handleToggleAuthType}>
            {t(isSignUp ? 'signUp.title' : 'signIn.title')}
          </Button>
        </Box>

        <AuthCardSettingWrapper>
          <LangSwitcher />
        </AuthCardSettingWrapper>
      </Card>
    </AuthSection>
  );
};
