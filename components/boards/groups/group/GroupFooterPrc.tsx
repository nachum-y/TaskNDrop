import { useState } from 'react'
import { ColsOrder, GroupByLabels, Labels, ListLabels, Status } from '../../../../service/type'
import classes from '../GroupList.module.scss'


type LabelObjPrc = {
    count: number
    color: string
}


const GroupfooterPrc: React.FC<{ LabelObjPrc: LabelObjPrc, gropTaskLength: number }> = ({ LabelObjPrc, gropTaskLength }) => {

    let prcDiv = ((LabelObjPrc.count / gropTaskLength) * 100)
    return (
        <div className={classes['prc-label']} style={{ backgroundColor: LabelObjPrc.color, height: '100%', width: `${prcDiv}%` }}>

        </div>
    )
}

export default GroupfooterPrc