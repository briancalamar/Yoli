import React, { FC } from 'react';

import { Grid } from '@mui/material';
import { TABLE } from '../../../constants';

import { StatusTaskSection } from '../../molecules';
import { NewEntry } from '../../atoms';

export const TasksContainer: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid container xs={12} justifyContent="flex-end" sx={{ marginTop: '1em' }}>
        <NewEntry />
      </Grid>
      {
        TABLE.map((status, index) => (
          <StatusTaskSection title={status.title} status={status.status} key={`${status.title}_${index}`}/>
        ))
      }
    </Grid>
  );
};
