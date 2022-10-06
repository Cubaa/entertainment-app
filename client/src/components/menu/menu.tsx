import { Grid } from '@mui/material'
import React from 'react'
import { SidebarMenu } from '../sidebar-menu.tsx/sidebar-menu'

export const Menu = () => {
  return (
    <Grid container item py={4} pl={4}>
      <SidebarMenu />
    </Grid>
  )
}
