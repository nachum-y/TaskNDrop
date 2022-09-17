import { useContext } from "react"

import { Col, ColsOrder, Labels } from "../../../service/type"
import classes from './StatusCmp.module.scss'
import { BoardContext } from "../../../store/board"


type labelsStatus = {
    status: Labels[]
    labelCmp: Labels[]
    priority: Labels[]
}

const StatusCmp: React.FC<{ taskCol: Col, updateCol: (newCol: Col) => void, onCelClick: (el: HTMLSpanElement) => void }> = ({ taskCol, updateCol, onCelClick }) => {

    const { statusValueBoard: status, labelsValueBoard: labelCmp, priorityValueBoard: priority } = useContext(BoardContext)

    const labelsVal: labelsStatus = {
        status,
        labelCmp,
        priority
    }

    const { type, value } = taskCol

    const key = type as string
    let title: string | undefined
    let color: string | undefined

    console.log(value)
    console.log(type)


    const currStatus: Labels[] = labelsVal[key as keyof labelsStatus]
    console.log(currStatus)

    if (currStatus && typeof currStatus !== undefined && currStatus.length > 0) {
        const currLabel = currStatus.find((t: Labels) => t.id === value)
        if (currLabel) {
            title = currLabel.title
            color = currLabel.color
        }

    }

    const clickHandler = (event: React.MouseEvent<HTMLSpanElement>) => {
        onCelClick(event.currentTarget)
    }





    return (
        <span onClick={clickHandler} className={classes['task-status-cmp-display']} style={{ backgroundColor: color }}>
            {title}
        </span>
    )
}

export default StatusCmp