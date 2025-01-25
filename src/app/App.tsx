import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { useAppSelector } from './model';
import { darkTheme, lightTheme } from '@/shared';
import { MainLayout } from './layouts';
import { typography } from '@/shared/theme/model/data/typography';

function App() {
  const theme = useAppSelector(state => state.themeReducer.theme);
  return (
    <ThemeProvider theme={{ ...(theme === 'light' ? lightTheme : darkTheme), typography }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<MainLayout />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
