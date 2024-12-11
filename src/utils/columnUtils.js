import { COLUMNS_COUNT, ITEMS_PER_COLUMN } from '../constants/config';

export const createColumns = (items) => {
  return Array.from({ length: COLUMNS_COUNT }, (_, columnIndex) => ({
    title: `Column ${columnIndex + 1}`,
    items: items
      .slice(columnIndex * ITEMS_PER_COLUMN, (columnIndex + 1) * ITEMS_PER_COLUMN)
      .map((item) => ({
        ...item,
        id: item.id,
      })),
  }));
};