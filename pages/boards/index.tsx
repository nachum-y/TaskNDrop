import { useContext } from 'react'
import { useRouter } from 'next/router'
import { BoardContext } from '../../store/board'
// import classes from './BoardApp.module.scss'
// import Head from 'next/head'
// import BoardAppHeader from '../../components/boards/board-header/BoardAppHeader'
// import GroupList from '../../components/boards/groups/GroupList'



const BoardApp = () => {

    const router = useRouter()
    const { board } = useContext(BoardContext)

 

    return (
        <>

        </>
    )
}






export default BoardApp