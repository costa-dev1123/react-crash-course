// ThemeProvider.tsx
import { useState } from 'react';
import { ThemeContext } from './Themecontext';


export const ThemeProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
