import React, { FC } from 'react';
import { Grid } from '@mui/material';
import { ListData } from '../../shared/list-data/list-data';

export const Movies: FC = () => {
  return (
    <Grid container display="flex" flexDirection="column" px={5}>
      <ListData title="Movies" category='Movie' />
    </Grid>
  );
};
