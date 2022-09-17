import { Col, ColsOrder, Idx, IdxOpt, Task, TaskByStatusForId } from '../../../service/type'
import DynamicColComponent from '../groups/group/DynamicColComponent'
import classes from './KanbanList.module.scss'



const KanbanCardData: React.FC<{ task: Task, colsOrder: ColsOrder[], onOpenCelMenu: (el: HTMLSpanElement, idx: IdxOpt, taskCol: Col) => void, updateTask: (newCol: Col, idx: Idx) => void }> = ({ task, colsOrder, onOpenCelMenu, updateTask }) => {




    const updateTaskHandler = (newCol: Col) => {
        console.log(newCol)

        const idx = {
            groupId: task.groupId,
            taskId: task.id,
        }

        updateTask(newCol, idx)
    }


    const celClickHandler = (el: HTMLSpanElement, taskCol: Col) => {
        console.log(taskCol)
        console.log(task)


        const idx = {
            groupId: task.groupId,
            taskId: task.id,
        }
        if (idx && taskCol && el) onOpenCelMenu(el, idx, taskCol)

    }

    // const listToView = ['person', 'status', 'textCmp','date']
    // console.log(colsOrder)
    // let newOrder = colsOrder.filter(c => {
    //     return listToView.includes(c.type)
    // })
    // console.log(newOrder)




    return (
        <div className={classes['card-data']}>
            {colsOrder && colsOrder.slice(1).map((col) => (
                <div className={classes['card-data-item']} key={col.type}>

                    <div className={`${classes['card-data-item-col-icon']} ${classes[col.type]}`}>
                    </div>
                    <div className={classes['card-data-item-col-title']}>
                        {col.type}
                    </div>

                    <div className={classes['card-data-item-col-content']}>
                        <DynamicColComponent
                            col={col}
                            taskCol={task.cols.find((c: Col) => c.type === col.type)
                                || { type: 'error', value: 'error' }}
                            updateTask={updateTaskHandler}
                            onCelClick={celClickHandler}
                            id={task.id}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default KanbanCardData