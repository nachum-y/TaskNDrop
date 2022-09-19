import { useState, useEffect, ReactEventHandler, MouseEventHandler, useRef } from 'react'
import { boardHeaderIcon } from '../../../../service/svgIcon'
import InlineEdit from '../../../UI/inline-edit/InlineEdit'
import SvgIcon from '../../../UI/svgIcon/SvgIcon'

import classes from '../GroupList.module.scss'

const GroupHeader: React.FC<{ title: string, removeGroup: () => void, groupColor: string, openMenu: (el: HTMLDivElement, typeMenu: string) => void, isCollapse: boolean, toggaleCollapseGroup: () => void, gropTaskLength: number }> = ({ title, removeGroup, groupColor, openMenu, isCollapse, toggaleCollapseGroup, gropTaskLength }) => {


    const [value, setValue] = useState(title)
    const [editingMode, setEditingMode] = useState(false)

    const elementRef = useRef<HTMLDivElement>(null)

    const [items, setItems] = useState<string>('')




    const startEditingHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        setEditingMode(() => true)
        // openMenu(event.currentTarget, 'GroupMenu')

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




    const handleClick = (event: React.MouseEvent<HTMLDivElement>, typeMenu: string) => {
        event.stopPropagation()
        event.preventDefault()

        // event.shiftKey
        // console.log(event.shiftKey)
        openMenu(event.currentTarget, typeMenu)

    }




    return (
        <>
            <div className={`${classes['group-title-action']} ${isCollapse ? classes['isColapse'] : ''}`}>
                <div className={classes['group-header-menu']}>
                    <div
                        className={classes['group-header-menu-icon']}
                        onClick={(event) => handleClick(event, 'GroupMenu')}
                    >
                    </div>
                </div>
                <div className={classes['background-hider']}></div>
                <div className={classes['group-header-border-color']} style={{ backgroundColor: groupColor }}></div>
                <div className={classes['collapsable-icon-button']}
                    onClick={toggaleCollapseGroup}
                >
                    <SvgIcon path={boardHeaderIcon.angleRight} viewBox="0 0 448 512" width="14" height="14" fill={groupColor} />

                </div>
                <div onClick={startEditingHandler} className={classes[`group-header-title${editingMode ? '-focus' : ''}`]} >
                    <div onClick={(event) => handleClick(event, 'GroupMenu')} className={classes['color-indicator-gh']} style={{ backgroundColor: groupColor }}>

                    </div>
                    <div className={classes['group-header-title-wraper']}>
                        <div className={classes['group-header-title-txt']}>
                            {!editingMode &&
                                <span style={{ color: groupColor }}>
                                    {value}
                                </span>}
                            {editingMode && < InlineEdit value={value} setValue={setValue} editMode={setEditingMode} setColor={groupColor} />}
                        </div>
                        {isCollapse && (<div className={classes['group-summary-data']}>
                            {items}
                        </div>)}
                    </div>
                    <div className="right_component_dummy_column"></div>
                </div>
            </div>
        </>
    )
}

export default GroupHeader