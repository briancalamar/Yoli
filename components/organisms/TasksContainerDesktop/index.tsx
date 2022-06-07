import React, { FC } from 'react';

import { Grid } from '@mui/material';
import { TABLE } from '../../../constants';

import { StatusTaskSection } from '../../molecules';

export const TasksContainerDesktop: FC = () => {
  return (
    <Grid container spacing={2}>
      {
        TABLE.map((status, index) => (
          <StatusTaskSection title={status.title} status={status.status} key={`${status.title}_${index}`} />
        ))
      }
    </Grid>
  );
};
