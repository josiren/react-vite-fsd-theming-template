import { Outlet } from 'react-router-dom';
import { StyledMainLayout } from './styled';
import { NavBar } from '@/widgets';

export const MainLayout = () => {
  return (
    <>
      <StyledMainLayout>
        <NavBar />
        <Outlet />
      </StyledMainLayout>
    </>
  );
};
