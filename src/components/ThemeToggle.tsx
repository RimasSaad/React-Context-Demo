// ThemeToggle.tsx
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';


const ThemeToggle = () => {
  // Use the ThemeContext to get the current theme and toggle function
  const context = useContext(ThemeContext);
  const theme = context?.theme || 'light'; // Default to 'light' if context is undefined
  const toggleTheme = context?.toggleTheme || (() => {}); // Fallback to an empty function if ThemeProvider is not set up

  return (
    <div className="flex justify-center pt-8">
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700 transition"
      >
        Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default ThemeToggle;
