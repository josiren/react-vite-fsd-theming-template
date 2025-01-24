import styled from '@emotion/styled';

export const StyledNavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 50px;
  box-sizing: border-box;
  height: 73px;
  background-color: ${({ theme }) => theme.secondary.greyscale};
`;

export const NavbarLogo = styled.img`
  height: 43px;
`;

export const NavbarSearch = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 480px;
`;

export const NavbarSearchInput = styled.input`
  background-color: ${({ theme }) => theme.primary.main};
  border: 0.6px solid ${({ theme }) => theme.secondary.dark};
  border-radius: 12px;
  padding: 10px 14px;
  height: 100%;
  width: inherit;
`;

export const NavbarSearchImage = styled.img`
  position: absolute;
  right: 14px;
`;

export const NavbarActions = styled.div`
  display: flex;
  align-items: center;
  height: 43px;
  gap: 20px;
`;
