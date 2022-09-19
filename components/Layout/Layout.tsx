import { useEffect, useState, Fragment, useContext, ReactEventHandler, UIEventHandler, DOMAttributes } from 'react'
import classes from './Layout.module.scss'
import AppNavigation from '../app-navigation/AppNavigation'
import AppSideControler from '../app-navigation/AppSideControler'
import { BoardContext } from '../../store/board'
import SkeletonGroup from '../UI/skeletons/SkeletonGroup'
import SkeletonBoardHeader from '../UI/skeletons/SkeletonBoardHeader'
import MenuDialog from '../UI/menu/MenuDialog'
import { Props } from '../../service/type'
import CelMenu from '../UI/menu/cel-menu/CelMenu'
import NewItem from '../UI/modal/NewItem'
import Head from 'next/head'
import BoardAppHeader from '../boards/board-header/BoardAppHeader'
import { SpeedDialAction } from '@mui/material'
import SpeedDialMenu from '../UI/speed-dial-mobile/SpeedDialMenu'
import DrawerMenu from '../UI/drawer-mobile-menu/DrawerMenu'
import DynamicDrawerMenu from '../UI/drawer-mobile-menu/DynamicDrawerMenu'


const Layout: React.FC<Props> = (props) => {

    const { board, onAppLoad, anchorEl, anchorElCel, onCloseDialogMenu, modal, setScrollLeft, userScreenWidth, drawerMenu, isMobileView, setDrawerMenu } = useContext(BoardContext)

    useEffect(() => {
        onAppLoad()
    }, [])





    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        setScrollLeft(event.currentTarget.scrollLeft as number)
        // console.log('offsetHeight: ', event.currentTarget.offsetHeight)
    }



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

    const showJSX = () => (
        <div>
            <span>helllooo</span>
        </div>)

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
                        <div onScroll={handleScroll} className={classes['board-content-component']}>
                            {props.children}
                        </div>
                        {(!userScreenWidth || userScreenWidth < 850) && < SpeedDialMenu />}
                        {((!userScreenWidth || userScreenWidth < 850) && drawerMenu?.setOpen) && (
                            <DrawerMenu drawerParam={drawerMenu} oncloseDrawer={() => setDrawerMenu(null)} />)
                        }

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
                <NewItem />
            </main>
        </Fragment>
    )
}



export default Layout
