import { FC } from 'react';

import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

type Props = {
  fullWidth?: boolean;
  placeholder?: string;
  className?: string;
}

export const Search: FC<Props> = ({ fullWidth, className, placeholder = 'Search..' }) => {



  return (
    <TextField
      fullWidth={fullWidth}
      hiddenLabel
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      placeholder={placeholder}
      className={className}
    />
  );
};
