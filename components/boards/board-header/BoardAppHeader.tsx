import { useContext } from 'react'
import { BoardContext } from '../../../store/board'
import classes from './BoardAppHeader.module.scss'
import BoardHeaderTop from './boardHeaderTop'
import BoardSubsterHeader from './BoardSubsetHeader'
import SubsetHeaderToolBar from './SubsetHeaderToolbar'
const BoardAppHeader = () => {
    const { userScreenWidth } = useContext(BoardContext)
    return (
        <div className={classes['board-header']}>
            <div className={classes['board-header-main']}>
                <BoardHeaderTop />
                <SubsetHeaderToolBar></SubsetHeaderToolBar>
                {(userScreenWidth && userScreenWidth > 850) && (<SubsetHeaderToolBar />)}
                <BoardSubsterHeader />
            </div>
        </div>

    )
}

export default BoardAppHeader