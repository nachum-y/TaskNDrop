import { useContext, useEffect, useState } from 'react'
import { Col, ColsOrder, IdxOpt, TaskByStatusForId } from '../../../service/type'
import { BoardContext } from '../../../store/board'
import DynamicColComponent from '../groups/group/DynamicColComponent'
import KanbanCardData from './KanbanCardData'
import classes from './KanbanList.module.scss'
import { Droppable, Draggable } from 'react-beautiful-dnd'



const KanbanCard: React.FC<{ tasksByLabel: TaskByStatusForId, colsOrder: ColsOrder[], id: string }> = ({ tasksByLabel, colsOrder, id }) => {


    const { boardTasksByLabel, setTasksByLabels, kanbanStatus, colsOrderBoard, onOpenCelMenu, updateTask, kanbanColList } = useContext(BoardContext)


    const [colListToDisplay, setColListToDisplay] = useState<ColsOrder[]>([])

    useEffect(() => {
        if (colsOrderBoard && kanbanColList) {
            setColListToDisplay(() =>
                colsOrderBoard.filter(c => {
                    return kanbanColList.includes(c.type)
                }))
        }


    }, [colsOrderBoard, kanbanColList])




    return (

            <Droppable droppableId={id} type='task-kanban' >
                {(droppableProvided, droppableSnapshot) => (
                    <div
                        className={classes['drag-task-kanban']}
                        ref={droppableProvided.innerRef}
                        {...droppableProvided.droppableProps}
                        data-is-dragging-over={droppableSnapshot.isDraggingOver}

                    >

                        {tasksByLabel.tasks && tasksByLabel.tasks.map((task, index) => (

                            <Draggable key={task.id} draggableId={task.id} index={index} >
                                {(draggableProvided: any, draggableSnapshot) => (
                                    <div
                                        ref={draggableProvided.innerRef}
                                        {...draggableProvided.draggableProps}
                                        {...draggableProvided.dragHandleProps}
                                        // isDragging={draggableSnapshot}
                                    >

                                        <div key={task.id} className={classes['card']}>
                                            <div className={classes['card-title']}>
                                                <span>{task.cols[0].value?.toString()}</span>
                                            </div>
                                            <KanbanCardData
                                                colsOrder={colListToDisplay}
                                                task={task}
                                                onOpenCelMenu={onOpenCelMenu}
                                                updateTask={updateTask}
                                            />
                                        </div>

                                    </div>
                                )}
                            </Draggable>

                        ))}

                    </div>


                )
                }
            </Droppable >
    )
}

export default KanbanCard