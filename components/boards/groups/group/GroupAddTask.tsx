import { useRef } from 'react'
import classes from '../GroupList.module.scss'

type BackgrounStyle = {
    backgroundColor: string
}
const GroupAddTask: React.FC<{ groupColor: string, onAddTask: (title: string) => void }> = ({ groupColor, onAddTask }) => {

    const inputRef = useRef<HTMLInputElement>(null)

    const lightColor = () => {
        if (typeof groupColor === 'string' && groupColor.length >= 3) {
            let hex = groupColor.substring(1).match(/.{1,2}/g)
            if (Array.isArray(hex)) {
                let rgb = [parseInt(hex[0], 16), parseInt(hex[1], 16), parseInt(hex[2], 16)]
                let rgba = `rgba(${rgb[0]},${rgb[1]},${rgb[2]}, 0.3)`
                return { backgroundColor: rgba }
            }
        }
        return { backgroundColor: '#fff' }
    }

    const onSubmitHandler = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        const enteredInput = inputRef.current?.value
        if (enteredInput && enteredInput.trim().length > 0) {
            onAddTask(enteredInput)
            inputRef.current.value = ''
        }
    }


    return (

        <div className={classes['board-content-group-row-add-item']}>
            <div className={`${classes['add-item-col']} ${classes['fixed']}`}>
                <div className={`${classes['task-item']} ${classes['add-item']}`}>
                    <div className={`${classes['border']} ${classes['add-item']}`}></div>
                    <div className={`${classes['item-select']} ${classes['header']}`}>
                        <div className={classes.checkbox}></div>
                    </div>
                    <div className={classes['add-item-input']}>
                        <div className={`${classes['border']} ${classes['add-item']}`} style={lightColor()}></div>
                        <form onSubmit={onSubmitHandler}>
                            <input
                                name="title"
                                placeholder="+ Add Task"
                                ref={inputRef}
                            />
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