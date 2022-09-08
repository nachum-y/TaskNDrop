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
            <AppNavigation />
            <main className={classes.main}>
                <AppSideControler />
                <div className={classes['first-level-content']}>
                    {props.children}
                </div>
                {anchorEl && <MenuDialog
                    anchorElement={anchorEl}
                    onClose={handleClose}
                />}
                {anchorElCel?.anchorElCel && <CelMenu
                    anchorElement={anchorElCel.anchorElCel}
                    onClose={handleClose}
                    menuType={anchorElCel.typeClick}
                />}
            </main>
        </Fragment>
    )
}



export default Layout
