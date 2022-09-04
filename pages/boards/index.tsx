import { useContext } from 'react'
import { BoardContext } from '../../store/board'
import classes from './BoardApp.module.scss'
import Head from 'next/head'
import BoardAppHeader from '../../components/boards/board-header/BoardAppHeader'
import GroupList from '../../components/boards/groups/GroupList'



const BoardApp = () => {


    const boardCtx = useContext(BoardContext)

    return (
        <>
            <Head>
                <title>{boardCtx.board?.title}</title>
            </Head>
            <section className={classes['board-wrapper']}>
                <BoardAppHeader />
                <GroupList />
            </section>
        </>
    )
}






export default BoardApp