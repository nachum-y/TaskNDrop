import { SvgIcon } from "@mui/material"
import BoardFilter from "./BoardFilter"
import { boardHeaderIcon } from "../../../service/svgIcon"

import classes from './BoardSubHeader.module.scss'
function BoardSubsterHeader() {
    return (
        <div className={classes['board-sub-header']}>
            <div className={classes['add-board-entity-button-wrapper']}>
                <div className={classes['add-task-button-component']}>
                    <button type="button"
                        className={classes['add-with-dropdown monday-style-button"']}>
                        New Item
                    </button>
                    <div className={classes['ds-menu-button-container']}>
                        <div className={classes['dropdown-button small-button']}>
                            <SvgIcon path={boardHeaderIcon.angleDown} />
                        </div>
                    </div>
                </div>
            </div>
            <BoardFilter />
        </div>
    )
}

export default BoardSubsterHeader