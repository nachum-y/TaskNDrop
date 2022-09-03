import GroupContent from './group/GroupContent'

import classes from './GroupList.module.scss'

const GroupList = () => {

    return (
        <div className={classes['board-content-component']}>

            <div className={classes['board-content-group']}>
                <GroupContent />
            </div>

            <button type='button' className={`${classes.btn} ${classes['add-group-btn']}`}>
                <div className={classes['add-group-icon-holder']}>
                    <div className={classes['add-group-icon']}></div>
                </div>
                <div className={classes['add-group-btn-txt']}>
                    Add new group
                </div>
            </button>
        </div >
    )
}





export default GroupList