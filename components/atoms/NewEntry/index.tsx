import { Fab } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';

export const NewEntry = () => {
  return (
    <>
      <Fab
        className='new-entry'
        aria-label='add-entry'
      >
        <AddIcon />
      </Fab>
    </>
  );
};
