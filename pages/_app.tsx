import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import { useRouter } from 'next/router'
import Home from './'
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const homePagePath = router.pathname === '/'
  if (homePagePath) return (
    < Home />
  )

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
