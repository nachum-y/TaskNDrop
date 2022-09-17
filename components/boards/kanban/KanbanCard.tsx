import { Col, ColsOrder, TaskByStatusForId } from '../../../service/type'
import DynamicColComponent from '../groups/group/DynamicColComponent'
import classes from './KanbanList.module.scss'



const KanbanCard: React.FC<{ tasksByLabel: TaskByStatusForId, colsOrder: ColsOrder[] }> = ({ tasksByLabel, colsOrder }) => {




    const updateTaskHandler = (newCol: Col) => {
        // // const colIdx = '1'
        // const idx = {
        //     groupId,
        //     taskId: id,

        // }
        // // const idx = { task.id: string, }
        // updateTask(newCol, idx)
    }


    const celClickHandler = (el: HTMLSpanElement, taskCol: Col) => {
        // const idx = {
        //     groupId,
        //     taskId: id,

        // }
        // if (idx && taskCol && el) onOpenCelMenu(el, idx, taskCol)

    }
    return (
        <div>
            <div className={classes['drag-task-kanban']}>

                {tasksByLabel.tasks && tasksByLabel.tasks.map((task) => (
                    <div key={task.id} className={classes['card']}>
                        <div className={classes['card-title']}>
                            <span>{task.cols[0].value?.toString()}</span>
                        </div>
                        <div className={classes['card-data']}>
                            {colsOrder && colsOrder.slice(1).map((col) => (
                                <div className={classes['card-data-item']} key={col.type}>

                                    <div className={classes['card-data-item-col-icon']}>

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
                    </div>
                ))}

            </div>
        </div >
    )
}

export default KanbanCard