import { Typography } from '@mui/material';
import MovieCardList, { Movie } from 'components/movieCardList';
import { NextPage } from 'next';

const a: Movie[] = [
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

const MylistPage: NextPage = () => {
  return (
    <>
      <Typography component="h1" variant="h5">
        MylistTitle
      </Typography>
      <MovieCardList movies={a} />
    </>
  );
};

export default MylistPage;
