import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { useContext } from 'react';
import { uiContext } from '../../../context/ui';

const menuItems: string[] = ['Home', 'About', 'Contact'];

export const SideBar = () => {

  const { sideMenuOpen, closeSideMenu } = useContext(uiContext);

  return (
    <Drawer
      anchor="left"
      open={sideMenuOpen}
      onClose={closeSideMenu}
    >
      <Box sx={{ width: 250 }}>


        <Box sx={{ padding: '5px 10px' }}>
          <Typography variant="h4">Menu</Typography>
        </Box>

        <List>
          {
            menuItems.map((item, index) => (
              <ListItem button key={index}>
                <ListItemText primary={item} />
              </ListItem>
            ))
          }
        </List>

        <Divider />

        <List>
          {
            menuItems.map((item, index) => (
              <ListItem button key={index}>
                <ListItemText primary={item} />
              </ListItem>
            ))
          }
        </List>

      </Box>
    </Drawer>
  );
};
