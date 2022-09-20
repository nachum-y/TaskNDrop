import React, { useContext, useEffect, useState } from 'react'
import { ColsOrder } from '../../../../service/type'
import { DragDropContext } from 'react-beautiful-dnd'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import classes from '../GroupList.module.scss'
import { NoSsr } from '@mui/material'
import { BoardContext } from '../../../../store/board'
import ColumnOrder from './ColumnOrder'


const RowHeader: React.FC<{ colsOrder: ColsOrder[], groupColor: string, onToggleAll: () => void, selectedGroups: string[], groupId: string, userScreenWidth: number | undefined, scrollLeft: number }> = ({ colsOrder, groupColor, onToggleAll, selectedGroups, groupId, userScreenWidth, scrollLeft }) => {
    const { onDragEndColumn } = useContext(BoardContext)

    const [rowStyle, setRowStyle] = useState<number>(0)

    useEffect(() => {
        if (userScreenWidth && userScreenWidth < 850) {
            setRowStyle(80)
            if (scrollLeft) {
                if (scrollLeft >= 0 && scrollLeft < 140) {
                    setRowStyle(scrollLeft + 80)
                } else if (scrollLeft >= 140) {
                    setRowStyle(220)
                }

            }
        }

    }, [scrollLeft, userScreenWidth])


    return (
        < DragDropContext onDragEnd={onDragEndColumn}
        >
            <Droppable droppableId={'all-clumns'}
                type='column'
                direction='horizontal'>
                {(droppableProvided, droppableSnapshot) => (

                    <div
                        ref={droppableProvided.innerRef}
                        {...droppableProvided.droppableProps}
                        data-is-dragging-over={droppableSnapshot.isDraggingOver}
                        className={classes['board-content-group-row-header']}
                        style={{ display: 'grid', gridTemplateColumns: `${400 - (rowStyle || 0)}px repeat(auto-fill, 140px)` }}>
                        <div className={`${classes['header-col']} ${classes.fixed}`}>
                            <div className={classes['task-item']}>
                                <div className={classes['row-menu']}>
                                    {/* <div className={classes['row-menu-icon']}></div> */}
                                </div>
                                <div className={`${classes['border']} ${classes['header']}`} style={{ backgroundColor: groupColor }}></div>
                                <div
                                    className={classes['item-select']}
                                    onClick={onToggleAll}
                                >
                                    <div className={selectedGroups.includes(groupId) ? classes['checkbox-selected'] : classes['checkbox']}></div>
                                </div>
                                <div className={classes['item-title']}><span>Items</span></div>
                            </div>
                        </div>

                        {
                            colsOrder.slice(1).map((col, index) => (
                                <ColumnOrder key={col.type} col={col} index={index + 1} />
                            ))
                        }

                    </div>
                )}
            </Droppable >
        </DragDropContext >
    )
}

export default RowHeader