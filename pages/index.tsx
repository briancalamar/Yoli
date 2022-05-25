
import { FC, useState } from 'react';

import { Box, FormControl, InputLabel, MenuItem, Modal, Select, TextField } from '@mui/material';

import { Layout } from '../components/layouts';
import { TasksContainer } from '../components/organisms';
import { TABLE } from '../constants';

const Home: FC = () => {
  const [modal, setModal] = useState(false);
  const [status, setStatus] = useState('');

  return (
    <Layout title='Home - OpenJira'>
      <TasksContainer />
      <Modal
        open={modal}
        aria-labelledby="modal-create-task"
        aria-describedby="modal-here-you-can-create-a-new-task"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: 2,
            width: '100%',
            maxWidth: '700px',
            bgcolor: 'red',
          }}
        >
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder='Nueva tarea'
            autoFocus
            multiline
            label='Nueva tarea'
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              label="Age"
              onChange={(e) => setStatus(e.target.value)}
            >
              {
                TABLE.map((status) => (
                  <MenuItem key={status.title} value={status.status}>{status.title}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </Box>
      </Modal>
    </Layout>
  );
};

export default Home;
