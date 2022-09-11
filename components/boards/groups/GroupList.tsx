import { useContext, useEffect, useState } from 'react'
import { BoardContext } from '../../../store/board'
import { Group } from '../../../service/type'
// import GroupContent from './group/GroupContent'
import dynamic from "next/dynamic"

import classes from './GroupList.module.scss'
import { DragDropContext } from 'react-beautiful-dnd'
import Message from '../../UI/message/Message'

import searchEmptyImg from '../../../assets/images/search_empty_state.svg'

type Id = string
type TypeId = Id
type DroppableId = Id
type DraggableId = Id
// details about the draggable that is being combined with
type Combine = {
    draggableId: DraggableId,
    droppableId: DroppableId,
}

type DraggableLocation = {
    droppableId: DroppableId,
    // the position of the droppable within a droppable
    index: number,
}

type DropResult = {
    draggableId: DraggableId,
    type: TypeId,
    source: DraggableLocation,
    mode: MovementMode,
    // populated if in a reorder position
    destination: DraggableLocation,
    // populated if combining with another draggable
    combine: Combine,
    reason: DropReason,
}

type DropReason = 'DROP' | 'CANCEL'


// There are two modes that a drag can be in
// FLUID: everything is done in response to highly granular input (eg mouse)
// SNAP: items snap between positions (eg keyboard);
type MovementMode = 'FLUID' | 'SNAP'




const GroupContent = dynamic(() => import("./group/GroupContent"), { ssr: false })



const GroupList = () => {

    const [groups, setGroups] = useState<Group[]>([])
    const { board, setBoard, colsOrderBoard, onSaveGroup, boardGroup, removeGroup } = useContext(BoardContext)

    const [placeholderProps, setPlaceholderProps] = useState({})

    const addGroupHandler = () => {
        onSaveGroup()
    }


    const removeGroupHandler = (id: string) => {
        removeGroup(id)
    }

    useEffect(() => {

        const groupList = board?.groups
        if (groupList) setGroups(groupList)
    }, [board])



    const onDragEnd = (result: DropResult) => {
        const { destination, source } = result
        if (!destination) return
        if (!board) return
        let newBoardData = board
        const sourceIdx = board!.groups.findIndex((group) => group.id === source.droppableId)
        const destinationIdx = board!.groups.findIndex((group) => group.id === destination.droppableId)

        var dragItem = newBoardData.groups[sourceIdx].tasks[result.source.index]
        newBoardData.groups[sourceIdx].tasks.splice(
            result.source.index,
            1
        )
        newBoardData.groups[destinationIdx].tasks.splice(
            result.destination.index,
            0,
            dragItem
        )

        if (source.droppableId !== destination.droppableId) {
            dragItem.groupId = destination.droppableId
        }

        setBoard(newBoardData)

    }

    const onDragUpdate = () => {


    }



    return (
        <div className={classes['board-content-component']}>

            <DragDropContext onDragEnd={onDragEnd}
                onDragUpdate={onDragUpdate}>
                {
                    boardGroup.map((group) => {
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
            {boardGroup.length === 0 && <Message
                image={searchEmptyImg}
                title='No results found in this board'
                instruction='Try using a different search term or use ”Search Everything” to<br>search across the entire account'
            />}
            {boardGroup.length !== 0 && (
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
        </div >
    )
}





export default GroupList