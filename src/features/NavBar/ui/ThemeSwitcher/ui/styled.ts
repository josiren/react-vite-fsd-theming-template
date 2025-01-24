import styled from '@emotion/styled';

export const NavbarActionsThemeSwitcher = styled.button`
  height: 43px;
  width: 43px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.secondary.light};
  border: 0.6px solid ${({ theme }) => theme.secondary.dark};

  img {
    rect {
      fill: ${({ theme }) => theme.secondary.dark};
    }
  }
`;
