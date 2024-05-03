import styled, { CSSProp } from 'styled-components';

type TBoxProps = {
  $css?: CSSProp;
  $align?: string;
  $bg?: string;
  $bordered?: string;
  $direction?: string;
  $wrap?: string;
  $justify?: string;
  $gap?: string;
  $height?: string;
  $m?: string;
  $mb?: string;
  $mt?: string;
  $ml?: string;
  $mr?: string;
  $rounded?: string;
  $p?: string;
  $pb?: string;
  $pt?: string;
  $pl?: string;
  $pr?: string;
  $width?: string;
  $shadow?: string;
};

export const Box = styled.div<TBoxProps>`
  align-items: ${({ $align }) => $align};
  background: ${({ $bg }) => $bg};
  border-radius: ${({ $rounded }) => $rounded};
  display: ${({ $align, $justify, $direction, $gap }) =>
    ($align || $justify || $direction || $gap) && 'flex'};
  flex-direction: ${({ $direction }) => $direction};
  justify-content: ${({ $justify }) => $justify};
  gap: ${({ $gap }) => $gap};
  height: ${({ $height }) => $height};
  margin: ${({ $m }) => $m};
  margin-left: ${({ $ml }) => $ml};
  margin-right: ${({ $mr }) => $mr};
  margin-bottom: ${({ $mb }) => $mb};
  margin-top: ${({ $mt }) => $mt};
  padding: ${({ $p }) => $p};
  padding-bottom: ${({ $pb }) => $pb};
  padding-top: ${({ $pt }) => $pt};
  padding-left: ${({ $pl }) => $pl};
  padding-right: ${({ $pr }) => $pr};
  width: ${({ $width }) => $width};
  ${({ $css }) => $css}
`;
