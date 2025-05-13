'use client';
import { createContext, useState, useContext } from 'react';
import { useBreeds } from '../hooks/useDogApi';

const BreedContext = createContext();
export function BreedProvider({ children }) {
  const { breeds, isLoading } = useBreeds();
  const [current, setCurrent] = useState(null);

  // set default when loaded
  if (!isLoading && current === null && breeds.length) setCurrent(breeds[0]);

  return (
    <BreedContext.Provider value={{ breeds, current, setCurrent }}>
      {children}
    </BreedContext.Provider>
  );
}
export function useBreedContext() {
  return useContext(BreedContext);
}