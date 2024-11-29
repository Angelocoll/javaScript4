import { useEffect } from 'react';

export const Fetcher = ({ endpoint, onSuccess }: { endpoint: string; onSuccess: (data: any) => void }) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    fetch(`${baseUrl}${endpoint}`)
      .then(response => response.json())
      .then(onSuccess)
      .catch(err => console.error('Error fetching data:', err));
  }, [baseUrl, endpoint, onSuccess]);

  return null;
};



