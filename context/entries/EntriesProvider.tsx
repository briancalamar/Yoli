import { FC, useReducer } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';

export interface EntriesState {
  entries: Entry[];
}

const initialState: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      title: 'Tarea 1',
      description: 'Pending: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      title: 'Tarea 2',
      description: 'InProgres: Lorem ipsum dolor sit amet consectetur adipisicing el quidem.',
      status: 'in-progress',
      createdAt: Date.now() - 1000,
    },
    {
      _id: uuidv4(),
      title: 'Tarea 3',
      description: 'InProgress: Lorem ipsum dolor sit amet consect. Quisquam, quidem.',
      status: 'in-progress',
      createdAt: Date.now() - 10000,
    },
    {
      _id: uuidv4(),
      title: 'Tarea 4',
      description: 'Done: Lorem i consectetur adipisicing elit. Quisquam, quidem.',
      status: 'done',
      createdAt: Date.now() -20000,
    },
  ],
};

export const EntriesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, initialState);

  return (
    <EntriesContext.Provider value={{
      ...state,
    }}>
      {children}
    </EntriesContext.Provider>
  );
};
