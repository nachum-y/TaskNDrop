import { useContext } from "react"

import { Col, ColsOrder, Labels } from "../../../../service/type"
import classes from './StatusCmp.module.scss'
import { BoardContext } from "../../../../store/board"


type labelsStatus = {
    status: Labels[]
    labelCmp: Labels[]
    priority: Labels[]
}

const StatusCmp: React.FC<{ taskCol: Col }> = (props) => {

    const { statusValueBoard: status, labelsValueBoard: labelCmp, priorityValueBoard: priority } = useContext(BoardContext)

    const labelsVal: labelsStatus = {
        status,
        labelCmp,
        priority
    }

    const { type, value } = props.taskCol

    const key = type as string
    let title: string | undefined
    let color: string | undefined

    const currStatus: Labels[] = labelsVal[key as keyof labelsStatus]
    if (typeof currStatus !== undefined && currStatus.length > 0) {
        const currLabel = currStatus.find((t: Labels) => t.id === value)
        if (currLabel) {
            title = currLabel.title
            color = currLabel.color

        }

    }





    return (
        <span className={classes['task-status-cmp-display']} style={{ backgroundColor: color }}>
            {title}
        </span>
    )
}

export default StatusCmp