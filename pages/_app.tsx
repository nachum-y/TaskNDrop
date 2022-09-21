import '../styles/globals.css'
import Layout from '../components/Layout/Layout'
import { useRouter } from 'next/router'
import Home from './'
import BoardProvider from '../store/board'

import * as React from 'react'
import type { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'
import * as gtag from '../lib/gtag'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import createEmotionCache from '../util/createEmotionCache'
import lightThemeOptions from '../util/theme'
import Script from 'next/script'
import Gtag from '../components/script/Gtag'
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

const lightTheme = createTheme(lightThemeOptions)

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const router = useRouter()
  const homePagePath = router.pathname === '/'

  React.useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])




  return (
    <CacheProvider value={emotionCache}>
      <Gtag />
      <ThemeProvider theme={lightTheme}>
        <BoardProvider>
          <CssBaseline />
          {homePagePath && <Home />}
          {!homePagePath && (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </BoardProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp;

