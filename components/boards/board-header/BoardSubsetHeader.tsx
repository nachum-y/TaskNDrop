import BoardFilter from "./BoardFilter"

import classes from './BoardSubsterHeader.module.scss'
function BoardSubsterHeader() {
    return (
        <div className={classes['board-sub-header']}>
            <span>TEST</span>
            <BoardFilter />
        </div>
    )
}

export default BoardSubsterHeader