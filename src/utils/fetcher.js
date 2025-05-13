export async function fetcher(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Fetch error');
  const { message } = await res.json();
  return message;
}