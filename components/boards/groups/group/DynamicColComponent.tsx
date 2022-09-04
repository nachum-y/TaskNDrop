import React, { useContext } from "react"
import { Col, ColsOrder } from "../../../../service/type"
import classes from './DynamicColComponent.module.scss'
import Test2 from "../dynamic-cols-component/Test2"
import StatusCmp from "../dynamic-cols-component/StatusCmp"
import PersonCmp from "../dynamic-cols-component/PersonCmp"

type Cmp = React.FC<{ taskCol: Col, id: string }>

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
    textCmp: Test2,
    person: PersonCmp,
    date: Test2,
    labelCmp: StatusCmp,
    status: StatusCmp,
    priority: StatusCmp,
    location: Test2,
    creationLog: Test2,


}



// const stylesMap = (styles) => {
//     let mappedStyles = {}
//     styles.forEach((style) => {
//         mappedStyles[style.name] = style.value
//     })
//     return mappedStyles
// }


const DynamicColComponent: React.FC<{ col: ColsOrder, taskCol: Col }> = (props) => {


    const { title, type } = props.col
    const key = type as string

    if (typeof keysToComponentMap[key as keyof ComponentMap] !== 'undefined') {
        return React.createElement(
            keysToComponentMap[key as keyof ComponentMap],
            {
                id: title,
                key: title,
                taskCol: props.taskCol
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