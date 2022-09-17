import { useContext } from 'react'
import { useRouter } from 'next/router'

// import classes from './BoardApp.module.scss'
import Head from 'next/head'
import { BoardContext } from '../../../../store/board'
import Map from '../../../../components/boards/map/Map'




const BoardMap = () => {

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
                <Map />
            </section>
        </>
    )
}



export default BoardMap