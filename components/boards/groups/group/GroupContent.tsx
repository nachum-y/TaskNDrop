import { useContext, useEffect, useState } from 'react'
import GroupAddTask from './GroupAddTask'
import GroupFooter from './GroupFooter'
import GroupHeader from './GroupHeader'
// import GroupRow from './GroupRow'
import RowHeader from './RowHeader'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { BoardContext } from '../../../../store/board'

import dynamic from 'next/dynamic'
const GroupRow = dynamic(() => import("./GroupRow"), { ssr: false })


import classes from '../GroupList.module.scss'
import { ColsOrder, Group, GroupByLabels, IdxOpt } from '../../../../service/type'

const GroupContent: React.FC<{ group: Group, colsOrder: ColsOrder[], removeGroup: (id: string) => void, draggableProvidedSet: any, draggableSnapshotSet: any }> = ({ group, colsOrder, removeGroup, draggableProvidedSet, draggableSnapshotSet }) => {

    const {
        onOpenDialogMenu,
        addTask,
        toggleAll,
        selectedGroups,
        boardGroupsByLabel,
        toggleCollapseGroup,
        userScreenWidth,
        scrollLeft

    } = useContext(BoardContext)


    const [windowWidth, setWindowWidth] = useState<number>()


    const [collapseTemp, setCollapseTemp] = useState(false)

    const { title, tasks, id, color, isCollapse } = group

    const removeGroupHandler = () => {
        removeGroup(id)
    }

    const openMenuHandler = (el: HTMLDivElement, typeMenu: string) => {
        const idx: IdxOpt = {
            groupId: id,
        }
        onOpenDialogMenu(el, typeMenu, idx)
    }

    const addTaskHandler = (title: string) => {
        const groupId = id
        addTask(groupId, title)

    }

    const handleTogalleCollapse = () => {
        toggleCollapseGroup(id)
    }


    useEffect(() => {
        if (window) {
            setWindowWidth(window.outerWidth)
        }
    }, [])


    useEffect(() => {

        setCollapseTemp(() => draggableSnapshotSet.isDragging)


    }, [draggableSnapshotSet])

    return (
        <Droppable droppableId={id} type='task'>
            {(droppableProvided, droppableSnapshot) => (
                <div
                    // className={droppableSnapshot.isDraggingOver ? classes['row-back-drop'] : ''}
                    ref={droppableProvided.innerRef}
                    {...droppableProvided.droppableProps}
                    data-is-dragging-over={droppableSnapshot.isDraggingOver}
                    className={`${classes['board-content-group']} ${(isCollapse || collapseTemp) ? classes['collapseGroup'] : ''}`}
                >
                    <div className={classes['floating-header-row-component']}
                    >
                        <div className="handler"
                            isDragging={draggableSnapshotSet}
                            {...draggableProvidedSet.dragHandleProps}>
                            <GroupHeader
                                title={title}
                                removeGroup={removeGroupHandler}
                                groupColor={color}
                                openMenu={openMenuHandler}
                                isCollapse={group.isCollapse}
                                toggaleCollapseGroup={handleTogalleCollapse}
                                gropTaskLength={group.tasks.length}

                            />
                        </div>
                        {(!isCollapse && !collapseTemp) && (<RowHeader
                            colsOrder={colsOrder}
                            groupColor={color}
                            onToggleAll={() => toggleAll(group)}
                            selectedGroups={selectedGroups}
                            groupId={id}
                            userScreenWidth={userScreenWidth}
                            scrollLeft={scrollLeft}
                        />)}

                    </div>
                    {(!isCollapse && !collapseTemp) && tasks.map((task, index) => (
                        <Draggable key={task.id} draggableId={`${task.id}`} index={index}>
                            {(draggableProvided: any, draggableSnapshot: any) => (
                                <div
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

                    {(!isCollapse && !collapseTemp) && (< GroupAddTask
                        groupColor={color}
                        onAddTask={addTaskHandler}
                    />)}
                    <GroupFooter
                        colsOrder={colsOrder}
                        groupByLabel={boardGroupsByLabel ? boardGroupsByLabel[group.id as keyof GroupByLabels] : undefined}
                        gropTaskLength={group.tasks.length}
                        isCollapse={(isCollapse || collapseTemp)}
                        userScreenWidth={userScreenWidth}
                        scrollLeft={scrollLeft}
                    />
                </div>
            )
            }
        </Droppable >
        // </div >

    )
}

export default GroupContent