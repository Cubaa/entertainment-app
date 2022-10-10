import React, { FC } from 'react';
import { Grid } from '@mui/material';
import { SidebarMenu } from '../sidebar-menu.tsx/sidebar-menu';

export const Menu: FC = () => {
  return (
    <Grid container item component="nav" width="100%" display={{
      xs: "flex",
      md: "block"
    }}>
      <SidebarMenu />
    </Grid>
  );
};
