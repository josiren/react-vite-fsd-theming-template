import { NavbarActionsThemeSwitcher } from './styled';
import { ThemeIcon } from '../assets/ThemeIcon';
import { useDispatch } from 'react-redux';
import { useTheme } from '@emotion/react';
import { toggleTheme } from '../model/slice';

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <NavbarActionsThemeSwitcher onClick={() => dispatch(toggleTheme())}>
      <ThemeIcon fill={theme.primary.black} />
    </NavbarActionsThemeSwitcher>
  );
};
