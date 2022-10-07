import React, { FC, useCallback, useState } from 'react';
import { Box } from '@mui/material';
import { NavIcon, NavIconsStyle, NavStyle } from './nav.styled';
import { navLinks } from './nav.data';
import { INavLink } from './nav.interface';
import { useAppDispatch } from '../../../store/hooks/hooks';
import { setRoute } from '../../../store/features/nav/nav-slice';

export const Nav: FC = () => {
  const [selectedLink, setSelectedLink] = useState<string>("home");
  const dispatch = useAppDispatch();

  const handleClickLink = useCallback((name: string): void => {
    console.log(name);
    dispatch(setRoute(name));
    setSelectedLink(name);
  }, [dispatch]);

  return (
    <Box sx={NavStyle}>
      <Box>
        <img src="/assets/logo.svg" alt="logo" />
      </Box>
      <Box sx={NavIconsStyle}>
        {navLinks.map((link: INavLink, index: number) => {
          return (
            <Box 
              key={index} 
              onClick={() => handleClickLink(link.name)} 
              sx={NavIcon} 
              mb={5} 
              color={(selectedLink === link.name) ? "#fff" : "#5A698F"}>
                {link.icon}
            </Box>
          )
        })}
      </Box>
    </Box>
  );
};
