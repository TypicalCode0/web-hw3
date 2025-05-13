import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';

export function useBreeds() {
  const { data, error } = useSWR('https://dog.ceo/api/breeds/list/all', fetcher);
  return { breeds: data ? Object.keys(data) : [], isLoading: !error && !data, isError: error };
}

export function useRandomImage(breed) {
  const { data, error, mutate } = useSWR(
    breed ? `https://dog.ceo/api/breed/${breed}/images/random` : null,
    fetcher
  );
  return { image: data, isLoading: !error && !data, isError: error, refresh: mutate };
}