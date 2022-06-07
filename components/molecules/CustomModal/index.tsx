import { Box, FormControl, InputLabel, MenuItem, Modal, Select, SelectChangeEvent, TextField } from '@mui/material';
import React, { FC, useContext, useState } from 'react';
import { TABLE } from '../../../constants';
import { uiContext } from '../../../context/ui';
import { EntryStatus } from '../../../interfaces';

interface Props {
  width?: string;
  height?: string;
  maxWidth?: string;
  minWidth?: string;
  bgcolor?: string;
}

interface FormEntry {
  title?: string;
  status?: EntryStatus;
  description?: string;
}

export const CustomModal: FC<Props> = ({
  width,
  height,
  maxWidth,
  minWidth,
  bgcolor, 
}) => {

  const [form, setForm] = useState<FormEntry>({
    title: '',
    description: '',
    status: undefined,
  });

  const formHandler = (e: SelectChangeEvent<string>): void => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const { sideMenuOpen } = useContext(uiContext);

  return (
    <Modal
      open={sideMenuOpen}
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
          height: height,
          width: width || '100%',
          minWidth: minWidth || '300px',
          maxWidth: maxWidth || '700px',
          bgcolor: bgcolor,
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
            value={form.status}
            label="Age"
            name='status'
            onChange={(e) => formHandler(e)}
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
  );
};
