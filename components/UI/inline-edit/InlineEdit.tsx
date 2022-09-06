import { FocusEvent, KeyboardEvent, ChangeEvent } from 'react'
import { useState } from 'react'
import classes from './InlineEdit.module.scss'





const InlineEdit: React.FC<{ value: string, setValue: (val: string) => void, editMode: (setStateAction:boolean) => void }> = ({ value, setValue ,editMode}) => {


    const [editingValue, setEditingValue] = useState(value)

    const onBlur = (event: FocusEvent<HTMLInputElement>) => {
        if (event.target.value.trim() === "") {
            setValue(value)
        } else {
            setValue(event.target.value)
        }
        editMode(false)
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>) => setEditingValue(event.target.value)

    const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" || event.key === "Escape") {
            event.currentTarget.blur()
            editMode(false)
        }
    }



    return (
        <input
            className={classes['inline-input']}
            type="text"
            autoFocus
            aria-label="Field name"
            value={editingValue}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
        />
    )

}

export default InlineEdit