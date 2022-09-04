import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import { useRouter } from 'next/router'
import Home from './'
import BoardProvider from '../store/board'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const homePagePath = router.pathname === '/'

  if (homePagePath) return (
    < Home />
  )

  return (
    <BoardProvider>
      <Head>
        <title>TaskNDrop</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BoardProvider>
  )
}



export default MyApp
