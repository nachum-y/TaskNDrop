import { useEffect, useState, Fragment, useContext, ReactEventHandler } from 'react'
import classes from './Layout.module.scss'
import AppNavigation from '../app-navigation/AppNavigation'
import AppSideControler from '../app-navigation/AppSideControler'
import { BoardContext } from '../../store/board'
import SkeletonGroup from '../UI/skeletons/SkeletonGroup'
import SkeletonBoardHeader from '../UI/skeletons/SkeletonBoardHeader'
// import useContextMenu from '../../hooks/useContextMenu'
import MenuDialog from '../UI/menu/MenuDialog'
import Button from '@mui/material/Button'

type Props = { children: React.ReactNode }

type Pos = {
    left: string
    top: string
}


const Layout: React.FC<Props> = (props) => {

    const { board, onAppLoad, anchorEl, onCloseDialogMenu } = useContext(BoardContext)
    // const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

    const id = 'simple-popover'

    useEffect(() => {
        onAppLoad()
    }, [])

    // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     setAnchorEl(event.currentTarget)
    //     console.log(event.currentTarget)

    // }

    const handleClose = () => {
        // setAnchorEl(null)
        onCloseDialogMenu()
    }

    // const { xPos, yPos, showMenu } = useContextMenu()

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
            </main>
        </Fragment>
    )
}



export default Layout
