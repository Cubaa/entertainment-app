import React, { FC } from 'react'
import { Grid } from '@mui/material'
import { ListData } from '../../shared/list-data/list-data'
import { bookmarkedData } from './bookmarked.data';
import { IBookmarkedData } from './bookmarked.interface';

export const Bookmarked: FC = () => {
  return (
    <Grid container display="flex" flexDirection="column" px={5}>
      {bookmarkedData.map((item: IBookmarkedData, index: number) => {
        return (
          <ListData key={index} title={item.title} category={item.category} />
        )
      })}
    </Grid>
  );
};
