import { useContext, useEffect, useState } from 'react'
import { Col, ColsOrder, IdxOpt, TaskByStatusForId } from '../../../service/type'
import { BoardContext } from '../../../store/board'
import DynamicColComponent from '../groups/group/DynamicColComponent'
import KanbanCardData from './KanbanCardData'
import classes from './KanbanList.module.scss'



const KanbanCard: React.FC<{ tasksByLabel: TaskByStatusForId, colsOrder: ColsOrder[] }> = ({ tasksByLabel, colsOrder }) => {


    const { boardTasksByLabel, setTasksByLabels, kanbanStatus, colsOrderBoard, onOpenCelMenu, updateTask, kanbanColList } = useContext(BoardContext)


    const [colListToDisplay, setColListToDisplay] = useState<ColsOrder[]>([])

    useEffect(() => {
        if (colsOrderBoard && kanbanColList) {
            setColListToDisplay(() =>
                colsOrderBoard.filter(c => {
                    return kanbanColList.includes(c.type)
                }))
        }
       

    }, [colsOrderBoard, kanbanColList])




    return (
        <div>
            <div className={classes['drag-task-kanban']}>

                {tasksByLabel.tasks && tasksByLabel.tasks.map((task) => (
                    <div key={task.id} className={classes['card']}>
                        <div className={classes['card-title']}>
                            <span>{task.cols[0].value?.toString()}</span>
                        </div>
                        <KanbanCardData
                            colsOrder={colListToDisplay}
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