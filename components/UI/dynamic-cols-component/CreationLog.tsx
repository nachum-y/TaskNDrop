import { useContext } from 'react'

import { Col, ColsOrder, Labels, Member } from '../../../service/type'
import classes from './CreationLog.module.scss'
import { BoardContext } from '../../../store/board'




const CreationLog: React.FC<{ taskCol: Col, updateCol: (newCol: Col) => void }> = ({ taskCol, updateCol }) => {

    const { value: date } = taskCol
    // Add created By to the Task CreationLog!!!


    // const dateToDisplay = () => {
    //     // if (date) return ''
    //     // return new Date(this.task.value).toLocaleString("en-US", { month: "short", day: "numeric" })
    // }
    // type numberr = number


    const dateToDisplay = typeof date === 'number' ?
        new Date(date).toLocaleString("en-US", { month: "short", day: "numeric" }) :
        ''

    return (
        <div className={classes['task-creationLog']}>
            <div className={classes['person-bullet']}>
                {/* <img :src="row.createdBy.imgUrl"> */}
            </div>
            <span>
                {dateToDisplay}
            </span>
        </div>

    )
}

export default CreationLog