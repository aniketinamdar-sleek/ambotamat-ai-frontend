import { ITEMS_PER_COLUMN } from '../constants/config';

export const generateMockItems = (columnIndex) => {
  return Array.from({ length: ITEMS_PER_COLUMN }, (_, index) => ({
    id: columnIndex * ITEMS_PER_COLUMN + index,
    title: `Item ${columnIndex * ITEMS_PER_COLUMN + index + 1}`,
  }));
};