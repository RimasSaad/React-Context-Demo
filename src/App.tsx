// App.tsx
import { ThemeProvider } from './ThemeContext';
import ProfileCard from './components/ProfileCard';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <ProfileCard />
    </ThemeProvider>
  );
}

export default App;
