import { useEffect, useState, useContext } from 'react'
import InlineEdit from '../../UI/inline-edit/InlineEdit'
import classes from './BoardAppHeader.module.scss'
import { BoardContext } from '../../../store/board'

const BoardHeaderTop = () => {


    const { board, setModal } = useContext(BoardContext)

    const [value, setValue] = useState(board!.title)
    const [editingMode, setEditingMode] = useState(false)

    const startEditingHandler = () => {
        setEditingMode(() => true)
    }

    useEffect(() => {
        if (value && value !== board?.title && value.trim().length !== 0) {
        }
    }, [editingMode])


    const openModal = () => {
        const modalParam = {
            setOpen: true,
            modalType: 'BoardModal'
        }
        setModal(modalParam)

    }

    return (
        <div className={classes['board-header-top']}>
            <div className={classes['board-header-left']}>
                <div className={classes['board-name']}>
                    <div onClick={startEditingHandler} className={editingMode ? classes['board-title-component-active'] : classes['board-title-component']}>
                        {!editingMode &&
                            <span
                                className={classes['text-content']}
                            >
                                {value}
                            </span>}
                        {editingMode && < InlineEdit value={value} setValue={setValue} editMode={setEditingMode} />}
                    </div>
                    <div onClick={openModal} className={classes['board-header-show-description']}>
                        <span className={classes['board-header-icon-star']} ></span>
                    </div>
                    <div className={classes['board-header-star']}>
                        <span className={classes['board-header-icon-info']} ></span>
                    </div>
                </div>
            </div>
            <div className={classes['board-header-right']}>
                <div className={classes['board-header-last-seen']}>
                    <span className={classes['board-header-last-seen']} >Last seen</span>
                </div>
                <div className={classes['board-header-invite']}>
                    <span className={classes['board-header-icon-invite']} >invite / 1</span>
                </div>
            </div>
        </div>
    )
}

export default BoardHeaderTop