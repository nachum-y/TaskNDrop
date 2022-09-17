import classes from './Dashboard.module.scss'

const NumberView = () => {
    return (

        <div className={`${classes['dashboard-item-holder']} ${classes['dashboard-item-number']}`}>
            <div className={classes['dashboard-item-holder-title']}>
                <span>
                    Numbers
                </span>
            </div>
            <div className={`${classes['number-view']} ${classes['open']}`}>
                <div className={classes['number-view-title']}>
                    Open Tasks </div>
                <div className={classes['number-view-number']}>
                    <span> TaskCount.open.num / TaskCount.all </span><span> TaskCount.open.pre %</span>
                </div>
            </div>
            <div className={`${classes['number-view']} ${classes['closed']}`}>
                <div className={classes['number-view-title']}>
                    Closed Tasks
                </div>
                <div className={classes['number-view-number']}>
                    <span> TaskCount.closed.num / TaskCount.all </span>
                    <span> TaskCount.closed.pre %</span>
                </div>

            </div>
        </div>
    )
}

export default NumberView