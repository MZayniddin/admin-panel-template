import { Box, Card } from '@/components';
import { AuthCardSubTitle, AuthCardTitle, AuthSection } from './style';

export const Auth = () => {
  return (
    <AuthSection>
      <Card>
        <Box $mb="40px">
          <AuthCardTitle>sign in</AuthCardTitle>

          <AuthCardSubTitle>Enter your email and password to login</AuthCardSubTitle>
        </Box>
      </Card>
    </AuthSection>
  );
};
