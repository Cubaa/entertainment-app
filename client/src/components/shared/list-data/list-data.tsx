import React, { FC } from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { IData } from '../../../interfaces/data.interface';
import { headingContentStyle } from '../../../styles/shared-styles';
import { TrendingInfo } from '../../content/home/trending-info/trending-info';
import { BookmarkIcon } from '../bookmark-icon/bookmark-icon';
import { cardContentStyle, listItemInfoStyle } from './list-data.styled';
import { getFilteredData } from '../../content/utils/get-filtered-data';

interface IListDataProps {
  title: string;
  category: string;
}

export const ListData: FC<IListDataProps> = (props) => {
  const { title, category } = props;

  const filteredData = getFilteredData(category);

  return (
    <Grid>
      <Box>
        <Typography variant="body1" component="p" sx={headingContentStyle}>{title}</Typography>
      </Box>
      <Grid display="flex" flexWrap="wrap" width="100%">
        {filteredData.map((item: IData, index: number) => {
          return (
            <Grid item xs={12} sm={12} md={4} lg={3} xl={3} key={index}>
              <Card sx={{  margin: "20px 20px 20px 0" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="174"
                    image={item.thumbnail.regular.medium}
                    alt="recommended"
                  />
                  <BookmarkIcon isBookmarked={item.isBookmarked}/>
                  <CardContent sx={cardContentStyle}>
                    <TrendingInfo data={item} sx={listItemInfoStyle} />
                    <Typography variant="body2" color="text.secondary">
                      {item.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  );
};
