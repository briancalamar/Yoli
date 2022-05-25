import React, { FC } from 'react';

import { Card, CardHeader, Grid } from '@mui/material';
import { EntryList } from '../EntryList';
import { EntryStatus } from '../../../interfaces';

interface Props {
  title: string;
  status: EntryStatus;
}

export const StatusTaskSection: FC<Props> = ({ title, status }) => {
  return (
    <Grid item xs={12} sm={6} md={4} >
      <Card sx={{ height: 'calc(100vh - 100px)', padding: 1 }}>

        <CardHeader title={title} />
        <EntryList status={status} />

      </Card>
    </Grid>
  );
};

