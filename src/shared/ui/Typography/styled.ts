import styled from '@emotion/styled';
import { TypographyProps } from '.';

export const StyledTypography = styled('div')<TypographyProps>`
  color: ${({ theme }) => theme.primary.contrastText};

  ${({ variant, theme }) => {
    switch (variant) {
      case 'h1':
        return `
          font-size: ${theme.typography.h1.fontSize};
          font-weight: ${theme.typography.h1.fontWeight};
        `;
      case 'h2':
        return `
          font-size: ${theme.typography.h2.fontSize};
          font-weight: ${theme.typography.h2.fontWeight};
        `;
      case 'h3':
        return `
          font-size: ${theme.typography.h3.fontSize};
          font-weight: ${theme.typography.h3.fontWeight};
        `;
      case 'h4':
        return `
          font-size: ${theme.typography.h4.fontSize};
          font-weight: ${theme.typography.h4.fontWeight};
        `;
      case 'body1':
        return `
          font-size: ${theme.typography.body1.fontSize};
          font-weight: ${theme.typography.body1.fontWeight};
        `;
      case 'body2':
        return `
          font-size: ${theme.typography.body2.fontSize};
          font-weight: ${theme.typography.body2.fontSize}        
      `;
      case 'body3':
        return `
          font-size: ${theme.typography.body3.fontSize};
          font-weight: ${theme.typography.body3.fontSize};
        `;
      case 'body4':
        return `
          font-size: ${theme.typography.body4.fontSize};
          font-weight: ${theme.typography.body4.fontWeight};
        `;
      case 'body5':
        return `
          font-size: ${theme.typography.body5.fontSize};
          font-weight: ${theme.typography.body5.fontWeight};
        `;
      case 'body6':
        return `
          font-size: ${theme.typography.body6.fontSize};
          font-weight: ${theme.typography.body6.fontWeight};
        `;
      case 'body7':
        return `
          font-size: ${theme.typography.body7.fontSize};
          font-weight: ${theme.typography.body7.fontWeight};
        `;
      default:
        return `
          display: none;
        `;
    }
  }};
`;
