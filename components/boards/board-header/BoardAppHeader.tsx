import classes from './BoardAppHeader.module.scss'
import BoardHeaderTop from './boardHeaderTop'
import BoardSubsterHeader from './BoardSubsetHeader'
import SubsetHeaderToolBar from './SubsetHeaderToolbar'
const BoardAppHeader = () => {
    return (
        <div className={classes['board-header']}>
            <div className={classes['board-header-main']}>
                <BoardHeaderTop />
                <SubsetHeaderToolBar />
                <BoardSubsterHeader />
            </div>
        </div>

    )
}

export default BoardAppHeader