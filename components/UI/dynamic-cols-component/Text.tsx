import classes from './Text.module.scss'

import { Col } from '../../../service/type'
import { useEffect, useState } from 'react'
import InlineEdit from '../inline-edit/InlineEdit'
// import GroupTest from '../../../service/boardService'

const Text: React.FC<{ taskCol: Col, updateCol: (newCol: Col) => void }> = ({ taskCol, updateCol }) => {

    const { value: text, type } = taskCol

    const textToDisplay = typeof text === 'string' ?
        text :
        ''

    const [value, setValue] = useState(textToDisplay)
    const [editingMode, setEditingMode] = useState(false)

    const startEditingHandler = () => {
        setEditingMode(() => true)
        // test()
    }

    useEffect(() => {
        if (value !== text && value.trim().length !== 0) {
            setNewCol()
        }
    }, [editingMode])

    const setNewCol = () => {
        const newCol = { type, value }
        updateCol(newCol)
    }

    return (
        <div className={classes['task-text']}>
            <div className={editingMode ? classes['text-cell-component-active'] : classes['text-cell-component']}
                onClick={startEditingHandler}>
                {!editingMode &&
                    <span
                        className={classes['text-content']}
                    >
                        {value}
                    </span>}
                {editingMode && < InlineEdit value={value} setValue={setValue} editMode={setEditingMode} />}
            </div >
        </div >
    )
}



export async function getStaticProps() {
    // const meetups = await fetch('/api/meetups') not needed for self api!

    return {
        props: {
            meetups: '1'
        },
        revalidate: 1
    }
}

export default Text