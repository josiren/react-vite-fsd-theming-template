import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { useAppSelector } from './model';
import { darkTheme, lightTheme } from './styles';
import { MainLayout } from './ui';

function App() {
  const theme = useAppSelector(state => state.themeReducer.theme);
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
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
