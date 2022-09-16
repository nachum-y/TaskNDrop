import { useEffect, useState, Fragment, useContext, ReactEventHandler } from 'react'
import classes from './Layout.module.scss'
import AppNavigation from '../app-navigation/AppNavigation'
import AppSideControler from '../app-navigation/AppSideControler'
import { BoardContext } from '../../store/board'
import SkeletonGroup from '../UI/skeletons/SkeletonGroup'
import SkeletonBoardHeader from '../UI/skeletons/SkeletonBoardHeader'
import MenuDialog from '../UI/menu/MenuDialog'
import { Props } from '../../service/type'
import StatusMenu from '../UI/menu/cel-menu/StatusMenu'
import { positions } from '@mui/system'
import CelMenu from '../UI/menu/cel-menu/CelMenu'
import Head from 'next/head'
import BoardAppHeader from '../boards/board-header/BoardAppHeader'


const Layout: React.FC<Props> = (props) => {

    const { board, onAppLoad, anchorEl, anchorElCel, onCloseDialogMenu } = useContext(BoardContext)

    useEffect(() => {
        onAppLoad()
    }, [])



    const handleClose = () => {
        onCloseDialogMenu()
    }


    if (!board) {
        return (
            <>
                <AppNavigation />
                <main className={classes.main}>
                    <AppSideControler />
                    <div className={classes['first-level-content']}>
                        <SkeletonBoardHeader theme="light" />
                        {
                            [1, 2, 3, 4, 5].map((n) => {
                                return <SkeletonGroup
                                    key={n}
                                    theme="light"
                                />
                            })}
                    </div>

                </main>
            </>
        )
    }


    return (
        <Fragment>
            <Head>
                <title>{board?.title}</title>
            </Head>
            <AppNavigation />
            <main className={classes.main}>
                <AppSideControler />
                <div className={classes['first-level-content']}>
                    <section className={classes['board-wrapper']}>
                        <BoardAppHeader />
                        <div className={classes['board-content-component']}>
                            {props.children}
                        </div>
                    </section>
                </div>
                {anchorEl?.anchorEl && <MenuDialog
                    anchorElement={anchorEl.anchorEl}
                    onClose={handleClose}
                    menuType={anchorEl.menuType}
                />}
                {anchorElCel?.anchorElCel && <CelMenu
                    anchorElement={anchorElCel.anchorElCel}
                    onClose={handleClose}
                    menuType={anchorElCel.taskCol}
                />}
            </main>
        </Fragment>
    )
}



export default Layout
