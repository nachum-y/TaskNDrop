import { useEffect, useState } from 'react'
import useCountByLabel from '../../../hooks/useCountByLabel'
import { Labels } from '../../../service/type'
import classes from './Dashboard.module.scss'


type StatusCount = {
    id?: number
}

const NumberView: React.FC<{ labelsVal: Labels[] }> = ({ labelsVal }) => {

    const countStatus = useCountByLabel('status')
    const [isDoneCount, setIsDoneCount] = useState(0)
    const [isNotDoneCount, setIsNotDoneCount] = useState(0)
    const [totalTasks, setTotalTasks] = useState(0)


    useEffect(() => {
        if (countStatus) {
            let isDone: number = 0
            let isNotDone: number = 0

            labelsVal.forEach(label => {
                if (label.id === 's101') {
                    isDone = countStatus['s101' as keyof StatusCount] || 0
                } else {
                    isNotDone += countStatus[label.id as keyof StatusCount] || 0
                }
            })

            setIsDoneCount(() => isDone)
            setIsNotDoneCount(() => isNotDone)
            setTotalTasks(() => isDone + isNotDone)


        }

    }, [countStatus])




    return (

        <div className={`${classes['dashboard-item-holder']} ${classes['dashboard-item-number']}`}>
            <div className={classes['dashboard-item-holder-title']}>
                <span>
                    Numbers
                </span>
            </div>
            <div className={`${classes['number-view']} ${classes['open']}`}>
                <div className={classes['number-view-title']}>
                    Open Tasks </div>
                <div className={classes['number-view-number']}>
                    <span> {isNotDoneCount} / {totalTasks} </span><span> {((isNotDoneCount / totalTasks) * 100).toFixed(2)}%</span>
                </div>
            </div>
            <div className={`${classes['number-view']} ${classes['closed']}`}>
                <div className={classes['number-view-title']}>
                    Closed Tasks
                </div>
                <div className={classes['number-view-number']}>
                    <span> {isDoneCount}/ {totalTasks} </span>
                    <span> {((isDoneCount / totalTasks) * 100).toFixed(2)}%</span>
                </div>

            </div>
        </div>
    )
}

export default NumberView