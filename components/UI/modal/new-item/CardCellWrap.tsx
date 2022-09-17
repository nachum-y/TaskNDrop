import React, { useContext, useEffect, useState } from "react"
import { Col, ColsOrder, EmptyCol } from "../../../../service/type"
import DynamicNewItemComponent from "./DynamicNewItemComponent"

import classes from './DynamicNewItemComponent.module.scss'





const CardCellWrap: React.FC<{ colsOrderBoard: ColsOrder[] }> = ({ colsOrderBoard }) => {

    const [newColsOrder, setNewColsOrder] = useState<ColsOrder[]>([])
    useEffect(() => {
        setNewColsOrder(() => colsOrderBoard)

    }, [colsOrderBoard])

    const onUpdateCol = (newCol: Col) => {

    }

    const onCelClick = (el: HTMLSpanElement) => {

    }


    let cols: Col[] = []
    colsOrderBoard.forEach(col => {
        let emptyCol: EmptyCol = {
            type: col.type,
            value: undefined
        }
        if (col.type === 'item') emptyCol.value = 'newItem'
        if (col.type === 'textCmp') emptyCol.value = 'newItem'
        if (col.type === 'priority') emptyCol.value = 'pDefault'
        if (col.type === 'status') emptyCol.value = 'sDefault'
        if (col.type === 'labelCmp') emptyCol.value = 'lDefault'
        if (col.type === 'creationLog') emptyCol.value = Date.now()
        if (col.type === 'person') emptyCol.value = []
        cols.push(emptyCol)
    })

    console.log(cols)




    return (
        <div>
            {cols.length > 0 && newColsOrder.map((col, index) => (
                < div tabIndex={0} className={classes['col']}
                    key={col.type} >
                    <div className="column-title">
                        <div className="column-icon"></div>
                        <span>{col.title}</span>
                    </div>
                    {cols.length > 0 && <DynamicNewItemComponent
                        col={col}
                        id={col.type}
                        taskCol={cols[index]}
                        updateTask={onUpdateCol}
                        onCelClick={onCelClick}
                    />}
                </div>
            ))
            }
        </div>

    )

}

export default CardCellWrap