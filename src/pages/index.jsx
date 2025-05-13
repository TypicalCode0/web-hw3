import Header from '../components/Header';
import BreedList from '../components/BreedList';
import DogCard from '../components/DogCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <Header />
      <main className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <aside className="md:col-span-1 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow">
          <h3 className="text-lg font-medium mb-4">Breeds</h3>
          <BreedList />
        </aside>
        <section className="md:col-span-2">
          <DogCard />
        </section>
      </main>
    </div>
  );
}