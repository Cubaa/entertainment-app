import React, { FC } from 'react'
import { Box } from '@mui/material'
import { ITrendingBookmarkProps } from './trending-bookmark.interface'
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import TurnedInOutlinedIcon from '@mui/icons-material/TurnedInOutlined';
import { iconStyle, trendingBookmarkStyle } from './trending-bookmark.styled';

export const TrendingBookmark: FC<ITrendingBookmarkProps> = (props) => {
  const { isBookmarked } = props;

  return (
    <Box sx={trendingBookmarkStyle}>
      {isBookmarked ? <TurnedInOutlinedIcon sx={iconStyle} /> : <TurnedInNotOutlinedIcon sx={iconStyle}/>}
    </Box>
  )
}
