import React, { FC } from 'react';
import { Grid } from '@mui/material';
import { Nav } from './nav/nav';
import { UserImage } from './user-image/user-image';

export const SidebarMenu: FC = () => {
  return (
    <Grid container item width={{
      xs: "100%",
      md: "96px"
    }} flexDirection={{
      xs: "row",
      md: "column"
    }} minHeight={{
      xs: 0,
      md: "calc(100vh - 64px)"
    }} borderRadius={{
      xs: 0,
      md: '20px'
    }} display="flex" bgcolor="#161D2F" justifyContent={{
      md: "space-between"
    }}>
      <Nav />
      <UserImage />
    </Grid>
  );
};
