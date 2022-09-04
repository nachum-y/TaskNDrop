import classes from '../GroupList.module.scss'

const GroupHeader: React.FC<{ title: string }> = (props) => {
    return (
        <div className={classes['group-title-action']}>
            <div className={classes['group-header-menu']}>
                <div className={classes['group-header-menu-icon']}></div>
            </div>
            <div className={classes['background-hider']}></div>
            <div className={classes['group-header-border-color']}></div>
            <div className={classes['group-header-title']}>
                <div className={classes['color-indicator-gh']}>
                    <div className={classes['group-header-color-menu']}>

                    </div>
                </div>
                <span>{props.title}</span>
            </div>
        </div>
    )
}

export default GroupHeader