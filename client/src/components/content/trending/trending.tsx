import React, { FC } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { headingContentStyle } from '../../../styles/shared-styles';
import Slider from "react-slick";
import data from '../../../data/data.json'
import { settings } from './trending.data';
import { IData } from '../../../interfaces/data.interface';
import { TrendingInfo } from './trending-info/trending-info';
import { TrendingBookmark } from './trending-bookmark/trending-bookmark';
import { sliderBoxStyle } from './trending.styled';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './trending.css';

export const Trending: FC = () => {
  return (
    <Grid container display="flex" flexDirection="column" px={5}>
      <Box py={2}>
        <Typography variant="body1" component="p" sx={headingContentStyle}>Trending</Typography>
      </Box>
        <Slider {...settings}>
          {data.map((item: IData, index: number) => {
            if (item.thumbnail.trending) {
              return (
                <Box key={index} sx={sliderBoxStyle}>
                  <img src={item.thumbnail.trending.small} alt="trending" />
                  <TrendingBookmark isBookmarked={item.isBookmarked}/>
                  <TrendingInfo data={item} />
                </Box>
              )
            }
            return null;
          })}
      </Slider>
    </Grid>
  );
};
