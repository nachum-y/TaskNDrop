import { Task } from '../../../../service/type'
import classes from '../GroupList.module.scss'

const GroupRow: React.FC<{ task: Task }> = (props) => {


    const { cols, createdAt } = props.task

    return (
        <div className={classes['board-content-group-row']}>
            <div className={`${classes.col} ${classes.fixed}`}>
                <div className={classes['task-item']}>
                    <div className={classes['row-menu']}>
                        <div className={classes['row-menu-icon']}></div>
                    </div>
                    <div className={classes['border']}></div>
                    <div className={classes['item-select']}>
                        <div className={classes['checkbox']}></div>
                    </div>
                    <div className={classes['item-title']}>
                        <div className={classes['input-holder']}>
                            <form>
                                <input
                                    className={classes['title-input']}
                                    type='text'
                                    placeholder={cols[0].value?.toString()} />
                            </form>
                        </div>
                        <div className={classes['open-icon-holder']}>
                            <span>Open</span>
                            <div className={classes['open-icon']}></div>
                        </div>
                    </div>
                    <div className={`${classes['item-conversation']} ${classes.active}`}>
                        <div className={classes['conversation-icon']}></div>
                        <span className={classes['item-conversation-count']}>1</span>
                    </div>
                </div>
            </div>
            <div className={classes.col}>
                <span>
                    {cols[1].value?.toString()}
                </span>
            </div>
            <div className={classes.col}>
                <span> {cols[2].value?.toString()}</span>
            </div>
            <div className={classes.col}>
                <span> {cols[3].value?.toString()}</span>
            </div>
            <div className={classes.col}>
                <span> {cols[4].value?.toString()}</span>
            </div>
            <div className={classes.col}>
                <span> {cols[5].value?.toString()}</span>
            </div>
            <div className={classes.col}>
                <span> {cols[6].value?.toString()}</span>
            </div>
            <div className={classes.col}>
                <span> {cols[7].value?.toString()}</span>
            </div>
            <div className={classes.col}>
                <span> location</span>
            </div>
        </div>
    )
}

export default GroupRow