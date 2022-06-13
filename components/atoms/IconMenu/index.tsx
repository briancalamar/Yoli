import { FC, useState } from 'react';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export interface MenuItems {
  label: string;
  onClick: (id: string | undefined) => void;
}

interface Props {
  entryId?: string;
  menuItems: MenuItems[];
  icon?: React.FunctionComponent;
}

export const IconMenu: FC<Props> = ({ icon: Icon, entryId, menuItems }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleClickItems = (handler: () => void) => {
    setAnchorEl(null);
    handler();
  };

  return (
    <>
      <IconButton
        aria-label='More'
        aria-controls={`${entryId}-menu`}
        aria-haspopup='true'
        onClick={handleClick}
      >
        {Icon ? <Icon /> : <MoreVertIcon />}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems.map(({ label, onClick }) => (
          <MenuItem key={label} onClick={() => handleClickItems(() => onClick(entryId))}>{label}</MenuItem>
        ))}
      </Menu>

    </>
  );
};
