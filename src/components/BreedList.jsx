import { useBreedContext } from '../context/BreedContext';

export default function BreedList() {
  const { breeds, current, setCurrent } = useBreedContext();
  return (
    <div className="overflow-y-auto max-h-64">
      <ul className="space-y-2">
        {breeds.map(b => (
          <li key={b}>
            <button
              className={`w-full text-left p-2 rounded-md transition ${
              b === current ? 'bg-indigo-200' : 'hover:bg-gray-100'
            }`}
              onClick={() => setCurrent(b)}
            >
              {b}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}