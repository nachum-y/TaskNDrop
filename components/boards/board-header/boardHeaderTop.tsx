import classes from './BoardAppHeader.module.scss'


const BoardHeaderTop = () => {
    return (
        <div className={classes['board-header-top']}>
            <div className={classes['board-header-left']}>
                <div className={classes['board-name']}>
                    <div className={classes['board-title-component']}>
                        <p>test</p>
                    </div>
                    <div className={classes['board-header-show-description']}>
                        <span className={classes['board-header-icon-star']} ></span>
                    </div>
                    <div className={classes['board-header-star']}>
                        <span className={classes['board-header-icon-info']} ></span>
                    </div>
                </div>
            </div>
            <div className={classes['board-header-right']}>
                <div className={classes['board-header-last-seen']}>
                    <span className={classes['board-header-last-seen']} >Last seen</span>
                </div>
                <div className={classes['board-header-invite']}>
                    <span className={classes['board-header-icon-invite']} >invite / 1</span>
                </div>
            </div>
        </div>
    )
}

export default BoardHeaderTop