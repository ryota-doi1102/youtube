import { Typography } from '@mui/material';
import Channellist, { Channel } from 'components/chanellist';
import { NextPage } from 'next';
import React from 'react';

const a: Channel[] = [
  {
    id: 'hogehoge',
    avatarUrl:
      'https://i.ytimg.com/vi/B_ncQhqfHas/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwrZyhtIkSy80xxx3hnhOS53_vqg',
    name: 'アル中カラカラ',
    createdAt: 471846721,
  },
  {
    id: 'hogehoge',
    avatarUrl:
      'https://i.ytimg.com/vi/B_ncQhqfHas/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwrZyhtIkSy80xxx3hnhOS53_vqg',
    name: 'アル中カラカラ',
    createdAt: 471846721,
  },
];

const ChannellistPage: NextPage = () => {
  return (
    <>
      <Typography component="h1" variant="h5">
        ChannellistTitle
      </Typography>
      <Channellist channels={a} />
    </>
  );
};

export default ChannellistPage;
