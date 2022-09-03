import type { NextPage } from 'next'
import Head from 'next/head'
import HomePage from '../components/homepage/HomePage'
const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>TaskNDrop</title>
      </Head>
      <HomePage />
    </>
  )
}


export default Home
