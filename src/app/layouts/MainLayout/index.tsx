import { Outlet } from 'react-router-dom';
import { StyledMainLayout } from './styled';
import { Typography } from '@/shared';
import { NavBar } from '@/widgets';

export const MainLayout = () => {
  return (
    <main>
      <StyledMainLayout>
        <NavBar />
        <Typography variant="h1">Example</Typography>
        <Outlet />
      </StyledMainLayout>
    </main>
  );
};
