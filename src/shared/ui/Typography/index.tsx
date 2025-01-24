import { StyledTypography } from './styled';

export interface TypographyProps {
  variant: keyof typeof tagMapping;
  children: React.ReactNode;
}

const tagMapping: Record<string, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
  body3: 'p',
  body4: 'p',
  body5: 'p',
  body6: 'p',
  body7: 'p',
};

export const Typography = ({ variant, children }: TypographyProps) => {
  const Tag = tagMapping[variant as keyof typeof tagMapping];

  return (
    <StyledTypography
      as={Tag}
      variant={variant}
    >
      {children}
    </StyledTypography>
  );
};
