import NextNProgress from 'nextjs-progressbar';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <NextNProgress color="#fafaf9" startPosition={0.1} stopDelayMs={200} height={5} showOnShallow={true}/>
  <Component {...pageProps} />
  </>
}
