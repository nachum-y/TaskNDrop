import BoardFilter from "./BoardFilter"
import { boardHeaderIcon } from "../../../service/svgIcon"

import classes from './BoardSubHeader.module.scss'
import SvgIcon from "../../UI/svgIcon/SvgIcon"
import { BoardContext } from "../../../store/board"
import { useContext } from "react"
import { ModalType } from "../../../service/type"
function BoardSubsterHeader() {

    const { onSetModal, setDrawerMenu, addTask, board } = useContext(BoardContext)
    const onNewItemHandle = () => {
        // const newModal: ModalType = {
        //     setOpen: true,
        //     modalType: 'NewItem'
        // }
        // onSetModal(newModal)
        const groupId = board?.groups[0].id
        if (groupId) {
            addTask(groupId, 'New item', true)
        }
    }

    const onOpenMenuHandler = () => {

        const menuVal = {
            setOpen: true,
            menuType: 'SelectViewMenu',
            title: 'Views'
        }
        setDrawerMenu(menuVal)
    }

    const onOpenItemMenu = () => {

    }

    return (
        <div className={classes['board-sub-header']}>
            <div className={classes['add-board-entity-button-wrapper']}>
                <div className={classes['add-task-button-component']}>
                    <button onClick={onNewItemHandle} type="button"
                        className={classes['add-with-dropdown monday-style-button"']}>
                        New Item
                    </button>
                    <div onClick={onOpenItemMenu} className={classes['ds-menu-button-container']}>
                        <div className={classes['dropdown-button small-button']}>

                            <SvgIcon path={boardHeaderIcon.angleDown} viewBox="0 0 448 512" width="10" height="10" />
                        </div>
                    </div>
                </div>

                <div className={classes['open-mobile-menu-view']}>
                    <div onClick={onOpenMenuHandler} className={classes['item']}>
                        <button type="button">
                            <div>
                                <SvgIcon path={boardHeaderIcon.mainTable} width='16' height='16' />
                            </div>
                            <span>
                                Main Table
                            </span>
                        </button >
                        <div className={classes['ds-menu-button-container']}>
                            <div className={classes['dropdown-button small-button']}>

                                <SvgIcon path={boardHeaderIcon.angleDown} viewBox="0 0 448 512" width="10" height="10" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <BoardFilter />
        </div >
    )
}

export default BoardSubsterHeader