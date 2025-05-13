import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h1 className="text-2xl font-bold">Dog Viewer</h1>
      <ThemeToggle />
    </header>
  );
}