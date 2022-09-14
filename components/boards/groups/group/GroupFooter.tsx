import { useEffect, useState } from 'react'
import { ColsOrder, GroupByLabels, Labels, ListLabels, Status } from '../../../../service/type'
import classes from '../GroupList.module.scss'
import GroupfooterPrc from './GroupfooterPrc'



type LabelObjPrc = {
    count: number
    color: string
}

type Uniqs = {
    id?: LabelObjPrc
}

const GroupFooter: React.FC<{ colsOrder: ColsOrder[], groupByLabel: ListLabels | undefined, gropTaskLength: number, isCollapse: boolean }> = ({ colsOrder, groupByLabel, gropTaskLength, isCollapse }) => {


    const getPrcLabel = (colType: string) => {
        if (groupByLabel && colType !== 'status' && colType !== 'labelCmp' && colType !== 'priority') return

        const groupListLabels = groupByLabel as ListLabels
        let uniqs
        if (!groupListLabels) return
        switch (colType) {
            case 'status':
                if (!groupListLabels || !groupListLabels.status || !Array.isArray(groupListLabels.status)) return
                uniqs = groupListLabels.status.reduce((acc: any, statObj: Status) => {

                    if (!acc[statObj.title]) {


                        acc[statObj.title] = {}
                        acc[statObj.title].count = 1
                        acc[statObj.title].color = statObj.color


                    }
                    else {

                        acc[statObj.title].count += 1
                    }

                    return acc
                }, {})
                return uniqs as Uniqs
                break
            case 'priority':
                uniqs = groupListLabels.priority.reduce((acc: any, priorityObj: Status) => {
                    if (!acc[priorityObj.title]) {
                        acc[priorityObj.title] = {}
                        acc[priorityObj.title].count = 1
                        acc[priorityObj.title].color = priorityObj.color

                    } else {
                        acc[priorityObj.title].count += 1
                    }

                    return acc
                }, {})
                return uniqs
                break
            case 'labelCmp':
                uniqs = groupListLabels.label.reduce((acc: any, labelObj: Status) => {
                    if (!acc[labelObj.title]) {
                        acc[labelObj.title] = {}
                        acc[labelObj.title].count = 1
                        acc[labelObj.title].color = labelObj.color

                    } else {
                        acc[labelObj.title].count += 1
                    }
                    return acc
                }, {})
                return uniqs
                break
            default:
                return
                break
        }

    }




    return (

        <div className={classes['board-content-group-row-footer']}>
            <div className={`${classes['footer-col']} ${classes['fixed']} `}>
                <div className={classes['task-item']}>
                    <div className={classes['row-menu']}></div>
                    <div className={classes['board-content-group-row-footer-corner']}></div>
                </div>
            </div>


            {
                colsOrder.slice(1).map((col) => {
                    let uniq = getPrcLabel(col.type)
                    return (
                        <div className={classes['footer-col']}
                            key={col.type}
                        >
                            {uniq && (
                                <div className={classes['status-wrap']}>
                                    {isCollapse && (<span>{col.title}</span>)}
                                    <div className={classes['prc-label-container']} >
                                        {
                                            Object.keys(uniq).map(id => (

                                                <GroupfooterPrc
                                                    key={id}
                                                    LabelObjPrc={uniq![id as keyof Uniqs] as LabelObjPrc}
                                                    gropTaskLength={gropTaskLength}
                                                />
                                            )
                                            )
                                        }
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })
            }



        </div >

    )
}

export default GroupFooter