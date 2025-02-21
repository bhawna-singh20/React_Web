
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [storedTheme, setStoredTheme] = useLocalStorage('theme'); // Don't provide initial value here

  const [theme, setTheme] = useState(storedTheme || 'light'); // Use storedTheme or 'light' as initial state

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    setStoredTheme(theme); // Update localStorage whenever theme changes
  }, [theme, setStoredTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeContext;