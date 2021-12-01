import { Avatar, Card, CardHeader, CardMedia, List, ListItem } from '@mui/material';
import { NextPage } from 'next';
import React from 'react';

type Movie = {
  id: string;
  title: string;
  channelId: string;
  avatarUrl: string;
  thumbnailUrl: string;
  createdAt: number;
};

type Props = {
  movies: Movie[];
};

const MovieList = (props: Props) => {
  return (
    <List sx={{ pl: 1, pr: 1 }}>
      {props.movies.map((movie) => (
        <React.Fragment key={movie.id}>
          <ListItem disablePadding>
            <Card>
              <CardMedia image={movie.thumbnailUrl} height={194} component={'img'} />
              <CardHeader avatar={<Avatar>s</Avatar>} title={movie.title} subheader={movie.createdAt} />
            </Card>
          </ListItem>
        </React.Fragment>
      ))}
    </List>
  );
};

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

const HomePage: NextPage = () => {
  return (
    <>
      <MovieList movies={a} />
    </>
  );
};

export default HomePage;
