import { Fab } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';

export const NewEntry = () => {
  return (
    <>
      <Fab
        className='pepe'
        aria-label='add'
      >
        <AddIcon />
      </Fab>
    </>
  );
};
