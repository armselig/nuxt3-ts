export default async function useDummyJson<T>(path: string, options?: object) {
  const BASE_URL = new URL("https://dummyjson.com");

  return await useFetch<T>(path, {
    baseURL: BASE_URL.toString(),
    server: false,
    ...options,
  });
}
