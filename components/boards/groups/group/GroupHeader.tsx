import { useState, useEffect, ReactEventHandler, MouseEventHandler, useRef } from 'react'
import InlineEdit from '../../../UI/inline-edit/InlineEdit'

import classes from '../GroupList.module.scss'

const GroupHeader: React.FC<{ title: string, removeGroup: () => void, groupColor: string, openMenu: (el: HTMLDivElement) => void, isCollapse: boolean }> = ({ title, removeGroup, groupColor, openMenu, isCollapse }) => {


    const [value, setValue] = useState(title)
    const [editingMode, setEditingMode] = useState(false)

    const elementRef = useRef<HTMLDivElement>(null)



    const startEditingHandler = () => {
        setEditingMode(() => true)
    }

    useEffect(() => {
        if (value !== title && value.trim().length !== 0) {

        }
    }, [editingMode])



    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        openMenu(event.currentTarget)

    }

    {/* <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                    Open Popover
                </Button> */}

    const toggleCollapse = () => {
        console.log(isCollapse)

    }


    return (
        <>
            <div className={`${classes['group-title-action']} ${isCollapse ? classes['isColapse'] : ''}`}>
                <div className={classes['group-header-menu']}>
                    <div
                        className={classes['group-header-menu-icon']}
                        onClick={handleClick}
                    >
                    </div>
                </div>
                <div className={classes['background-hider']}></div>
                <div className={classes['group-header-border-color']} style={{ backgroundColor: groupColor }}></div>
                <div className={classes['collapsable-icon-button']}
                    onClick={toggleCollapse}
                >
                    Icon
                </div>
                <div className={classes['group-header-title']}>
                    <div className={classes['color-indicator-gh']}>
                        <div className={classes['group-header-color-menu']}>

                        </div>
                    </div>
                    <div onClick={startEditingHandler}>
                        {!editingMode &&
                            <span>
                                {value}
                            </span>}
                        {editingMode && < InlineEdit value={value} setValue={setValue} editMode={setEditingMode} />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default GroupHeader