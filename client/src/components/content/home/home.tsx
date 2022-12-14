import React, { FC } from 'react';
import { Grid } from '@mui/material';
import { TrendingSlider } from './trending-slider/trending-slider';
import { ListData } from '../../shared/list-data/list-data';

export const Home: FC = () => {
  return (
    <Grid container display="flex" flexDirection="column" px={5}>
      <TrendingSlider />
      <ListData title="Recommended for you" category='all' />
    </Grid>
  );
};
