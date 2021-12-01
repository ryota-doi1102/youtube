import { List, ListItem, Card, CardMedia, CardHeader, Avatar, Grid } from '@mui/material';
import React from 'react';

export type Movie = {
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

const MovieCardList = (props: Props) => {
  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      {props.movies.map((movie) => (
        <Grid key={movie.id} item>
          <Card>
            <CardMedia image={movie.thumbnailUrl} height={194} component={'img'} />
            <CardHeader avatar={<Avatar>s</Avatar>} title={movie.title} subheader={movie.createdAt} />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieCardList;
