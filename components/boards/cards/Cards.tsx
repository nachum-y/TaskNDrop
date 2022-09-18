import Image from 'next/image'
import { useContext, useDebugValue, useEffect, useState } from 'react'
import { Task } from '../../../service/type'
import { BoardContext } from '../../../store/board'
import classes from './Cards.module.scss'

const Cards = () => {
    const { boardGroup, statusValueBoard } = useContext(BoardContext)

    const [tasks, setTasks] = useState<Task[]>([])

    useEffect(() => {
        let tasksList = boardGroup.map(group => {
            return group.tasks.map(task => task)
        })
        setTasks(tasksList.flat())

    }, [boardGroup])




    const taskMembers = (task: Task) => {
        const persons = task.cols.find(c => c.type === 'person')
        if (Array.isArray(persons?.value)) {
            return persons?.value
        }
    }

    const taskStatus = (task: Task) => {
        const status = task.cols.find(c => c.type === 'status')
        if (typeof status?.value === 'string') {
            return status?.value
        }
    }


    const taskStatusColor = (statusId: string) => {
        const statusIdObj = statusValueBoard.find((status) => status.id === statusId)
        if (statusIdObj) {
            return statusIdObj.color
        }
    }
    return (
        <div>
            <div className={classes['card-container']}>
                <div className={classes['cards-holder']}>
                    {tasks && tasks.map((task) => (
                        <div key={task.id} className={classes['task-card']}>
                            <div className={classes['person-img-holder']}>
                                <Image src={`/persons/${task.createdBy.id}.jpeg`} className={classes['card-img']} width={'115px'} height={'115px'} />
                            </div>
                            <div className={classes['card-view-header']}>
                                <div className={classes['card-view-title']}>
                                    <span className={classes['card-span']}>
                                        {task.cols[0].value?.toLocaleString()}
                                    </span>
                                </div>
                                <div className={classes['conversation-icon-holder']}>
                                    <div className={classes['conversation-icon']}>
                                    </div>
                                </div>
                            </div>
                            <div className={classes['card-view-data']}>
                                <div className={classes['cell-wrapper']}>

                                    <div className={`${classes['person-title']} ${classes['data-title']}`}>
                                        <div className={classes['card-icon-holder']}>
                                            <div className={classes['person-icon-card']}>
                                            </div>
                                        </div>

                                        <span className={classes['item-title-text']}>
                                            Person
                                        </span>
                                    </div>


                                    <div className={classes['card-members-container']}>
                                        <div className={`${classes['person-holder']} ${classes['data-item']}`}>
                                            {taskMembers(task) && taskMembers(task)?.map((member) => (
                                                <Image key={member.id} src={`/persons/${member.id}.jpeg`} className={classes['person-card-bullet']} width={'26px'} height={'26px'} />
                                            ))}

                                        </div>
                                    </div>
                                </div>
                                <div className={classes['cell-wrapper']}>
                                    <div className={`${classes['status-title']} ${classes['data-title']}`}>
                                        <div className={classes['card-icon-holder']}>
                                            <div className={classes['status-icon-card']}>
                                            </div>
                                        </div>
                                        <span className={classes['item-title-text']}>
                                            Status
                                        </span>


                                    </div>

                                    {(<div style={{ backgroundColor: taskStatusColor(taskStatus(task) || '') || '#fff' }} className={`${classes['status-holder']} ${classes['data-item']}`}>
                                        {taskStatus(task)}
                                    </div>)}

                                </div>
                            </div>
                        </div>))}
                </div>
            </div>
        </div >
    )
}

export default Cards