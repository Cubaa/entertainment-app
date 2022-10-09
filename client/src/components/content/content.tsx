import React, { FC } from 'react';
import { Grid } from '@mui/material';
import { SearchInput } from './search-input/search-input';
import { renderContent } from './utils/render-content';
import { useAppSelector } from '../../store/hooks/hooks';

export const Content: FC = () => {
  const navLink = useAppSelector(state => state.navSlice.linkName);

  return (
    <Grid container item>
      <SearchInput />
      {renderContent(navLink)}
    </Grid>
  );
};
