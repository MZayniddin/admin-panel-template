import { Card } from '@/components';
import styled from 'styled-components';

export const AuthSection = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`;

export const AuthCard = styled(Card)`
  min-width: 700px;
`;

export const AuthCardTitle = styled.h1`
  font-size: var(--3xl);
  color: hsl(229, 83%, 60%);
  text-transform: uppercase;
`;
