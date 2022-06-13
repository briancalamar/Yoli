export interface Entry {
  _id: string;
  title: string;
  description: string;
  createdAt: number;
  finishDate: string;
  status: EntryStatus;
  subTasks?: SubTask[];
}

export interface EmptyEntry {
  _id?: string;
  title?: string;
  description?: string;
  createdAt?: number;
  status?: EntryStatus;
}

export type EntryStatus = 'pending' | 'in-progress' | 'done';

export interface SubTask {
  _id: string;
  title: string;
  status: true | false;
}