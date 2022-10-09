import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import { IData } from '../../../../interfaces/data.interface';
import { BookmarkIcon } from '../../../shared/bookmark-icon/bookmark-icon';
import { headingContentStyle } from '../../../../styles/shared-styles';
import { settings } from './trending-slider.data';
import { sliderBoxStyle } from '../home.styled';
import { TrendingInfo } from '../trending-info/trending-info';
import { trendingInfoStyle } from './trending-slider.styled';
import data from '../../../../data/data.json';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './trending-slider.css';

export const TrendingSlider: FC = () => {
  return (
    <>
      <Box py={2}>
        <Typography variant="body1" component="p" sx={headingContentStyle}>Trending</Typography>
      </Box>
      <Slider {...settings}>
        {data.map((item: IData, index: number) => {
          if (item.thumbnail.trending) {
            return (
              <Box key={index} sx={sliderBoxStyle}>
                <img src={item.thumbnail.trending.small} alt="trending" />
                <BookmarkIcon isBookmarked={item.isBookmarked}/>
                <TrendingInfo data={item} sx={trendingInfoStyle} />
              </Box>
            )
          }
          return null;
        })}
      </Slider>
    </>
  );
};
