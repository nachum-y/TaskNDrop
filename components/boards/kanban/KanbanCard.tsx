import { useContext } from 'react'
import { Col, ColsOrder, IdxOpt, TaskByStatusForId } from '../../../service/type'
import { BoardContext } from '../../../store/board'
import DynamicColComponent from '../groups/group/DynamicColComponent'
import KanbanCardData from './KanbanCardData'
import classes from './KanbanList.module.scss'



const KanbanCard: React.FC<{ tasksByLabel: TaskByStatusForId, colsOrder: ColsOrder[] }> = ({ tasksByLabel, colsOrder }) => {


    const { boardTasksByLabel, setTasksByLabels, kanbanStatus, colsOrderBoard, onOpenCelMenu, updateTask } = useContext(BoardContext)


    const updateTaskHandler = (newCol: Col) => {
        // // const colIdx = '1'
        // const idx = {
        //     groupId,
        //     taskId: id,

        // }
        // // const idx = { task.id: string, }
        // updateTask(newCol, idx)
    }




    return (
        <div>
            <div className={classes['drag-task-kanban']}>

                {tasksByLabel.tasks && tasksByLabel.tasks.map((task) => (
                    <div key={task.id} className={classes['card']}>
                        <div className={classes['card-title']}>
                            <span>{task.cols[0].value?.toString()}</span>
                        </div>
                        <KanbanCardData
                            colsOrder={colsOrder}
                            task={task}
                            onOpenCelMenu={onOpenCelMenu}
                            updateTask={updateTask}
                        />
                    </div>
                ))}

            </div>
        </div >
    )
}

export default KanbanCard