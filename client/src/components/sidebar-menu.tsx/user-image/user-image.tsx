import React, { FC } from 'react';
import { Avatar, Box } from '@mui/material';
import { avatarBoxStyle, avatarStyle } from './user-image.styled';

export const UserImage: FC = () => {
  return (
    <Box sx={avatarBoxStyle} mb={4} mt={4} width={{
      xs: "20%",
      md: "auto"
    }}>
      <Avatar src="/assets/image-avatar.png" alt="user avatar" sx={avatarStyle}/>
    </Box>
  );
};
