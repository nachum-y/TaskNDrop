import GroupAddTask from './GroupAddTask'
import GroupFooter from './GroupFooter'
import GroupHeader from './GroupHeader'
import GroupRow from './GroupRow'
import RowHeader from './RowHeader'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'






type DroppableMode = 'standard' | 'virtual'
type Direction = 'horizontal' | 'vertical'

import classes from '../GroupList.module.scss'
import { Group } from '../../../../service/type'

const GroupContent: React.FC<{ group: Group }> = (props) => {


    const { title, tasks, id } = props.group
    console.log(id)

    return (
        <div className={classes['board-content-group']}>
            <GroupHeader title={title} />
            <RowHeader />

            <Droppable droppableId={id}>
                {(droppableProvided, droppableSnapshot) => (
                    <div
                        // px="1.5rem"
                        // flex={1}
                        // flexDir="column"
                        ref={droppableProvided.innerRef}
                        {...droppableProvided.droppableProps}
                    >
                        {tasks.map((task, index) => (
                            <Draggable key={task.id} draggableId={`${task.id}`} index={index}>
                                {(draggableProvided, draggableSnapshot) => (
                                    <div
                                        // mb="1rem"
                                        // h="72px"
                                        // bg="card-bg"
                                        // rounded="3px"
                                        // p="1.5rem"
                                        // outline="2px solid"
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
                                            task={task} />
                                            
                                            

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