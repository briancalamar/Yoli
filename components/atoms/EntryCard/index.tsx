import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import React, { FC } from 'react';
import { Entry } from '../../../interfaces';

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  return (
    <Card sx={{ marginBottom: 1, backgroundColor: 'transparent' }}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ withSpace: 'pre-line' }}> {entry.description} </Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
          <Typography variant='body2'> Hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
