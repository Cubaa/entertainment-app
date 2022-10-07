import React, { FC } from 'react';
import { Grid, TextField, Box, ThemeProvider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { searchIconStyle, textFieldTheme } from './search-input.styled';

export const SearchInput: FC = () => {
  return (
    <Grid item xs={12} py={4} px={5}>
      <Box display="flex" alignItems="center">
        <SearchIcon fontSize='large' sx={searchIconStyle}/>
        <ThemeProvider theme={textFieldTheme}>
          <TextField
            id="standard-basic"
            variant="standard"
            placeholder='Search for movies or TV series'
            fullWidth
            InputProps={{ disableUnderline: false }}
          />
        </ThemeProvider>
      </Box>
    </Grid>
  );
};
