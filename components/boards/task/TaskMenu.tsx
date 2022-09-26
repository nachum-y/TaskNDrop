
import { FC, useContext, useState } from 'react'
import useFindTask from '../../../hooks/useFindTask'
import { Conversation, ConversationAdd, Idx, IdxOpt, Task } from '../../../service/type'
import classes from './TaskMenu.module.scss'
import ReactQuill from 'react-quill'
import 'quill/dist/quill.snow.css'
import { BoardContext } from '../../../store/board'
import Image from 'next/image'
import parse from 'html-react-parser'
import { useRouter } from 'next/router'


const TaskMenu: FC<{ task: Task }> = ({ task }) => {

    const { conversionAdd, activeUser, conversionRemove } = useContext(BoardContext)
    const [hideSpan, setHideSpan,] = useState(false)

    const [value, setValue] = useState('')
    const router = useRouter()

    const conversionRemoveHandler = (msgId: string) => {
        const Idx: Idx = {
            taskId: task.id,
            groupId: task.groupId
        }

        conversionRemove(msgId, Idx)

    }

    const sendMsg = () => {
        if (value && activeUser) {
            let msg: ConversationAdd = {
                content: value,
                createdAt: Date.now(),
                by: activeUser,
                replies: [],
            }
            console.log(task)

            const Idx: Idx = {
                taskId: task.id,
                groupId: task.groupId
            }

            conversionAdd(msg, Idx)
            setValue('')
        }

    }

    const closeTaskMenu = () => {
        console.log(router.pathname)

        router.replace(`${router.query.boardId}`)
    }

    return (
        <div>
            <div className={classes['conversation-colse-btn-container']}>
                <div className={classes['conversation-close-btn']}>
                </div>
            </div>
            <div className={classes['task-open-title']}>
                <h2 className={classes['task-open-task-name']}>
                    {task.cols[0].value?.toLocaleString()}
                </h2>

                <button onClick={closeTaskMenu} type="button" >
                    Close
                </button>
            </div>


            <nav className={classes['monday-board-subsets-tabs']}>
                <span>Update</span>
                {/* <span>Files</span> */}
                {/* <span>Activity log</span> */}
            </nav>

            <div className={classes['open-update-form']} >
                <span style={{ display: hideSpan ? 'none' : 'block' }} className={classes['write-update-msg']} onClick={() => setHideSpan(() => true)}>
                    write an update...
                </span>
                <div style={{ display: hideSpan ? 'block' : 'none' }} >
                    {/* <div ref={quillRef}   >
                    </div> */}
                    <ReactQuill theme="snow" value={value} onChange={setValue} />

                </div>
            </div>

            {hideSpan && (<div className={classes['action_wrapper']}>
                <div className={classes['actions']}>
                    <span className={classes['icon-action_wrapper']}>
                        Add files
                    </span>
                    <span>Mention</span>

                    <span onClick={sendMsg} className={classes['update-action']}>
                        Update
                    </span>

                </div>
            </div>)}

            {!task.conversation || task.conversation.length === 0 && (
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

                </div>
            )}
            {Array.isArray(task.conversation) && (
                <div id='else' className={classes['conversation-container']}>
                    {task.conversation.map((conversation) => (
                        <div key={conversation.id} className={classes['conversation-card']}>

                            <div className={classes['conversation-card-header']}>
                                <div className={classes['avatar']}>
                                    <Image src={`/persons/${conversation.by.id}.jpeg`} width={'40px'} height={'40px'} alt={conversation.by.name} />
                                </div>
                                <div className={classes['full-name']}>
                                    {conversation.by.name}
                                </div>
                                <div className={classes['activity-indicator']}>
                                    <div onClick={() => conversionRemoveHandler(conversation.id)} className={classes['dot']}>
                                    </div>
                                </div>
                            </div>

                            <div className={classes['conversation-card-inside']}>
                                {parse(conversation.content)}
                            </div>

                            <div className={classes['conversation-card-footer']}>
                                <div className={`${classes['conversation-card-footer-btn']} ${classes['like']}`}>
                                    <div className={classes['icon']}>

                                    </div>
                                    <span>Like</span>
                                </div>
                                <div className={`${classes['conversation-card-footer-btn']} ${classes['like']}`}>
                                    <div className={classes['icon']}>
                                    </div>
                                    <span>reply</span>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            )
            }

        </div >
    )
}

export default TaskMenu