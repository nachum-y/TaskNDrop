
import classes from './TaskMenu.module.scss'



const TaskMenu = () => {
    
    return (
        <div>
            <div className={classes['conversation-colse-btn-container']}>
                <div className={classes['conversation-close-btn']}>
                </div>
            </div>
            <div className={classes['task-open-title']}>
                <h2 className={classes['task-open-task-name']}>
                    currTask.cols[0].value
                </h2>

                <button type="button">
                    svg
                </button>
            </div>


            <nav className={classes['monday-board-subsets-tabs']}>
                <span>Update</span>
                <span>Files</span>
                <span>Activity log</span>
            </nav>

            <div className={classes['open-update-form']}>
                <span className={classes['write-update-msg']}>
                    write an update...</span>

                QuillEditor
            </div>

            <div className={classes['action_wrapper']}>
                <div className={classes['actions']}>
                    <span className={classes['icon-action_wrapper']}>
                        Add files
                    </span>
                    <span>Mention</span>

                    <span id='click.stop.prevent="sendMsg"' className={classes['update-action']}>
                        Update
                    </span>

                </div>
            </div>


            <div id="!currTask.conversion">

                <div className={classes['post_empty_state_image_wrapper']}>
                    <img src="https://cdn.monday.com/images/pulse-page-empty-state.svg" />
                </div>

                <div className={classes['post_not_found_text']}>
                    <h2 className={classes['post_not_found']}>
                        No updates yet for this item
                    </h2>

                    <p className={classes['post_not_found_subtitle']}>
                        Be the first one to update about progress, mention someone
                        <br />
                        or upload files to share with your team members
                    </p>
                </div>


                <div id='else' className={classes['conversation-container']}>
                    <div className={classes['conversation-card']}>
                        loooopppp
                    </div>
                </div>
            </div>

        </div >
    )
}

export default TaskMenu