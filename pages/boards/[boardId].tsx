import { useContext } from 'react'
import { BoardContext } from '../../store/board'
import { useRouter } from 'next/router'

import classes from './BoardApp.module.scss'
import Head from 'next/head'
import BoardAppHeader from '../../components/boards/board-header/BoardAppHeader'
import GroupList from '../../components/boards/groups/GroupList'



const BoardApp = () => {

    const router = useRouter()
    const { board } = useContext(BoardContext)

    if (router.query.boardId !== board?._id) {
        return (
            <div>
                ERROR
            </div>
        )
    }

    return (
        <>
            <Head>
                <title>{board?.title}</title>
            </Head>
            <section className={classes['board-wrapper']}>
                <BoardAppHeader />
                <GroupList />
            </section>
        </>
    )
}






export default BoardApp