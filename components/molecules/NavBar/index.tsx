import { FC, useContext } from 'react';

import { AppBar, IconButton, Toolbar, Typography, Avatar } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { uiContext } from '../../../context/ui';

export const NavBar: FC = () => {
  const { openSideMenu } = useContext(uiContext);

  const user = {
    name: 'Brian',
    avatar: 'https://img.freepik.com/foto-gratis/retrato-hombre-blanco-aislado_53876-40306.jpg?size=626&ext=jpg&ga=GA1.2.1400221096.1653502495'
  };

  return (
    <AppBar position="sticky" elevation={0} sx={{ backgroundColor: 'transparent' }}>
      <Toolbar sx={{ displey: 'flex', justifyContent: 'space-between' }}>
        <IconButton size="large" edge="start" onClick={openSideMenu}>
          <MenuOutlinedIcon />
        </IconButton>
        <Typography variant="h6">
          Monday, 28
        </Typography>
        <Avatar alt={user?.name} src={user?.avatar}/>
      </Toolbar>
    </AppBar>
  );
};
