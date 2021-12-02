import UserChannel, { Channel } from 'components/channel';
import MovieCardList, { Movie } from 'components/movieCardList';
import { NextPage } from 'next';
import React from 'react';

const a: Channel = {
  id: 'hogehoge',
  avatarUrl:
    'https://i.ytimg.com/vi/B_ncQhqfHas/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwrZyhtIkSy80xxx3hnhOS53_vqg',
  name: 'アル中カラカラ',
  createdAt: 64781964,
};

const b: Movie[] = [
  {
    id: 'hogehoge',
    title: 'こんにちは',
    channelId: 'gehogeho',
    avatarUrl: '',
    thumbnailUrl:
      'https://i.ytimg.com/vi/B_ncQhqfHas/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwrZyhtIkSy80xxx3hnhOS53_vqg',
    createdAt: 156783,
  },
  {
    id: 'hogehoge',
    title: 'こんにちは',
    channelId: 'gehogeho',
    avatarUrl: '',
    thumbnailUrl:
      'https://i.ytimg.com/vi/B_ncQhqfHas/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwrZyhtIkSy80xxx3hnhOS53_vqg',
    createdAt: 156783,
  },
];

const ChannelPage: NextPage = () => {
  return (
    <>
      <MovieCardList movies={b} />
    </>
  );
};

export default ChannelPage;
