import { useContext } from 'react'
import { Col, ColsOrder, Idx, Task } from '../../../../service/type'
import classes from '../GroupList.module.scss'
import DynamicColComponent from './DynamicColComponent'
import { BoardContext } from "../../../../store/board"

// import Test from './dynamic-component/Test'
import Test2 from "../../../UI/dynamic-cols-component/Test2"

const Components = {
    // Test,
    Test2
}

// export default block => {
//     // component does exist
//     if (typeof Components[block.component] !== "undefined") {
//         return React.createElement(Components[block.component], {
//             key: block._uid,
//             block: block
//         })
//     }
// }

const GroupRow: React.FC<{ task: Task, colsOrder: ColsOrder[], groupColor: string }> = ({ task, colsOrder, groupColor }) => {

    const { updateTask } = useContext(BoardContext)
    const { cols, createdAt, id, groupId } = task

    const updateTaskHandler = (newCol: Col) => {
        // const colIdx = '1'
        const idx = {
            groupId,
            taskId: id,

        }


        // const idx = { task.id: string, }
        updateTask(newCol, idx)
    }

    return (
        <div className={classes['board-content-group-row']}>
            <div className={`${classes.col} ${classes.fixed}`}>
                <div className={classes['task-item']}>
                    <div className={classes['row-menu']}>
                        <div className={classes['row-menu-icon']}></div>
                    </div>
                    <div className={classes['border']} style={{ backgroundColor: groupColor ? groupColor : '' }}></div>
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
            {
                colsOrder.slice(1).map((col, index) => (
                    < div className={classes.col}
                        key={index} >
                        <DynamicColComponent
                            col={col}
                            taskCol={cols.find((c: Col) => c.type === col.type)
                                || { type: 'error', value: 'error' }}
                            updateTask={updateTaskHandler}
                        />
                    </div>
                ))}

        </div >
    )
}

export default GroupRow