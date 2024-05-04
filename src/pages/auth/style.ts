import styled from 'styled-components';

export const AuthSection = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;

  .ant-card {
    width: 100%;
    max-width: 700px;
    padding-block: 40px;
  }

  .ant-card-body {
    max-width: 440px;
    margin: 0 auto;
  }
`;

export const AuthCardTitle = styled.h1`
  font-size: var(--3xl);
  color: ${({ theme }) => theme.primary};
  text-transform: uppercase;
`;

export const AuthCardSubTitle = styled.p`
  color: hsl(228.8 15.53% 59.61%);
  font-weight: bold;
`;
