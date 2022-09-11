import classes from './BoardActionsMenu.module.scss'

const BoardActionsMenu: React.FC<{ selectedTasks: string[] }> = ({ selectedTasks }) => {

    const removeTasks = () => {

    }

    const duplicateTasks = () => {

    }

    return (
        <div className={classes['board-actions-menu']}>
            <div className={classes['board-actions-menu-selected-items']}>
                <div className={classes['board-actions-menu-selected-items-counter']}>
                    <span>{selectedTasks.length}</span>
                </div>
                <div className={classes['board-actions-menu-selected-items-title']}>
                    <div className={classes['selected-items-title']}>Items Selected</div>
                    <div className={classes['dots']}>
                        {
                            selectedTasks.map((task, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={classes.dot}
                                    >
                                    </div>
                                )

                            })
                        }
                    </div >
                </div >
            </div >



            <div className={classes['board-actions-menu-btns']}>
                <div className={classes['remove-tasks']} onClick={removeTasks}>
                    <div className={classes['remove-tasks-icon-holder']}>
                        <div className={classes['remove-tasks-icon']}>
                        </div>
                    </div>
                    <div className={classes['remove-tasks-title']}>Delete</div>
                </div>

                <div className={classes['duplicate-tasks']}
                    onClick={duplicateTasks} >
                    <div className={classes['duplicate-tasks-icon-holder']}>
                        <div className={classes['duplicate-tasks-icon']}>

                        </div>
                    </div>
                    <div className={classes['duplicate-tasks-title']}>Duplicate</div>
                </div>
            </div >

            <div className={classes['board-actions-menu-close']}>
                <div className={classes['board-actions-menu-close-icon']}>
                </div>
            </div>


        </div >
    )
}

export default BoardActionsMenu