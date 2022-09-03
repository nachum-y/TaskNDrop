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
                <h1>hey{boardCtx.board?.title}</h1>
                <button onClick={() => boardCtx.changeText('teee')}>change</button>
            </section>
        </>
    )
}






export default BoardApp