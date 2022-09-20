

import { useContext, useState } from 'react'
import { BoardContext } from '../../../../store/board'
import InlineEdit from '../../inline-edit/InlineEdit'
import classes from './BoardModal.module.scss'



const BoardModal: React.FC<{}> = () => {

    const { board } = useContext(BoardContext)

    const [value, setValue] = useState(board!.title)

    const startEditingHandler = () => {

    }
    const setEditingMode = () => {

    }

    const editingMode = false
    return (
        <div className={classes["board-description-dialog-component"]}>
            <div className={classes["board-description-dialog-editable-wrapper"]}>
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
                </div>

                <div className={classes['board-description']}>
                    <p>
                        This board is public, visible to all vistors.
                    </p>
                </div>
                <a href='https://www.linkedin.com/in/nachumy7' target="_blank" rel="noopener noreferrer" className={classes['feedback-button']} >
                    Give feedback
                </a>
            </div>
            <div className={classes["board-metadata-component"]}>
                <div className={classes["board-metadata-component__title"]}>
                    <h3>
                        Board info
                    </h3>
                </div>
                <div className={classes["additional-info"]}>
                    <span className={classes["title"]}>
                        Workspace
                    </span>
                    <div className={classes["body"]}>
                        Main Workspace
                    </div>
                </div>
                <div className={classes["additional-info"]}>
                    <span className={classes["title"]}>
                        Created by
                    </span>
                    <div className={classes["body"]}>
                        {board?.byMember.fullname}
                    </div>
                </div>
                <div className={classes["additional-info"]}>
                    <span className={classes["title"]}>
                        Linkedin
                    </span>
                    <div className={classes["body"]}>
                        <a href='https://www.linkedin.com/in/nachumy7' target="_blank" rel="noopener noreferrer">
                            <div className={classes['member-linkedIn']}>
                                Connect on LinkedIn
                            </div>
                        </a>
                    </div>
                </div>
                <div className={classes["additional-info"]}>
                    <span className={classes["title"]}>
                        Board type
                    </span>
                    <div className={classes["body"]}>
                        This board is public, visible to all.
                    </div>
                </div>
            </div>
        </div >
    )
}

export default BoardModal