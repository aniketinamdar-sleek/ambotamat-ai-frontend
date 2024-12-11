import { useState, useCallback } from 'react';
import { generateMockItems } from '../utils/mockData';
import { COLUMNS_COUNT } from '../constants/config';

export function useListData() {
  const initialItems = Array.from({ length: COLUMNS_COUNT }, (_, columnIndex) =>
    generateMockItems(columnIndex)
  ).flat();

  const [items, setItems] = useState(initialItems);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (apiFunction) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const data = await apiFunction();
      setItems(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { items, isLoading, error, fetchData };
}