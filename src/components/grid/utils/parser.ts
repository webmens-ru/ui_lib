import { TRowItem } from './../types/index';

export const getRowID = (row: TRowItem) => {
  return typeof row.id === "object" ? row.id.title : row.id
}