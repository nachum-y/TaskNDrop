import classes from '../GroupList.module.scss'


type LabelObjPrc = {
    count: number
    color: string
}


const GroupFooterPrc: React.FC<{ LabelObjPrc: LabelObjPrc, gropTaskLength: number }> = ({ LabelObjPrc, gropTaskLength }) => {



    let prcDiv = ((LabelObjPrc.count / gropTaskLength) * 100)
    return (
        <div className={classes['prc-label']} style={{ backgroundColor: LabelObjPrc.color, height: '100%', width: `${prcDiv}%` }}>

        </div>
    )
}

export default GroupFooterPrc