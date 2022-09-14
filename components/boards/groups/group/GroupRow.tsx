import React, { useContext, useEffect, useRef, useState } from 'react'
import { Col, ColsOrder, Idx, Task } from '../../../../service/type'
import classes from '../GroupList.module.scss'
import DynamicColComponent from './DynamicColComponent'
import { BoardContext } from "../../../../store/board"
import { boardService } from '../../../../service/boardService'

// import Test from './dynamic-component/Test'



const GroupRow: React.FC<{ task: Task, colsOrder: ColsOrder[], groupColor: string }> = ({ task, colsOrder, groupColor }) => {

    const { updateTask, onOpenCelMenu, toggleSelection, selectedTasks, onOpenDialogMenu } = useContext(BoardContext)
    const { cols, createdAt, id, groupId } = task
    const inputRef = useRef<HTMLInputElement>(null)

    const [isShitPress, setIsShitPress] = useState(false)

    useEffect(() => {
        if (isShitPress) {
            console.log(isShitPress)


        }

    }, [isShitPress])


    useEffect(() => {
        // selectedTasks
    }, [selectedTasks])


    const updateTaskHandler = (newCol: Col) => {
        // const colIdx = '1'
        const idx = {
            groupId,
            taskId: id,

        }
        // const idx = { task.id: string, }
        updateTask(newCol, idx)
    }


    const celClickHandler = (el: HTMLSpanElement, taskCol: Col) => {
        const idx = {
            groupId,
            taskId: id,

        }
        if (idx && taskCol && el) onOpenCelMenu(el, idx, taskCol)

    }

    const onSubmitHandler = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        handleBlur()
    }

    const handleBlur = () => {
        if (inputRef.current?.value.trim().length === 0) return
        const newCol = {
            type: 'item',
            value: inputRef.current?.value
        }
        updateTaskHandler(newCol)

    }


    const toggleSelectionHandler = () => {

        const selectedTask = {
            taskId: task.id,
            groupId: groupId,
            color: groupColor
        }

        toggleSelection(selectedTask)
    }


    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const idx = {
            groupId,
            taskId: id,

        }
        const el = event.currentTarget
        const type = 'TaskMenu'
        onOpenDialogMenu(el, type, idx)
    }



    return (
        <div className={classes['board-content-group-row']} tabIndex={-1}>
            <div className={`${classes.col} ${classes.fixed}`}>
                <div className={classes['task-item']}>
                    <div className={classes['row-menu']}>
                        <div
                            className={classes['row-menu-icon']}
                            onClick={handleClick}>
                        </div>
                    </div>
                    <div className={classes['border']} style={{ backgroundColor: groupColor ? groupColor : '' }}></div>
                    <div
                        className={classes['item-select']}
                        onClick={toggleSelectionHandler}
                    >
                        <div className={selectedTasks.find((selected) => selected.taskId.includes(task.id)) ? classes['checkbox-selected'] : classes['checkbox']}></div>
                    </div>
                    <div className={classes['item-title']}>
                        <div className={classes['input-holder']}>
                            <form onSubmit={onSubmitHandler}>
                                <input
                                    onBlur={handleBlur}
                                    className={classes['title-input']}
                                    type='text'
                                    ref={inputRef}
                                    placeholder={cols[0].value?.toString()}
                                />
                            </form>
                        </div>
                        <div className={classes['open-icon-holder']}>
                            <span>Open</span>
                            <div className={classes['open-icon']}></div>
                        </div>
                    </div>
                    <div className={`${classes['item-conversation']} ${classes.active}`}>
                        <div className={classes['conversation-icon']}></div>
                        <span className={classes['item-conversation-count']}>1</span>
                    </div>
                </div>
            </div>
            {
                colsOrder.slice(1).map((col, index) => (
                    < div tabIndex={0} className={classes.col}
                        key={index} >
                        <DynamicColComponent
                            col={col}
                            taskCol={cols.find((c: Col) => c.type === col.type)
                                || { type: 'error', value: 'error' }}
                            updateTask={updateTaskHandler}
                            onCelClick={celClickHandler}
                            id={id}
                        />
                    </div>
                ))
            }

        </div >
    )
}

export default GroupRow