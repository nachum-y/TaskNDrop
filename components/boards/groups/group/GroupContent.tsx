import { useContext } from 'react'
import GroupAddTask from './GroupAddTask'
import GroupFooter from './GroupFooter'
import GroupHeader from './GroupHeader'
import GroupRow from './GroupRow'
import RowHeader from './RowHeader'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { BoardContext } from '../../../../store/board'




import classes from '../GroupList.module.scss'
import { ColsOrder, Group, GroupByLabels, IdxOpt } from '../../../../service/type'

const GroupContent: React.FC<{ group: Group, colsOrder: ColsOrder[], removeGroup: (id: string) => void }> = ({ group, colsOrder, removeGroup }) => {

    const {
        onOpenDialogMenu,
        addTask,
        toggleAll,
        selectedGroups,
        boardGroupsByLabel,
        toggleCollapseGroup,

    } = useContext(BoardContext)

    const { title, tasks, id, color, isCollapse } = group

    const removeGroupHandler = () => {
        removeGroup(id)
    }

    const openMenuHandler = (el: HTMLDivElement) => {
        const idx: IdxOpt = {
            groupId: id,
        }
        const type = 'GroupMenu'
        onOpenDialogMenu(el, type, idx)
    }

    const addTaskHandler = (title: string) => {
        const groupId = id
        addTask(groupId, title)

    }

    const handleTogalleCollapse = () => {
        toggleCollapseGroup(id)
    }



    return (
        <div className={`${classes['board-content-group']} ${isCollapse ? classes['collapseGroup'] : ''}`}>
            <Droppable droppableId={id}>
                {(droppableProvided, droppableSnapshot) => (
                    <div
                        className={droppableSnapshot.isDraggingOver ? classes['row-back-drop'] : ''}
                        ref={droppableProvided.innerRef}
                        {...droppableProvided.droppableProps}
                        data-is-dragging-over={droppableSnapshot.isDraggingOver}
                    >
                        <div className={classes['floating-header-row-component']}>
                            <GroupHeader
                                title={title}
                                removeGroup={removeGroupHandler}
                                groupColor={color}
                                openMenu={openMenuHandler}
                                isCollapse={group.isCollapse}
                                toggaleCollapseGroup={handleTogalleCollapse}
                                gropTaskLength={group.tasks.length}
                            />
                            {!isCollapse && (<RowHeader
                                colsOrder={colsOrder}
                                groupColor={color}
                                onToggleAll={() => toggleAll(group)}
                                selectedGroups={selectedGroups}
                                groupId={id}
                            />)}

                        </div>
                        {!isCollapse && tasks.map((task, index) => (
                            <Draggable key={task.id} draggableId={`${task.id}`} index={index}>
                                {(draggableProvided: any, draggableSnapshot) => (
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
                                        {draggableProvided.placeholder}

                                    </div>
                                )}
                            </Draggable>

                        ))}
                        {droppableSnapshot.isDraggingOver && <div className={classes['empty-row']}></div>}

                        {!isCollapse && (< GroupAddTask
                            groupColor={color}
                            onAddTask={addTaskHandler}
                        />)}
                        <GroupFooter
                            colsOrder={colsOrder}
                            groupByLabel={boardGroupsByLabel ? boardGroupsByLabel[group.id as keyof GroupByLabels] : undefined}
                            gropTaskLength={group.tasks.length}
                            isCollapse={isCollapse}
                        />
                    </div>
                )}
            </Droppable>
        </div >

    )
}

export default GroupContent