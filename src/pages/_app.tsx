import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from './components/Header'
import Footer from './components/Footer'
import 'swiper/css/bundle'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className='App'>
        <Header />
      </div>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
