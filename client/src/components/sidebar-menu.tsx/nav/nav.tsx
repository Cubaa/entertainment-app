import React, { FC, useCallback, useState } from 'react';
import { Box } from '@mui/material';
import { NavIcon } from './nav.styled';
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
    <Box display="flex" flexDirection={{
      xs: "row",
      md: "column"
    }} alignItems="center" paddingTop={{
      xs: 0,
      md: "2.5rem"
    }} justifyContent={{
      xs: "space-between"
    }} width={{
      xs: "80%",
      md: "100%"
    }}>
      <Box pl={{
        xs: 2,
        sm: 4,
        md: 0
      }}>
        <img src="/assets/logo.svg" alt="logo" />
      </Box>
      <Box mt={{
        xs: 0,
        md: "8.5rem"
      }} display={{
        xs: "flex",
        md: "block"
      }} width={{
        xs: "80%",
        md: "auto"
      }} justifyContent="space-around">
        {navLinks.map((link: INavLink, index: number) => {
          return (
            <Box 
              key={index} 
              onClick={() => handleClickLink(link.name)} 
              sx={NavIcon} 
              mb={{
                xs: 0,
                md: 5
              }} 
              color={(selectedLink === link.name) ? "#fff" : "#5A698F"}>
                {link.icon}
            </Box>
          )
        })}
      </Box>
    </Box>
  );
};
