import { List, Paper } from '@mui/material';
import React, { FC, useContext, useMemo } from 'react';
import { EntriesContext } from '../../../context/entries';
import { EntryStatus } from '../../../interfaces';
import { EntryCard } from '../../atoms';

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ( { status }) => {

  const { entries } = useContext(EntriesContext);

  const entryByStatus = useMemo(() => entries.filter(entry => entry.status === status) ,[entries]);

  return (
    <div>
      <Paper sx={{ height: 'calc(100vh - 180px)', overflow: 'scroll', backgroundColor: 'none', padding: '0.2em' }}>

        {/* TODO: Cambiara dependiendo si esto esta haciendo drag o no */}
        <List >
          {
            entryByStatus.map(entry => (
              <EntryCard key={entry._id} entry={entry} />
            ))
          }
        </List>
      </Paper>
    </div>
  );
};
