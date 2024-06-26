import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --ss: 0.5rem; // 8px
    --xs: 0.75rem; // 12px
    --sm: 0.875rem; // 14px
    --base: 1rem; // 16px
    --lg: 1.125rem; // 18px
    --xl: 1.25rem; // 20px
    --2xl: 1.5rem; // 24px
    --3xl: 2rem; // 32px
    --full: 100%;

    --default-icon-size: 1.375rem // 22px
  }

  /* RESET CSS */

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }

  * {
    margin: 0;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.body};
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  button {
    cursor: pointer;
    background: none;
  }

  [type='button'] {
    background-color: none;
  }

  #root,
  #__next {
    isolation: isolate;
  }

  /* SCROLLBAR CSS */

  @media (orientation: landscape) {
    ::-webkit-scrollbar {
      width: 10px;
      height: 12px;
      background-color: ${({ theme }) => theme.body};
    }
  }

  @media (orientation: landscape) {
    ::-webkit-scrollbar-thumb {
      border-radius: 6px;
      background-color: ${({ theme }) => theme.primary};
      border: 2px solid  ${({ theme }) => theme.primaryBg};
    }
  }

  @media (orientation: landscape) {
    ::-webkit-scrollbar-track {
      border-radius: 3px;
      background-color: ${({ theme }) => theme.primaryBg};
    }
  }

  /* FONTS */

  @font-face {
    font-family: 'Nunito';
    src: url('/fonts/Nunito-Bold.woff2') format('woff2'),
      url('/fonts/Nunito-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Nunito';
    src: url('/fonts/Nunito-Medium.woff2') format('woff2'),
      url('/fonts/Nunito-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Nunito';
    src: url('/fonts/Nunito-Regular.woff2') format('woff2'),
      url('/fonts/Nunito-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Nunito';
    src: url('/fonts/Nunito-ExtraBold.woff2') format('woff2'),
      url('/fonts/Nunito-ExtraBold.woff') format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Nunito';
    src: url('/fonts/Nunito-SemiBold.woff2') format('woff2'),
      url('/fonts/Nunito-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
`;
