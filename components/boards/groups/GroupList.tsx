import { useContext, useEffect, useState, KeyboardEvent } from 'react'
import { BoardContext } from '../../../store/board'
import { Group } from '../../../service/type'
// import GroupContent from './group/GroupContent'
import dynamic from "next/dynamic"

import classes from './GroupList.module.scss'
import { DragDropContext } from 'react-beautiful-dnd'
import Message from '../../UI/message/Message'

import searchEmptyImg from '../../../assets/images/search_empty_state.svg'
import BoardActionsMenu from './BoardActionsMenu'

const GroupContent = dynamic(() => import("./group/GroupContent"), { ssr: false })

const GroupList = () => {

    const { board,
        updateBoard,
        colsOrderBoard,
        onSaveGroup,
        boardGroup,
        removeGroup,
        selectedTasks,
        removeTasks,
        duplicateTasks,
        onDragEnd
    } = useContext(BoardContext)

    const [placeholderProps, setPlaceholderProps] = useState({})
    const [boardGroups, setBoardGroup] = useState<Group[]>(boardGroup)


    useEffect(() => {
        setBoardGroup(boardGroup)
        console.log(boardGroup)

    }, [boardGroup])

    const addGroupHandler = () => {
        onSaveGroup()
    }


    const removeGroupHandler = (id: string) => {
        removeGroup(id)
    }


    const onKeyPressHandler = (ev: KeyboardEvent<HTMLInputElement>) => {
        console.log(ev)
        // "ShiftRight"

        if (ev.type === 'keydown' && ev.key === "Shift") {
            // setIsShitPress(() => true)

        }
        if (ev.type === 'keyup' && ev.key === "Shift") {
            // setIsShitPress(() => false)
        }

    }


    return (
        <>
            {selectedTasks.length > 0 && < BoardActionsMenu
                selectedTasks={selectedTasks}
                onRemoveTasks={() => removeTasks(undefined)}
                onDuplicateTasks={() => duplicateTasks(undefined)}
            />}
            <DragDropContext onDragEnd={onDragEnd}
            >
                {
                    boardGroups.map((group) => {
                        return (
                            < GroupContent
                                key={group.id}
                                group={group}
                                colsOrder={board!.colsOrder}
                                removeGroup={removeGroupHandler}
                            />
                        )
                    })}
            </DragDropContext>
            {boardGroups.length === 0 && <Message
                image={searchEmptyImg}
                title='No results found in this board'
                instruction='Try using a different search term or use ”Search Everything” to<br>search across the entire account'
            />}
            {boardGroups.length !== 0 && (
                <button
                    type='button'
                    className={`${classes.btn} ${classes['add-group-btn']}`}
                    onClick={addGroupHandler}
                >
                    <div className={classes['add-group-icon-holder']}>
                        <div className={classes['add-group-icon']}></div>
                    </div>
                    <div
                        className={classes['add-group-btn-txt']}>
                        <span>
                            Add new group
                        </span>
                    </div>
                </button>
            )}

        </>
    )
}





export default GroupList