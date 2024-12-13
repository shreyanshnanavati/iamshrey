import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import './styles.css';
import Projects from './components/Projects';

const App = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <Projects />
    </div>
  );
};

const Main = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default Main; 