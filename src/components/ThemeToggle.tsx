import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-muted dark:bg-gray-800 rounded-full shadow px-2 py-1 flex items-center gap-1 text-sm select-none">
      <button className={`px-2 py-1 rounded ${theme==='system'?'bg-accent text-white':''}`} onClick={() => setTheme('system')}>System</button>
      <button className={`px-2 py-1 rounded ${theme==='light'?'bg-accent text-white':''}`} onClick={() => setTheme('light')}>Light</button>
      <button className={`px-2 py-1 rounded ${theme==='dark'?'bg-accent text-white':''}`} onClick={() => setTheme('dark')}>Dark</button>
    </div>
  );
}
