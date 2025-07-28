// ThemeContext.tsx
import { createContext, useState } from 'react';
import type { ReactNode } from 'react';

// Create a type for the context
type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

// Create the context with a placeholder
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create a provider component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {

  // a state to hold the current theme, with 'light' as the default
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === 'dark' ? 'bg-gray-900 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export { ThemeContext};
