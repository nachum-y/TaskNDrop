import classes from '../GroupList.module.scss'

const GroupAddTask = () => {
    return (

        <div className={classes['board-content-group-row-add-item']}>
            <div className={`${classes['add-item-col']} ${classes['fixed']}`}>
                <div className={`${classes['task-item']} ${classes['add-item']}`}>
                    <div className={`${classes['border']} ${classes['add-item']}`}></div>
                    <div className={`${classes['item-select']} ${classes['header']}`}>
                        <div className={classes.checkbox}></div>
                    </div>
                    <div className={classes['add-item-input']}>
                        <div className={`${classes['border']} ${classes['add-item']}`}></div>
                        <form>
                            <input name="title" placeholder="+ Add Task" />
                        </form>
                    </div>
                </div>
            </div>

            <div className={classes['add-item-col']}></div>
            <div className={classes['add-item-col']}></div>
            <div className={classes['add-item-col']}></div>
            <div className={classes['add-item-col']}></div>
            <div className={classes['add-item-col']}></div>
            <div className={classes['add-item-col']}></div>
            <div className={classes['add-item-col']}></div>
            <div className={classes['add-item-col']}></div>
        </div>


    )
}

export default GroupAddTask