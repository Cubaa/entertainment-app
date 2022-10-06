import { Grid } from '@mui/material'
import React, { FC } from 'react'
import { Nav } from './nav/nav'
import { sidebarMenuStyle } from './sidebar-menu.styled'
import { UserImage } from './user-image/user-image'

export const SidebarMenu: FC = () => {
  return (
    <Grid container item style={sidebarMenuStyle}>
      <Nav />
      <UserImage />
    </Grid>
  )
}
