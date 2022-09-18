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
        // test()
    }

    return (
        <div className={classes['task-location']}>
            <div className={classes['input-container']}>
                {/*  */}
                {!editingMode &&
                    <span
                        className={classes['text-content']}
                    >
                        {title}
                    </span>}
                {editingMode &&
                    <input placeholder={title} id='row.id' type='text' className={classes['input-location']} />
                }
                <div className={classes['icon-v2-line-location']}>
                </div>
            </div>
        </div>
    )
}

export default Location