import NextProgress from 'nextjs-progressbar';
import { Toaster } from 'react-hot-toast';
import type { AppType } from 'next/app';

import 'focus-visible';
import '@/styles/globals.css';

const App: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <NextProgress color='#2463EB' />
      <Toaster position='top-center' reverseOrder={false} />

      <Component {...pageProps} />
    </>
  );
};

export default App;
