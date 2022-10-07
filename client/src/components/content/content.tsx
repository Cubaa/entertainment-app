import { Grid } from '@mui/material';
import React, { FC } from 'react';
import { SearchInput } from './search-input/search-input';
import { Trending } from './trending/trending';

export const Content: FC = () => {
  return (
    <Grid container item>
      <SearchInput />
      <Trending />
    </Grid>
  );
};
