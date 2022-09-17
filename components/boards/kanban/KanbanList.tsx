import { useContext, useEffect, useState } from 'react'
import { ColsOrder, TasksByStatus } from '../../../service/type'
import { BoardContext } from '../../../store/board'
import SelectMenu from '../../UI/select-menu/SelectMenu'
import SelectBox from '../../UI/selectBox/SelectBox'
import KanbanCard from './KanbanCard'
import classes from './KanbanList.module.scss'
const KanbanList = () => {


    const { boardTasksByLabel, setTasksByLabels, kanbanStatus, colsOrderBoard, boardGroup, setKanbanStatus, kanbanColList, setKanbanColList } = useContext(BoardContext)


    useEffect(() => {
        setTasksByLabels()

    }, [kanbanStatus, boardGroup])



    return (
        <div className={classes['kanbn-view']}>
            <div className={classes['kanbn-view-border']}>
            </div>
            <div id='Draggable' className={classes['kanban-view-content']}>


                {boardTasksByLabel && Object.keys(boardTasksByLabel).map(status => (
                    <div key={status} className={classes['kanban-list-component']}>
                        <div style={{ backgroundColor: boardTasksByLabel[status as keyof TasksByStatus]?.color }} className={classes['kanban-list-component-header handle']}>
                            <span className={classes['kanban-list-component-header-title']}>{status}</span>
                        </div>

                        <div className={classes['kanban-list-component-inn']}>

                            <div style={{ backgroundColor: boardTasksByLabel[status as keyof TasksByStatus]?.color }} className={classes['color-indicator']}>
                            </div>
                            <div className={classes['card-holder']}>
                                {boardTasksByLabel[status as keyof TasksByStatus] && (
                                    <KanbanCard
                                        colsOrder={colsOrderBoard!}
                                        tasksByLabel={boardTasksByLabel[status as keyof TasksByStatus]!}
                                    // labels='
                                    // status=''
                                    // priority=''
                                    // boardMembers=''
                                    // taskList=''
                                    // colsToDisplay=''
                                    // labelId=''
                                    // typeView=''

                                    />)}
                            </div>

                            <div className={classes['kanban-list-component-add-itet']}>
                                <input placeholder='+Add Item' className={classes['kanban-list-component-add-item-input']} />
                            </div>
                        </div>
                    </div>
                ))
                }


            </div >
            <div className={classes['kanbn-view-menu']}>

                <div className={classes['kanbn-view-menu-settings']}>

                    <div className={classes['kanbn-view-menu-settings-title']}>
                        Customize View
                    </div>
                    <div className={classes['kanbn-view-menu-settings-title-secondary']}>
                        <SelectMenu
                            minWidthBox={60}
                            TitleLabel='Kanban Column'
                            MenuItemList={[
                                { value: 'priority', title: 'Priority' },
                                { value: 'labelCmp', title: 'Labels' },
                                { value: 'status', title: 'Status' }]}
                            kanbanStatus={kanbanStatus}
                            setKanbanStatus={setKanbanStatus}
                        />
                    </div>

                    <div id='selecet onChange' placeholder='Select' className={classes['m-2']}>
                        <div id='v-for=view in kanbanViews :key=view :value=view' >
                        </div>
                    </div>
                    <div className={classes['kanbn-view-selectbox-title']}>
                        <div id='v-for=(col, index) in allCols :key=index@click=toggleView(col)' className={classes['kanbn-view-menu-settings-item']}>

                            {colsOrderBoard && <SelectBox
                                selectTitle='Card Columns'
                                kanbanColList={kanbanColList}
                                colsOrder={colsOrderBoard}
                                setKanbanColList={setKanbanColList}
                            />}
                        </div>
                    </div>

                </div>
            </div >
        </div >
    )
}

export default KanbanList