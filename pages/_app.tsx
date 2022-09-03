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


MyApp.getInitialProps = async () => {

  const res = await fetch('http://127.0.0.1:3000/api/boards')
  const json = await res.json()

  return { board: json[0] }
}

// export async function getStaticProps() {
//   const client = await MongoClient.connect('mongodb+srv://nachum:WE8Sqx80yc2QuInj@cluster0.imbs3gk.mongodb.net/board_db?retryWrites=true&w=majority')
//   const db = client.db()

//   const boardColactions = db.collection('boards')
//   const boardId = '63132d01e209b84db1bb4f4a'
//   const boards = await boardColactions.findOne({
//     _id: new ObjectId(boardId)
//   })
//   const board = JSON.parse(JSON.stringify(boards))

//   const { onAppLoad } = useContext(BoardContext)

//   console.log(boards)

//   onAppLoad(board)


//   client.close()

//   return {
//     props: {
//       board
//     },
//     revalidate: 1
//   }

// }


export default MyApp
