import React, { FC } from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { headingContentStyle } from '../../../../styles/shared-styles';
import { IData } from '../../../../interfaces/data.interface';
import { TrendingInfo } from '../trending-info/trending-info';
import { cardContentStyle, recommendedInfoStyle } from './recommended.styled';
import { BookmarkIcon } from '../../../shared/bookmark-icon/bookmark-icon';
import data from '../../../../data/data.json';

export const Recommended: FC = () => {
  return (
    <Grid>
      <Box py={4}>
        <Typography variant="body1" component="p" sx={headingContentStyle}>Recommended for you</Typography>
      </Box>
      <Grid display="flex" flexWrap="wrap" width="100%">
        {data.map((item: IData, index: number) => {
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
                    <TrendingInfo data={item} sx={recommendedInfoStyle} />
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
