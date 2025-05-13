import { useRandomImage } from '../hooks/useDogApi';
import { useBreedContext } from '../context/BreedContext';

export default function DogCard() {
  const { current } = useBreedContext();
  const { image, isLoading, refresh } = useRandomImage(current);
  if (!current) return null;
  return (
    <div className="p-4 bg-white rounded-2xl shadow-lg flex flex-col items-center">
      <h2 className="text-xl font-semibold capitalize mb-2">{current}</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={image} alt={current} className="w-64 h-64 object-cover rounded-md" />
      )}
      <button
        onClick={refresh}
        className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-full hover:opacity-90"
      >
        New Image
      </button>
    </div>
  );
}