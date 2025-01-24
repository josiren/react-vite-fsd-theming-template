import { ThemeSwitcher } from '@/features';
import { StyledNavBar, NavbarActions } from './styled';

export const NavBar = () => {
  return (
    <StyledNavBar>
      <NavbarActions>
        <ThemeSwitcher />
      </NavbarActions>
    </StyledNavBar>
  );
};
