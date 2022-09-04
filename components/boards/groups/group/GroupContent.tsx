import GroupAddTask from './GroupAddTask'
import GroupFooter from './GroupFooter'
import GroupHeader from './GroupHeader'
import GroupRow from './GroupRow'
import RowHeader from './RowHeader'
import { Droppable, Draggable } from 'react-beautiful-dnd'






type DroppableMode = 'standard' | 'virtual'
type Direction = 'horizontal' | 'vertical'

import classes from '../GroupList.module.scss'
import { ColsOrder, Group } from '../../../../service/type'

const GroupContent: React.FC<{ group: Group, colsOrder: ColsOrder[] }> = (props) => {


    const { title, tasks, id } = props.group

    return (
        <div className={classes['board-content-group']}>
            <GroupHeader
                title={title} />
            <RowHeader
                colsOrder={props.colsOrder}
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
                                            colsOrder={props.colsOrder} />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                    </div>
                )}
            </Droppable>
            < GroupAddTask />
            <GroupFooter />
        </div >

    )
}

export default GroupContent