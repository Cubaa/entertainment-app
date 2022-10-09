import React, { FC } from 'react';
import { Box } from '@mui/material';
import { IBookmarkIconProps } from './bookmark-icon.interface'
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import TurnedInOutlinedIcon from '@mui/icons-material/TurnedInOutlined';
import { iconStyle, bookmarkIconStyle } from './bookmark-icon.styled';

export const BookmarkIcon: FC<IBookmarkIconProps> = (props) => {
  const { isBookmarked } = props;

  return (
    <Box sx={bookmarkIconStyle}>
      {isBookmarked ? <TurnedInOutlinedIcon sx={iconStyle} /> : <TurnedInNotOutlinedIcon sx={iconStyle}/>}
    </Box>
  );
};
