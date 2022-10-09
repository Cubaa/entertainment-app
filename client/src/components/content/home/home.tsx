import React, { FC } from 'react';
import { Grid } from '@mui/material';
import { TrendingSlider } from './trending-slider/trending-slider';
import { Recommended } from './recommended/recommended';

export const Home: FC = () => {
  return (
    <Grid container display="flex" flexDirection="column" px={5}>
      <TrendingSlider />
      <Recommended />
    </Grid>
  );
};
