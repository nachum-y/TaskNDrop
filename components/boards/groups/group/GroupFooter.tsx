import classes from '../GroupList.module.scss'

const GroupFooter = () => {
    return (

        <div className={classes['board-content-group-row-footer']}>
            <div className={`${classes['footer-col']} ${classes['fixed']}`}>
                <div className={classes['task-item']}>
                    <div className={classes['row-menu']}></div>
                    <div className={classes['board-content-group-row-footer-corner']}></div>
                </div>
            </div>

            <div className={classes['footer-col']}></div>
            <div className={classes['footer-col']}></div>
            <div className={classes['footer-col']}></div>
            <div className={classes['footer-col']}></div>
            <div className={classes['footer-col']}></div>
            <div className={classes['footer-col']}></div>
            <div className={classes['footer-col']}></div>
            <div className={classes['footer-col']}></div>
        </div>

    )
}

export default GroupFooter