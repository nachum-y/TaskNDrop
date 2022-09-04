import { useEffect, useState, Fragment, useContext } from 'react'
import classes from './Layout.module.scss'
import AppNavigation from '../app-navigation/AppNavigation'
import AppSideControler from '../app-navigation/AppSideControler'
import { BoardContext } from '../../store/board'

type Props = { children: React.ReactNode }


const Layout: React.FC<Props> = (props) => {

    const { board, onAppLoad } = useContext(BoardContext)

    onAppLoad()

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
