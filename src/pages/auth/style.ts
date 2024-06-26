import styled from 'styled-components';

export const AuthSection = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;

  .ant-card {
    width: 100%;
    max-width: 680px;
    padding-block: 28px;
    position: relative;
  }

  .ant-card-body {
    max-width: 490px;
    margin: 0 auto;
  }
`;

export const AuthCardTitle = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: var(--3xl);
  font-weight: 900;
  text-transform: uppercase;
`;

export const AuthCardSecondaryText = styled.p`
  color: ${({ theme }) => theme.gray[500]};
  font-size: var(--base);
  font-weight: bold;
`;

export const AuthCardSettingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: absolute;
  top: 20px;
  right: 20px;
`;
