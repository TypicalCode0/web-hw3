import '../styles/globals.css';
import { BreedProvider } from '../context/BreedContext';
export default function App({ Component, pageProps }) {
  return (
    <BreedProvider>
      <Component {...pageProps} />
    </BreedProvider>
  );
}