import { Box } from '@mui/system';
import Navigation from 'components/navigation';
import Header from 'components/header';
import type { AppProps } from 'next/app';
import React from 'react';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Header />
      <Box component="main" sx={{ pb: 7 }}>
        <Component {...pageProps} />
        <Navigation />
      </Box>
    </>
  );
};

export default App;
