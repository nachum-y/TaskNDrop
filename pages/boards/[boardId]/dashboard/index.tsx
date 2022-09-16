import { useContext } from 'react'
import { useRouter } from 'next/router'

// import classes from './BoardApp.module.scss'
import Head from 'next/head'
import { BoardContext } from '../../../../store/board'




const BoardDashboard = () => {

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

            <section className={'board-wrapper'}>
                <span>BoardDashboard</span>
            </section>
        </>
    )
}






export default BoardDashboard