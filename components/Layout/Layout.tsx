import { useEffect, useState, Fragment, useContext } from 'react'
import classes from './Layout.module.scss'
import AppNavigation from '../app-navigation/AppNavigation'
import AppSideControler from '../app-navigation/AppSideControler'
import { BoardContext } from '../../store/board'

type Props = { children: React.ReactNode }


const Layout: React.FC<Props> = (props) => {

    const { board, onAppLoad } = useContext(BoardContext)


    useEffect(() => {
        onAppLoad()
        // async function fetchData() {
        //     const res = await fetch('http://127.0.0.1:3000/api/boards')
        //     const json = await res.json()
        //     const loadBoard = json[0]
        //     setInitialBoard(loadBoard)
        //     boardCtx.loadBoard(loadBoard)
        // }
        // fetchData()
    }, [])

    if (!board) {
        return (<div>Loading...</div>)
    }


    return (
        <Fragment>
            <AppNavigation />
            <main className={classes.main}>
                <AppSideControler />
                <div className={classes['first-level-content']}>
                    {props.children}
                </div>
            </main>
        </Fragment>
    )
}



export default Layout
