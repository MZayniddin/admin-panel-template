import styled from 'styled-components';

export const AuthSection = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;

  .ant-card {
    width: 100%;
    max-width: 650px;
    padding-block: 28px;
  }

  .ant-card-body {
    max-width: 440px;
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
