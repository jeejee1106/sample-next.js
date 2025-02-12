import { AppProps } from 'next/app';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  console.log('뭘까요? pageProps = ', pageProps);
  return <Component {...pageProps} />;
}