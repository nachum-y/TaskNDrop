import { ClickAwayListener } from '@mui/material'
import { useEffect, useState } from 'react'
import { Col, LocationCol } from '../../../service/type'
import classes from './Location.module.scss'
const Location: React.FC<{ taskCol: Col, updateCol: (newCol: Col) => void, onCelClick: (el: HTMLSpanElement) => void }> = ({ taskCol, updateCol, onCelClick }) => {

    console.log(taskCol)

    const value: LocationCol | undefined = taskCol.value as LocationCol || undefined
    const [title, setTitle] = useState<string>('Type address...')

    useEffect(() => {
        if (value && typeof value !== 'number') {
            setTitle(value.title)
        }
    }, [value])


    // const [value, setValue] = useState(textToDisplay)
    const [editingMode, setEditingMode] = useState(false)

    const startEditingHandler = () => {
        setEditingMode(() => true)

    }

    return (
        <ClickAwayListener onClickAway={() => setEditingMode(false)}>
            <div className={classes['task-location']}>
                <div onClick={startEditingHandler} className={editingMode ? classes['text-cell-component-active'] : classes['text-cell-component']}>
                    {!editingMode &&
                        <span
                            className={classes['text-content']}
                        >
                            {title}
                        </span>}
                    {editingMode &&
                        <input placeholder={title} id='row.id' type='text' autoFocus className={classes['input-location']} onBlur={() => setEditingMode(false)} />
                    }
                    <div className={classes['icon-v2-line-location']}>
                    </div>
                </div>
            </div>
        </ClickAwayListener>
    )
}

export default Location