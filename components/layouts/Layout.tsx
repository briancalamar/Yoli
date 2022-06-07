import { Box } from '@mui/material';
import Head from 'next/head';
import { FC } from 'react';
import { NavBar, SideBar } from '../molecules';


interface Props {
  title?: string;
  children?: React.ReactNode;
}

export const Layout: FC<Props> = ({ title = 'OpenJira', children }) => {
  return (
    <Box sx={{ flexFlow: 1, background: 'linear-gradient(to bottom, #000428, #2c2367)', minHeight: '100vh' }}>
      <Head>
        <title>{title}</title>
      </Head>

      <NavBar />
      <SideBar />

      <Box sx={{ padding: '10px 20px' }}>
        {children}
      </Box>
    </Box>
  );
};
