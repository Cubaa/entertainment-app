import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import { 
  trendingInfoContentStyle,
  typoStyle,
  titleStyle,
  dotStyle,
  iconBox
} from './trending-info.styled';
import { ITrendingInfoProps } from './trending-info.interface';

export const TrendingInfo: FC<ITrendingInfoProps> = (props) => {
  const { data, sx } = props;

  return (
    <Box sx={sx}>
      <Box sx={trendingInfoContentStyle}>
        <Typography component="span" sx={typoStyle}>{data.year}</Typography>
        <Box component="span" sx={dotStyle}></Box>
        <Box sx={iconBox}>
          <LocalMoviesIcon fontSize='small'/>
          <Typography component="span" sx={typoStyle}>{data.category}</Typography>
        </Box>
        <Box component="span" sx={dotStyle}></Box>
        <Typography component="span" sx={typoStyle}>{data.rating}</Typography>
      </Box>
      <Typography component="p" sx={titleStyle}>{data.title}</Typography>
    </Box>
  );
};
