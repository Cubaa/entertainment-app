import React, { FC, useCallback } from 'react';
import { Box } from '@mui/material';
import { NavIcon, NavIconsStyle, NavStyle } from './nav.styled';
import { navLinks } from './nav.data';
import { INavLink } from './nav.interface';

export const Nav: FC = () => {
  const handleClickLink = useCallback((name: string) => {
    console.log(name);
  }, []);


  return (
    <Box sx={NavStyle}>
      <Box>
        <img src="/assets/logo.svg" alt="logo" />
      </Box>
      <Box sx={NavIconsStyle}>
        {navLinks.map((link: INavLink, index: number) => {
          return (
            <Box key={index} onClick={() => handleClickLink(link.name)} sx={NavIcon} mb={5} color="#5A698F">
              {link.icon}
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
