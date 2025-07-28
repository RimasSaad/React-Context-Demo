// ProfileCard.tsx
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';


const ProfileCard = () => {
  // Use the ThemeContext to get the current theme
  const context = useContext(ThemeContext);
  const theme = context?.theme || 'light'; // Default to 'light' if context is undefined

  return (
    <div className={`max-w-sm mx-auto mt-10 p-6 rounded-xl shadow-lg ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-purple-500 rounded-full mb-4"></div>
        <h1 className="text-2xl font-bold">Rimas Saad</h1>
        <p className="text-sm text-gray-500 dark:text-gray-300">Frontend Developer</p>
      </div>
      <div className="mt-6 space-y-2">
        <div><strong>Name</strong><br />Rimas Saad</div>
        <div><strong>Email</strong><br />rimas@example.com</div>
        <div><strong>Phone</strong><br />+966 555 123 456</div>
        <div><strong>Bio</strong><br />Passionate about UI design and modern web experiences.</div>
      </div>
    </div>
  );
};

export default ProfileCard;
