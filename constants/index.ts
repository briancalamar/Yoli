import { EntryStatus } from '../interfaces';

type TableStatus = {
  title: string;
  status: EntryStatus;
} 

export const TABLE: TableStatus[] = [
  {
    title: 'Pendientes',
    status: 'pending',
  },
  {
    title: 'En progreso',
    status: 'in-progress',
  },
  {
    title: 'Completadas',
    status: 'done',
  },
];
