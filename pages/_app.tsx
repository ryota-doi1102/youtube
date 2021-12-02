import { Box } from '@mui/system';
import Navigation from 'components/navigation';
import Header from 'components/header';
import type { AppProps } from 'next/app';
import React, { useState } from 'react';
import MoviePostDialog from 'components/moviePostDialog';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header />
      <Box component="main" sx={{ pb: 7 }}>
        <Component {...pageProps} />
        <Navigation setOpenMoviePostDialog={setOpen} />
      </Box>
      <MoviePostDialog open={open} setOpen={setOpen} />
    </>
  );
};

export default App;
