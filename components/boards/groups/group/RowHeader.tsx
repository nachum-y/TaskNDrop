import classes from '../GroupList.module.scss'

const RowHeader = () => {
    return (
        <div className={classes['board-content-group-row-header']}>
            <div className={`${classes['header-col']} ${classes.fixed}`}>
                <div className={classes['task-item']}>
                    <div className={classes['row-menu']}>
                        <div className={classes['row-menu-icon']}></div>
                    </div>
                    <div className={classes['border header']}></div>
                    <div className={classes['item-select']}>
                        <div className={classes['checkbox']}></div>
                    </div>
                    <div className={classes['item-title']}><span>Items</span></div>
                </div>
            </div>
            <div className={`${classes['header-col']} ${classes['item']}`}><span>date</span></div>
            <div className={`${classes['header-col']} ${classes.item}`}><span>status</span></div>
            <div className={`${classes['header-col']} ${classes.item}`}><span>Text</span></div>
            <div className={`${classes['header-col']} ${classes.item}`}><span>person</span></div>
            <div className={`${classes['header-col']} ${classes.item}`}><span>label</span></div>
            <div className={`${classes['header-col']} ${classes.item}`}><span>priority</span></div>
            <div className={`${classes['header-col']} ${classes.item}`}><span>creation log</span></div>
            <div className={`${classes['header-col']} ${classes.item}`}><span>location</span></div>
        </div>
    )
}

export default RowHeader