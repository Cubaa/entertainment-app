import React, { FC } from 'react';
import { Avatar, Box } from '@mui/material';
import { avatarBoxStyle, avatarStyle } from './user-image.styled';

export const UserImage: FC = () => {
  return (
    <Box sx={avatarBoxStyle} mb={4} mt={4}>
      <Avatar src="/assets/image-avatar.png" alt="user avatar" sx={avatarStyle}/>
    </Box>
  );
};
