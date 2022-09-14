import { useState, useEffect, ReactEventHandler, MouseEventHandler, useRef } from 'react'
import InlineEdit from '../../../UI/inline-edit/InlineEdit'

import classes from '../GroupList.module.scss'

const GroupHeader: React.FC<{ title: string, removeGroup: () => void, groupColor: string, openMenu: (el: HTMLDivElement) => void, isCollapse: boolean, toggaleCollapseGroup: () => void, gropTaskLength: number }> = ({ title, removeGroup, groupColor, openMenu, isCollapse, toggaleCollapseGroup, gropTaskLength }) => {


    const [value, setValue] = useState(title)
    const [editingMode, setEditingMode] = useState(false)

    const elementRef = useRef<HTMLDivElement>(null)

    const [items, setItems] = useState<string>('')



    const startEditingHandler = () => {
        setEditingMode(() => true)
    }

    useEffect(() => {
        if (value !== title && value.trim().length !== 0) {

        }
    }, [editingMode])

    useEffect(() => {
        if (gropTaskLength === 0) setItems(() => 'No Items')
        if (gropTaskLength === 1) setItems(() => '1 Item')
        if (gropTaskLength > 1) setItems(() => `${gropTaskLength} Item`)
    }, [gropTaskLength])


    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        openMenu(event.currentTarget)

    }

    {/* <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                    Open Popover
                </Button> */}




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
                    onClick={toggaleCollapseGroup}
                >
                    Icon
                </div>
                <div className={classes['group-header-title']}>
                    <div className={classes['color-indicator-gh']}>
                        <div className={classes['group-header-color-menu']}>

                        </div>
                    </div>
                    <div className={classes['group-header-title-wraper']}>
                        <div onClick={startEditingHandler} className={classes['group-header-title-txt']}>
                            {!editingMode &&
                                <span>
                                    {value}
                                </span>}
                            {editingMode && < InlineEdit value={value} setValue={setValue} editMode={setEditingMode} />}
                        </div>
                        {isCollapse && (<div className={classes['group-summary-data']}>
                            {items}
                        </div>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default GroupHeader