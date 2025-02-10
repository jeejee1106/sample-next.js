export default function App({ Component, pageProps }: AppProps) {
  console.log(pageProps);
  return <Component {...pageProps} />;
}