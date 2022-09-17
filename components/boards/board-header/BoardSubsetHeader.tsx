import BoardFilter from "./BoardFilter"
import { boardHeaderIcon } from "../../../service/svgIcon"

import classes from './BoardSubHeader.module.scss'
import SvgIcon from "../../UI/svgIcon/SvgIcon"
import { BoardContext } from "../../../store/board"
import { useContext } from "react"
import { Modal } from "../../../service/type"
function BoardSubsterHeader() {

    const { onSetModal } = useContext(BoardContext)
    const onNewItemHandle = () => {

        const newModal: Modal = {
            isOpen: true,
            modalType: 'NewItem'
        }
        // onSetModal(newModal)
    }


    return (
        <div className={classes['board-sub-header']}>
            <div className={classes['add-board-entity-button-wrapper']}>
                <div className={classes['add-task-button-component']}>
                    <button onClick={onNewItemHandle} type="button"
                        className={classes['add-with-dropdown monday-style-button"']}>
                        New Item
                    </button>
                    <div className={classes['ds-menu-button-container']}>
                        <div className={classes['dropdown-button small-button']}>

                            <SvgIcon path={boardHeaderIcon.angleDown} viewBox="0 0 448 512" width="10" height="10" />
                        </div>
                    </div>
                </div>
            </div>
            <BoardFilter />
        </div>
    )
}

export default BoardSubsterHeader