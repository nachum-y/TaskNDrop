import React from "react"
import { Col, ColsOrder, Idx } from "../../../../service/type"
import classes from './DynamicColComponent.module.scss'
import Test2 from "../../../UI/dynamic-cols-component/Test2"
import StatusCmp from "../../../UI/dynamic-cols-component/StatusCmp"
import Person from "../../../UI/dynamic-cols-component/Person"
import CreationLog from "../../../UI/dynamic-cols-component/CreationLog"
import Text from "../../../UI/dynamic-cols-component/Text"

type Cmp = React.FC<{ taskCol: Col, id: string, updateCol: (newCol: Col) => void, onCelClick: (el: HTMLSpanElement) => void }>

type ComponentMap = {
    item: Cmp,
    textCmp: Cmp,
    person: Cmp,
    date: Cmp,
    labelCmp: Cmp,
    status: Cmp,
    priority: Cmp,
    location: Cmp,
    creationLog: Cmp,
}

const keysToComponentMap: ComponentMap = {
    item: Test2,
    textCmp: Text,
    person: Person,
    date: Test2,
    labelCmp: StatusCmp,
    status: StatusCmp,
    priority: StatusCmp,
    location: Test2,
    creationLog: CreationLog,


}





const DynamicColComponent: React.FC<{ col: ColsOrder, taskCol: Col, updateTask: (col: Col) => void, id: string, onCelClick: (el: HTMLSpanElement, typeClick: string) => void }> = ({ col, taskCol, updateTask, onCelClick }) => {

    const { title, type } = col
    const key = type as string



    const updateTaskHandler = (newCol: Col) => {
        updateTask(newCol)

    }


    const clickHandler = (el: HTMLSpanElement) => {
        const typeClick = taskCol.type
        onCelClick(el, typeClick)
    }

    if (typeof keysToComponentMap[key as keyof ComponentMap] !== 'undefined') {
        return React.createElement(
            keysToComponentMap[key as keyof ComponentMap],
            {
                id: title,
                key: title,
                taskCol: taskCol,
                updateCol: updateTaskHandler,
                onCelClick: clickHandler
            },
            // config.children &&
            // (typeof config.children === 'string'
            //     ? config.children
            //     : config.children.map((c) => renderComponent(c)))
        )
    }
    return (
        <div className={classes[type]}>
            {title}
        </div >
    )
}

export default DynamicColComponent