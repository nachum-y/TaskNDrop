import classes from './BoardAppHeader.module.scss'
import BoardHeaderTop from './boardHeaderTop'
import BoardSubsterHeader from './BoardSubsetHeader'
const BoardAppHeader = () => {
    return (
        <div className={classes['board-header']}>
            <div className={classes['board-header-main']}>
                <BoardHeaderTop />
                <BoardSubsterHeader />
            </div>
        </div>

    )
}

export default BoardAppHeader