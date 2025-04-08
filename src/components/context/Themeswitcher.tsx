import { useContext } from 'react';
import { ThemeContext } from './Themecontext';


export const ThemeSwitcher = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("ThemeContext non disponibile");

  return (
    <button onClick={() => context.setTheme(context.theme === 'light' ? 'dark' : 'light')}>
      Tema attuale: {context.theme}
    </button>
  );
};
