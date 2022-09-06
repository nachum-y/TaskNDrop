import { useContext } from 'react'
import GroupAddTask from './GroupAddTask'
import GroupFooter from './GroupFooter'
import GroupHeader from './GroupHeader'
import GroupRow from './GroupRow'
import RowHeader from './RowHeader'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { BoardContext } from '../../../../store/board'




import classes from '../GroupList.module.scss'
import { ColsOrder, Group } from '../../../../service/type'

const GroupContent: React.FC<{ group: Group, colsOrder: ColsOrder[], removeGroup: (id: string) => void }> = ({ group, colsOrder, removeGroup }) => {

    const { onOpenDialogMenu } = useContext(BoardContext)

    const { title, tasks, id, color } = group

    const removeGroupHandler = () => {
        removeGroup(id)
    }

    const groupTitleHandler = () => {

    }

    const openMenuHandler = (el: HTMLDivElement) => {
        onOpenDialogMenu(el)
    }

    return (
        <div className={classes['board-content-group']}>
            <GroupHeader
                title={title}
                removeGroup={removeGroupHandler}
                groupColor={color}
                openMenu={openMenuHandler}
            />
            <RowHeader
                colsOrder={colsOrder}
                groupColor={color}
            />

            <Droppable droppableId={id}>
                {(droppableProvided, droppableSnapshot) => (
                    <div

                        ref={droppableProvided.innerRef}
                        {...droppableProvided.droppableProps}
                    >
                        {tasks.map((task, index) => (
                            <Draggable key={task.id} draggableId={`${task.id}`} index={index}>
                                {(draggableProvided, draggableSnapshot) => (
                                    <div
                                        // outlineColor={
                                        //     draggableSnapshot.isDragging
                                        //         ? "card-border"
                                        //         : "transparent"
                                        // }
                                        // boxShadow={
                                        //     draggableSnapshot.isDragging
                                        //         ? "0 5px 10px rgba(0, 0, 0, 0.6)"
                                        //         : "unset"
                                        // }
                                        ref={draggableProvided.innerRef}
                                        {...draggableProvided.draggableProps}
                                        {...draggableProvided.dragHandleProps}
                                    >
                                        <GroupRow
                                            key={task.id}
                                            task={task}
                                            colsOrder={colsOrder}
                                            groupColor={color}
                                        />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                    </div>
                )}
            </Droppable>
            < GroupAddTask
                groupColor={color}
            />
            <GroupFooter />
        </div >

    )
}

export default GroupContent